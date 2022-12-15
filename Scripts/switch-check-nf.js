/***

Thanks to & modified from 
1. https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js

For Quantumult-X 598+ ONLY!!

[task_local]

//UI 查询版本
event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/switch-check-nf.js, tag=Netflix 切换, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix_Letter.png, enabled=true

//cron 版本
0 8 * * * https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/switch-check-nf.js#policy=你的策略组名, tag=Netflix 定时切换, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix_Letter.png, enabled=true

ps. 简单粗暴的 UI-Interaction 版本。无数据持久化、粗暴延迟等待。完美主义建议使用 Helge大佬的boxjs版本 https://t.me/QuanXNews/193

@XIAO_KOP

**/

const BASE_URL = 'https://www.netflix.com/title/'

const FILM_ID = 81280792
const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 
const policy_name = "Netflix" //填入你的 netflix 策略组名

var cronsign = $environment.executeType == 0 || $environment.executeType == "0" || $environment.executeType == "-1"? "Y" : "N"
var policy = $environment.executeType == 0 || $environment.executeType == "0" || $environment.executeType == "-1"? GetPolicy($environment.sourcePath) : $environment.params
console.log(JSON.stringify($environment))
console.log("策略组："+policy)

function GetPolicy(cnt) {
    if (cnt && cnt.indexOf("#policy=") !=-1) {
        return decodeURIComponent(cnt.split("#policy=")[1].trim())
    }else {
        return ""
    }
}

const message = {
    action: "get_customized_policy",
    content: policy

};

var output=[]
var OKList=[]
var ResList=["仅支持自制剧节点 ➟ "]
var NoList=["不支持节点 ➟ "]
var timeoutList=["检测超时节点 ➟ "]
var pflag=1 //是否是策略，或者简单节点
var sign = 0 // 是否结束标志


$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
        $done()
    }
    if (resolve.ret) {
        output=JSON.stringify(resolve.ret[message.content])? JSON.parse(JSON.stringify(resolve.ret[message.content]["candidates"])) : [policy]
        pflag = JSON.stringify(resolve.ret[message.content])? pflag:0
        console.log("Netflix 支持检测")
        console.log("节点or策略组："+pflag)
        if (pflag==1) {
        console.log("节点数量："+resolve.ret[policy]["candidates"].length)
        if(resolve.ret[policy]["candidates"].length==0) {
            $done({"title":"Netflix 检测&切换","htmlMessage":`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b>😭 无有效节点</b>`});
        }
    }
        //$notify(typeof(output),output)
        Check()
        //$done({"title":"策略内容","message":output})
    }
    //$done();|
}, reject => {
    // Normally will never happen.
    $done();
});

function Len(cnt) {
    return cnt.length-1
}

function Check() {
    var relay = 2000;
    for ( var i=0;i < output.length;i++) {
        testNF(output[i])
    }
    if (output.length<=3) {
        relay = 3500
    } else if (output.length<=5) {
        relay = 4000
    } else if (output.length<10) {
        relay =4500
    } else if (output.length<15) {
        relay =6500
    } else if (output.length<20) {
        relay =8500
    } else if (output.length<50){
        relay =11000
    } else {
        relay =13000
    }
    console.log(output.length+":"+relay)
    setTimeout(() => {
        console.log("⛳️ 共计 "+OKList.length+" 个：完整支持节点 ➟"+ OKList)
        console.log("🏠 共计 "+Len(NoList)+" 个："+NoList)
        console.log("🕹 共计 "+Len(timeoutList)+" 个："+timeoutList)
        sign=1
        if (OKList[0] && pflag==1) {
            console.log("开始排序")
            ReOrder(OKList)
            } else if (!OKList[0]){ //不支持
                content =pflag==0 ? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b>😭 该节点未完整支持 Netflix </b><br><br>👇<br><br><font color=#FF5733>-------------------------<br><b>⟦ `+policy+` ⟧ </b><br>-------------------------</font>`: `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br>❌  <b>⟦ "+policy+ " ⟧ </b>⚠️ 切换失败<br><br><b>该策略组内未找到完整支持 Netflix</b> 的节点" + "<br><br><font color=#FF5733>-----------------------------<br><b>检测详情请查看JS脚本记录</b><br>-----------------------------</font>"+`</p>`
                $done({"title":"Netflix 检测&切换", "htmlMessage": content})
            } else if (OKList[0]){ //支持, 但为节点
                content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b> 🎉 该节点完整支持 Netflix </b><br><br>👇<br><br><font color=#FF5733>-------------------------<br><b>⟦ `+policy+` ⟧ </b><br>-------------------------</font>`
            //content = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b>🎉 该节点支持 Disneyᐩ  ➟` + OKList[0].split(": 支持 ")[1]+`</b><br><br>👇<br><br><font color=#FF5733>-------------------------<br><b>⟦ `+policy+` ⟧ </b><br>-------------------------</font>`
            $done({"title":"Netflix 检测&切换", "htmlMessage": content})
        }
    }, relay)
    
}

//选择最优延迟节点
function ReOrder(cnt) {
    const array = cnt;
    const messageURL = {
    action: "url_latency_benchmark",
    content: array
    };
    $configuration.sendMessage(messageURL).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret);
        console.log("节点延迟："+output);
        //排序
        console.log("排序前: "+ array)
        if(array){
            try {
        array.sort(function (a,b) {
            //console.log(a+" VS "+b)
        return (resolve.ret[a][1]!=-1 && resolve.ret[b][1] !=-1)? resolve.ret[a][1]-resolve.ret[b][1] : resolve.ret[b][1]
    })
    } catch (err) {
        console.log(err)
    }
    }  
    console.log("排序后: "+array)
    let Ping =resolve.ret[array[0]]
        const dict = { [policy] : array[0]};
        if(array[0]) {
            console.log("选定完整支持节点："+array[0]+"延迟数据为 👉"+Ping)
            Ping = " ⚡️ 节点延迟 ➟ 「 "+Ping + " 」 "
        }
        const mes1 = {
            action: "set_policy_state",
            content: dict
        }; 
        $configuration.sendMessage(mes1).then(resolve => {
            if (resolve.error) {
                console.log(resolve.error);
                content =pflag==0 && array[0]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+policy+ " ⟧ </b><br><br>🎉 该节点完整支持 <b>Netflix</b>" + `</p>` : `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+policy+ " ⟧ </b><br><br>⚠️ 该节点不支持 <b>Netflix</b>" + `</p>`
                content =pflag==0 && ResList[1]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+policy+ " ⟧ </b><br><br>🚦 该节点仅支持 <b>Netflix</b> 自制剧集" + `</p>` : content
                
                content = pflag!=0 && !array[0]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br>❌   <b>⟦ "+policy+ " ⟧ </b>⚠️ 切换失败<br><br>该策略组内未找到完整支持 Netflix 的节点" + "<br><br>-----------------------------<br><b><font color=#FF5733>检测详情请查看JS脚本记录</font></b><br>-----------------------------"+`</p>` : content
                $done({"title":"Netflix 检测&切换", "htmlMessage": content})
            }
            if (resolve.ret) {
                console.log("已经切换至完整支持的路线 ➟ "+array[0])
                if (cronsign == "Y") { $notify("📺 Netflix 定时检测&切换", "🎉 已经切换至支持 Netflix 的最优延迟线路👇", array[0] +"\n 👉 "+Ping)}
                content = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br> <b>⟦ "+policy+ " ⟧</b> 已切换至完整支持的路线中延迟最优节点<br> <br>👇<br><br> ⟦ "+array[0]+ " ⟧" + "<br><br><font color=#16A085>"+Ping+"</font><br>-----------------------------<br><b><font color=#FF5733>检测详情请查看JS脚本记录</font></b><br>-----------------------------"+`</p>`
                $done({"title":"Netflix 检测&切换", "htmlMessage": content })
            }
    }, reject => {
            $done();
        });
        
    }
    //$done();
}, reject => {
    // Normally will never happen.
    $done();
});
}


function testNF(pname ) {
    return new Promise((resolve, reject) => {
        //console.log(pname)
        let opts = { policy : pname }
        let option = {
            url: BASE_URL + FILM_ID,
            opts: opts,
            headers: {
                'User-Agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
            },
        }
        $task.fetch(option).then (response => {
            if (sign==0) {
            if (response.statusCode === 404) {
                NoList.push(pname)
                console.log(pname+": "+"未支持")
                resolve('Not Found')
                return
            }
            
            if (response.statusCode === 403) {
                ResList.push(pname)
                console.log(pname+": "+"仅支持自制剧集")
                resolve('Not Available')
                return
            }
            
            if (response.statusCode === 200) {
                console.log(pname+": "+"完整支持")
                let url = response.headers['X-Originating-URL']
                let region = url.split('/')[3]
                region = region.split('-')[0]
                if (region == 'title') {
                    region = 'us'
                }
                OKList.push(pname)
                resolve(region)
                return
            }
        } else {
            console.log(pname+":  检测超时")
            timeoutList.push(pname)
            resolve("Erroe")
            return

        }
            reject('Error')
        })
    })
}



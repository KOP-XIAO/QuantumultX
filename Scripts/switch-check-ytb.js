/***

Thanks to & modified from 
1. https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js
2. https://github.com/AtlantisGawrGura/Quantumult-X-Scripts/blob/main/media.js
3. https://github.com/CoiaPrant/MediaUnlock_Test/blob/main/check.sh


For Quantumult-X 598+ ONLY!!

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/sswitch-check-ytb.js, tag=YouTube 切换, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube_Letter.png, enabled=true

ps. 简单粗暴的 UI-Interaction 版本。无数据持久化、粗暴延迟等待。完美主义建议使用 Helge大佬的boxjs版本 https://t.me/QuanXNews/193

@XIAO_KOP

**/

const BASE_URL = 'https://www.youtube.com/premium'

const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 
var policy = $environment.params
const message = {
    action: "get_customized_policy",
    content: policy

};

var output=[]
var OKList=[]
var NoList=["不支持节点 ➟ "]
var ErrorList=["检测出错节点 ➟ "]
var pflag=1 //是否是策略，或者简单节点
var sign=0

$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
        $done()
    }
    if (resolve.ret) {
        //$notify(JSON.stringify(resolve.ret))
        output=JSON.stringify(resolve.ret[message.content])? JSON.parse(JSON.stringify(resolve.ret[message.content]["candidates"])) : [$environment.params]
        pflag = JSON.stringify(resolve.ret[message.content])? pflag:0
        console.log("YouTube Premium 检测")
        console.log("节点or策略组："+pflag)
        if (pflag==1) {
        console.log("节点数量："+resolve.ret[$environment.params]["candidates"].length)
        if(resolve.ret[$environment.params]["candidates"].length==0) {
            $done({"title":"YouTube Premium 检测","htmlMessage":`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b>😭 无有效节点</b>`});
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
        testYTB(output[i])
    }
    if (output.length<=5) {
        relay = 2000
    } else if (output.length<10) {
        relay =4000
    } else if (output.length<15) {
        relay =6000
    } else if (output.length<20) {
        relay =8000
    } else {
        relay =10000
    }
    console.log(output.length+":"+relay)
    setTimeout(() => {
        console.log("⛳️ 共计 "+OKList.length+" 个：支持节点 ➟ "+ OKList)
        console.log("🏠 共计 "+Len(NoList)+" 个："+NoList)
        console.log("🕹 共计 "+Len(ErrorList)+" 个："+ErrorList)
        sign = 1
        if (OKList[0] && pflag==1) { //有支持节点、且为策略组才操作
            console.log("开始排序")
            ReOrder(OKList)
            } else if (!OKList[0]){ //不支持
                content =pflag==0 ? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b>😭 该节点不支持 YouTube Premium </b><br><br>👇<br><br><font color=#FF5733>-------------------------<br><b>⟦ `+$environment.params+` ⟧ </b><br>-------------------------</font>`: `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br>❌  <b>⟦ "+$environment.params+ " ⟧ </b>⚠️ 切换失败<br><br><b>该策略组内未找到支持 YouTube Premium 的节点" + "<br><br><font color=#FF5733>-----------------------------<br><b>检测详情请查看JS脚本记录</b><br>-----------------------------</font>"+`</p>`
                $done({"title":"YouTube Premium 检测&切换", "htmlMessage": content})
            } else if (OKList[0]){ //支持, 但为节点
                content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b> 🎉 该节点支持 YouTube Premium </b><br><br>👇<br><br><font color=#FF5733>-------------------------<br><b>⟦ `+$environment.params+` ⟧ </b><br>-------------------------</font>`
                $done({"title":"YouTube Premium 检测&切换", "htmlMessage": content})
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
            console.log("选定支持YouTube Premium："+array[0]+"延迟数据为 👉"+Ping)
            Ping = " ⚡️ 节点延迟 ➟ 「 "+Ping + " 」 "
        }
        const mes1 = {
            action: "set_policy_state",
            content: dict
        }; 
        $configuration.sendMessage(mes1).then(resolve => {
            if (resolve.error) {
                console.log(resolve.error);
                content =pflag==0 && array[0]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+$environment.params+ " ⟧ </b><br><br>🎉 该节点支持 <b>YouTube Premium</b>" + `</p>` : `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+$environment.params+ " ⟧ </b><br><br>⚠️ 该节点不支持 <b>YouTube Premium</b>" + `</p>`
                content = pflag!=0 && !array[0]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br>❌  <b>⟦ "+$environment.params+ " ⟧ </b>⚠️ 切换失败<br><br>该策略组内未找到支持 <b>YouTube Premium</b> 的节点" + "<br><br>-----------------------------<br><b><font color=#FF5733>检测详情请查看JS脚本记录</font></b><br>-----------------------------"+`</p>` : content
                $done({"title":"YouTube 检测&切换", "htmlMessage": content})
            }
            if (resolve.ret) {
                console.log("已经切换至支持 <b>Premium</b> 的路线 ➟ "+array[0])
                content = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+$environment.params+ " ⟧ </b>已切换至支持<b>Premium</b> 的路线中延迟最优节点<br><br> 👇<br><br> ⟦ "+array[0]+ " ⟧" + "<br><br><font color=#16A085>"+Ping+"</font><br>-----------------------------<br><b><font color=#FF5733>检测详情请查看JS脚本记录</font></b><br>-----------------------------"+`</p>`
                $done({"title":"YouTube 检测&切换", "htmlMessage": content })
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


function testYTB(pname) {
    return new Promise((resolve, reject) => {
        let opts = { policy : pname }
        let option = {
            url: BASE_URL,
            opts: opts,
            headers: {
                'User-Agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
                'Accept-Language': 'en',
            },
        }
        $task.fetch(option).then(response=> {
            let data = response.body
            //console.log(response.statusCode)
            if (sign==0) {
            if (response.statusCode !== 200) {
                console.log(pname+"：检测出错")
                ErrorList.push(pname)
                reject('Error')
                return
            }
            
            if (data.indexOf('Premium is not available in your country') !== -1) {
                console.log(pname+"：未支持")
                NoList.push(pname)
                resolve('Not Available')
                return
            }
            
            let region = ''
            let re = new RegExp('"GL":"(.*?)"', 'gm')
            let result = re.exec(data)
            if (result != null && result.length === 2) {
                region = result[1]
            } else if (data.indexOf('www.google.cn') !== -1) {
                region = 'CN'
            } else {
                region = 'US'
            }
            console.log(pname+"：支持"+region)
            OKList.push(pname)
            resolve(region)
        }
        reject('Error')
        })
    })
}



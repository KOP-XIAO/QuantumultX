/***

For Quantumult-X 598+ ONLY!!

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/switch-check-google.js, tag=Google Sifter, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png, enabled=true

ps. 简单粗暴的 UI-Interaction 版本。无数据持久化、粗暴延迟等待。完美主义建议使用 Helge大佬的boxjs版本 https://t.me/QuanXNews/193

@XIAO_KOP

**/

var policy = $environment.params
const message = {
    action: "get_customized_policy",
    content: policy

};

var output=[]
var OKList=["送中节点 ➟ "]
var NoList=["未送中节点 ➟ "]
var ErrorList=["检测出错节点 ➟ "]
var pflag=1 //是否是策略，或者简单节点

$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
        $done()
    }
    if (resolve.ret) {
        //$notify(JSON.stringify(resolve.ret))
        output=JSON.stringify(resolve.ret[message.content])? JSON.parse(JSON.stringify(resolve.ret[message.content]["candidates"])) : [$environment.params]
        pflag = JSON.stringify(resolve.ret[message.content])? pflag:0
        console.log("Google 送中检测 检测")
        console.log("节点or策略组："+pflag)
        //$notify(typeof(output),output)
        Check()
        //$done({"title":"策略内容","message":output})
    }
    //$done();|
}, reject => {
    // Normally will never happen.
    $done();
});

function Check() {
    var relay = 2000;
    for ( var i=0;i < output.length;i++) {
        testGoogle(output[i])
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
        console.log(OKList)
        console.log(NoList)
        console.log(ErrorList)
        const dict = { [policy] : OKList[1]};
        if(OKList[1]) {
            console.log("选定未被送中节点："+OKList[1])
        }
        const mes1 = {
            action: "set_policy_state",
            content: dict
        }; 
        $configuration.sendMessage(mes1).then(resolve => {
            if (resolve.error) {
                console.log(resolve.error);
                content =pflag==0 && OKList[1]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b> 🎉 该节点未被 Google 送中 </b><br><br>👇<br><br><font color=#FF5733>-------------------------<br><b>⟦ `+$environment.params+` ⟧ </b><br>-------------------------</font>` : `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin"><br><b>😭 该节点已被 Google 送中 </b><br><br>👇<br><br><font color=#FF5733>-------------------------<br><b>⟦ `+$environment.params+` ⟧ </b><br>-------------------------</font>`
                content = pflag!=0 && !OKList[1]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br>❌  <b>⟦ "+$environment.params+ " ⟧ </b>⚠️ 切换失败<br><br><b>该策略组内未找到未被 Google 送中</b> 的节点" + "<br><br><font color=#FF5733>-----------------------------<br><b>检测详情请查看JS脚本记录</b><br>-----------------------------</font>"+`</p>` : content
                $done({"title":"Google 送中检测&切换", "htmlMessage": content})
            }
            if (resolve.ret) {
                console.log("已经切换至未被 <b>Google 送中</b> 的路线 ➟ "+OKList[1])
                content = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+$environment.params+ " ⟧ </b>已切换至未被<b>Google</b> 送中的路线<br><br> 👇<br><br> ⟦ "+OKList[1]+ " ⟧" + "<br><br><font color=#FF5733>-----------------------------<br><b>检测详情请查看JS脚本记录</b><br>-----------------------------</font>"+`</p>`
                $done({"title":"Google 送中检测&切换", "htmlMessage": content })
            }
    }, reject => {
            $done();
        });
        
        
    }, relay)
    
}




function testGoogle(pname) {
    return new Promise((resolve, reject) => {
        const url = `https://www.google.com/maps/timeline`;
        let opts = { policy : pname }
        const method = `GET`;
        const headers = {
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
            'Host' : `www.google.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1`,
            'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
        };
        const body = ``;
        const myRequest = {
            url: url,
            method: method,
            headers: headers,
            body: body,
            opts: opts,
            timeout: 3000
        };
        
        $task.fetch(myRequest).then(response => {
            let sCode = response.statusCode
            hmessage = "该节点未被送中"
            //console.log(pname+sCode);
            if (sCode == 400) {
                NoList.push(pname)
                console.log(pname + ": 该节点已被送中")
                resolve("YES")
                return
            } else {
                OKList.push(pname)
                console.log(pname + ": 该节点未被送中")
                resolve("No")
                return
            }
        }, reason => {
            ErrorList.push(pname)
            console.log(pname + ": 该节点检测失败")
            reject("Error")
            return
        });
        })
    }



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
var OKList=["支持节点 ➟ "]
var NoList=["不支持节点 ➟ "]
var ErrorList=["检测出错节点 ➟ "]

$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
        $done()
    }
    if (resolve.ret) {
        //$notify(JSON.stringify(resolve.ret))
        output=JSON.stringify(resolve.ret[message.content])? JSON.stringify(resolve.ret[message.content]["candidates"]).replace(/\"|\[|\]/g,"").replace(/\,/g," ➟ ").split(" ➟ ") : [$environment.params]
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
        const dict = { [policy] : OKList[2]};
        const mes1 = {
            action: "set_policy_state",
            content: dict
        }; 
        $configuration.sendMessage(mes1).then(resolve => {
            if (resolve.error) {
                console.log(resolve.error);
                content = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br>❌  <b>⟦ "+$environment.params+ " ⟧ </b>切换失败<br>未找到支持 <b>YouTube Premium</b> 的节点" + `</p>`
                $done({"title":"          YouTube 切换", "htmlMessage": content})
            }
            if (resolve.ret) {
                console.log("已经切换至支持 <b>Premium</b> 的路线 ➟ "+OKList[2])
                content = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+$environment.params+ " ⟧ </b>已切换至支持<b>Premium</b> 的路线<br><br> 👇<br><br> ⟦ "+OKList[2]+ " ⟧" + "<br><br>-----------------------------<br><b>检测详情请查看JS脚本记录</b><br>-----------------------------"+`</p>`
                $done({"title":"          YouTube 切换", "htmlMessage": content })
            }
    }, reject => {
            $done();
        });
        
        
    }, relay)
    
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
        })
    })
}



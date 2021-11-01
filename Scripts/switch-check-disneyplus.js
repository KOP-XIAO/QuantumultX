/***

Thanks to & modified from 
1. https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js

For Quantumult-X 598+ ONLY!!

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/switch-check-disneyplus.js, tag=Disneyᐩ 检测&切换, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Disney.png, enabled=true

ps. 简单粗暴的 UI-Interaction 版本。无数据持久化、粗暴延迟等待。完美主义建议使用 Helge大佬的boxjs版本 https://t.me/QuanXNews/193

@XIAO_KOP

**/

const BASE_URL_DISNEY = 'https://www.disneyplus.com';
const arrow = " ➟ "

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'

// 即将登陆
const STATUS_COMING = 2
// 支持解锁
const STATUS_AVAILABLE = 1
// 不支持解锁
const STATUS_NOT_AVAILABLE = 0
// 检测超时
const STATUS_TIMEOUT = -1
// 检测异常
const STATUS_ERROR = -2

const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 

var policy = $environment.params
const message = {
    action: "get_customized_policy",
    content: policy

};

var output=[]
var OKList=["完整解锁节点 ➟ "]
var ResList=["仅支持自制剧节点 ➟ "]
var NoList=["不支持节点 ➟ "]
var timeoutList=["检测超时节点 ➟ "]
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
        console.log("Disneyᐩ 检测&切换")
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
        testDisneyPlus(output[i])
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
        const dict = { [policy] : OKList[1]};
         if(OKList[1]) {
            console.log("选定支持节点："+OKList[1])
        }
        const mes1 = {
            action: "set_policy_state",
            content: dict
        }; 
        $configuration.sendMessage(mes1).then(resolve => {
            if (resolve.error) {
                console.log(resolve.error);
                content =pflag==0 && OKList[1]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+$environment.params+ " ⟧ </b><br><br>🎉 该节点完整支持 <b>Disneyᐩ </b>" + `</p>` : `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br><b>⟦ "+$environment.params+ " ⟧ </b><br><br>⚠️ 该节点不支持 <b>Disneyᐩ </b>" + `</p>`
                
                content = pflag!=0 && !OKList[1]? `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br>❌   <b>⟦ "+$environment.params+ " ⟧ </b>⚠️ 切换失败<br><br>该策略组内未找到完整支持 Disneyᐩ 的节点" + "<br><br>-----------------------------<br><b>检测详情请查看JS脚本记录</b><br>-----------------------------"+`</p>` : content
                $done({"title":"Disneyᐩ 检测&切换", "htmlMessage": content})
            }
            if (resolve.ret) {
                console.log("已经切换至完整支持的路线 ➟ "+OKList[1])
                content = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + "<br> <b>⟦ "+$environment.params+ " ⟧</b> 已切换至完整支持的路线<br> <br>👇<br><br> ⟦ "+OKList[1]+ " ⟧" + "<br><br>-----------------------------<br><b>检测详情请查看JS脚本记录</b><br>-----------------------------"+`</p>`
                $done({"title":"Disneyᐩ 检测&切换", "htmlMessage": content })
            }
    }, reject => {
            $done();
        });
        
        
    }, relay)
    
}





async function testDisneyPlus(pname) {
    try {
        let { region, cnbl } = await Promise.race([testHomePage(pname), timeout(7000)])
        //console.log(`homepage: region=${region}, cnbl=${cnbl}`)
        // 即将登陆
        if (cnbl == 2) {
            ResList.push(pname) //coming
            console.log(pname+": 即将登陆"+region)
            return { region, status: STATUS_COMING }
        }
        let { countryCode, inSupportedLocation } = await Promise.race([getLocationInfo(pname), timeout(7000)])
        //console.log(`getLocationInfo: countryCode=${countryCode}, inSupportedLocation=${inSupportedLocation}`)
        
        region = countryCode ?? region
        // 即将登陆
        if (inSupportedLocation === false || inSupportedLocation === 'false') {
            ResList.push(pname) //coming
            console.log(pname+": 即将登陆"+region)
            return { region, status: STATUS_COMING }
        } else {
            // 支持解锁
            OKList.push(pname)
            console.log(pname+": 支持"+region)
            return { region, status: STATUS_AVAILABLE }
        }
        
    } catch (error) {
        //console.log(pname+": 检测错误"+error)
        //console.log("error:"+error)
        
        // 不支持解锁
        if (error === 'Not Available') {
            NoList.push(pname)
            console.log(pname+":不支持")
            return { status: STATUS_NOT_AVAILABLE }
        }
        
        // 检测超时
        if (error === 'Timeout') {
            timeoutList.push(pname)
            console.log(pname+":检测超时")
            return { status: STATUS_TIMEOUT }
        }
        
        return { status: STATUS_ERROR }
    } 
    
}

function getLocationInfo(pname) {
    opts = {
        policy:pname
    }
    return new Promise((resolve, reject) => {
        let opts0 = {
            url: 'https://disney.api.edge.bamgrid.com/graph/v1/device/graphql',
            method: "POST",
            opts: opts,
            headers: {
                'Accept-Language': 'en',
                "Authorization": 'ZGlzbmV5JmJyb3dzZXImMS4wLjA.Cu56AgSfBTDag5NiRA81oLHkDZfu5L3CKadnefEAY84',
                'Content-Type': 'application/json',
                'User-Agent': UA,
            },
            body: JSON.stringify({
                query: 'mutation registerDevice($input: RegisterDeviceInput!) { registerDevice(registerDevice: $input) { grant { grantType assertion } } }',
                variables: {
                    input: {
                        applicationRuntime: 'chrome',
                        attributes: {
                            browserName: 'chrome',
                            browserVersion: '94.0.4606',
                            manufacturer: 'microsoft',
                            model: null,
                            operatingSystem: 'windows',
                            operatingSystemVersion: '10.0',
                            osDeviceIds: [],
                        },
                        deviceFamily: 'browser',
                        deviceLanguage: 'en',
                        deviceProfile: 'windows',
                    },
                },
            }),
        }
        
        $task.fetch(opts0).then(response => {
            let data = response.body
            //console.log("locationinfo:"+response.statusCode)
            if (response.statusCode !== 200) {
                //console.log('getLocationInfo: ' + data)
                reject('Not Available')
                return
            } else {let {
                inSupportedLocation,
                location: { countryCode },
            } = JSON.parse(data)?.extensions?.sdk?.session
                resolve({ inSupportedLocation, countryCode })
            }
        }, reason => {
            reject('Error')
            return
        })
    })
}

function testHomePage(pname) {
    opts = {
        policy : pname
    }
    return new Promise((resolve, reject) => {
        let opts0 = {
            url: 'https://www.disneyplus.com/',
            opts: opts,
            headers: {
                'Accept-Language': 'en',
                'User-Agent': UA,
            },
        }
        $task.fetch(opts0).then(response => {
            let data = response.body
            //console.log("homepage"+response.statusCode)
            if (response.statusCode !== 200 || data.indexOf('unavailable') !== -1) {
                reject('Not Available')
                return
            } else {
                let match = data.match(/Region: ([A-Za-z]{2})[\s\S]*?CNBL: ([12])/)
                if (!match) {
                    resolve({ region: '', cnbl: '' })
                    return
                } else {
                    let region = match[1]
                    let cnbl = match[2]
                    //console.log("homepage"+region+cnbl)
                    resolve({ region, cnbl })
                }
            }
        }, reason => {
            reject('Error')
            return
        })
    })
}

function timeout(delay = 5000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Timeout')
        }, delay)
    })
}


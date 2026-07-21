/***

Thanks to & modified from https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js

For Quantumult-X 598+

[task-local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/nf-ui-check.js, tag=Netflix 查询, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix.png, enabled=true

@XIAO_KOP

code: 
0 成功
100 error 未知错误
101 timeout 测试超时
102 Not Found 该节点仅支持解锁 Netflix 自制剧
103 Not Available 该节点未解锁 Netflix
**/

const BASE_URL = 'https://www.netflix.com/title/'

const FILM_ID = 81280792
const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 
const policy_name = "Netflix" //填入你的 netflix 策略组名

const arrow = "➟"
var output = ""
var opts = {
  policy: $environment.params
};


var flags = new Map([[ "AC" , "🇦🇨" ] ,["AE","🇦🇪"], [ "AF" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "AR" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "AT" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , ["BA", "🇧🇦"], [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "BE" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "BG" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "BR" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "BV" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "CA" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "CH" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "CN" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "DE" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "DK" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "EA" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "ES" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "EU" , "🇪🇺" ] , [ "FI" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫🇴" ] , [ "FR" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "GB" , "🇬🇧" ] , [ "HK" , "🇭🇰" ] ,["HU","🇭🇺"], [ "ID" , "🇮🇩" ] , [ "IE" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "IN" , "🇮🇳" ] , [ "IS" , "🇮🇸" ] , [ "IT" , "🇮🇹" ] , [ "JP" , "🇯🇵" ] , [ "KR" , "🇰🇷" ] , [ "LU" , "🇱🇺" ] , [ "MO" , "🇲🇴" ] , [ "MX" , "🇲🇽" ] , [ "MY" , "🇲🇾" ] , [ "NL" , "🇳🇱" ] , [ "PH" , "🇵🇭" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "RU" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇸🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "SE" , "🇸🇪" ] , [ "SG" , "🇸🇬" ] , [ "TH" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "TR" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇨🇳" ] , [ "UK" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "US" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "VN" , "🇻🇳" ] , [ "ZA" , "🇿🇦"]])


!(async () => {
  let result = {
    title: '  Netflix 解锁检测',
    subtitle: output,
    content: '检测失败，请重试',
  }
  await Promise.race([test(FILM_ID),timeOut(5000)])
  .then((resp) => {
    console.log(JSON.stringify(resp, null, 2));
    let code = resp.code;
    let region = resp.region;
    if(resp.code == 0) {
      result['content'] = '该节点完整解锁 Netflix ➟ ⟦'+flags.get(region.toUpperCase())+" 地区⟧";
    } else if (code == 102) { //该节点仅支持解锁 Netflix 自制剧
      result['content'] = '该节点仅支持解锁 Netflix 自制剧 ➟ ⟦'+flags.get(region.toUpperCase())+" 地区⟧";
    } else if (code == 103) { //该节点未解锁 Netflix
        result['content'] = '该节点未解锁 Netflix';
    } else if (code == 101) { 
        result['content'] = "测试超时";
    } else {
      result['content'] = "未知问题:" +resp.content;
    }
    
    //$notify(result["title"], output, result["content"], link)
    
        let content = "------------------------------"+"</br></br>"+result["content"]
    content = content + "</br></br>------------------------------</br>"+"<font color=#6959CD>"+"<b>节点</b> ➟ " + $environment.params+ "</font>"
    content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + content + `</p>`
    $done({"title":"Netflix 解锁检测","htmlMessage":content})
  })
})()
.finally(() => $done());

function timeOut(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //reject(new Error('timeout'))
      resolve({code: 101, content: "timeout"})
    }, delay)
  })
}


function test(filmId) {
  return new Promise((resolve, reject) => {
    let option = {
      url: BASE_URL + filmId,
      opts: opts,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $task.fetch(option).then (response => {
      const region = response.body.match(/"requestCountry":{"id":"(\w\w)/)[1];
      console.log('region -> ' + region)
      if (response.statusCode === 404) {
        resolve({code: 102, content: "Not Found", region: region})
        return
      }
      
      if (response.statusCode === 403) {
        resolve({code: 103, content: "Not Available"})
        return
      }
      
      if (response.statusCode === 200) {
        const isPlayable = response.body.match(/"isPlayable":(true|false)/)[1];
        if(isPlayable === 'false') {
            resolve({code: 102, content: "Playable is false", region: region})
        } else if (!isPlayable) {
            // 为空
            resolve({code: 103, content: "Playable is null"})
        } else if (isPlayable === 'true') {
            resolve({code: 0, content: "Netflix is Ok", region: region})
        } else {
            resolve({code: 100, content: "unknown error", region: region})
        }
        return
      }
      reject({code: 100, content: "Error, http code " + response.statusCode})
    })
  })
}

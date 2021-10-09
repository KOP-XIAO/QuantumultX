/***

Thanks to & modified from 
1. https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js
2. https://github.com/AtlantisGawrGura/Quantumult-X-Scripts/blob/main/media.js
3. https://github.com/CoiaPrant/MediaUnlock_Test/blob/main/check.sh


For Quantumult-X 598+ ONLY!!

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/streaming-ui-check.js, tag=流媒体-解锁查询, img-url=checkmark.seal.system, enabled=true



@XIAO_KOP

**/

const BASE_URL = 'https://www.netflix.com/title/';
const BASE_URL_YTB = "https://www.youtube.com/premium";
const BASE_URL_DISNEY = 'https://www.disneyplus.com';
const BASE_URL_Dazn = "https://startup.core.indazn.com/misl/v5/Startup";
//var BASE_URL_BLBL = "https://api.bilibili.com/pgc/player/web/playurl?avid=18281381&cid=29892777&qn=0&type=&otype=json&ep_id=183799&fourk=1&fnver=0&fnval=16&session=" + randomString(20) + "&module=bangumi";
//const BASE_URL_BahamutAnime = 'https://ani.gamer.com.tw/ajax/token.php?adID=89422&sn=14667';
//const BASE_URL_HULUJP = 'https://id.hulu.jp';
//const BASE_URL_HBOMAX = 'https://www.hbomax.com';
//const BASE_URL_NICONICO = 'https://www.nicovideo.jp/watch/so23017073';
//const BASE_URL_KKTV = "https://api.kktv.me/v3/ipcheck";
//const BASE_URL_TVBANYWHERE = "https://uapisfm.tvbanywhere.com.sg/geoip/check/platform/android";
var D_region;

const FILM_ID = 81215567
const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 
const policy_name = "Netflix" //填入你的 netflix 策略组名

const arrow = " ➟ "
var output = ""

var opts = {
  policy: $environment.params
};

var opts1 = {
  policy: $environment.params,
  redirection: false
};

function randomString(e)
{
  e = e || 32;
  var t = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890",
  a = t.length,
  n = "";
  for (i=0;i<e;i++) n+=t.charAt(Math.floor(Math.random()*a));
  return n;
}

var flags = new Map([[ "AC" , "🇦🇨" ] , [ "AF" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "AR" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "AT" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "BE" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "BG" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "BR" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "BV" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "CA" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "CH" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "CN" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "DE" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "DK" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "EA" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "ES" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "EU" , "🇪🇺" ] , [ "FI" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫🇴" ] , [ "FR" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "GB" , "🇬🇧" ] , [ "HK" , "🇭🇰" ] ,["HU","🇭🇺"], [ "ID" , "🇮🇩" ] , [ "IE" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "IN" , "🇮🇳" ] , [ "IS" , "🇮🇸" ] , [ "IT" , "🇮🇹" ] , [ "JP" , "🇯🇵" ] , [ "KR" , "🇰🇷" ] , [ "LU" , "🇱🇺" ] , [ "MO" , "🇲🇴" ] , [ "MX" , "🇲🇽" ] , [ "MY" , "🇲🇾" ] , [ "NL" , "🇳🇱" ] , [ "PH" , "🇵🇭" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "RU" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇸🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "SE" , "🇸🇪" ] , [ "SG" , "🇸🇬" ] , [ "TH" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "TR" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇨🇳" ] , [ "UK" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "US" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "VN" , "🇻🇳" ] , [ "ZA" , "🇿🇦"]])

let result = {
  "title": '    📺  流媒体服务查询',
  "YouTube": 'YouTube: 检测失败，请重试',
  "Netflix": 'Netflix: 检测失败，请重试',
  "Dazn": "Dazn: 检测失败，请重试",
  "Disney": "Disney: 检测失败，请重试",
  //"Google": "Google 定位: 检测失败，请重试"

}

StreamingCheck()

function StreamingCheck(){
  testYTB()
  test(FILM_ID)
  //testDisney()
  testDazn()
  setTimeout(function(){
    $done({"title": result["title"],"message": "\n            "+([result["YouTube"],result["Netflix"],result["Dazn"]]).join("\n\n            ") +'\n\n            -----------------------------\n\n'+ "            节点" + arrow + $environment.params})
  },3000)
}

function test(filmId) {
    let option = {
      url: BASE_URL + filmId,
      opts: opts,
      timeout: 2800,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $task.fetch(option).then(response => {
      console.log("nf:"+response.statusCode)
      if (response.statusCode === 404) {
        //resolve('Not Found')
        result["Netflix"] = "Netflix: 支持自制剧集"
      } else if (response.statusCode === 403) {
        //resolve('Not Available')
        //console.log("nfnf")
        result["Netflix"] = "Netflix: 未支持"
      } else if (response.statusCode === 200) {
        let url = response.headers['X-Originating-URL']
        let region = url.split('/')[3]
        region = region.split('-')[0]
        if (region == 'title') {
          region = 'us'
        }
        console.log("nf:"+region)
        //resolve(region)
        result["Netflix"] = "Netflix: 完整支持"+ "⟦"+flags.get(region.toUpperCase())+"⟧"
      }
      //reject('Error')
    }, reason => {
      //resolve("timeout")
      result["Netflix"] = "Netflix: 检测超时"
    }
    )
}

function testYTB() { 
    let option = {
      url: BASE_URL_YTB,
      opts: opts,
      timeout: 2800,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
      },
    }
    $task.fetch(option).then(response=> {
      let data = response.body
      console.log("ytb:"+response.statusCode)
      if (response.statusCode !== 200) {
        //reject('Error')
        result["YouTube"] = "YouTube Premium: 检测失败"
      } else if (data.indexOf('Premium is not available in your country') !== -1) {
          //resolve('Not Available')
        result["YouTube"] = "YouTube Premium: 未支持"
      } else if (data.indexOf('Premium is not available in your country') == -1) {//console.log(data.split("countryCode")[1])
      let region = ''
      let re = new RegExp('"GL":"(.*?)"', 'gm')
      let ret = re.exec(data)
      if (ret != null && ret.length === 2) {
        region = ret[1]
      } else if (data.indexOf('www.google.cn') !== -1) {
        region = 'CN'
      } else {
        region = 'US'
      }
      //resolve(region)
      result["YouTube"] = "YouTube Premium: 支持"+ "⟦"+flags.get(region.toUpperCase())+"⟧"
      console.log("ytb:"+region+ result["YouTube"])
      }
    }, reason => {
      result["YouTube"] = "YouTube Premium: 检测超时"
      //resolve("timeout")
    })
}


function testDisney(){
    let option = {
      url: BASE_URL_DISNEY,
      opts: opts,
      timeout: 2800,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
      },
    }
    $task.fetch(option).then(response => {
      console.log("Disney+ :" + response.statusCode);
      //console.log(response.body)
      let DisneyURL = response.headers['Location'];
      if(response.statusCode === 200)
        {
          if(response.body.indexOf("Sorry, Star+ is not available in your region") !== -1) // 无服务
          {
            result["Disney"]= "Disney+: 未支持"
          } else if(response.body.indexOf("【公式】Disney+ (ディズニープラス)") !== -1) // 日本版
          {
            D_region = "JP"
            result["Disney"]= "Disney+: 已支持"+ "⟦"+flags.get(D_region.toUpperCase())+"⟧"
          } else if(response.body.indexOf('<link rel="canonical" href="https://www.hotstar.com/') !== -1) // 印度东南亚 Hotstar 版
          {
            let D_string2 = '<link rel="canonical" href="https://www.hotstar.com/';
            D_region = response.body.substring(response.body.indexOf(D_string2) + 52, response.body.indexOf(D_string2) + 54).toUpperCase();
            result["Disney"]= "Disney+: 即将登陆"+ "⟦"+flags.get(D_region.toUpperCase())+"⟧"+ " (Hotstar)";
          } else if(response.body.indexOf("CNBL: 1") !== -1) // 国际版
          {
            D_region = response.body.substring(response.body.indexOf("Region: ") + 8, response.body.indexOf("Region: ") + 10);
            result["Disney"]= "Disney+: 已支持"+ "⟦"+flags.get(D_region.toUpperCase())+"⟧"
          } else if(response.body.indexOf("CNBL: 2") !== -1) // 国际版 即将上线
          {
            D_region = response.body.substring(response.body.indexOf("Region: ") + 8, response.body.indexOf("Region: ") + 10);
            result["Disney"]= "Disney+: 即将登陆"+ "⟦"+flags.get(D_region.toUpperCase())+"⟧"
          }
          console.log(result["Disney"])
        }
    }, reason => {
      result["Disney"]= "Disney+: 检测超时"
    })
}

function testDazn() { 
  
  const extra =`{
    "LandingPageKey":"generic",
    "Platform":"web",
    "PlatformAttributes":{},
    "Manufacturer":"",
    "PromoCode":"",
    "Version":"2"
  }`
  let option = {
    url: BASE_URL_Dazn,
    method: "POST",
    opts: opts,
    timeout: 2800,
    headers: {
      'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36',
      "Content-Type": "application/json"
    },
    body: extra
  }

  $task.fetch(option).then(response=> {
    let data = response.body
    //data = extra
    let header = JSON.stringify(response.headers)
    console.log("Dazn:"+response.statusCode)
    //console.log("Dazn:"+data)
    //$done(data)
    if (response.statusCode !== 200) {
      //reject('Error')
      result["Dazn"] = "Dazn: 检测失败"
    } else if (response.statusCode == 200) {//console.log(data.split("countryCode")[1])
      console.log(data)
      let region = ''
      let re = new RegExp('"GeolocatedCountry":"(.*?)"', 'gm')
      let ret = re.exec(data)
      if (ret != null && ret.length === 2) {
        region = ret[1]
        result["Dazn"] = "Dazn: 支持"+ "⟦"+flags.get(region.toUpperCase())+"⟧"
      } else {
        result["Dazn"] = "Dazn: 未支持"

      }
      //resolve(region)
            console.log("Dazn:"+region+ result["Dazn"])
    }
  }, reason => {
    result["Dazn"] = "Dazn: 检测超时"
    //resolve("timeout")
  })
}


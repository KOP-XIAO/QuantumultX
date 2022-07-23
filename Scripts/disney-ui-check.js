/***

Thanks to & modified from 
1. https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js
2. https://github.com/AtlantisGawrGura/Quantumult-X-Scripts/blob/main/media.js
3. https://github.com/CoiaPrant/MediaUnlock_Test/blob/main/check.sh


For Quantumult-X 598+ ONLY!!

2022-07-23

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/disney-ui-check.js, tag=Disney⁺ 查询, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Disney.png, enabled=true"

@XIAO_KOP

**/

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

var opts = {
	policy: $environment.params
};


let result = {
	"title": '    🎬  Disney⁺ 解锁查询',
	"status": '⚠️ 检测失败，请重试',
	//"Google": "Google 定位: 检测失败，请重试"
	
}

;(async () => {
	let { region, status } = await testDisneyPlus()
	console.log(`testDisneyPlus: region=${region}, status=${status}`)
	if (status==STATUS_COMING) {
		//console.log(1)
		result["status"] = "🚦 即将登陆 ➟ "+'⟦'+flags.get(region.toUpperCase())+"⟧"
	} else if (status==STATUS_AVAILABLE){
		//console.log(2)
		result["status"] = "✅ 已支持 ➟ "+'⟦'+flags.get(region.toUpperCase())+"⟧"
		console.log(result["status"])
	} else if (status==STATUS_NOT_AVAILABLE) {
		//console.log(3)
		result["status"] = "🛑 不支持 "
	} 
	cnt = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` +'----------------------</br></br>'+result["status"]+'</br></br>----------------------</br>'+$environment.params + `</p>`
	$done({"title":result["title"],"htmlMessage":cnt})
})()
.finally(() => $done({"title":result["title"],"htmlMessage":`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">`+'----------------------</br></br>'+result["status"]+'</br></br>----------------------</br>'+$environment.params + `</p>`}));


async function testDisneyPlus() {
	try {
		let { region, cnbl } = await Promise.race([testHomePage(), timeout(7000)])
		console.log(`homepage: region=${region}, cnbl=${cnbl}`)
		// 即将登陆
//		if (cnbl == 2) {
//			return { region, status: STATUS_COMING }
//		}
		let { countryCode, inSupportedLocation, accessToken } = await Promise.race([getLocationInfo(), timeout(7000)])
		console.log(`getLocationInfo: countryCode=${countryCode}, inSupportedLocation=${inSupportedLocation}`)
		
		region = countryCode ?? region
		console.log( "region:"+region)
		// 即将登陆
		if (inSupportedLocation === false || inSupportedLocation === 'false') {
			return { region, status: STATUS_COMING }
		} else {
			// 支持解锁
			return { region, status: STATUS_AVAILABLE }
		}

		  let support = await Promise.race([testPublicGraphqlAPI(accessToken), timeout(7000)])
	      if (!support) {
	      return { status: STATUS_NOT_AVAILABLE }
	    }
    // 支持解锁
    	return { region, status: STATUS_AVAILABLE }
		
	} catch (error) {
		console.log("error:"+error)
		
		// 不支持解锁
		if (error === 'Not Available') {
			console.log("不支持")
			return { status: STATUS_NOT_AVAILABLE }
		}
		
		// 检测超时
		if (error === 'Timeout') {
			return { status: STATUS_TIMEOUT }
		}
		
		return { status: STATUS_ERROR }
	} 
	
}

function getLocationInfo() {
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
              manufacturer: 'apple',
              model: null,
              operatingSystem: 'macintosh',
              operatingSystemVersion: '10.15.7',
              osDeviceIds: [],
            },
            deviceFamily: 'browser',
            deviceLanguage: 'en',
            deviceProfile: 'macosx',
          },
        },
      }),
    }
    
    $task.fetch(opts0).then(response => {
      let data = response.body
      console.log("locationinfo:"+response.statusCode)
      if (response.statusCode !== 200) {
        console.log('getLocationInfo: ' + data)
        reject('Not Available')
        return
      } else {
        let {
          token: { accessToken },
          session: {
            inSupportedLocation,
            location: { countryCode },
      },
      } = JSON.parse(data)?.extensions?.sdk
        resolve({ inSupportedLocation, countryCode, accessToken })
      }
    }, reason => {
      reject('Error')
      return
    })
  })
}

function testPublicGraphqlAPI(accessToken) {
  return new Promise((resolve, reject) => {
    let opts = {
      url: 'https://disney.api.edge.bamgrid.com/v1/public/graphql',
      headers: {
        'Accept-Language': 'en',
        Authorization: accessToken,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
      },
      body: JSON.stringify({
        query:
          'query($preferredLanguages: [String!]!, $version: String) {globalization(version: $version) { uiLanguage(preferredLanguages: $preferredLanguages) }}',
        variables: { version: '1.5.0', preferredLanguages: ['en'] },
      }),
    }

    $task.fetch(opts).then( response => {

      resolve(response.status === 200)
    }, reason => {
        reject('Error')
        return
    })
  })
}

function testHomePage() {
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
			if (response.statusCode !== 200 || data.indexOf('not available in your') !== -1) {
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

var flags = new Map([[ "AC" , "🇦🇨" ] ,["AE","🇦🇪"], [ "AF" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "AR" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "AT" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , ["BA", "🇧🇦"], [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "BE" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "BG" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "BR" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "BV" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "CA" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "CH" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "CN" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "DE" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "DK" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "EA" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "ES" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "EU" , "🇪🇺" ] , [ "FI" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫🇴" ] , [ "FR" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "GB" , "🇬🇧" ] , [ "HK" , "🇭🇰" ] ,["HU","🇭🇺"], [ "ID" , "🇮🇩" ] , [ "IE" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "IN" , "🇮🇳" ] , [ "IS" , "🇮🇸" ] , [ "IT" , "🇮🇹" ] , [ "JP" , "🇯🇵" ] , [ "KR" , "🇰🇷" ] , [ "LU" , "🇱🇺" ] , [ "MO" , "🇲🇴" ] , [ "MX" , "🇲🇽" ] , [ "MY" , "🇲🇾" ] , [ "NL" , "🇳🇱" ] , [ "PH" , "🇵🇭" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "RU" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇸🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "SE" , "🇸🇪" ] , [ "SG" , "🇸🇬" ] , [ "TH" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "TR" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇨🇳" ] , [ "UK" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "US" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "VN" , "🇻🇳" ] , [ "ZA" , "🇿🇦"]])

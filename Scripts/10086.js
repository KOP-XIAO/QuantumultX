const userCheckinURL = 'http://he.sx.chinamobile.com/h/rest/v1/user/feequery';
const userCookieKey = 'heLife_10086_userCookieKey';
const userAgentKey = 'heLife_10086_userAgentKey';
//const userDataKey = 'heLife_10086_userDataKey';


let isGetCookie = typeof $request !== 'undefined';
console.log(isGetCookie)
console.log($request.headers['Cookie'])
if (isGetCookie) {
  // 获取 Cookie
  if (true) {
    var cookie = $request.headers['Cookie'];
    var userAgent = $request.headers['User-Agent'];
    $prefs.setValueForKey(cookie, userCookieKey);
    $prefs.setValueForKey(userAgent, userAgentKey);
    $notify("成功获取山西和生活cookie 🎉", "", "请在Rewrite_Local禁用该脚本")
  }
  $done({});
} else {
  // 查话费
  var request = {
    url: userCheckinURL,
    method: 'POST',
    headers: {
      'Cookie': $prefs.valueForKey(userCookieKey),
      'Accept-Encoding': 'gzip, deflate',
      'xm-sign': '5eaf02499406c8e9f548ee374fcac69b(71)1582216331415(27)1582216331415',
      'Connection': 'keep-alive',
      'Host': 'he.sx.chinamobile.com',
      'Accept': '*/*',
      'Referer': 'http://he.sx.chinamobile.com/h/index.html',
      'User-Agent': $prefs.valueForKey(userAgentKey),
      'Content-type' : 'application/json',
      'Content-Length': '2',
      'Accept-Language': 'zh-cn'
    },
    body: JSON.stringify({})
  };

  $task.fetch(request).then(response => {
    const obj = JSON.parse(response.body);
    var temp = obj.data;
    $notify("话费余额"+temp.PREPAY_FEE_YUAN)
  }, reason => {
    $notify("山西移动和生活", "", reason.error)
  });
}
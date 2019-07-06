if ($request.url.indexOf('watermark') > 0) {
  $done({url: $request.url.replace(/&watermark=\d/, "")});
} else {
  $done();
}
if ($request.url.indexOf('vide.f7') > 0) {
  $done({url: $request.url.replace(/vide\.f7/, "vide.f")});
} else {
  $done();
}

/**********************************************************
#### 原作者：https://Choler.github.io/Surge/Script/Amark.js 
^https:\/\/[\s\S]*\/aweme\/v1\/play\/\?video url script-response-body https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Amark.js
[MITM]
hostname = api.amemv.com, api*.musical.ly, api*.tiktokv.com
**********************************************************/

$notify(TikTok, 已匹配)
let result = $response.body;
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
var keyword = ['watermark=1'];
keyword.forEach(function(k) {
  result = replaceAll(result, k, 'watermark=0');
});
body = JSON.parse(result);
if(result.indexOf('aweme_list') != -1){
  body.aweme_list.forEach((element, index)=>{
    if(element.hasOwnProperty('raw_ad_data')){      
    body.aweme_list.splice(index, 1);
    }
  });
  body.aweme_list.forEach((element, index)=>{
    if(element.hasOwnProperty('simple_promotions')){      
    delete body.aweme_list[index].simple_promotions;
    }
  });
  body.aweme_list.forEach((element, index) => {
    if (element.interaction_stickers !== null) {
      body.aweme_list[index].interaction_stickers = null;
    }
  });
  body['aweme_list'].forEach((element, index) => {
    if (element.prevent_download === true) {
      body['aweme_list'][index].status.reviewed = 1;
      body['aweme_list'][index].prevent_download = false;
    }
  });
}

body = JSON.stringify(body);
$done({body});

/**********************************************************
From Surge Version: https://raw.githubusercontent.com/Choler/Surge/master/Script/Aweme.js
[Rewrite]
^https:\/\/[\s\S]*\/v1\/(aweme\/)?(feed|post)\/ url script-response-body https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Aweme.js

[MITM]
hostname = aweme*.snssdk.com
**********************************************************/

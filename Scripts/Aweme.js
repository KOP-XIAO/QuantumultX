$notify(TikTok, 已匹配)
let body = JSON.parse($response.body);
if(body.aweme_list){
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
    if (element.hasOwnProperty('prevent_download')) {
      body.aweme_list[index].status.reviewed = 1;
      body.aweme_list[index].prevent_download = false;
    }
  });
  body.aweme_list.forEach((element, index) => {
    if (element['interaction_stickers'] !== null) {
      body.aweme_list[index].interaction_stickers = null;
    }
  });
}
$done({body: JSON.stringify(body)});

/**********************************************************
From Surge Version: https://raw.githubusercontent.com/Choler/Surge/master/Script/Aweme.js
[Rewrite]
^https:\/\/[\s\S]*\/v1\/(aweme\/)?(feed|post)\/ url script-response-body https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Aweme.js

[MITM]
hostname = aweme*.snssdk.com
**********************************************************/

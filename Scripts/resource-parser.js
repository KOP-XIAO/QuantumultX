/** 
☑️ 资源解析器 ©𝐒𝐡𝐚𝐰𝐧  ⟦2026-04-23 16:09⟧
----------------------------------------------------------
🛠 发现 𝐁𝐔𝐆 请反馈: https://t.me/ShawnKOP_Parser_Bot
⛳️ 关注 🆃🅶 相关频道: https://t.me/QuanX_API
📖 使用 教程: https://tinyurl.com/2jyygfom
🗣 🆃🄷🄰🄽🄺🅂 🆃🄾  @Jamie CHIEN, @M**F**, @c0lada, @Peng-YM, @vinewx, @love4taylor, @shadowdogy 

🤖 主要功能: 
❶ 将其它格式的⟦服务器订阅⟧解析成 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 格式
☑︎ 支持 𝐕2𝐫𝐚𝐲𝐍/𝗦𝗦(𝗥/𝗗)/𝗧𝗿𝗼𝗷𝗮𝗻/𝐕𝐋𝗲𝐬𝐬/𝗛𝗧𝗧𝗣(𝗦)/𝗔𝗻𝘆𝗧𝗟𝗦/𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁(𝗫)/𝗦𝘂𝗿𝗴𝗲/𝐂𝐥𝐚𝐬𝐡/𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭/𝐋𝐨𝐨𝐧 格式
☑︎ 提供说明 1⃣️ 中的可选个性化参数(筛选、重命名 等)
❷ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲(重写) & 𝗳𝗶𝗹𝘁𝗲𝗿(分流) 的 转换 & 筛选 
☑︎ 用于禁用/修改远程引用中某(几)项 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲/𝗳𝗶𝗹𝘁𝗲𝗿
☑︎ 𝐒𝐮𝐫𝐠𝐞/𝐂𝐥𝐚𝐬𝐡 类型规则 𝗹𝗶𝘀𝘁 与 模块 𝐦𝐨𝐝𝐮𝐥𝐞 的解析使用
----------------------------------------------------------
0️⃣ 在 ⟦订阅链接⟧ 后加 "#" 使用, 不同参数用 "&" 连接 
⚠️ ☞ "你的订阅连接#emoji=1&tfo=1&in=香港+台湾"
❖ 本地资源片段引用, 请将参数如 "#in=xxx&out=yyy" 填入资源片段的第 ① 行
❖ 🚦 支持中文, "操作" 以下特殊字符时请先替换(URL-Encode) 🚦
  ∎ "+"⇒"%2B", 空格⇒"%20", "@"⇒"%40", "&"⇒"%26", "."⇒"\.", ","⇒"%2C"

1️⃣ ⟦𝐬𝐞𝐫𝐯𝐞𝐫 节点⟧ ➠ 参数说明:
⦿ emoji=1(国行设备用2)/-1, 添加/删除节点名内地区旗帜;
⦿ udp=1/-1, tfo=1/-1, 分别强制开启(关闭) 𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲/𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧;
⦿ uot=1, 开启 udp-over-tcp=true选项（仅限SS(R)）
⦿ cert=1/-1, 分别开启/关闭 𝐭𝐥𝐬 证书验证(默认关闭);
  ❖ csha/psha, tls-cert-sha256 以及 tls-pubkey-sha256 参数
  ❖ alpn, 指定over-tls类型节点的alpn参数
⦿ in, out, regex, regout 分别为 保留、删除、正则保留、正则删除 节点;
  ❖ in/out 仅对节点名匹配生效, 多参数(逻辑"或")用 "+", 逻辑"与"用 "." 表示;
  ❖ regex/regout 对节点的完整信息进行匹配(类型、端口、加密等);
  ❖ 示范: "in=香港.0\.2倍率+台湾&out=BGP&regex=iplc"
⦿ rename 重命名, "旧名@新名", "前缀@", "@后缀", 用 "+" 连接多个参数;
  ❖ 删除字段: "字段1.字段2☠️", 想删除 "." 时用 "\." 替代
  ❖ 示范: "rename=香港@𝐇𝐊+[𝐒𝐒]@+@[1𝐗]+流量.0\.2☠️"
  ❖ 默认 emoji 先生效, 如想调换顺序, 请用 rrname 参数
⦿ replace 正则替换节点中字段, 可用于重命名/更改加密方式等
  ❖ replace=regex1@𝘀𝘁𝗿1+regex2@𝘀𝘁𝗿2
⦿ ptn/npt=1-8, 将节点名英文/数字替换成样式 ⇒ 🅰/🄰/𝐀/𝗮/𝔸/𝕒/ᵃ/ᴬ, ①\❶\⓵\𝟙\¹\₁\𝟏\𝟷
⦿ delreg, 利用正则表达式来删除 "节点名" 中的字段(⚠️ 慎用)
⦿ aead=-1, 关闭 Vmess 的 AEAD 参数
⦿ host=xxx, 修改已有 host , 如要增加host，请用☠️结尾
⦿ obfs=vhttp/shttp, 指定 obfs=shadowsocks-http 或 obfs=vmess-http 的特殊需求
⦿ tsession=0/1/2, 0/1 代表关闭 tls-session-ticket/reuse，2 表示全部关闭
⦿ checkurl=xxx , 指定 server_check_url 参数
⦿ sort=1/-1/x/参数规则, 按节点名 正/逆/随机/参数规则 排序
  ❖ 参数规则是正则表达式或简单关键词, 用"<" 或 ">" 连接
  ❖ sort=🇭🇰>🇸🇬>🇯🇵>🇺🇸 , 靠前排序
  ❖ sort=IEPL<IPLC<BGP , 靠后排序
⦿ info=1, 开启通知提示机场 ✈️ 流量信息(如有提供);
⦿ flow=2022-06-02:1000:54, 订阅到期时间:总流量:已用流量
⦿ 占位符，可用于 rename/replace 等操作
  ❖ $type0/1/2/3/4/5/6/7 占位符，将节点类型(ss/ssr/vmess 等)作为可操作参数，如
    ∎ rename=@|$type2
    ∎ 样式分别为 "𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","𝕊𝕊","ˢˢ"
  ❖ $index0/1/2/3/4/5/6/7/8 占位符，将节点的序号作为可操作参数，如
    ∎ rename=@「$index1」
    ∎ 样式分别为 1\①\❶\⓵\𝟙\¹\₁\𝟏\𝟷
  ❖ $emoji1/2 占位符, 将emoji(🇭🇰 等)作为可操作参数
    ∎ rename=@「$emoji1」
  ❖ $tag 占位符，将订阅的 tag 作为可操作参数，如
    ∎ 可接数字以单独给 tag 添加字母/数字样式
    ∎ rename=@「$tag34」, 样式同下边的 ptn/npt
⦿ ⟦进阶参数⟧: 𝘀𝗳𝗶𝗹𝘁𝗲𝗿/𝘀𝗿𝗲𝗻𝗮𝗺𝗲, 传入一段 base64 编码的脚本, 可用于更为复杂的[过滤/重命名] 需求
  ❖ 说明: https://github.com/KOP-XIAO/QuantumultX/pull/9

2⃣️ ⟦𝐫𝐞𝐰𝐫𝐢𝐭𝐞 重写⟧/⟦𝐟𝐢𝐥𝐭𝐞𝐫 分流⟧ ➠ 参数说明:
⦿ in, out, 根据关键词 保留/禁用 相关分流、重写规则;
⦿ inhn, outhn, “保留/删除”主机名(𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆);
  ❖ 示范: 禁用 "淘宝比价" 及 "weibo" 的 js 同主机名
  𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐥𝐢𝐬𝐭#out=tb_price.js+wb_ad.js&outhn=weibo
⦿ regex/regout, 正则保留/删除, 请自行折腾正则表达式;
  ❖ 可与 in(hn)/out(hn) 一起使用，in(hn)/out(hn) 会优先执行;
  ❖ 对 𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆 & 𝐫𝐞𝐰𝐫𝐢𝐭𝐞/𝐟𝐢𝐥𝐭𝐞𝐫 同时生效(⚠️ 慎用)
⦿ policy 参数, 用于直接指定策略组，或为 𝐒𝐮𝐫𝐠𝐞 类型 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 生成策略组(默认"𝐒𝐡𝐚𝐰𝐧"策略组);
⦿ pset=regex1@policy1+regex2@policy2, 为同一分流规则中不同关键词(允许正则表达式)指定不同策略组;
⦿ replace 参数, 正则替换 𝐟𝐢𝐥𝐭𝐞𝐫/𝐫𝐞𝐰𝐫𝐢𝐭𝐞 内容, regex@newregex;
  ❖ 将淘宝比价中脚本替换成 lite 版本(如有此版本的脚本)
    ∎ replace=(price)(.*)@$1_lite$2
⦿ dst=rewrite/filter，分别为将 𝐦𝐨𝐝𝐮𝐥𝐞&𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转换成 重写/分流;
  ❖ ⚠️ 默认将 𝐦𝐨𝐝𝐮𝐥𝐞 转换到重写, 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转成分流
  ❖ ⚠️ 把 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 中 url-regex 转成重写时, 必须要加 dst=rewrite;
  ❖ ⚠️ 把 𝐦𝐨𝐝𝐮𝐥𝐞 中的分流规则转换时, 必须要加 dst=filter
⦿ cdn=1, 将 github 脚本的地址转换成免翻墙 fastly.jsdelivr.net/gh
⦿ fcr=1/2/3, 为分流规则添加 force-cellular/multi-interface/multi-interface-balance 参数，强制移动数据/混合数据/负载均衡
⦿ via=接口, 为分流规则添加 via-interface 参数, 0 表示 via-interface=%TUN%
⦿ relay=目标策略名, 批量将节点订阅转换为ip/host规则，用于实现代理链

3⃣️ 其他参数
⦿ 通知参数 ntf=0/1, 用于 关闭/打开 资源解析器的提示通知
  ❖ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗳𝗶𝗹𝘁𝗲𝗿 默认“开启”通知提示, 以防规则误删除
  ❖ 𝘀𝗲𝗿𝘃𝗲𝗿 资源解析则默认”关闭“通知提示
⦿ 类型参数 type=domain-set/rule/module/list/nodes
  ❖ 当解析器未能正确识别类型时, 可尝试使用此参数强制指定
⦿ 隐藏参数 hide=0, 禁用筛除的分流/重写，默认方式为删除
⦿ profile=111 , URL-Scheme 添加 QuanX 类型配置中远程资源
----------------------------------------------------------
*/

/**
* 使用说明，
0️⃣ 在QuantumultX 配置文件中[general] 部分，加入 
resource_parser_url = https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
⚠️⚠️如提示"没有自定义解析器"，请长按右下角图标后点击左侧刷新按钮，更新资源，后台退出 app，直到出现解析器说明

------------------------------
*/

//beginning 解析器正常使用，調試註釋此部分

let [link0, content0, subinfo] = [$resource.link, $resource.content, $resource.info]
let version = typeof $environment != "undefined" ? Number($environment.version.split("build")[1]): 0 // 版本号
let Perror = 0 //错误类型

const ADDRes = `quantumult-x:///add-resource?remote-resource=url-encoded-json`
var RLink0 = {
  "filter_remote": [],
  "rewrite_remote": [],
  "server_remote": [],
}
const Field = {
  "filter" : "filter_remote",
  "rewrite": "rewrite_remote",
  "server" : "server_remote"
}  

const subtag = typeof $resource.tag != "undefined" ? $resource.tag : "";
////// 非 raw 链接的沙雕情形
content0 = content0.indexOf("DOCTYPE html") != -1 && link0.indexOf("github.com") != -1 ? ToRaw(content0) : content0 ;
// loon插件链接
content0 = link0.indexOf("nsloon.com/openloon/import?plugin=") != -1 ? ToLink(link0) : content0 ;
//ends 正常使用部分，調試註釋此部分


var para = /^(http|https)\:\/\//.test(link0) ? link0 : content0.split("\n")[0];
var para1 = para.slice(para.indexOf("#") + 1).replace(/\$type/g,"node_type_para_prefix").replace(/\$emoji/g,"node_emoji_flag_prefix").replace(/\$tag/g,"node_tag_prefix").replace(/\$index/g,"node_index_prefix") //防止参数中其它位置也存在"#"
var mark0 = para.indexOf("#") != -1 ? true : false; //是否有參數需要解析
var Pinfo = mark0 && para1.indexOf("info=") != -1 ? para1.split("info=")[1].split("&")[0] : 0;
var ntf_flow = 0;
//常用量
const Base64 = new Base64Code();
const escapeRegExp = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); //处理特殊符号以便正则匹配使用
var link1 = link0.split("#")[0]
const qxpng = "https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png" // server sub-info link
const subinfo_link = { "open-url": "https://t.me/QuanX_API", "media-url": "https://shrtm.nu/ebAr" };
const subinfo_link1 = { "open-url": link1, "media-url": "https://shrtm.nu/uo13" } // server sub-info link(fake-nodes)
const rwrite_link = { "open-url": link1, "media-url": "https://shrtm.nu/x3o2" } // rewrite filter link
const rwhost_link = { "open-url": link1, "media-url": "https://shrtm.nu/0n5J" } // hostname filter link
const rule_link = { "open-url": link1, "media-url": "https://shrtm.nu/cpHD" } // rule filter link
const nan_link = { "open-url": link1, "media-url": qxpng } // nan error link
const bug_link = { "open-url": "https://t.me/ShawnKOP_Parser_Bot", "media-url": "https://shrtm.nu/obcB" } // bug link
const sub_link = { "open-url": link1, "media-url": "https://shrtm.nu/ebAr" } // server link
const update_link = {"open-url" : "https://apps.apple.com/us/app/quantumult-x/id1443988620", "media-url": qxpng}
const plink0 = {"open-url" : link0, "media-url": qxpng} // 跳转订阅链接

if(version == 0) { $notify("⚠️ 请更新 Quantumult X 至最新商店版本\n","🚦 当前版本可能无法正常使用部分功能","\n👉 点击跳转商店链接更新",update_link) }



SubFlow() //流量通知


// 参数获取
var Pin0 = mark0 && para1.indexOf("in=") != -1 ? (para1.split("in=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Pout0 = mark0 && (para.indexOf("#out=") != -1 || para.indexOf("&out=") != -1)? ((para.indexOf("#out=")!=-1? para.split("#out="): para.split("&out="))[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Psfilter = mark0 && para1.indexOf("sfilter=") != -1 ? Base64.decode(para1.split("sfilter=")[1].split("&")[0]) : null; // script filter
var Preg = mark0 && para1.indexOf("regex=") != -1 ? decodeURIComponent(para1.split("regex=")[1].split("&")[0]).replace(/\，/g,",") : null; //server正则过滤参数
var Pregout = mark0 && para1.indexOf("regout=") != -1 ? decodeURIComponent(para1.split("regout=")[1].split("&")[0]).replace(/\，/g,",") : null; //server正则删除参数
var Pregdel = mark0 && para1.indexOf("delreg=") != -1 ? decodeURIComponent(para1.split("delreg=")[1].split("&")[0]).replace(/\，/g,",") : null; // 正则删除参数
var Phin0 = mark0 && para1.indexOf("inhn=") != -1 ? (para1.split("inhn=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null; //hostname 
var Phout0 = mark0 && para1.indexOf("outhn=") != -1 ? (para1.split("outhn=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null; //hostname
var Preplace = mark0 && para1.indexOf("replace=") != -1 ? para1.split("replace=")[1].split("&")[0] : null; //filter/rewrite 正则替换
var Pemoji = mark0 && para1.indexOf("emoji=") != -1 ? para1.split("emoji=")[1].split("&")[0] : null;
var Pdbg = mark0 && para1.indexOf("dbg=") != -1 ? para1.split("dbg=")[1].split("&")[0] : null;
var Pudp0 = mark0 && para1.indexOf("udp=") != -1 ? para1.split("udp=")[1].split("&")[0] : 0;
var Ptfo0 = mark0 && para1.indexOf("tfo=") != -1 ? para1.split("tfo=")[1].split("&")[0] : 0;
//var Prname = mark0 && para1.indexOf("rename=") != -1 ? para1.split("rename=")[1].split("&")[0].split("+") : null;
var Prname = mark0 && /(^|\&)rename=/.test(para1) ? para1.split(/(^|\&)rename\=/)[2].split("&")[0].split("+") : null;
var Psrename = mark0 && para1.indexOf("srename=") != -1 ? Base64.decode(para1.split("srename=")[1].split("&")[0]) : null; // script rename
var Prrname = mark0 && para1.indexOf("rrname=") != -1 ? para1.split("rrname=")[1].split("&")[0].split("+") : null;
var Psuffix = mark0 && para1.indexOf("suffix=") != -1 ? para1.split("suffix=")[1].split("&")[0] : 0;
var Ppolicy = mark0 && para1.indexOf("policy=") != -1 ? decodeURIComponent(para1.split("policy=")[1].split("&")[0]) : "Shawn";
var Ppolicyset = mark0 && para1.indexOf("pset=") != -1 ? decodeURIComponent(para1.split("pset=")[1].split("&")[0]) : "";
var Pcert0 = mark0 && para1.indexOf("cert=") != -1 ? para1.split("cert=")[1].split("&")[0] : 0;
var Psort0 = mark0 && para1.indexOf("sort=") != -1 ? para1.split("sort=")[1].split("&")[0] : 0;
var PsortX = mark0 && para1.indexOf("sortx=") != -1 ? para1.split("sortx=")[1].split("&")[0] : 0;
var PTls13 = mark0 && para1.indexOf("tls13=") != -1 ? para1.split("tls13=")[1].split("&")[0] : 0;
var Pntf0 = mark0 && para1.indexOf("ntf=") != -1 ? para1.split("ntf=")[1].split("&")[0] : 2;
var Phide = mark0 && para1.indexOf("hide=") != -1 ? para1.split("hide=")[1].split("&")[0] : 1;
var Pb64 = mark0 && para1.indexOf("b64=") != -1 ? para1.split("b64=")[1].split("&")[0] : 0;
var emojino = ["0️⃣", "1⃣️", "2⃣️", "3⃣️", "4⃣️", "5⃣️", "6⃣️", "7⃣️", "8⃣️", "9⃣️", "🔟"]
var pfi = mark0 &&Pin0 ? "in=" + Pin0.join(", ") + ",  " : ""
var pfo = mark0 &&Pout0 ? "out=" + Pout0.join(", ") : ""
var pfihn = mark0 &&Phin0 ? "inhn=" + Phin0.join(", ") + ",  " : ""
var pfohn = mark0 &&Phout0 ? "outhn=" + Phout0.join(", ") : ""
var Pcnt =  mark0 &&para1.indexOf("cnt=") != -1 ? para1.split("cnt=")[1].split("&")[0] : 0;
var Pcap = mark0 &&para1.indexOf("cap=") != -1 ? para1.split("cap=")[1].split("&")[0] : "";
var Pptn = mark0 &&para1.indexOf("ptn=") != -1 ? para1.split("ptn=")[1].split("&")[0] : ""; //花式英文字符
var Pnptn = mark0 &&para1.indexOf("npt=") != -1 ? para1.split("npt=")[1].split("&")[0] : ""; //花式数字
var Pcdn = mark0 &&para1.indexOf("cdn=") != -1 ? para1.split("cdn=")[1].split("&")[0] : "";
let [flow, exptime, errornode, total] = "";
var Pdel = mark0 && para1.indexOf("del=") != -1 ? para1.split("del=")[1].split("&")[0] : 0; //删除重复节点
var typeU = mark0 && para1.indexOf("type=") != -1 ? para1.split("type=")[1].split("&")[0] : "";
var Pfcr = mark0 && para1.indexOf("fcr=") != -1 ? para1.split("fcr=")[1].split("&")[0] : ""; // force-cellular 等参数
var Pvia = mark0 && para1.indexOf("via=") != -1 ? para1.split("via=")[1].split("&")[0] : ""; // via-interface 参数
var Paead = mark0 && para1.indexOf("aead=") != -1 ? para1.split("aead=")[1].split("&")[0] : ""; // vmess aead 参数
var Phost = mark0 && ( para.indexOf("#host=") != -1 || para.indexOf("&host=") != -1) ? (para.indexOf("#host=")!=-1? para.split("#host="): para.split("&host="))[1].split("&")[0] : ""; // host 混淆参数
var Pcsha256 = mark0 && para1.indexOf("csha=") != -1 && version >= 646? para1.split("csha=")[1].split("&")[0] : ""; // cert-sha256 混淆参数
var Ppsha256 = mark0 && para1.indexOf("psha=") != -1 && version >= 646? para1.split("psha=")[1].split("&")[0] : ""; // pubkey-sha256 混淆参数
var typeQ = $resource.type? $resource.type:"unsupported"   //返回 field 类型参数
var PRelay =mark0 && para1.indexOf("relay=") != -1 ? decodeURIComponent(para1.split("relay=")[1].split("&")[0]) : ""; // 节点 relay 参数, 用于实现代理链功能
var PUOT = mark0 && para1.indexOf("uot=") != -1 && version >= 665? para1.split("uot=")[1].split("&")[0] : ""; // 节点 udp-over-tcp 开启
var PcheckU = mark0 && para1.indexOf("checkurl=") != -1 ? decodeURIComponent(para1.split("checkurl=")[1].split("&")[0]) : ""; // 节点 server_check_url 参数
typeQ = PRelay!=""? "server":typeQ
var typec="" //check result type
var Pflow=mark0 && para1.indexOf("flow=") != -1 ? para1.split("flow=")[1].split("&")[0] : 0; // 流量时间等参数
var PProfile = mark0 && para1.indexOf("profile=") != -1 ? para1.split("profile=")[1].split("&")[0] : 0; // 通过URL-Scheme导入完整配置参数
var Palpn = mark0 && para1.indexOf("alpn=") != -1 && version >= 712? para1.split("alpn=")[1].split("&")[0] : ""; // over-tls 类型，alpn参数
var Pobfs = mark0 && para1.indexOf("obfs=") != -1 && version >= 770? para1.split("obfs=")[1].split("&")[0] : ""; // 指定特殊情况下的 obfs=xx-http 类型
var Psession =  mark0 && para1.indexOf("tsession=") != -1 && version >= 771? para1.split("tsession=")[1].split("&")[0] : "";//tls-no-session-ticket and tls-no-session-reuse
// 0/1 代表关闭 session-ticket/reuse，2 表示全部关闭。
var Pmix = version>=844? 1 : 0 // allow rewrite and filter mix from version 844
var Pjsonjq = version>=845? 0 : 1 // allow jsonjq from version 845
var PNS=0 // 不支持的节点统计
var NSList=["当前订阅内，不支持以下节点 ↘️ \n"] // 不支持节点列表

var RegoutList= [] ;//用于 regout参数删选提醒
// URL-Scheme 增加配置
var ADDres = `quantumult-x:///add-resource?remote-resource=url-encoded-json`
var RLink = `{
  "server_remote": [
    sremoteposition
  ],
  "filter_remote": [
    fremoteposition
  ],
  "rewrite_remote": [
    rremoteposition
  ]
}`

var ProfileInfo = {
  "server":"",
  "filter":"",
  "rewrite":""
}

function VCheck(cnt) {
  cnts=cnt.split("\n").filter(Boolean).map(item=>item.trim()).filter(item => /^http/.test(item)).map(item=>"\""+item+"\"")
  cnts=cnts.join(",\n")
  //console.log(cnts)
  return  cnts
  }

function Profile_Handle() {
  let a = content0
  PProfile= PProfile==1? "001":PProfile
  PProfile= PProfile==8? "010": PProfile
  PProfile= PProfile==9? "011": PProfile
  srm = a.split("[server_remote]")[1] && String(PProfile)[0]=="1"? VCheck(a.split("[server_remote]")[1].split("[")[0]) : ""
  frm = a.split("[filter_remote]")[1] && String(PProfile)[1]=="1"? VCheck(a.split("[filter_remote]")[1].split("[")[0]) : ""
  rrm = a.split("[rewrite_remote]")[1] && String(PProfile)[2]=="1"? VCheck(a.split("[rewrite_remote]")[1].split("[")[0]) : ""
  RLink=RLink.replace("sremoteposition",srm).replace("fremoteposition",frm).replace("rremoteposition",rrm)
  ADDres=ADDres.replace("url-encoded-json",encodeURIComponent(RLink))
}

//
//流量信息
//{bytes_used: 1073741824, bytes_remaining: 2147483648, expire_date: 1653193966}}
var Finfo={}
if (Pflow!=0) {
  Pflow = Pflow.split(":")
  var Bdate=Date.parse(new Date(Pflow[0]))/1000
  var Btotal=Pflow[1]? Pflow[1]*1024*1024*1024 : 0
  var Bused=Pflow[2]? Pflow[2]*1024*1024*1024 : 0
  var Bremain=Btotal !=0 ? Btotal-Bused : 1
  var BJson={bytes_used: Bused, bytes_remaining: Bremain, expire_date: Bdate}
  //$notify("Flow","",JSON.strigify(BJson))
  Finfo = BJson
}

//花漾字 pattern
var pat=[]
pat[0] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"]
pat[1] = ["🅰","🅱","🅲","🅳","🅴","🅵","🅶","🅷","🅸","🅹","🅺","🅻","🅼","🅽","🅾","🅿","🅺","🆁","🆂","🆃","🆄","🆅","🆆","🆇","🆈","🆉"]
pat[2] = ["🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🄺","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉"]
pat[3] = ["𝐀","𝐁","𝐂","𝐃","𝐄","𝐅","𝐆","𝐇","𝐈","𝐉","𝐊","𝐋","𝐌","𝐍","𝐎","𝐏","𝐊","𝐑","𝐒","𝐓","𝐔","𝐕","𝐖","𝐗","𝐘","𝐙"]
pat[4] = ["𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","i","𝗷","𝗸","𝗹","𝗺","𝗻","𝗼","𝗽","𝗸","𝗿","𝘀","𝐭","𝘂","𝘃","𝘄","𝘅","𝘆","𝘇"]
pat[5] = ["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","𝕂","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ"]
pat[6] = ["𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕜","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"]
pat[7] = ["ᵃ","ᵇ","ᶜ","ᵈ","ᵉ","ᶠ","ᵍ","ʰ","ⁱ","ʲ","ᵏ","ˡ","ᵐ","ⁿ","ᵒ","ᵖ","ᵒ⃒","ʳ","ˢ","ᵗ","ᵘ","ᵛ","ʷ","ˣ","ʸ","ᙆ"]
pat[8] = ["ᴬ","ᴮ","ᒼ","ᴰ","ᴱ","ᶠ","ᴳ","ᴴ","ᴵ","ᴶ","ᴷ","ᴸ","ᴹ","ᴺ","ᴼ","ᴾ","ᴼ̴","ᴿ","ˢ","ᵀ","ᵁ","ᵛ","ᵂ","ˣ","ʸ","ᙆ"]

// 花式数字
var patn=[]
patn[0] = ["0","1","2","3","4","5","6","7","8","9"]
patn[1] = [ '⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨' ]
patn[2] = [ '⓪', '❶', '❷', '❸', '❹', '❺', '❻', '❼', '❽', '❾' ]
patn[3] = [ '⓪', '⓵', '⓶', '⓷', '⓸', '⓹', '⓺', '⓼', '⓻', '⓽' ]
patn[4] = [ '𝟘', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡' ]
patn[5] = [ '⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹' ]
patn[6] = [ '₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉' ]
patn[7] = ["𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟳","𝟖","𝟗"]
patn[8] = ["𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"]


// 将数字替换成 emoji 数字，处理10的特殊版本（需要"🔟"），2026-04-22
function numToEmoji10(n) {
    if (n == 10) {
      return emojino[10]+" ➠ ";
    } else {
      return String(n).split('').map(d => emojino[d] || d).join('')+" ➠ ";
    }
};


//避免json undefined错误的 函数
const getValue = (fn, defaultVaule) => {
  try {
    return fn();
  } catch (error) {
    return defaultVaule;
  }
};

var type0=""
//flag=1,2,3分别为 server、rewrite、rule 类型
var flag = 1

function Parser() {
  type0 = Type_Check(content0); //  类型判断
  //$notify(type0)
  if (type0 != "web" && type0 != "wrong-field" && type0 != "JS-0" && type0 != "wrong-link"){
    try {
      //$notify(type0,"hh")
      if (Pdbg){
        $notify(link0,type0,content0)
      }
      total = ResourceParse();
      
    } catch (err) {
      if(Perror == 0) {
      $notify("❌ 解析出现错误", "⚠️ 请点击通知，发送订阅链接进行反馈", err, bug_link);
    }
    }
  } else if (type0 == "wrong-field"){
    if (version >= 670 && typec!="") { //尝试跳转到正确类型
      RLink0[Field[typec]].push($resource.link+", opt-parser=true, tag=下次添加资源🉑️长点❤️8⃣️") //  跳转URI-Scheme
      var flink = ADDRes.replace(/url-encoded-json/,encodeURIComponent(JSON.stringify(RLink0)))
      const bug_linkx = { "open-url": flink, "media-url": "https://shrtm.nu/obcB" } // bug linkx
    $notify( "⚠️ 请点击通知跳转尝试添加到正确类型中","❌ 检测类型["+typec+"]"+"与填入类型"+"["+typeQ+"]冲突", "如果跳转添加仍旧失败，请发送链接反馈解析器bot\n"+$resource.link, bug_linkx)
    } else {//旧版本
    $notify("❌ 检测类型「"+typec+" 」"+"与目标类型"+" 「"+typeQ+" 」冲突", "⚠️ 请自行检查链接内容，或点击通知发送链接进行反馈", $resource.link, bug_link)
    }
    total=""
  } else {
    total=""
  }
    $done({ content: total });
}

if (typeof($resource)!=="undefined" && PProfile == 0) {
  Parser()
  $done({ content: total, info: Finfo })
} else if (PProfile != 0) {
  try {
    Profile_Handle()
  } catch (err) {
    if(Perror == 0) {
      $notify("❌ 解析出现错误", "⚠️ 请点击通知，发送订阅链接进行反馈", err, bug_link);
    }
    }
  openlink = {"open-url": ADDres}
  $notify("⚠️请忽略报错提示, 点击此通知跳转", "添加配置中的有效远程资源👇 ["+ PProfile+"]", ADDres,openlink)
  total = ProfileInfo[typeQ]
  $done({content:total})
}


/**
# 以下为具体的 function

*/

function ParseUnknown(cnt){
  try {
    cnt = JSON.parse(cnt)
    if(cnt) {
      $notify("⚠️ 链接返回内容并非有效订阅"+ "⟦" + subtag + "⟧","⁉️ 请自行检查原始链接，返回内容 👇️👇️",JSON.stringify(cnt), bug_link)
    }
    
  } catch(err) {
    if (!/error|block|invalid|support/.test(cnt.toLowerCase())) {
    $notify("😭 未能识别订阅 " + "⟦" + subtag + "⟧ 的内容",  "⚠️ 将尝试直接导入Quantumult X \n 如认为是 BUG, 请点通知跳转并 [发送链接] 反馈", "订阅返回内容: 👇 \n"+cnt, bug_link);
  } else {
    $notify("💢 ⟦" + subtag + "⟧ 返回内容无效",  "😠 请自行检查订阅，不要跑来反馈", "订阅返回内容: 👇 \n"+cnt, plink0);
  }
}
}


function ResourceParse() {
  //预处理，分流/重写等处理完成
  if (type0 == "Subs-B64Encode") { // subs2QX 负责所有节点的转换
    if (Pdbg) {$notify("original content", "node-b64", content0)}
    total = Subs2QX(Base64.decode(content0), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "Subs") {
    //$notify("subs","",content0+Pudp0+Ptfo0+Pcert0+PTls13)
    total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "QuanX" || type0 == "Clash" || type0 == "Surge") {
    total = Subs2QX(isQuanX(content0).join("\n"), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "sgmodule") { // surge module 模块/含 url-regex 的 rule-set
    //2023-03-06 考虑模块重写与quanx类型重写的混搭
    flag = 2 
    //total = SGMD2QX(content0) // 转换 
    total = Rewrite_Filter(isQuanXRewrite(content0.split("\n")), Pin0, Pout0,Preg,Pregout);//Rewrite_Filter(total, Pin0, Pout0,Preg,Pregout); // 筛选过滤
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    total = total.filter( (ele,pos)=>total.indexOf(ele) == pos); //重写重复检查
    if (Pcdn) {total = CDN(total)
    } else { total = total.join("\n")}
  } else if (type0 == "rewrite") { // rewrite 类型
    flag = 2;
    total = Rewrite_Filter(isQuanXRewrite(content0.split("\n")), Pin0, Pout0,Preg,Pregout);
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    // rewrite重复检测
    total = total.filter( (ele,pos)=>total.indexOf(ele) == pos);
    if (Pcdn) {total = CDN(total)
    } else {total = total.join("\n")}
  } else if (type0 == "Rule") {  // rule 类型, 已处理完毕
    flag = 3;
    total = Rule_Handle(content0.split("\n").map(item=>item.trim()).filter(Boolean), Pout0, Pin0).filter(Boolean);
    if (Preg && total.length!=0) { // 正则筛选规则 filter
    total = total.map(Regex).filter(Boolean) 
    RegCheck(total, "分流引用", "regex", Preg)
  } 
    if (Pregout && total.length!=0) { // 正则删除规则 filter
    total = total.map(RegexOut).filter(Boolean)
    RegCheck(total, "分流引用", "regout", Pregout)
  }
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    if (Ppolicyset) {total = policy_sets(total, Ppolicyset)}
      // filter 重复检测
    total = total.length<100? total.filter( (ele,pos)=>total.indexOf(ele) == pos) : total
    total = total.join("\n")
  } else if (content0.trim() == "") {
    $notify("‼️ 当前引用" + "⟦" + subtag + "⟧" + " 返回內容为空", "⁉️ 点通知跳转以确认链接是否失效", "如确认链接有效，请在链接后添加 ?flag=shadowrocket 或 &flag=shadowrocket ", nan_link);
    flag = 0;
  } else if (type0 == "sub-http") {
    let url = VCheck(String(Base64.decode(content0.split("sub://")[1].split("#")[0])+", opt-parser=true, tag="+(new Date()).getTime()))
     RLink = RLink.replace("sremoteposition",url).replace("fremoteposition","").replace("rremoteposition","")
    let ADDres0 = ADDres.replace("url-encoded-json",encodeURIComponent(RLink))
    openlink = {"open-url": ADDres0}
    $notify("⚠️ 该链接为节点订阅, 请点击此通知跳转添加", url, ADDres0,openlink)
    flag = -1
    total = ""
  } else if (type0 == "unknown") {
    ParseUnknown(content0)
    flag = -1;
  } else if (type0 == "profile") {
    PProfile = "111" //默认添加所有部分
    Profile_Handle()
    openlink = {"open-url": ADDres}
    $notify("⚠️ 该链接为完整配置文件, 请点击此通知跳转", "添加配置中的有效远程资源👇 ["+ PProfile+"]", ADDres, openlink)
    flag = -1;
    total = ""
  } else if (type0 == "JS-0") {
    total = ""
  }

  //开始处理
  if (flag == 1) { //server 类型统一处理
    total = isQuanX(total.filter(Boolean).join("\n"))
    if (Pinfo == 1 && ntf_flow == 0) { //假节点类型的流量通知
      flowcheck(total)
    }
    if (Pin0 || Pout0) { total = Filter(total, Pin0, Pout0) } // in & out 
    if (Preg) { total = total.map(Regex).filter(Boolean)  // regex
      RegCheck(total, "节点订阅", "regex", Preg)} 
    if (Pregout) { total = total.map(RegexOut).filter(Boolean)  // regex out
      RegCheck(total, "节点订阅", "regout", Pregout)} 
    if (Psfilter) { total = FilterScript(total, Psfilter) }
    if (Prrname) {
      Prn = Prrname;
      total = total.map(Rename);
    }
    //if (Pemoji) { total = emoji_handle(total, Pemoji); }
    if (Pregdel) {
      delreg = Pregdel
      total = total.map(DelReg)
    }
    //script rename 置于其它参数之前
    if (Psrename) { total = RenameScript(total, Psrename) }
    if (Preplace) { // server 类型也可用 replace 参数进行重命名操作
      total = ReplaceReg(total, Preplace)
    }
    if (Prname) {
      Prn = Prname;
      total = total.map(Rename);
      if(Pdbg==1) {$notify("rename","content",total)}
    }
    //2023-07-10 调整emoji操作顺序
    if (Pemoji) { total = emoji_handle(total, Pemoji); }
    if (total.length > 0){
      if (Psuffix==1 || Psuffix==-1) {total = Psuffix == 1? total.map(type_suffix):total.map(type_prefix)
      }
      total = total.map(type_handle).map(emoji_prefix_handle).map(tag_handle) //各类节点名操作
      if (Psort0) { //排序操作
        total = QXSort(total, Psort0);
      }
      total = para1.indexOf("node_index_prefix")!=-1 ?index_handle(total):total // 节点序号操作
      //$notify("before","haha",total)
      total = TagCheck_QX(total).join("\n") //节点名检查
      if (PUOT==1) { total = total.split("\n").map(UOT).join("\n")}
      if (Pcnt == 1 && total!=undefined) {$notify("⟦" + subtag + "⟧"+"解析后最终返回内容" , "节点数量: " +total.split("\n").length, total)}
      total = PRelay==""? Base64.encode(total) : ServerRelay(total.split("\n"),PRelay) //强制节点类型 base64 加密后再导入 Quantumult X, 如果是relay，则转换成分流类型
      if (PNS !=0) {
        if (version >913) {
          $notify("⚠️ 存在 Quantumult X 不支持的节点", "⚠️ 已忽略相关节点，共计 ➟ "+PNS+" 条", "⚠️ 此版本暂不支持 Hysteria2/Tuic 等类型, 以及 http-upgrade/xhttp/grpc/mkcp/h2” 等类型 vless\n\n"+NSList.join("\n"))
        } else {
          $notify("⚠️ 存在 Quantumult X 不支持的节点", "⚠️ 已忽略相关节点，共计 ➟ "+PNS+" 条", "⚠️ 此版本暂不支持 Hysteria2/Anytls 等类型, 以及 http-upgrade/xhttp/grpc/mkcp/h2” 等类型 vless\n\n"+NSList.join("\n"))
        }
      }
      if(Pflow==1) {
        //$notify("添加流量信息","xxx","xxxx")
        $done({ content: total, info: {bytes_used: 3073741824, bytes_remaining: 2147483648, expire_date: 1854193966}});
      //$notify("done?","strange")
      } else { $done({ content: total });}
    } else { // total length = 0
      if(Perror == 0) {
      if (PNS !=0) { // 全部为不支持类型节点
        if (version >913) {
          $notify("⚠️ Quantumult-X 不支持该订阅内的节点", "⚠️ 已忽略共计 ➟ "+PNS+" 条不支持节点，剩余 0️⃣ 条", "⚠️ 此版本暂不支持 Hysteria2/Tuic 等类型, 以及 http-upgrade/xhttp/grpc/mkcp/h2” 等类型 vless\n\n"+NSList.join("\n"))
        } else {
          $notify("⚠️ Quantumult-X 不支持该订阅内的节点", "⚠️ 已忽略共计 ➟ "+PNS+" 条不支持节点，剩余 0️⃣ 条", "⚠️ 此版本暂不支持 Hysteria2/Anytls 等类型, 以及 http-upgrade/xhttp/grpc/mkcp/h2” 等类型 vless\n\n"+NSList.join("\n"))
        }
        
      } else { // 其它原因
        $notify("❓❓ 该订阅 ➟ "+ "⟦" + subtag + "⟧ 解析后无有效节点", "⚠️⚠️ 解析后 Quantumult-X 支持节点数为 0️⃣ 条", "🚥🚥 请自行检查相关参数、确认节点类型, 或者点击通知跳转并发送链接反馈", bug_link)
      } 
    }
      total = errornode
      $done({ content: errornode })
    }
  } else if (flag == 0){ //空/错误类型
    total = errornode
    $done({ content: errornode })
  } else if (flag == -1){ //未知类型
    total = content0
    $done({ content: content0 })
  } 
  if (Pcnt == 1 && flag !=1 && total!=undefined) {$notify("解析后最终返回内容" , "总数量： " +total.split("\n").length, total)}
  return total
  
}

//响应头流量处理部分
function SubFlow() {
  if (Pinfo == 1 && subinfo) {
    var sinfo = subinfo.replace(/ /g, "").toLowerCase();
    var total = "总流量: " + (parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3)).toFixed(2) + "GB";
    var usd = "已用流量: " + ((parseFloat(sinfo.indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:"0") + parseFloat(sinfo.split("download=")[1].split(",")[0])) / (1024 ** 3)).toFixed(2) + "GB"
    var left = "剩余流量: " + ((parseFloat(sinfo.split("total=")[1].split(",")[0]) / (1024 ** 3)) - ((parseFloat(sinfo.indexOf("upload")!=-1?sinfo.split("upload=")[1].split(",")[0]:"0") + parseFloat(sinfo.split("download=")[1].split(",")[0])) / (1024 ** 3))).toFixed(2) + "GB"
    if (sinfo.indexOf("expire=") != -1) {
      var epr = new Date(parseFloat(sinfo.split("expire=")[1].split(",")[0]) * 1000);
      var year = epr.getFullYear();  // 获取完整的年份(4位,1970)
      var mth = epr.getMonth() + 1 < 10 ? '0' + (epr.getMonth() + 1) : (epr.getMonth() + 1);  // 获取月份(0-11,0代表1月,用的时候记得加上1)
      var day = epr.getDate() < 10 ? "0" + (epr.getDate()) : epr.getDate();
      epr = "过期时间: " + year + "-" + mth + "-" + day
    } else {
      epr = ""; //"过期时间: ✈️ 未提供該信息" //没过期时间的显示订阅链接
    }
    var message = total + "\n" + usd + ", " + left;
    ntf_flow = 1;
    $notify("流量信息: ⟦" + subtag + "⟧", epr, message, subinfo_link)
  }
//  } else if (Pinfo ==1){
//    $notify("流量信息: ⟦" + subtag + "⟧", "", "⚠️ 该订阅链接未返回任何流量信息", subinfo_link)
//  }
}

//flowcheck-fake-server
function flowcheck(cnt) {
    for (var i = 0; i < cnt.length; i++) {
        var item = cnt[i];
        var nl = item.slice(item.indexOf("tag"))
        var nm = nl.slice(nl.indexOf("=") + 1)
        if (item.indexOf("剩余流量") != -1) {
            flow = nm
        } else if (item.indexOf("期时间") != -1) {
            exptime = nm
        }
    }
  flow = flow? flow:"⚠️ 该订阅未返回任何流量信息"
  exptime = exptime? exptime:"⚠️ 该订阅未返回套餐时间信息"
    if (flow != "") { $notify("流量信息: ⟦" + subtag + "⟧", flow, exptime, subinfo_link1) }
}

// regex 后的检查
function RegCheck(total, typen, paraname,regpara) {
  if(total.length == 0){ 
    $notify("‼️ " + typen + "  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选正则: " + paraname + "=" + regpara, "⚠️ 筛选后剩余项为 0️⃣ , 请检查正则参数及原始链接", nan_link)
  }else if((typen != "节点订阅" && Pntf0 !=0) || (typen == "节点订阅" && Pntf0 ==1)){
    var nolist = total.length <= 10 ? emojino[total.length] : total.length
    $notify("🤖 " + typen + "  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选正则: " + paraname + "=" + regpara, "⚠️ 筛选后剩余以下" + nolist + "个匹配项 \n ⨷ " + total.join("\n ⨷ "), sub_link)
  }
}
//判断订阅类型
function Type_Check(subs) {
    var type = "unknown"
    var RuleK = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,", "ip-asn"];
    var DomainK = ["domain-set,"]
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http=", "socks5=", "vless=","anytls="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=custom,", "=https,", "=shadowsocks", "=shadowsocksr", "=sock5", "=sock5-tls","=anytls"];
    var ClashK = ["proxies:","\"proxies\":"]
    var SubK = ["dm1lc3M", "c3NyOi8v", "CnNzOi8", "dHJvamFu", "c3M6Ly", "c3NkOi8v", "c2hhZG93", "aHR0cDovLw", "aHR0cHM6L", "CnRyb2phbjo", "aHR0cD0", "aHR0cCA","U1RBVFVT","dmxlc3M6"];
    var RewriteK = [" url 302", " url 307", " url reject", " url script", " url req", " url res", " url echo", " url-and-header 302", " url-and-header 307", " url-and-header reject", " url-and-header script", " url-and-header req", " url-and-header res", " url-and-header echo", " url jsonjq"] // quantumult X 类型 rewrite
    var SubK2 = ["ss://", "vmess://", "ssr://", "trojan://", "ssd://", "\nhttps://", "\nhttp://","socks://","ssocks://","vless://","anytls://"];
    var ModuleK = ["[Script]", "[Rule]", "[URL Rewrite]", "[Map Local]", "\nhttp-r", "script-path"]
    var QXProfile = ["[filter_local]","[filter_remote]","[server_local]","[server_remote]"]
    var html = "DOCTYPE html"
    var subi = subs.replace(/ /g, "")
    const RuleCheck = (item) => subi.toLowerCase().indexOf(item) != -1;
    const NodeCheck = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
    const NodeCheck1 = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1; //b64加密的订阅类型
    const NodeCheck2 = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1; //URI 类型
    const RewriteCheck = (item) => subs.indexOf(item) != -1 ; // quanx 重写判定
    const ProfileCheck = (item) => subs.indexOf(item) != -1; //是否为quanx配置文件
    var subsn = subs.split("\n")
    if ( (subs.indexOf(html) != -1 || subs.indexOf("doctype html") != -1) && link0.indexOf("github.com" == -1)) {
      $notify("‼️ 该链接返回为无效网页内容"+ " ➟ " + "⟦" + subtag + "⟧", "⁉️ 点通知跳转以确认链接是否失效\n"+link0, "返回内容如下⬇️：\n"+subs, nan_link);
      type = "web";
    } else if (typeU == "nodes" && typeQ=="server") { //指定为节点类型
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field"
    } else if (ClashK.some(NodeCheck) || typeU == "clash"){ // Clash 类型节点转换
      type = (typeQ == "unsupported" || typeQ =="server")? "Clash":"wrong-field";
      typec = "server"
      content0 = Clash2QX(subs)
    } else if ( (((ModuleK.some(RewriteCheck) || para1.indexOf("dst=rewrite") != -1) && (para1.indexOf("dst=filter") == -1) && subs.indexOf("[Proxy]") == -1) || typeU == "module") && typeU != "nodes" && typeU != "rule" && typeQ !="filter") { // Surge 类型 module /rule-set(含url-regex) 类型
      typec="rewrite"
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "sgmodule" : "wrong-field"
    } else if ((/(^hostname|\nhostname)\s*\=/.test(subi) || RewriteK.some(RewriteCheck))  && para1.indexOf("dst=filter")==-1 && subi.indexOf("securehostname") == -1 && !/module|nodes|rule/.test(typeU) && !(RuleK.some(RuleCheck) && typeQ == "filter") && !(typeQ!= "rewrite" && QXProfile.some(ProfileCheck))) {
      // 2022-07-20 remove constrain && !/\[(Proxy|filter_local)\]/.test(subs)
      typec = "rewrite"
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "rewrite":"wrong-field" //Quantumult X 类型 rewrite/ Surge Script/
    } else if (((RuleK.some(RuleCheck) && subs.indexOf(html) == -1 ) || typeU == "rule" || para1.indexOf("dst=filter")!=-1) && typeU != "nodes" && !(typeQ == "server" && (QuanXK.some(NodeCheck) || SurgeK.some(NodeCheck))) ) {
      // rule/filter类型
      // 2022-07-20 remove constrain && !/\[(Proxy|server_local)\]/.test(subs) adter html
      typec = "filter"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
    } else if (typeU == "domain-set") {// 仅限用户指定为 domain-set；((DomainK.some(RuleCheck) || typeU == "domain-set") && subs.indexOf("[Proxy]") == -1 && typeU != "nodes") {
      typec = "filter-domain-set"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
      content0 = Domain2Rule(content0) // 转换 domain-set
    } else if (typeQ == "filter" && subs.indexOf("payload:")==-1) { // 纯 list类型？
      typec = "filter-list"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
      content0 = content0.split("\n").map(rule_list_handle).join("\n")
    } else if (subi.indexOf("sub://") == 0 || subi.indexOf("subs://") == 0) { // sub:// 类型
      typec = "sub-http"
      type = "sub-http"
    } else if (typeQ == "filter" && subs.indexOf("payload:")!=-1) { // clash-provider 类型？
      typec = "Clash-Provider"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
    } else if (subsn.length >= 1 && SubK2.some(NodeCheck2) && !/\[(Proxy|filter_local)\]/.test(subs)) { //未b64加密的多行URI 组合订阅
      typec = "server-uri"
      type= (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri") ? "Subs":"wrong-field"
    } else if ((subi.indexOf("tag=") != -1 && QuanXK.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU =="list") {
      typec = "server-quanx"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Subs":"wrong-field" // QuanX list
    } else if (subs.indexOf("[Proxy]") != -1) {
      typec= "server-surge"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Surge":"wrong-field"; // Surge Profiles
      content0 = Surge2QX(content0).join("\n");
    } else if ((SurgeK.some(NodeCheck)  && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU == "list") {
      typec="server-surge"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Subs":"wrong-field" // Surge proxy list
    } else if (subs.indexOf("[server_local]") != -1 && QuanXK.some(NodeCheck)) {
      //type = "QuanX"  // QuanX Profile
      typec="server-quanx"
      type = (typeQ == "unsupported" || typeQ =="server"|| typeQ =="uri")? "Subs":"wrong-field"
    } else if (content0.indexOf("server") !=-1 && content0.indexOf("server_port") !=-1) { //SIP008
      //type = "QuanX"
      typec= "server-sip008"
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field"
      content0 = SIP2QuanX(content0)
    } else if (SubK.some(NodeCheck1)) {  //b64加密的订阅类型
      typec="server-b64"
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs-B64Encode":"wrong-field"
      if (content0.split("\n").length >= 2) { //  local snippet and first line remarks
        let tmp = content0.split("\n")[1]
        if (Pdbg) {$notify("local", "node", "\ntmp:\n"+tmp)}
        if (SubK.some((item) => tmp.toLowerCase().indexOf(item.toLowerCase()) != -1))
        content0 = tmp
      }
    } else if (QXProfile.every(ProfileCheck)) {
      typec = "profile"
      type = "profile"  //默认配置类型
    }else if (/\.js/.test(link0)) { // xjb添加js脚本的行为
      Perror = 1 ; // 无需反馈
      $notify("⚠️ 你导入的链接内容为 JS 脚本","🚥 脚本内未有重写规则，无法解析使用", " 请⚠️不要⚠️跑来解析器🤖️反馈 \n"+link0)
      type = "JS-0"
    } else if (typeQ =="server" && subs.length>100) { // 一些未知的b64 encode server case
      typec="server-b64-unknown"
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs-B64Encode":"wrong-field"
    } else if(subs == "wrong-link") {
      type="wrong-link"
    }
    //else if (typeQ == "URI")
  // 用于通知判断类型，debug
  if(typeU == "X"){
    $notify("该链接判定类型",type+" : " +typec, subs)
  }
  //$notify(type)
    return type
}

// 检查节点名字(重复以及空名)等QuanX 不允许的情形，以及多个空格等“不规范”方式
function TagCheck_QX(content) {
  typefix = {"shadowsocks":["𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","SS"],"shadowsocksr":["𝐬𝐬𝐫","𝐒𝐒𝐑","🅢🅢🅡","🆂🆂🆁","ⓢⓢⓡ","🅂🅂🅁","SSR"],
    "vmess":["𝐯𝐦𝐞𝐬𝐬","𝐕𝐌𝐄𝐒𝐒","🅥🅜🅔🅢🅢","🆅🅼🅴🆂🆂","ⓥⓜⓔⓢⓢ","🅅🄼🄴🅂🅂","VMESS"],"trojan":["𝐭𝐫𝐨𝐣𝐚𝐧","𝐓𝐑𝐎𝐉𝐀𝐍","🅣🅡🅞🅙🅐🅝","🆃🆁🅾🅹🅰🅽","ⓣⓡⓞⓙⓐⓝ","🅃🅁🄾🄹🄰🄽","TROJAN"],
    "http":["𝐡𝐭𝐭𝐩","𝐇𝐓𝐓𝐏","🅗🅣🅣🅟","🅷🆃🆃🅿","ⓗⓣⓣⓟ","🄷🅃🅃🄿","HTTP"],"socks5":["𝐬𝐨𝗰𝗸𝐬","𝐒𝐎𝐂𝐊𝐒","🅢🅞🅒🅚🅢","🆂🅾🅲🅺🆂","ⓢⓄⒸⓀⓢ","🅂🄾🄲🄺🅂","SOCKS"],
    "vless":["𝐯𝐥𝐞𝐬𝐬","𝐕𝐋𝐄𝐒𝐒","🅥🅛🅔🅢🅢","🆅🅻🅴🆂🆂","ⓥⓛⓔⓢⓢ","🅅🄻🄴🅂🅂","VLESS"],"anytls":["𝐚𝐧𝐲𝐭𝐥𝐬","𝐀𝐍𝐘𝐓𝐋𝐒","🅐🅝🅨🅣🅛🅢","🅰🅽🆈🆃🅻🆂","ⓐⓝⓨⓣⓛⓢ","🄰🄽🅈🅃🄻🅂","𝖠𝖭𝖸𝖳𝖫𝖲"]
  } // type
  console.log(content)
    var Olist = content.map(item =>item.trim())//.replace(/\s{2,}/g," "))
    //$notify("","",Olist)
    var [Nlist, nmlist] = [ [], [] ]
    var [nulllist,duplist] = [ [], [] ]; //记录空名字节点&重名节点
    var no=0 ;
    for (var i = 0; i < Olist.length; i++) {
        var item = Olist[i] ? Olist[i] : ""
        typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? typefix["shadowsocksr"] : typefix["shadowsocks"]
        if (item.replace(/ /gm, "").indexOf("tag=") != -1) {
            var nl = item.slice(item.indexOf("tag"))
            var nm = nl.slice(nl.indexOf("=") + 1)
            if (nm == "") { //空名
                tp = typefix[item.split("=")[0].trim()][3]
                nm = tp + " | " + item.split("=")[1].split(",")[0].split(":")[0]
                item = item.split("tag")[0] + "tag=" + nm.replace("shadowsocks", "ss")
                nulllist.push(nm.replace("shadowsocks", "ss"))
            }
            var ni = 0
            while (nmlist.indexOf(nm) != -1) { //重名情形
              //$notify("重名",nm,nmlist)
                nm = ni==0? nm+ NoReplace(ni+1):nm.split(" ").slice(0,nm.split(" ").length-2).join(" ") + NoReplace(ni+1)
                item = Pdel != 1 ? item.split("tag")[0] + "tag=" + nm : ""
                ni = ni + 1
            }
            if (ni != 0) { duplist.push(nm) }
            nmlist.push(nm)
          if (Pcap) { 
            item = Capitalize(item,Pcap)
            console.log(item)
          }
          if (Pptn || Pnptn) { 
            item = Pattern(item,Pptn,Pnptn)
            console.log(item)
          }
            ni = 0
            if (item) {
            Nlist.push(item)
          }
        }// if "tag="
    } // for
    // 增加 server_check_url 参数
    if (PcheckU != "") {
      Nlist = Nlist.map(Add_URL)
    }
    if (nulllist.length >= 1) {
        no = nulllist.length <= 10 ? emojino[nulllist.length] : nulllist.length;
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 内有" + no + "个空节点名 ", "✅ 已将节点“类型+IP”设为节点名", " ⨁ " + nulllist.join("\n ⨁ "), nan_link)
    }
    if (duplist.length >= 1) {
        no = duplist.length <= 10 ? emojino[duplist.length] : duplist.length;
      if (Pdel!=1 && Pntf0 != 0){
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 内有" + no + "个名字重复的节点 ", "✅ 已添加数字区分, 删除请添加参数 del=1:", " ⨁ " + duplist.join("\n ⨁ "), nan_link)
      } else if (Pdel ==1 && Pntf0 != 0) {
        $notify("⚠️ 引用" + "⟦" + subtag + "⟧" + " 内有" + no + "个名字重复的节点 ", "❌️ 已全部删除，如需保留请去除参数 del=1:", " ⨁ " + duplist.join("\n ⨁ "), nan_link)
      }
    }
    return Nlist
}

// 为节点添加 server-check-url参数
function Add_URL(cnt) {
  if (cnt) {
    cnt = cnt +", server_check_url="+PcheckU
  }
  return cnt
}

//节点名重名时添加数字序号替换
function NoReplace(cnt) {
  if(cnt){
    for (var i=0;i<10;i++) {
      cnt = cnt.toString().replace(new RegExp(patn[0][i], "gmi"),patn[5][i])
    }
    return " " + cnt + " "
  }
}


// 对节点名pattern化操作
function PatternN(cnt, para,npara) {
  if(cnt){
    if(para!=""){//字符
      for (var i=0;i<26;i++) {
        cnt = cnt.toLowerCase()
        cnt = cnt.replace(new RegExp(pat[0][i], "gmi"),pat[para][i])
      }
    }
    if(npara!=""){ //数字
      for (var i=0;i<10;i++) {
        cnt = cnt.replace(new RegExp(patn[0][i], "gmi"),patn[npara][i])
      }
    }
    console.log(cnt)
    return cnt
  }
}


function Pattern(cnt,para,npara) {
  if (para != "" || npara != "") {
    cnt = cnt.split("tag=")[0] +"tag="+ PatternN(cnt.split("tag=")[1],para,npara)
  }
  return cnt 
}


//大小写
function Capitalize(cnt,para) {
  if (para == 1) {
    cnt = cnt.split("tag=")[0] +"tag="+ cnt.split("tag=")[1].toUpperCase()
  } else if (para == -1) {
    cnt = cnt.split("tag=")[0] +"tag="+ cnt.split("tag=")[1].toLowerCase()
  } else if (para == 0) {
    cnt =cnt.split("tag=")[0] +"tag="+titleCase(cnt.split("tag=")[1])
  }
  return cnt
}

function titleCase(str) {
  var newStr = str.split(" ");
  for(var i = 0; i<newStr.length; i++){
    newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
  }    return newStr.join(" ");
}


// 类型前缀/后缀
function type_prefix(item) {
  if(item.trim()!="") {
    typefix = {"shadowsocks":"「𝐬𝐬」","vmess":"「𝐯𝐦𝐞𝐬𝐬」","trojan":"「𝐭𝐫𝐨𝐣𝐚𝐧」","http":"「𝐡𝐭𝐭𝐩」","socks5":"「𝐬𝐨𝗰𝗸𝐬」","vless":"「𝐯𝐥𝐞𝐬𝐬」","anytls":"「𝐚𝐧𝐲𝐭𝐥𝐬」"}
    typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? "「𝐬𝐬𝐫」" : "「𝐬𝐬」"
    tp = typefix[item.split("=")[0].trim()]
    return [[item.split("tag=")[0]+
      "tag=", tp, item.split("tag=")[1]].join(" ")].join(" ")
  }
}
function type_suffix(item) {
  if(item.trim()!=""){
    typefix={"shadowsocks":"「𝐬𝐬」","vmess":"「𝐯𝐦𝐞𝐬𝐬」","trojan":"「𝐭𝐫𝐨𝐣𝐚𝐧」","http":"「𝐡𝐭𝐭𝐩」","vless":"「𝐯𝐥𝐞𝐬𝐬」","anytls":"「𝐚𝐧𝐲𝐭𝐥𝐬」"}
    typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? "「𝐬𝐬𝐫」" : "「𝐬𝐬」"
    tp = typefix[item.split("=")[0].trim()]
    return [item, tp].join(" ")
  }
}

//获取类型
function getnode_type(item,ind) {
  if(item.trim()!="" && item.indexOf("tag=")!=-1) {
    ind = !/^(0|1|2|3|4|5|6|7)$/.test(ind) ? 8 : ind
    typefix = {"shadowsocks":["𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","𝕊𝕊","ˢˢ","SS"],
      "shadowsocksr":["𝐬𝐬𝐫","𝐒𝐒𝐑","🅢🅢🅡","🆂🆂🆁","ⓢⓢⓡ","🅂🅂🅁","𝕊𝕊ℝ","ˢˢʳ","SSR"],
      "vmess":["𝐯𝐦𝐞𝐬𝐬","𝐕𝐌𝐄𝐒𝐒","🅥🅜🅔🅢🅢","🆅🅼🅴🆂🆂","ⓥⓜⓔⓢⓢ","🅅🄼🄴🅂🅂","𝕍𝕞𝕖𝕤𝕤","ᵛᵐᵉˢˢ","VMESS"],
      "trojan":["𝐭𝐫𝐨𝐣𝐚𝐧","𝐓𝐑𝐎𝐉𝐀𝐍","🅣🅡🅞🅙🅐🅝","🆃🆁🅾🅹🅰🅽","ⓣⓡⓞⓙⓐⓝ","🅃🅁🄾🄹🄰🄽","𝕋𝕣𝕠𝕛𝕒𝕟","ᵀʳᵒʲᵃⁿ","TROJAN"],
      "http":["𝐡𝐭𝐭𝐩","𝐇𝐓𝐓𝐏","🅗🅣🅣🅟","🅷🆃🆃🅿","ⓗⓣⓣⓟ","🄷🅃🅃🄿","𝕙𝕥𝕥𝕡","ʰᵗᵗᵖ","HTTP"],
      "socks5":["𝐬𝐨𝗰𝗸𝐬","𝐒𝐎𝐂𝐊𝐒","🅢🅞🅒🅚🅢","🆂🅾🅲🅺🆂","ⓢⓞⓒⓚⓢ","🅂🄾🄲🄺🅂","𝕤𝕠𝕔𝕜𝕤","ˢᵒᶜᵏˢ","SOCKS"],
      "vless":["𝐯𝐥𝐞𝐬𝐬","𝐕𝐋𝐄𝐒𝐒","🅥🅛🅔🅢🅢","🆅🅻🅴🆂🆂","ⓥⓛⓔⓢⓢ","🅅🄻🄴🅂🅂","𝕍𝕝𝕖𝕤𝕤","ᵛˡᵉˢˢ","VLESS"],
      "anytls":["𝐚𝐧𝐲𝐭𝐥𝐬","𝐀𝐍𝐘𝐓𝐋𝐒","🅐🅝🅨🅣🅛🅢","🅰🅽🆈🆃🅻🆂","ⓐⓝⓨⓣⓛⓢ","🄰🄽🅈🅃🄻🅂","𝔸𝕟𝕪𝕥𝕝𝕤","ᴬⁿʸᵗˡˢ","𝖠𝖭𝖸𝖳𝖫𝖲"]
    }
    typefix["shadowsocks"]=item.indexOf("ssr-protocol")!=-1? typefix["shadowsocksr"] : typefix["shadowsocks"]
    tp = typefix[item.split("=")[0].trim()][ind]
    return tp
  }
}


// 操作節點類型佔位符
function type_handle(item) {
  if(item.indexOf("node_type_para_prefix")!=-1) {
    item = item.replace(/node_type_para_prefix(\d{0,1})/g,getnode_type(item,item.split("node_type_para_prefix")[1][0]))
  }
  return item
}

// 节点序号占位符处理
function index_handle(item) {
  items = item.map(item=>item.trim()).filter(Boolean)
  let b=Array.from(new Array(items.length),(val,index)=>index+1);
  //console.log(b[0])
  for (var i=0; i< items.length;i++){
    //$notify("rename"+i,Prname,items[i])
    if (items[i].indexOf("node_index_prefix") != -1) { // 以免占位符被错误地replace
    ind = items[i].split("node_index_prefix")[1][0]
    ind = !/^(0|1|2|3|4|5|6|7|8)$/.test(ind) ? 0 : ind
    console.log("handle index"+ind)
    items[i] = items[i].replace(/node_index_prefix(\d{0,1})/g,PatternN((i+1).toString(),"",ind))
  }
  }
  console.log(items)
  return items
}


// 操作emoji占位符
function emoji_prefix_handle(item) {
  if(item.indexOf("node_emoji_flag_prefix")!=-1) {
    item = item.replace(/node_emoji_flag_prefix\d{0,1}/g,getnode_emoji(item,item.split("node_emoji_flag_prefix")[1][0]))
    //console.log(item)
  }
  return item
}

// 获取emoji
function getnode_emoji(item,ind){
  ind = !/^(1|2)$/.test(ind) ? 2 : ind
  if(item.indexOf("tag=")!=-1) {
    return get_emoji(ind,item.split("tag=")[1])[1]
  }
}




// 操作订阅的 tag
function tag_handle(item) {
  if(item.indexOf("node_tag_prefix")!=-1) {
    //item = item.replace(/node_tag_prefix/g,subtag)
    //console.log(item.split("node_tag_prefix")[1][1])
    ptnn = /\d/.test(item.split("node_tag_prefix")[1][0])? item.split("node_tag_prefix")[1][0]:""
    nptnn = /\d/.test(item.split("node_tag_prefix")[1][1])? item.split("node_tag_prefix")[1][1]:""
    //console.log(ptnn)
    item = item.replace(/node_tag_prefix\d{0,2}/g,PatternN(subtag,ptnn,nptnn))
  }
  return item
}

// 用于单条 URI 的 tag 参数, 直接指定节点名
function URI_TAG(cnt0,tag0) {
  cnt0 = cnt0.split("tag=")[0] + "tag=" + tag0
  return cnt0
}

// 方便代理链的实现
function ServerRelay(src,dst) {
  var rsts=[]
  for (var i=0; i<src.length; i++) {
    serverA = src[i].indexOf("-host")==-1? src[i].split("=")[1].split(":")[0].trim() : src[i].split("-host")[1].split("=")[1].split(",")[0].trim()
    type = /^[a-z]/.test(serverA) || /[a-z]$/.test(serverA)? "host":"ip"
    rst = type == "ip"? "ip-cidr,"+serverA+"/32,"+dst : "host-suffix,"+serverA+","+dst 
    rsts.push(rst)
  }
  return rsts.join("\n")
  
}

// 用于某些奇葩用户不使用 raw 链接的问题
function rawtest(cnt) {
  var Preg0 = RegExp(".*js-file-line\".*?\<\/td\>", "i")
  if (Preg0.test(cnt)) {
    return cnt.replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g,"$2").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim()
  }
}

function ToRaw(cnt) {
  cnt = cnt.split("\n").map(rawtest).filter(Boolean).join("\n")
  var rawlink = link0.replace("github.com","raw.githubusercontent.com").replace("/blob","")
  if (cnt) {
    $notify( "⚠️⚠️ 将尝试解析该资源" + "⟦" + subtag + "⟧" , "🚥 请正确使用GitHub的 raw 链接" , "❌ 你的链接："+link0+"\n✅ 正确链接："+rawlink, {"open-url":rawlink})
  } else if(content0.indexOf("gridcell")!=-1) {
    $notify( "⚠️⚠️ 解析该资源" + " ⟦" + subtag + "⟧ 失败" , "🚥 你的链接似乎是目录，而不是文件" , "❌ 你的链接："+link0, {"open-url":link0})
  }
  return cnt
}

function ToLink(link) {
  cnt = link.split("nsloon.com/openloon/import?plugin=")[1]
  if (cnt) {
    
    typ=$resource.type
    RLink0[Field[typ]].push(cnt+", opt-parser=true, tag=🉑️长点❤️8⃣️") //  跳转URI-Scheme
    flink = ADDRes.replace(/url-encoded-json/,encodeURIComponent(JSON.stringify(RLink0)))
    $notify( "⚠️ 请点击通知跳转尝试添加正确链接" , "🚥 请正确使用原始链接" , "❌ 你的链接："+link0+"\n✅ 正确链接："+cnt, {"open-url":flink})
  } 
  return "wrong-link"
}

function CDN(cnt) {
  console.log("CDN start")
  cnt = cnt.join("\n").replace(/https:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/(.*)/gmi,"https://fastly.jsdelivr.net/gh/$1/$2@$3")
  return cnt
}

// 指定节点 host 参数
function HOST_Handle(cnt,phost) {
  phost="host="+phost+","
  if (phost.indexOf("☠️") == -1) { //只替换已有host类型
    cnt = cnt.replace(/host\s*\=(.*?)\,/,phost)
  } else { // 为已有的替换，为没有的增加 obfs-host\tls-host
    phost=phost.split("☠️")[0]
    if (/-host\s*\=/.test(cnt)) {// 如已有 host 参数
      cnt = cnt.replace(/host\s*\=(.*?)\,/,phost+", ")
    } else if (/over-tls\s*\=\s*true/.test(cnt)) { // 如无host，但可以增加
      cnt = cnt+", tls-"+phost
    } else if (/obfs\s*\=/.test(cnt)) {
      cnt = cnt + ", obfs-"+phost
    }
  }
  return cnt
}

// 指定节点 obfs=xx-http 参数
function OBFS_Handle(cnt,pobfs) {
  if (pobfs == "shttp") {
    pobfs="obfs="+"shadowsocks-http"
  } else if (pobfs == "vhttp") {
    pobfs="obfs="+"vmess-http"
  } else { 
    pobfs="invalid"
  }
  if (/obfs\s*\=\s*http/.test(cnt) && pobfs!="invalid") { //只替换有 obfs=http 参数
    cnt = cnt.replace(/obfs\s*\=\s*http/,pobfs)
  }
  return cnt
}

// 指定节点 tls-no-session-ticket/reuse 参数
function Session_Handle(cnt,psession) {
  let st = ", tls-no-session-ticket=true"
  let sr = ", tls-no-session-reuse=true"
  if (psession == 0) {
    cnt =cnt + st
  } else if (psession == 1) {
     cnt =cnt + sr
  } else if (psession == 2){ 
    cnt =cnt + st + sr
  }
  return cnt
}

// 指定 cert-sha256 pubkey-sha256 参数
function SHA256_Handle(cnt,pcsha256,ppsha256) {
  if (cnt.indexOf("over-tls=true")!=-1 || cnt.indexOf("obfs=wss")!=-1) {
    cnt = cnt.replace(/tls-verification\s*\=\s*false(\s*)\,/,"") //去除 tls-verification=false
    //$notify("SHA256",cnt,Pcsha256+Ppsha256)
    cnt = pcsha256!=""? cnt.replace(/tag\s*\=/,"tls-cert-sha256="+pcsha256+", tag=") : cnt
    cnt = ppsha256!=""? cnt.replace(/tag\s*\=/,"tls-pubkey-sha256="+ppsha256+", tag=") : cnt
  }
  return cnt
}

// 指定alpn参数,over-tls类型？
function ALPN_Handle(cnt,palpn) {
  cnti = cnt.replace(/\s/gmi,"") //删掉空格
  if (cnti.indexOf("obfs=over-tls") != -1 || cnti.indexOf("over-tls=true")!=-1) {
    cnt = cnt + ", tls-alpn="+palpn
  }
  return cnt
}

function Mock2QXReject(row, filename) {
    if (/dict/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-dict"
    } else if (/array/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-array"
    } else if (/(txt|html)/i.test(filename) || filename==null) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-200"
    } else if (/(png|jpg|gif)/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-img"
    } else {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject"
    }
}

//url-regex 转换成 Quantumult X 重写
function URX2QX(subs) {
    var nrw = []
    var rw = ""
    subs = subs.split("\n")
    //$notify("URX")
    var NoteK = ["//", "#", ";"];  //排除注释项
    for (var i = 0; i < subs.length; i++) {
        const notecheck = (item) => subs[i].indexOf(item) == 0
        if (!NoteK.some(notecheck)) {
        if (subs[i].slice(0, 9) == "URL-REGEX") {  // regex 类型
          if (subs[i].indexOf("REJECT") != -1 || subs[i].split(",").length == 2 ) { // 仅处理 reject 类型，或者无指定策略类型
            if (subs[i].replace(/ /g, "").split(",REJECT")[0].split("GEX,")[1].slice(0,1) != "*") { // 部分 * 开头的不支持 url-regex形式
            rw = subs[i].replace(/ /g, "").split(",REJECT")[0].split("GEX,")[1] + " url " + "reject-200"
            nrw.push(rw)
          }
          }
        } else if (subs[i].indexOf("data=") != -1 && subs.indexOf("[Map Local]") != -1){ // Map Local 类型
            // 取subs[i]的文件名
            let fn = subs[i].match(/data=.+\/(.+)"/) ? subs[i].match(/data=.+\/(.+)"/)[1] : null
            if ((!/header=".*content-type/i.test(subs[i]) && /blank/i.test(fn)) || fn==null) {
                rw = Mock2QXReject(subs[i], fn)
            } else {
                rw = subs[i].replace(/ /g, "").split("data=")[0].split("data-type=")[0].replace(/\"/g,"") + " url echo-response text/html echo-response " + subs[i].split("data=")[1].split(" ")[0].replace(/\"/g,"").replace(/ /g, "")//"reject-dict"
                if (subs[i].indexOf("header=")!=-1) {
                    if (subs[i].indexOf("Content-Type:") !=-1) {
                        let tpe = subs[i].split("header=")[1].split("Content-Type:")[1].split(",")[0].replace(/\"/g,"")
                        rw = rw.replace(/text\/html/g,tpe)
                    }
                }
            }
            nrw.push(rw)
        } 
    }
    }
    //$notify("URX","",nrw)
    return nrw
}

//script&rewrite 转换成 Quantumult X
function SCP2QX(subs) {
  var nrw = []
  var rw = ""
  var RewriteK = [" url 302", " url 307", " url reject", " url script", " url req", " url res", " url echo", " url-and-header 302", " url-and-header 307", " url-and-header reject", " url-and-header script", " url-and-header req", " url-and-header res", " url-and-header echo", " url jsonjq"] // quantumult X 类型 rewrite
  subs = subs.split("\n").map(x => x.trim().replace(/\s+/g," "))
  //$notify("Script","",subs)
  for (var i = 0; i < subs.length; i++) {
    try {
      //$notify(i,"",subs[i])
      subs[i] = subs[i].replace("^http","http") // 去掉 ^ , 以方便去重
      if (subs[i].slice(0, 8) == "hostname") {
        hn = subs[i].replace(/\%.*\%/g, "").replace(/\:\d*/g,"")
        nrw.push(hn)
      }
      var SC = ["type=", ".js", "pattern=", "script-path="]
      var NoteK = ["//", "#", ";"]; //排除注释项
      const sccheck = (item) => subs[i].indexOf(item) != -1
      const notecheck = (item) => subs[i].indexOf(item) == 0
      const RewriteCheck = (item) => subs[i].indexOf(item) != -1 ; // quanx 重写判定
      if (!NoteK.some(notecheck) && !RewriteK.some(RewriteCheck)){
        if(Pdbg==1) {$notify("rewrite-check","",subs[i])}
        if (SC.every(sccheck)) { // surge js 新格式
          //部分正则中含有,的问题
          ptn = subs[i].replace(/\s/gi,"").split("pattern=")[1].split(/\,[a-zA-Z]/)[0] 
          js = subs[i].replace(/\s/gi,"").split("script-path=")[1].split(",")[0]
          type = subs[i].replace(/\s/gi,"").split("type=")[1].split(",")[0].trim()
          subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
          if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-response-body "
          } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-response-header "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-request-body "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-request-header "
          } else {type = "" }
          if (type != "") {
            rw = ptn + " url " + type + js
            nrw.push(rw)
          }
        } else if (/\d\s30(7|2)$/.test(subs[i])) { //rewrite 302&307 复写(Surge)
          //tpe = subs[i].indexOf(" 302") != -1? "302":"307"
          //$notify("307/2",subs[i])
          rw = subs[i].split(" ")[0] + " url " + subs[i].split(" ")[2] + " " + subs[i].split(" ")[1].trim()
          //if(rw.indexOf("307")!=-1) {$notify("XX",subs[i],rw.split(" "))}
          nrw.push(rw)
        } else if (/\d\s\-\s30(2|7)\s/.test(subs[i])) { //rewrite 302&307 复写(Shadowrocket)
          //xx - 302 $1$2$3
          rw = subs[i].replace(" - "," url ")
          nrw.push(rw)
        } else if(subs[i].split(" ")[2] == "header") { // rewrite header 类型
          var pget = subs[i].split(" ")[0].split(".com")[1]
          var pgetn = subs[i].split(" ")[1].split(".com")[1]
          rw = subs[i].split(" ")[0] + " url 302 " + subs[i].split(" ")[1]
          //rw = subs[i].split(" ")[0] + " url request-header ^GET " + pget +"(.+\\r\\n)Host:.+(\\r\\n) request-header GET " + pgetn + "$1Host: " + subs[i].split(" ")[1].split("://")[1].split(".com")[0] + ".com$2"
          nrw.push(rw)
        } else if(subs[i].split(" ")[1] == "header-replace") { // rewrite header-replace 类型
          console.log(subs[i])
          var pget = subs[i].split("header-replace")[1].split(":")[0].trim()
          var pgetn = subs[i].split("header-replace")[1].trim()
          rw = subs[i].split(" ")[0] + " url request-header " +"(.+\\r\\n)"+pget+":.+(\\r\\n) request-header " + "$1" + pgetn + "$2"
          nrw.push(rw)
        } else if(subs[i].indexOf(" _ reject") != -1) { // rewrite reject 类型(surge)
          rw = subs[i].split(" ")[0] + " url reject-200"
          nrw.push(rw)
        } else if(subs[i].indexOf(" - reject") != -1 || subs[i].indexOf(" - REJECT") != -1) { //shadowrocket reject/REJECT
          rw = subs[i].replace(" - ", " url ").toLowerCase()
          nrw.push(rw)
        } else if(subs[i].split(" ").length == 2 && (/\s(reject)$/.test(subs[i]) || /\s(reject\-)/.test(subs[i]))){ // loon 类型？ http://xxx/yyy reject
          rw = subs[i].replace(" reject", " url reject")
          nrw.push(rw)
        } else if (subs[i].indexOf("script-path") != -1) { //surge js 旧写法
          type = subs[i].replace(/\s+/g," ").split(" ")[0]
          js = subs[i].split("script-path")[1].split("=")[1].split(",")[0]
          ptn = subs[i].replace(/\s+/g," ").split(" ")[1]
          subsi = subs[i].replace(/ /g,"").replace(/\=true/g,"=1")
          if (type == "http-response" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-response-body "
          } else if (type == "http-response" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-response-header "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") != -1) {
            type = "script-request-body "
          } else if (type == "http-request" && subsi.indexOf("requires-body=1") == -1) {
            type = "script-request-header "
          } else {type = "" }
          if (type != "") {
            rw = ptn + " url " + type + js
            nrw.push(rw)
          } 
        }
      } else if(RewriteK.some(RewriteCheck)) {
        nrw.push(subs[i])
      }
    } catch (err) {
      $notify("❌️解析此条时出现错误，已忽略",subs[i],err)
    }
  }
  return nrw
}

// 如果 URL-Regex 跟 rewrite/script 都需要
function SGMD2QX(subs) {
    var nrw0 = URX2QX(subs)
    var nrw1 = SCP2QX(subs)
    var nrwt = [...nrw0, ...nrw1]
    return nrwt
}

//Rewrite过滤，使用+连接多个关键词(逻辑"或"):in 为保留，out 为排除
function Rewrite_Filter(subs, Pin, Pout,Preg,Pregout) {
    var Nlist = [];
    var noteK = ["//", "#", ";"];
    var hnc = 0;
    var dwrite = []
    var hostname = ""
    //$notify("S0","Content",subs)
    for (var i = 0; i < subs.length; i++) {
        subi = subs[i].trim();
        var subii = subi.replace(/ /g, "")
        if (subi != "" && (subi.indexOf(" url ")!=-1 || subi.indexOf("host")!=-1 || subi.indexOf(" url-and-header ")!=-1 || /^hostname\=/.test(subii))) {
            const notecheck = (item) => subi.indexOf(item) == 0
            if (noteK.some(notecheck)) { // 注释项跳过 
                continue;
            } else if (hnc == 0 && subii.indexOf("hostname=") == 0) { //hostname 部分
                hostname = (Phin0 || Phout0 || Preg || Pregout) ? HostNamecheck(subi, Phin0, Phout0) : subi;//hostname 部分
            } else if (subii.indexOf("hostname=") != 0) { //rewrite 部分
                var inflag = Rcheck(subi, Pin);
                var outflag = Rcheck(subi, Pout);
                if (outflag == 1 || inflag == 0) {
                    dwrite.push(subi.replace(" url "," - ").replace(" url-and-header "," - ")); //out 命中
                } else if (outflag == 0 && inflag != 0) { //out 未命中 && in 未排除
                    Nlist.push(subi);
                } else if (outflag == 2 && inflag != 0) { //无 out 参数 && in 未排除
                    Nlist.push(subi);
                }
            }
        }
    }

    if (Pntf0 != 0) {
        nowrite = dwrite.length <= 10 ? emojino[dwrite.length] : dwrite.length
        no1write = Nlist.length <= 10 ? emojino[Nlist.length] : Nlist.length
        if (Pin0 && no1write != " 0️⃣ ") { //有 in 参数就通知保留项目
          if (Pout!=0) {
            $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfi + pfo, "☠️ 重写 rewrite 中保留以下" + no1write + "个匹配项:" + "\n ⨷ " + Nlist.join("\n ⨷ "), rwrite_link)
          }
        } else if (dwrite.length > 0) {
          if (Pout0!=0) {
            $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfi + pfo, "☠️ 重写 rewrite 中已禁用以下" + nowrite + "个匹配项:" + "\n ⨷ " + dwrite.join("\n ⨷ "), rwrite_link)
          }
        }
    }

    if (Nlist.length == 0 ) { 
      if ((Pin0 || Pout0 || Phin0 || Phout0 || Pregout || Preg)) {
        $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfi + pfo, "⚠️ 筛选后剩余rewrite规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link) 
      } else {
        $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 解析后 rewrite 规则数为 0️⃣ 条 " , "⚠️ 请检查参数及原始链接内容", nan_link) 
      
      }
    }
    if(Preg){ Nlist = Nlist.map(Regex).filter(Boolean) // regex to filter rewrites
      RegCheck(Nlist, "重写引用", "regex", Preg) }
    if(Pregout){ Nlist = Nlist.map(RegexOut).filter(Boolean) // regex to delete rewrites
      RegCheck(Nlist, "重写引用", "regout", Pregout) }
    if (hostname != "") { Nlist.push(hostname) }
    Nlist =Phide ==1? Nlist : [...dwrite,...Nlist]
    //$notify("final","Content",Nlist)
    return Nlist
}

// 主机名处理
function HostNamecheck(content, parain, paraout) {
    var hname = content.replace(/ /g, "").split("=")[1].split(",");
    var nname = [];
    var dname = []; //删除项
    for (var i = 0; i < hname.length; i++) {
        dd = hname[i]
        const excludehn = (item) => dd.indexOf(item) != -1;
        if (paraout && paraout != "") { //存在 out 参数时
            if (!paraout.some(excludehn)) { //out 未命中🎯️
                if (parain && parain != "") {
                    if (parain.some(excludehn)) { //Pin 命中🎯️
                        nname.push(hname[i])
                    } else {
                        dname.push(hname[i])
                    } //Pin 未命中🎯️的记录
                } else { nname.push(hname[i]) } //无in 参数    
            } else { dname.push(hname[i]) } //out 参数命中
        } else if (parain && parain != "") { //不存在 out，但有 in 参数时
            if (parain.some(excludehn)) { //Pin 命中🎯️
                nname.push(hname[i])
            } else { dname.push(hname[i]) }
        } else {
            nname.push(hname[i])
        }
    } //for j
    if (Pntf0 != 0) {
        if (paraout || parain) {
            var noname = dname.length <= 10 ? emojino[dname.length] : dname.length
            var no1name = nname.length <= 10 ? emojino[nname.length] : nname.length
            if (parain && no1name != " 0️⃣ ") {
                $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfihn + pfohn, "☠️ 主机名 hostname 中已保留以下" + no1name + "个匹配项:" + "\n ⨷ " + nname.join(","), rwhost_link)
            } else if (dname.length > 0) {
                $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfihn + pfohn, "☠️ 主机名 hostname 中已删除以下" + noname + "个匹配项:" + "\n ⨷ " + dname.join(","), rwhost_link)
            }
        }
    }
    if (nname.length == 0) {
        $notify("🤖 " + "重写引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 筛选参数: " + pfihn + pfohn, "⚠️ 主机名 hostname 中剩余 0️⃣ 项, 请检查参数及原始链接", nan_link)
    }
    if(Preg){ nname = nname.map(Regex).filter(Boolean)
      RegCheck(nname, "主机名hostname","regex", Preg) }
    if(Pregout){ nname = nname.map(RegexOut).filter(Boolean)
      RegCheck(nname, "主机名hostname", "regout", Pregout) }
    hname = "hostname=" + nname.join(", ");
    return hname
}

//Rewrite 筛选的函数
function Rcheck(content, param) {
    name = content.toUpperCase()
    if (param) {
        var flag = 0; //没命中
        const checkpara = (item) => name.indexOf(item.toUpperCase()) != -1;
        if (param.some(checkpara)) {
            flag = 1 //命中
        }
        return flag
    } else { //if param
        return 2
    } //无参数
}

//分流规则转换及过滤(in&out)，可用于 surge 及 quanx 的 rule-list
function Rule_Handle(subs, Pout, Pin) {
    cnt = subs //.split("\n");
    Tin = Pin; //保留参数
    Tout = Pout; //过滤参数
    ply = Ppolicy; //策略组
    var nlist = []
    var RuleK = ["//", "#", ";","[","^"]; //排除项目
    var RuleK2 = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,", "ip-asn"];
    //$notify("nlist-s0","",subs)
    if (Tout != "" && Tout != null) { // 有 out 参数时
        var dlist = [];
        for (var i = 0; i < cnt.length; i++) {
            cc = cnt[i].replace(/^\s*\-\s/g,"").replace(/\"|\'/g,"").trim()
            //$notify("out ing", Tout, cc)
            const exclude = (item) => cc.indexOf(item) != -1; // 删除项
            const RuleCheck = (item) => cc.toLowerCase().indexOf(item) != -1; //规则检查
            const CommentCheck = (item) => cc.toLowerCase().indexOf(item) == 0; //无视注释行
            if (Tout.some(exclude) && !RuleK.some(CommentCheck) ) {
              // 2022-12-15 删除 && RuleK2.some(RuleCheck) 判断条件，以免 list/provider 中参数上生效
                dlist.push("-" + Rule_Policy(cc)) // 注释掉条目
            } else if (!RuleK.some(CommentCheck) && cc ) { //if Pout.some, 不操作注释项，不操作不识别规则项目
              // 2022-12-15 删除 && RuleK2.some(RuleCheck) 判断条件，以免 list/provider 中参数上生效
                dd = Rule_Policy(cc);
                if (Tin != "" && Tin != null) {
                    const include = (item) => dd.indexOf(item) != -1; // 保留项
                    if (Tin.some(include)) {
                        nlist.push(dd);
                    }
                } else {
                    nlist.push(dd);
                }
            } //else if cc
        }//for cnt
        var no = dlist.length <= 10 ? emojino[dlist.length] : dlist.length
        if (dlist.length > 0) {
            if (Pntf0 != 0) { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "☠️ 已禁用以下" + no + "条匹配规则:" + "\n ⨷ " + dlist.join("\n ⨷ "), rule_link) }
        } else { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "⚠️ 未发现任何匹配项, 请检查参数或原始链接", nan_link) }
        if (Tin != "" && Tin != null) {  //有 in 跟 out 参数时
            if (nlist.length > 0) {
                var noin0 = nlist.length <= 10 ? emojino[nlist.length] : nlist.length
                if (Pntf0 != 0) {
                    $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "🎯 已保留以下 " + noin0 + "条匹配规则:" + "\n ⨁ " + nlist.join("\n ⨁ "), rule_link)
                }
            } else {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin + ",⛔️ 禁用: " + Tout, "⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link)
            }
        } else {// if Tin (No Tin)
            if (nlist.length == 0) {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "⛔️ 禁用: " + Tout, "⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link)
            }
        }
      nlist =Phide ==1? nlist : [...dlist,...nlist]
        //return nlist;
    } else if (Tin != "" && Tin != null) { //if Tout
        var dlist = [];
        for (var i = 0; i < cnt.length; i++) {
            cc = cnt[i].replace(/^\s*\-\s/g,"").trim()
            const RuleCheck = (item) => cc.indexOf(item) != -1; //无视注释行
            const CommentCheck = (item) => cc.toLowerCase().indexOf(item) == 0; //无视注释行
            if (!RuleK.some(CommentCheck) && cc) { //if Pout.some, 不操作注释项
                dd = Rule_Policy(cc);
                const include = (item) => dd.indexOf(item) != -1; // 保留项
                if (Tin.some(include)) {
                    nlist.push(dd);
                } else { dlist.push("-" + dd) }
            }
        } // for cnt
        if (nlist.length > 0) {
            var noin = nlist.length <= 10 ? emojino[nlist.length] : nlist.length
            if (Pntf0 != 0) {
                $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "🎯 已保留以下 " + noin + "条匹配规则:" + "\n ⨁ " + nlist.join("\n ⨁ "), rule_link)
            }
        } else { $notify("🤖 " + "分流引用  ➟ " + "⟦" + subtag + "⟧", "✅ 保留:" + Tin, "⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接", nan_link) }
      nlist =Phide ==1? nlist : [...dlist,...nlist]
      //return nlist;
    } else {  //if Tin
      nlist = cnt.map(Rule_Policy)
        //return cnt.map(Rule_Policy)
    }
  nlist = Pfcr == 1? nlist.filter(Boolean).map(item => item+", force-cellular") : nlist.filter(Boolean)
  nlist = Pfcr == 2? nlist.filter(Boolean).map(item => item+", multi-interface") : nlist.filter(Boolean)
  nlist = Pfcr == 3? nlist.filter(Boolean).map(item => item+", multi-interface-balance") : nlist.filter(Boolean)

  if (Pvia!="") {
    nlist = Pvia ==0? nlist.filter(Boolean).map(item => item+", via-interface=%TUN%") : nlist.filter(Boolean).map(item => item+", via-interface="+Pvia)
  }

  nlist=nlist.map(item=>item.replace(/:\d*\s*,/g,",").replace(/(\'|\")/g,"").replace(/(\-suffix|\-SUFFIX)\s*\,\s*\./g,"$1, ")) //去除端口号以及分号部分, 以及部分suffix规则以. 开头的问题
  //$notify("nlist","",nlist)
  return nlist
}

function Rule_Policy(content) { //增加、替换 policy
    var cnt = content.replace(/^\s*\-\s/g,"").replace(/REJECT-TINYGIF/gi,"reject").replace(/REJECT-DROP/gi,"reject").trim().split("//")[0].trim().split(",");
    var RuleK = ["//", "#", ";","[","/", "hostname","no-ipv6","no-system","<","{","}","]","^"];
    var RuleK1 = ["host", "domain", "ip-cidr", "geoip", "user-agent", "ip6-cidr", "ip-asn"];
    const RuleCheck = (item) => cnt[0].trim().toLowerCase().indexOf(item) == 0; //无视注释行
    const RuleCheck1 = (item) => cnt[0].trim().toLowerCase().indexOf(item) == 0 ; //无视 quanx 不支持的规则类别&排除 hostname
    if (RuleK1.some(RuleCheck1) && !RuleK.some(RuleCheck) ) {
        if (cnt.length == 3 && cnt.indexOf("no-resolve") == -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : cnt[2]
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0
        } else if (cnt.length == 4 && cnt.indexOf("no-resolve") != -1) { // 带no-resolve的quanx类型rule
          nn = cnt.join(",").replace(",no-resolve","")
        } else if (cnt.length == 2) { //Surge rule-set
            ply0 = Ppolicy != "Shawn" ? Ppolicy : "Shawn"
            nn = cnt[1].trim() !=""? cnt[0] + ", " + cnt[1] + ", " + ply0 : ""
        } else if (cnt.length == 3 && cnt[2].indexOf("no-resolve") != -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : "Shawn"
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0 //+ ", " + cnt[2]
        } else if (cnt.length == 4 && cnt[3].indexOf("no-resolve") != -1) {
            ply0 = Ppolicy != "Shawn" ? Ppolicy : cnt[2]
            nn = cnt[0] + ", " + cnt[1] + ", " + ply0 //+ ", " + cnt[3]
        } else if (!RuleK.some(RuleCheck) && content) {
            //$notify("未能解析" + "⟦" + subtag + "⟧" + "其中部分规则:", content, nan_link);
            return ""
        } else { return "" }
        if (cnt[0].indexOf("URL-REGEX") != -1 || cnt[0].indexOf("PROCESS") != -1) {
            nn = ""
        } else { 
          nn = nn.replace("IP-CIDR6", "ip6-cidr").replace(/^(domain|Domain|DOMAIN)/,"host") 
        }
        return nn
    } else if (cnt.length == 1 && !RuleK.some(RuleCheck) && cnt[0]!="" && cnt[0].indexOf("payload:")==-1 && cnt[0].indexOf("=")==-1 && cnt[0].trim()!="https:") { // 纯域名/ip 列表
      //$notify("LIST-HANDLE")
      return rule_list_handle(cnt[0])
    } else { 
      //$notify("Nothing")
      return "" }//if RuleK1 check 
}

// 处理纯列表, 包含 clash-provider
function rule_list_handle(cnt) {
  var RuleK = ["//", "#", ";", "[", "!", "/"]
  const RuleCheck = (item) => cnt.trim().indexOf(item) == 0; //无视注释行
  const nocheck = (item) => /^\d+$/.test(item) //检查数字项
  cnt = cnt.split("#")[0].trim() // 去除注释部分
  if (cnt.trim().indexOf(" ") == -1 && cnt.trim() != "" && !RuleK.some(RuleCheck)) {
    if (cnt.indexOf("::") != -1 && cnt.indexOf("/") != -1) { // ip-v6?
      cnt = "ip6-cidr, " + cnt
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    } else if (cnt.split("/").length == 2) {//ip-cidr
      cnt = "ip-cidr, " + cnt
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    } else if (cnt.split(".").length == 4 && cnt.split(".").every(nocheck)) {  // ip 类规则
      cnt = "ip-cidr, " + cnt + "/32"
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    } else if (cnt.indexOf("payload:") == -1) { //host - suffix, not clash rule list
      //$notify("xxx","xxxx",cnt)
      //cnt=cnt.replace(/'|"/g,"").trim()//replace(/'|"|\+\.|\*\.|\*\.\*/g,"") 2023-04-10

      if (!/^('|")/.test(cnt)) { // not clash-provider
        if (!/\*|\+/.test(cnt[0])) {
          cnt = cnt[0] == "." ? cnt.replace(".", "") : cnt
          cnt = "host-suffix, " + cnt
        } else {
          cnt = "host-wildcard, " + cnt
        }
      } else { // clash provider
        cnt = cnt.replace(/'|"/g, "").trim()

        if (/^\.|\*\./.test(cnt) || cnt.indexOf("*") != -1) {
          //1.以.或*.开头 -> 匹配子域名，wildcard,*.domain
          //2.直接替换开头，正则未匹配 -> 不以*.开头的字符串但包含*的情况(wildcard,a.*.domain...)
          cnt = "host-wildcard, " + cnt.replace(/^\.|\*\./, "*.")
        } else {
          cnt = "host-suffix, " + cnt.replace(/^(\+\.)/, "")//如果以+.开头 = 匹配当前域名及其子域名，采用 suffix,domain。
        }
      }
      cnt = Ppolicy == "Shawn" ? cnt + ", Shawn" : cnt + ", " + Ppolicy
    }
  }
  return cnt
}

// Domain-Set
function Domain2Rule(content) {
    var cnt = content.split("\n");
    var RuleK = ["//", "#", ";","["]
    var nlist = []
    for (var i = 0; i< cnt.length; i++) {
        cc = cnt[i].trim();
        const RuleCheck = (item) => cc.indexOf(item) != -1; //无视注释行
        if(!RuleK.some(RuleCheck) && cc) {
            if (cc[0] == "."){
                nlist.push("host-suffix, " + cc.slice(1 , cc.length) )
            } else {
                nlist.push("host, " + cc )
            }
        }
    }
    return nlist.join("\n")
}
// filter 正则指定替换 regex1@policy1+regex2@policy2
function policy_sets(cnt,para) {
  pcnt = para.split("+")
  cnt=cnt//.split("\n")
  for (i=0;i<pcnt.length;i++){
    console.log(pcnt[i])
    if (pcnt[i].indexOf("@")!=-1){
      cnt = cnt.map(item => filter_set(item, pcnt[i]))
    }
  }
  cnt=cnt.filter(Boolean)//.join("\n")
  return cnt
  console.log(cnt)
}

//策略指定
function filter_set(cnt,para){
  if (cnt){
    paras=[para.split("@")[0],para.slice(para.split("@")[0].length+"@".length)]
    console.log(para.split("@")[0].length+"@".length,paras)
    cnt = cnt.split(",")
    reg = RegExp(paras[0])
    console.log(paras,cnt)
    if(cnt.length == 3){
      if (reg.test(cnt[1]) || reg.test(cnt[2])) {
        cnt[2] = paras[1]
      }
    }
    return cnt.join(",")
  }
}


// 正则替换 filter/rewrite 的部分
// 用途：如 tiktok 换区: JP -> KR ，如淘宝比价脚本 -> lite 横幅通知版本
function ReplaceReg(cnt, para) {
    var cnt0 = cnt//.join("\n")
    //$notify("0","",cnt0)
    var pp = para.replace(/\\\@/g,"atsymbol").replace(/\\\+/g,"plussymbol").split("+");
    for (var i = 0; i < pp.length; i++) {
        var p1 = decodeURIComponent(pp[i].split("@")[0]).replace(/atsymbol/g,"\@").replace(/plussymbol/g,"\\\+").replace(/\，/g,",");
        var p2 = decodeURIComponent(pp[i].split("@")[1]).replace(/atsymbol/g,"@").replace(/plussymbol/g,"+").replace(/\，/g,",");
        p1 = new RegExp(p1, "gmi");
        cnt0 = cnt0.map(item => item.replace(p1, p2));
        //$notify(p1,p2,cnt0)
    }
  //$notify("1","",cnt0)
    return cnt0//.split("\n")
}


// read parameters 2025-12-30
function param(res,org,mbody) {
  if(mbody.indexOf(org)!=-1) {
    tmp=mbody.split(org)[1].split("&")[0].split("#")[0]
    return res+"="+tmp
  }
  else return ""
}

// get reality parameters
function Reality_Handle(cnt) {
//add reality-base64-pubkey, reality-hex-shortid, vless-flow=xtls-rprx-vision
  a1=param("reality-base64-pubkey","pbk=",cnt)
  a2=param("reality-hex-shortid","sid=",cnt)
  a3=(cnt.indexOf("flow=xtls-rprx-vision")!=-1 || cnt.indexOf("xtls=2")!=-1)? "vless-flow=xtls-rprx-vision": ""
  rnt=[a1,a2,a3].filter(Boolean).join(", ")
  return rnt
}


//混合订阅类型，用于未整体进行 base64 encode 以及已经 decode 后的类型
function Subs2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  if (Pdbg) {$notify("subs", "node", subs)}
    var list0 = subs.split("\n");
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http=","socks5=", "vless=", "anytls="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=https,", "=custom,", "=socks5", "=socks5-tls","=anytls"];
    var LoonK = ["=Shadowsocks", "=ShadowsocksR", "=VLESS","=AnyTLS"]
    var QXlist = [];
    var failedList = [];
    for (var i = 0; i < list0.length; i++) {
        var node = ""
        //if (Pdbg) {$notify(i, "node", list0[i])}
        if (list0[i].trim().length > 3 && !/\;|\/|\#/.test(list0[i][0]) && list0[i].indexOf(" url ")==-1) {
            var type = list0[i].split("://")[0].trim()
            var listi = list0[i].replace(/ /g, "")
            var tag0 = list0[i].indexOf("tag=")!=-1 ? list0[i].split(/\&*(emoji|udp|tfo|cert|rename|replace)\=/)[0].split("tag=")[1] : ""
            list0[i] = (type=="ssr") ? list0[i].split(/#|,|，/)[0] : list0[i] // 2023-04-18 remove type == "vmess" ||
            const NodeCheck = (item) => listi.toLowerCase().indexOf(item) != -1;
            const NodeCheck1 = (item) => listi.toLowerCase().indexOf(item) == 0;
            const NodeCheck2 = (item) => listi.indexOf(item) != -1;
            try {
              if (Pdbg) {$notify(i, type, list0[i])}
                if (type == "vmess" && (list0[i].indexOf("remark=") == -1 && list0[i].indexOf("remarks=") == -1) && !/(obfs|alterId|type|\@)\=/.test(list0[i])) {
                    var bnode = Base64.decode(list0[i].split("vmess://")[1])
                    if (bnode.indexOf("over-tls=") == -1) { //v2rayN
                        node = V2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    } else { //quantumult 类型
                        node = VQ2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    }
                  node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "vmess" && ( list0[i].indexOf("remark=") != -1 || list0[i].indexOf("remarks=") != -1 || /(obfs|alterId|type|\@)\=/.test(list0[i]))) { //shadowrocket 类型
                    node = VR2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "socks" && list0[i].indexOf("remarks=") != -1) { //shadowrocket socks5 类型
                    node = S5R2QX(list0[i])
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ssocks" && list0[i].indexOf("remarks=") != -1) { //shadowrocket socks5-tls 类型
                    node = S5R2QX(list0[i],tlsp="over-tls")
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ssr") {
                    node = SSR2QX(list0[i], Pudp, Ptfo)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ss") {
                    node = SS2QX(list0[i], Pudp, Ptfo)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ssd") {
                    node = SSD2QX(list0[i], Pudp, Ptfo)
                } else if (type == "trojan") {
                    node = TJ2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if ((type == "https" || type == "http") && list0[i].indexOf(",") == -1) {
                    if (listi.indexOf("@") != -1) {
                        node = HPS2QX(list0[i], Ptfo, Pcert0, PTls13)
                        node = tag0 != "" ? URI_TAG(node, tag0) : node
                    } else { // b64 类型 http/https
                        var listh = Base64.decode(listi.split(type+"://")[1].split("#")[0].split("?")[0])
                        listh = list0[i].replace(listi.split(type+"://")[1].split("#")[0].split("?")[0],listh) //type+"://" + listh + "#" + listi.split(type+"://")[1].split("#")[1]
                        node = HPS2QX(listh, Ptfo, Pcert0, PTls13)
                        node = tag0 != "" ? URI_TAG(node, tag0) : node
                    }
                } else if (type == "vless" && version<821) {
                  Perror = 1 ; // 无需反馈
                  $notify("⚠️ 你的 Quantumult X 版本暂未支持 Vless 节点","请更新app到最新版本",list0[i])
                } else if (type == "vless" ) { // version 150 support vless 
                  node=VL2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                } else if (type == "anytls") { // 2026-04-15 tls 类型支持
                  if (version <914) {
                    Perror = 1 ; // 无需反馈
                    $notify("⚠️ 你的 Quantumult X 版本暂未支持 anytls 节点","请更新app到最新版本",list0[i])
                  } else {
                    node=Anytls2QX(list0[i],Pcert0)
                  }
                } else if (QuanXK.some(NodeCheck1)) { // QuanX type 
                    node = QX_TLS(isQuanX(list0[i])[0], Pcert0, PTls13)
                } else if (LoonK.some(NodeCheck2)) { // Loon type
                    node = Loon2QX(list0[i])
                } else if (SurgeK.some(NodeCheck) ) { // Surge type, 第2为端口号
                    node = QX_TLS(Surge2QX(list0[i])[0], Pcert0, PTls13)
                } else if (type=="hysteria2" || (type=="anytls" && version<914) || type=="tuic") { //
                  PNS=PNS+1 
                  NSList.push(numToEmoji10(PNS)+list0[i])
                }
              if (Pdbg) {$notify(i, type, node)}
            } catch (e) {
                failedList.push(`<<<\nContent: ${list0[i]}\nError: ${e}`)
            }
            if (Paead != "") {node = AeadVmess(node,Paead)} // vmess 类型 aead 处理
            if (Phost != "") {node = HOST_Handle(node,Phost)} // host 参数修改
            if (Pobfs != "") {node = OBFS_Handle(node,Pobfs)} // obfs 参数修改
            if (Psession != "") { node = Session_Handle(node,Psession)} // tls-session 参数
            if (Pcsha256 != "" || Ppsha256 != "") {
            node = SHA256_Handle(node,Pcsha256,Ppsha256)} // Sha256 参数
            if (Palpn !="") { node = ALPN_Handle(node,Palpn)} // alpn 参数
            node = TLS_Check(node)
            //if (Pdbg) {$notify("Final", type, node)}
            if (node instanceof Array) {
                for (var j in node) {
                  node[j] = Pudp != 0 ? XUDP(node[j],Pudp) : node[j]
                  node[j] = Ptfo != 0 ? XTFO(node[j],Ptfo) : node[j]
                    QXlist.push(node[j])
                }
            } else if (node != ""  && node) {
              node = Pudp != 0 ? XUDP(node,Pudp) : node
              node = Ptfo != 0 ? XTFO(node,Ptfo) : node
                QXlist.push(node)
            }
        }
    }
    if (failedList.length > 0 && Pntf0 != 0) {
        $notify(`⚠️ 有 ${failedList.length} 条数据解析失败, 已忽略`, "出错内容👇", failedList.join("\n"));
    }
    //$notify("QXList","check below content",QXlist)
    return QXlist;
}

// Vmess Aead  关闭-默认开启
function AeadVmess(cnt,aeadp) {
  let paead = aeadp == -1? "aead=false" : "aead=true" 
  if (/^vmess\s*\=/.test(cnt)) {
    if (/aead\s*\=/.test(cnt)) {
      cnt = cnt.replace(/aead\s*\=.*\,/,paead+",")
    } else {
      cnts = cnt.split(",")
      cnts.push(paead)
      //console.log(cnts)
      cnt=cnts.join(", ")
    }

  }
  return cnt
}

//新版本tls 的检验（存在sha256 参数时）
function TLS_Check(cnt) {
  cnt =cnt.indexOf("tls-cert-sha256")!=-1 || cnt.indexOf("tls-pubkey-sha256")!=-1 ? cnt.replace(/tls-verification\s*\=\s*false.*?\,/,"tls-verification=true,"): cnt // 去掉 tls-verification=false 如果存在 sha256
  return cnt
}

// qx 类型 tls/udp 验证问题t
function QX_TLS(cnt,Pcert0,PTls13) {
  cnt =cnt.replace(/tag\s*\=/gm,"tag=") //
  var cert0 = Pcert0 == 1? "tls-verification=true, " : "tls-verification=false, "
  var tls13 = PTls13 == 1? "tls13=true, " : ""
  if(cnt.indexOf("tls-verification") != -1){ // 已有tls参数时, 如用户不指定，则不做处理
    cnt = (Pcert0 == -1 || Pcert0 == 1) ? cnt.replace(RegExp("tls\-verification.*?\,", "gmi"), cert0): cnt
    //cnt = Pcert0 == 1? cnt.replace(RegExp("tls\-verification.*?\,", "gmi"), cert0): cnt
  }else if(cnt.indexOf("obfs=over-tls")!=-1 || /over\-tls\s*\=\s*true/.test(cnt) || cnt.indexOf("obfs=wss")!=-1){ //未包含tls参数时
    cnt = cnt.replace(new RegExp("tag.*?\=", "gmi"), cert0+"tag=")
  }
  if (tls13 !="") {
  if(cnt.indexOf("tls13") != -1){
    cnt = cnt.replace(RegExp("tls13.*?\,", "gmi"), tls13)
  }else if(cnt.indexOf("obfs=over-tls")!=-1 || /over\-tls\s*\=\s*true/.test(cnt) || cnt.indexOf("obfs=wss")!=-1){
    cnt = cnt.replace(new RegExp("tag.*?\=", "gmi"), tls13+"tag=")
  }
  }
  if (!/^(shadowsocks|trojan|vmess|vless|anytls)/.test(cnt.trim())) { //关闭非 ss/ssr/trojan/vmess/vless 类型的 udp
    udp =  "udp-relay=false, "
    if(cnt.indexOf("udp-relay") != -1){
      var cnt = cnt.replace(RegExp("udp\-relay.*?\,", "gmi"), udp)
    }else{
      var cnt = cnt.replace(new RegExp("tag.*?\=", "gmi"), udp+"tag=")
    }
  }   
  return cnt
}

//将sip008格式的订阅转换成quanx格式
function SIP2QuanX (cnt) {
  cnt = JSON.parse(cnt)
  ll =cnt.length
  nodes =[]
  for (i=0; i<ll; i++) {
    node = "shadowsocks= "
    cnti = cnt[i]
    ip = cnti.server + ":" + cnti.server_port
    mtd = "method=" + cnti.method
    pwd = "password=" + cnti.password
    obfs = cnti.plugin_opts? cnti.plugin_opts.replace(";", ", "):""
    tag = "tag="+cnti.remarks
    node = node +[ip,pwd, mtd, obfs, tag].filter(Boolean).join(", ")
    nodes.push(node)
  }
  return nodes.join("\n")
  //console.log(nodes)
}

//http=example.com:443, username=name, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, tls13=true, fast-open=false, udp-relay=false, tag=http-tls-02
//HTTPS 类型 URI 转换成 QUANX 格式
function HPS2QX(subs, Ptfo, Pcert0, PTls13) {
    var type = subs.indexOf("https://")!=-1? "https" : "http" 
    var server = subs.replace("https://", "").replace("http://", "").trim()//Base64.decode(subs.replace("https://", "")).trim().split("\u0000")[0];
    var nss = []
    if (server != "") {
      if (server.indexOf("@")!=-1) {
        var ipport = "http=" + server.split("@")[1].split("#")[0].split("/")[0].split("?")[0];
        var uname = "username=" + server.split(":")[0];
        var pwd = "password=" + server.split("@")[0].split(":")[1];
      } else {
        var ipport = server.split("#")[0].indexOf(":")==-1? "http=" + Base64.decode(server.split("#")[0].split("?")[0]) : "http=" + server.split("#")[0].split("?")[0]; // https://b64(ipport)
      }
        var tag = "tag=" + decodeURIComponent(server.split("#")[1]);
        var tls = type == "https"? "over-tls=true": "";
        var thost = subs.indexOf("peer=")!= -1? "tls-host=" + subs.split("peer=")[1].split("#")[0].split("&")[0] : "" // 存在peers参数时 https://b64(ipport)?peer=xxx#server-remarks
        var cert = Pcert0 != 0 ? "tls-verification=true" : "tls-verification=false";
        var tfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
        var tls13 = PTls13 == 1 ? "tls13=true" : "tls13=false";
        if (tls=="") {
          cert=""
          tls13=""
        }
        nss.push(ipport, uname, pwd, tls, thost, cert, tfo, tls13, tag)
    }
    var QX = nss.filter(Boolean).join(",");
    return QX
}

//quantumult 格式的 vmess URI 转换
function VQ2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var server = String(Base64.decode(subs.replace("vmess://", "").trim()).split("\u0000")[0])
  var node = ""
  var ip = "vmess=" + server.split(",")[1].trim() + ":" + server.split(",")[2].trim() + ", " + "method=aes-128-gcm, " + "password=" + server.split(",")[4].split("\"")[1] + ", "
  var tag = "tag=" + server.split("=")[0]
  var tfo = subs.indexOf("tfo=1") != -1 ? "fast-open=true, " : "fast-open=false, "
  var udp = Pudp == 1 ? "udp-relay=false, " : "udp-relay=false, "; // 不支持 vmess 类型 udp
  node = ip + tfo + udp
  var obfs = ""
  if (server.indexOf("obfs=") == -1) { // 非 ws/http 类型
    obfs = server.indexOf("over-tls=true") != -1 ? "obfs=over-tls, " : "" //over-tls
    var host = server.indexOf("tls-host") != -1 ? "obfs-host=" + server.split("tls-host=")[1].split(",")[0] + ", " : ""
    obfs = obfs + host
  } else if (server.indexOf("obfs=ws") != -1) {
    obfs = server.indexOf("over-tls=true") != -1 ? "obfs=wss, " : "obfs=ws, " //ws,wss 类型
    var uri = server.indexOf("obfs-path=") != -1 ? "obfs-uri=" + server.split("obfs-path=")[1].split("\"")[1] + ", " : "obfs-uri=/, "
    obfs = obfs + uri
    var host = server.indexOf("obfs-header=") != -1 ? "obfs-host=" + server.split("obfs-header=\"Host:")[1].split("[")[0].trim() + ", " : ""
    obfs = obfs + host
  } else if (server.indexOf("obfs=http") != -1) {
    obfs = "obfs=http, "
    var uri = server.indexOf("obfs-path=") != -1 ? "obfs-uri=" + server.split("obfs-path=")[1].split("\"")[1] + ", " : "obfs-uri=/, "
    obfs = obfs + uri
    var host = server.indexOf("obfs-header=") != -1 ? "obfs-host=" + server.split("obfs-header=\"Host:")[1].split("[")[0].trim() + ", " : ""
    obfs = obfs + host
  }
  if (obfs.indexOf("obfs=over-tls") != -1 || obfs.indexOf("obfs=wss") != -1) {
    var cert = Pcert0 != 0 || subs.indexOf("allowInsecure=1") != -1 ? "tls-verification=false, " : "tls-verification=true, "
    var tls13 = PTls13 == 1 ? "tls13=true, " : ""
    obfs = obfs + cert + tls13
  }
  node = node + obfs + tag
  return node
}


//Shadowrocket 格式的 vmess URI 转换
function VR2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var server = String(Base64.decode(subs.replace("vmess://", "").split("?remark")[0].split("&remark")[0].split("?")[0]).trim()).split("\u0000")[0]
  if(Pdbg==1) {$notify("Shadowrocket-Vmess-URI","..",subs+"\n\n"+server)}
  if (server.indexOf("@")==-1 && subs.indexOf("@")!=-1) { server = subs.replace("vmess://", "").split("?")[0]}
  var node = ""
  var ip = "vmess=" + server.split("@")[1] + ", " + "method=aes-128-gcm, " 
  var pwd =  server.split("@")[0].split(":")[1]? "password=" + server.split("@")[0].split(":")[1] + ", " : "password=" + server.split("@")[0]+ ", "
  if (subs.indexOf("#")==-1) {
    tag = /remarks*=/.test(subs)? "tag=" + decodeURIComponent(subs.split(/remarks*=/)[1].split("&")[0]) : "tag="+server.split("@")[1] //部分无节点名的情况
  } else {
    tag = "tag=" + subs.split("#")[1]
  }
  var tfo = subs.indexOf("tfo=1") != -1 ? "fast-open=true, " : "fast-open=false, "
  var udp = Pudp == 1 ? "udp-relay=false, " : "udp-relay=false, ";
  var pdrop = 0
  node = ip + pwd+ tfo + udp
  var obfs = subs.indexOf("obfs=")!=-1 ? subs.split("obfs=")[1].split("&")[0].trim() : "none"
  if (obfs == "none") { //
    obfs = subs.indexOf("tls=1") != -1 ? "obfs=over-tls, " : "" //over-tls
  } else if (obfs == "websocket" || obfs == "http") {
    obfs = obfs == "http" ? "obfs=http, " : "obfs=ws, " // http 类型
    obfs = subs.indexOf("tls=1") != -1 ? "obfs=wss, " : obfs //ws,wss 类型
    var ouri = subs.indexOf("&path=") != -1 ? decodeURIComponent(subs.split("&path=")[1].split("&")[0]) : "/" //ws,wss 类型
    obfs = obfs + "obfs-uri=" + ouri + ", "
    var host = subs.indexOf("&obfsParam=") != -1 ? decodeURIComponent(subs.split("&obfsParam=")[1].split("&")[0].split("\n")[0]).split("\n")[0].trim() : ""
    if (host.indexOf("\"Host\"")!=-1 && host.indexOf("{")!=-1) {
      host = JSON.parse(host)["Host"]
    }
    host = host!="{}" && host ? "obfs-host=" + host + ", " : ""
    obfs = obfs + host
  } else if (obfs=="grpc" || obfs =="h2") {
    Perror = 1 // 不需要反馈的类型
    if (Pntf0!=0) {
    $notify( "⚠️ Quantumult X 暂不支持该类型节点", "已忽略以下 grpc|h2 vmess 节点",subs)
  }
    pdrop = 1
  }
  if (obfs.indexOf("obfs=over-tls") != -1 || obfs.indexOf("obfs=wss") != -1) {
    var cert = Pcert0 != 0 || subs.indexOf("allowInsecure=1") != -1 ? "tls-verification=false, " : "tls-verification=true, "
    var tls13 = PTls13 == 1 ? "tls13=true, " : ""
    obfs = obfs + cert + tls13
  }
  caead="aead=false, "
  if (subs.indexOf("alterId=") != -1) {
    caead = Number(subs.split("alterId=")[1].split("&")[0]) != 0 ? "aead=false, " : ""
  }
  node = pdrop==0? node + obfs +caead+ tag : ""
  //$notify(node)
  return node
}

//Shadowrocket 格式的 socks URI 转换
function S5R2QX(cnt,tlsp="false") {
  var listh = Base64.decode(cnt.split("socks://")[1].split("#")[0].split("?")[0])
  server=listh+"#"+cnt.split("?")[1]
  var nss = []
  if (server != "") {
      var ipport = "socks5=" + server.split("@")[1].split("#")[0].split("/")[0];
      var uname = "username=" + server.split(":")[0];
      var pwd = "password=" + server.split("@")[0].split(":")[1];
      var tag = "tag=" + decodeURIComponent(server.split("remarks=")[1].split("&")[0]);
      var tls = tlsp=="false"? "":"over-tls=true"
      var cert = Pcert0 != 0 ? "tls-verification=true" : "tls-verification=false";
      cert = tls == ""? "":cert
      var tfo = Ptfo0 == 1 ? "fast-open=true" : "fast-open=false";
      nss.push(ipport, uname, pwd, tls, cert, tfo, tag)
  }
  var QX = nss.filter(Boolean).join(",");
  return QX
}
 


//V2RayN uri 转换成 QUANX 格式
function V2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  //console.log("v2 type",subs)
  var cert = Pcert0
  var tls13 = PTls13
  var server = String(Base64.decode(subs.replace("vmess://", "")).trim()).split("\u0000")[0];
  var nss = [];
  if (server != "") {
    ss = JSON.parse(server);
    if(Pdbg) {$notify("Vmess-URI","",JSON.stringify(ss))}
    ip = "vmess=" + ss.add + ":" + ss.port;
    pwd = "password=" + ss.id;
    mtd = "method=aes-128-gcm"
    try {
      tag = "tag=" + decodeURIComponent(ss.ps);
    } catch (e) {
      tag = "tag=" + ss.ps;
    }
    udp = Pudp == 1 ? "udp-relay=false" : "udp-relay=false";
    tfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
    obfs = Fobfs(ss, cert, tls13);
    caead = ss.aid && ss.aid != "0" ? "aead=false" : "aead=true"; //aead 选项
    if (obfs == "" || obfs == undefined) {
      nss.push(ip, mtd, pwd, tfo, udp, caead, tag)
    } else if(obfs != "NOT-SUPPORTTED"){
      nss.push(ip, mtd, pwd, obfs, tfo, udp, caead, tag);
    } else if(obfs == "NOT-SUPPORTTED"){
      PNS=PNS+1
      NSList.push(numToEmoji10(PNS)+subs)
    }
    QX = nss.join(", ");
  }
  return QX
}

// Vmess obfs 参数
function Fobfs(jsonl, Pcert0, PTls13) {
  var obfsi = [];
  var cert = Pcert0;
  tcert = cert == 0 ? "tls-verification=false" : "tls-verification=true";
  tls13 = PTls13 == 1 ? "tls13=true" : "tls13=false"
  if (jsonl.net == "ws" && jsonl.tls == "tls") {
    obfs0 = "obfs=wss, " + tcert + ", " + tls13 + ", ";
    uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "obfs-uri=/";
    uri0 = uri0.indexOf("uri=/")!=-1 ? uri0:uri0.replace("uri=","uri=/")
    host0 = jsonl.host && jsonl.host != "" ? "obfs-host=" + jsonl.host + ", " : "";
    obfsi.push(obfs0 + host0 + uri0)
    return obfsi.join(", ")
  } else if (jsonl.net == "ws") {
    obfs0 = "obfs=ws";
    uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "obfs-uri=/";
    uri0 = uri0.indexOf("uri=/")!=-1 ? uri0:uri0.replace("uri=","uri=/")
    host0 = jsonl.host && jsonl.host != "" ? "obfs-host=" + jsonl.host + ", " : "";
    obfsi.push(obfs0, host0 + uri0);
    return obfsi.join(", ")
  } else if (jsonl.tls == "tls" && (jsonl.net == "tcp" || jsonl.net == "none")) { // 过滤掉 h2/http 等类型 
    obfs0 = "obfs=over-tls, " + tcert + ", " + tls13;
    uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "";
    uri0 = uri0.indexOf("uri=/")!=-1 ? uri0:uri0.replace("uri=","uri=/")
    host0 = jsonl.host && jsonl.host != "" ? ", obfs-host=" + jsonl.host : "";
    obfsi.push(obfs0 + host0)
    return obfsi.join(", ")
  } else if ((jsonl.net == "tcp" || jsonl.net == "none") && jsonl.type == "http"){
    obfs0 = "obfs=http";
    uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "obfs-uri=/";
    uri0 = uri0.indexOf("uri=/")!=-1 ? uri0:uri0.replace("uri=","uri=/")
    host0 = jsonl.host && jsonl.host != "" ? "obfs-host=" + jsonl.host + ", " : "";
    obfsi.push(obfs0, host0 + uri0);
    return obfsi.join(", ")
  } else if (jsonl.net !="tcp" && jsonl.net !="none" &&  jsonl.net != undefined){ // 过滤掉 h2/http 等类型
    Perror = 1
    $notify("⚠️ Quantumult X 不支持该类型节点", "vmess + " + jsonl.net, JSON.stringify(jsonl))
    return "NOT-SUPPORTTED"
  } else if ((jsonl.net == "tcp" || jsonl.net == "none") && jsonl.type != undefined && jsonl.type != "none" && jsonl.type != "" && jsonl.type != "vmess") {
    return "NOT-SUPPORTTED"
  } else {return ""}
}

//对.的特殊处理(in/out & rename中)
function Dot2(cnt) {
    cnt = cnt ? cnt.replace(/\\\./g, "这是个点") : ""
    return cnt
}

function ToDot(cnt) {
    cnt = cnt ? cnt.replace(/这是个点/g, ".") : ""
    return cnt
}

//正则筛选, 完整内容匹配
function Regex(content) {
    var Preg0 = RegExp(Preg, "i")
    cnt = content //.split("tag=")[1]
    if (Preg0.test(cnt)) {
        return content
    }
}

//正则删除, 完整内容匹配
function RegexOut(content) {
  var Preg0 = RegExp(Pregout, "i")
  cnt = content //.split("tag=")[1]
  if (!Preg0.test(cnt)) {
    return content
  } else {
    RegoutList.push(cnt)
  }
}

// 判断节点过滤的函数
function Scheck(content, param) {
    name = content.replace(/tag\s*\=/g,"tag=").split("tag=")[1].toUpperCase()
    param = param ? param.map(Dot2) : param // 对符号.的特殊处理
    if (param) {
        var flag = 0;
        for (var i = 0; i < param.length; i++) {
            var params = param[i].split(".").map(ToDot);
            const checkpara = (item) => name.indexOf(item.toUpperCase()) != -1;
            if (params.every(checkpara)) {
                flag = 1
            }
        }//for
        return flag
    } else { //if param
        return 2
    }
}

//节点过滤，使用+连接多个关键词(逻辑"或"):in 为保留，out 为排除, "与"逻辑请用符号"."连接
function Filter(servers, Pin, Pout) {
    var Nlist = [];
    var Delist = [];
    var Nname = [];
    servers = servers.filter(Boolean)
    for (var i = 0; i < servers.length; i++) {
        if (Scheck(servers[i], Pin) != 0 && Scheck(servers[i], Pout) != 1) {
            Nlist.push(servers[i])
            Nname.push(servers[i].replace(/ /g, "").split("tag=")[1])
        } else { Delist.push(servers[i].replace(/ /g, "").split("tag=")[1]) } //记录未被保留节点
    }//for
    var no = Delist.length <= 10 ? emojino[Delist.length] : Delist.length;
    var no1 = Nlist.length <= 10 ? emojino[Nlist.length] : Nlist.length;
    if (Pntf0 == 1 && Delist.length >= 1) {//通知部分
        if (Pin && no1 > 0) { //有 in 参数就通知保留部分
            $notify("👥 引用" + "⟦" + subtag + "⟧" + " 开始节点筛选", "🕹 筛选关键字: " + pfi + pfo, "☠️ 已保留以下 " + no1 + "个节点\n" + Nname.join(", "), sub_link);
        } else if (Pout && no > 0) {
            $notify("👥 引用" + "⟦" + subtag + "⟧" + " 开始节点筛选", "🕹 筛选关键字: " + pfi + pfo, "☠️ 已删除以下 " + no + "个节点\n" + Delist.join(", "), sub_link);
        }
    } else if (no1 == 0 || no1 == null) { //无剩余节点时强制通知
        $notify("‼️ ⟦" + subtag + "⟧" + "筛选后节点数为0️⃣", "⚠️ 请自行检查原始链接以及筛选参数", link0, sub_link);
    }
    return Nlist
}

function FilterScript(servers, script) {
    $notify("🤖 启用脚本进行筛选", "", script);
    try {
        const $ = Tools();
        eval(script);
        // extract server tags
        const nodes = Tools().getNodeInfo(servers);
        const IN = filter(nodes);
        const res = servers.filter((_, i) => IN[i]);
        if (res.length === 0) {
            $notify("‼️ ⟦" + subtag + "⟧" + "筛选后节点数为0️⃣", "⚠️ 请自行检查原始链接以及筛选参数", link0, sub_link);
        }
        return res;
    } catch (err) {
        $notify("❌ 脚本筛选出现错误", "", err);
        return servers;
    }
}

//a.c.com:0031:origin:aes-256-gcm:plain:pwdpwd/?obfsparam=&remarks=xxxx
//SSR 类型 URI 转换 quanx 格式
function SSR2QX(subs, Pudp, Ptfo) {
    var nssr = []
    var cnt = Base64.decode(subs.split("ssr://")[1].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0]
    var obfshost = '';
    var oparam = '';
    if(Pdbg==1) {$notify("ssr","content",cnt)}
    if (cnt.split(":").length <= 8) { //排除难搞的 ipv6 节点
        type = "shadowsocks=";
        ip = cnt.split(":")[0] + ":" + cnt.split(":")[1];
        pwd = "password=" + Base64.decode(cnt.split("/?")[0].split(":")[5].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0];
        mtd = "method=" + cnt.split(":")[3];
        obfs =cnt.split(":")[4]!= "plain"? "obfs=" + cnt.split(":")[4] : ""; //plain?
        ssrp = cnt.split(":")[2] != "origin"? "ssr-protocol=" + cnt.split(":")[2] : ""; //origin?
        if (cnt.indexOf("obfsparam=") != -1 && obfs != "") {
            obfshost = cnt.split("obfsparam=")[1].split("&")[0] != "" ? "obfs-host=" + Base64.decode(cnt.split("obfsparam=")[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/")).split(",")[0].split("\u0000")[0] : ""
        }
        if (cnt.indexOf("protoparam=") != -1) {
            oparam = cnt.split("protoparam=")[1].split("&")[0] != "" ? "ssr-protocol-param=" + Base64.decode(cnt.split("protoparam=")[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/")).split(",")[0].split("\u0000")[0]  : ""
        }
        tag = "tag=" + (Base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/"))).split("\u0000")[0]
        pudp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
        ptfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
        nssr.push(type + ip, pwd, mtd, obfs , obfshost, oparam, ssrp, pudp, ptfo, tag)
        QX = nssr.filter(Boolean).join(", ")
    } else { QX = "" }
    return QX;
}

// AnyTLS uri 转换成 quanx 格式
//anytls://pwd@name:443?peer=xxx.com&udp=1#US-A-ANYTLS-0.5%E5%80%8D%E7%8E%8
// tls with reality
//anytls://ip:port?security=reality&pbk=yourkey&sid=yourshortip&fp=chrome&sni=sample.com#Server-Anytls_Reality

function Anytls2QX(subs,Pcert0) {
  try {
    var Nanytls=[];
    var cnt=subs.split("anytls://")[1]
    type="anytls=";
    ip = cnt.split("@")[1].split("encry")[0].split("?")[0];
    pwd = cnt.split("@")[0]? "password=" + cnt.split("@")[0]:"";
    ptls="over-tls=true"
    pcert = cnt.indexOf("allowInsecure=0") != -1 ? "tls-verification=true" : "tls-verification=false";
    if (Pcert0 == 0) { 
      pcert = "tls-verification=false" 
    } else if (Pcert0 == 1) {
      pcert = "tls-verification=true"
    }
    thost = cnt.indexOf("sni=") != -1? "tls-host="+cnt.split("sni=")[1].split(/&|#/)[0]:""
    thost = cnt.indexOf("peer=") != -1? "tls-host="+cnt.split("peer=")[1].split(/&|#/)[0]:thost
    pudp = Pudp0 == -1 ? "udp-relay=false" : "udp-relay=true" // 默认开启
    tag = cnt.indexOf("#") != -1 ? "tag=" + decodeURIComponent(cnt.split("#").slice(-1)[0]) : "tag= [anytls]" + ip
    // reality
    prlt= version>=914? Reality_Handle(cnt) : ""
    Nanytls.push(type + ip, pwd, ptls, pcert, pudp, thost, prlt, tag)
    QX= Nanytls.filter(Boolean).join(", ")
    return QX
  } catch (error) {
    console.log(error)
  }
}

// Vless uri 转换成 QUANX 格式
// vless://pwd@a.b.c.gq:443?encryption=none&security=tls&type=ws&host=a.b.c.d&path=dsjdaaaaj#VLESS_WSS
// Vless Shadowrocket URI
// vless://YXV0bzpkampkakAxLjEuMS4xOjY2NjY?remarks=vless&obfsParam=123.com&path=/jsjdj&obfs=websocket&tls=1&peer=abc.com&tfo=1
//;vless=example.com:443, method=none, password=23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, obfs=wss, obfs-uri=/ws, fast-open=false, udp-relay=false, tag=vless-ws-tls-01
//vless://YXV0bzpkampkakAxLjEuMS4xOjY2NjY?remarks=vless&obfsParam=hshdh&path=/jsjdj&obfs=http&tls=1&peer=abc.com&tfo=1
//vls = VLESS,1.1.1.1,443,"b0dd64e4-0fbd-4038-9139-d1f32a68a0dc",transport=ws,path=patha,host=host.com,udp=true,over-tls=true,tls-name=sni.co
function VL2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
  var nvless = []
  var cnt = subs.split("vless://")[1]
  type = "vless=";
  mtd= "method=none"
  obfs=""
  thost=""
  if((cnt.indexOf("remarks=")==-1 && cnt.indexOf("remark=")==-1) && cnt.indexOf("@")!=-1) { // normal URI
  typeU = "URI"
  ip = cnt.split("@")[1].split("encry")[0].split("?")[0];
  pwd = cnt.split("@")[0]? "password=" + cnt.split("@")[0]:"";
  pcert = cnt.indexOf("allowInsecure=0") != -1 ? "tls-verification=true" : "tls-verification=false";
  thost = cnt.indexOf("sni=") != -1? "tls-host="+cnt.split("sni=")[1].split(/&|#/)[0]:""
  thost = cnt.indexOf("peer=") != -1? "tls-host="+cnt.split("peer=")[1].split(/&|#/)[0]:thost
  tag = cnt.indexOf("#") != -1 ? "tag=" + decodeURIComponent(cnt.split("#").slice(-1)[0]) : "tag= [vless]" + ip
  } else { // shadowrocket style
    typeU = "SR-URI"
    b64part = Base64.decode(cnt.split("?")[0])
    ip = b64part.split("@")[1]
    pwd = "password=" + b64part.split("@")[0].split(":")[1]
    tag = cnt.indexOf("remarks=") != -1 ? "tag=" + decodeURIComponent(cnt.split("remarks=")[1].split("&")[0]) : "tag= [vless]" + ip
    tag = cnt.indexOf("remark=") != -1 ? "tag=" + decodeURIComponent(cnt.split("remark=")[1].split("&")[0]) : tag
  }
 
  puri = ""
 
  pudp = (Pudp == 1 || cnt.indexOf("udp=1")!=-1) ? "udp-relay=true" : "udp-relay=false";
  ptfo = (Ptfo == 1 || cnt.indexOf("tfo=1")!=-1)? "fast-open=true" : "fast-open=false";
  //ptfo = cnt.indexOf("tfo=1") != -1? "fast-open=true" : ptfo
  if (typeU == "SR-URI") {//小火箭内的websocket写法
    if((cnt.indexOf("obfs=none")!=-1 || cnt.indexOf("obfs=")==-1) && cnt.indexOf("tls=1")==-1) {
      // tcp
      obfs = ""
    } else if((cnt.indexOf("obfs=none")!=-1 || cnt.indexOf("obfs=")==-1) && cnt.indexOf("tls=1")!=-1) {
      obfs = "obfs=over-tls"
    } else if(cnt.indexOf("obfs=http")!=-1) {
      obfs = "obfs=http"
    } else if(cnt.indexOf("obfs=websocket")!=-1) {
      obfs = cnt.indexOf("tls=1") != -1? "obfs=wss" : "obfs=ws"
    } else { //不支持类型
      type="NS"
    }
  thost=cnt.indexOf("obfsParam=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("obfsParam=")[1].split("&")[0].split("#")[0]).replace(/\"|(Host\":)|\{|\}/g,"")
  thost=cnt.indexOf("sni=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("sni=")[1].split("&")[0].split("#")[0]).replace(/\"|(Host\":)|\{|\}/g,"")
  thost=cnt.indexOf("peer=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("peer=")[1].split("&")[0].split("#")[0]).replace(/\"|(Host\":)|\{|\}/g,"")

  puri = cnt.indexOf("path=") == -1? puri : "obfs-uri=" + decodeURIComponent(cnt.split("path=")[1].split("&")[0].split("#")[0])
  } else if (cnt.indexOf("&type=ws")!=-1 || cnt.indexOf("?type=ws")!=-1 || cnt.indexOf("type=http")!=-1 || cnt.indexOf("security=tls")!=-1 || cnt.indexOf("security=reality")!=-1) {//v2rayN uri
    if(cnt.indexOf("type=http") != -1) {
      obfs="obfs=http"
    } else if (cnt.indexOf("type=ws") != -1) {
      obfs = cnt.indexOf("security=tls") != -1 || cnt.indexOf("security=reality")!=-1? "obfs=wss" : "obfs=ws" 
    } else if(cnt.indexOf("type=")==-1 || cnt.indexOf("type=tcp")!=-1) {
      obfs = "obfs=over-tls"
    } else if(cnt.indexOf("type=")!=-1 && cnt.indexOf("type=tcp")==-1) {//暂不支持类型
    type="NS"
  }
    thost=cnt.indexOf("&host=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("&host=")[1].split("&")[0].split("#")[0])
    thost=cnt.indexOf("sni=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("sni=")[1].split("&")[0].split("#")[0]).replace(/\"|(Host\":)|\{|\}/g,"")
    puri = cnt.indexOf("&path=") == -1? puri : "obfs-uri=" + decodeURIComponent(cnt.split("&path=")[1].split("&")[0].split("#")[0])
  } 
if(obfs=="obfs=wss" && obfs=="obfs=over-tls"){
  ptls13 = PTls13 == 1 ? "tls13=true" : "tls13=false"
  if (Pcert0 == 0) { 
    pcert = "tls-verification=false" 
  } else if (Pcert0 == 1) {
    pcert = "tls-verification=true"
  }
} else {
  pcert=""
  ptls13=""
}
// Reality para 2025-12-30
  prlt= version>=891? Reality_Handle(cnt) : ""
  nvless.push(type + ip, pwd, mtd, obfs, pcert, thost, puri, pudp, ptfo, prlt, tag)
  QX = type!="NS"? nvless.filter(Boolean).join(", ")  : ""
  if (type=="NS") {
    PNS=PNS+1
    NSList.push(numToEmoji10(PNS)+subs)
  }
  return QX
}

//Trojan 类型 URI 转换成 QX, 包含小火箭类型
function TJ2QX(subs, Pudp, Ptfo, Pcert0, PTls13) {
    var ntrojan = []
    var cnt = subs.split("trojan://")[1]
    type = "trojan=";
    if (cnt.indexOf(":443") != -1) {
        ip = cnt.split("@")[1].split(":443")[0] + ":443";
    } else {
        ip = cnt.split("@")[1].split("?")[0].split("\n")[0].split("#")[0].trim(); //非 443 端口的奇葩机场？
    }
    pwd = cnt.split("@")[0]? "password=" + decodeURIComponent(cnt.split("@")[0]):"";
    obfs = "over-tls=true";
    pcert = cnt.indexOf("allowInsecure=0") != -1 ? "tls-verification=true" : "tls-verification=false";
    thost = cnt.indexOf("sni=") != -1? "tls-host="+cnt.split("sni=")[1].split(/&|#/)[0]:""
    thost = cnt.indexOf("peer=") != -1? "tls-host="+cnt.split("peer=")[1].split(/&|#/)[0]:thost
    ptls13 = PTls13 == 1 ? "tls13=true" : "tls13=false"
    puri = ""
    if (Pcert0 == 0) { 
      pcert = "tls-verification=false" 
    } else if (Pcert0 == 1) {
      pcert = "tls-verification=true"
    }
    pudp = (Pudp == 1 || cnt.indexOf("udp=1")!=-1) ? "udp-relay=true" : "udp-relay=false";
    ptfo = (Ptfo == 1 || cnt.indexOf("tfo=1")!=-1)? "fast-open=true" : "fast-open=false";
    //ptfo = cnt.indexOf("tfo=1") != -1? "fast-open=true" : ptfo
    tag = cnt.indexOf("#") != -1 ? "tag=" + decodeURIComponent(cnt.split("#").slice(-1)[0]) : "tag= [trojan]" + ip
    if (cnt.indexOf("&plugin=obfs-local")!=-1) {//小火箭内的websocket写法
    obfs = cnt.indexOf("obfs=websocket") != -1? "obfs=wss" : obfs 
    thost=cnt.indexOf("obfs-host=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("obfs-host=")[1].split(";")[0].split("#")[0])
    puri = cnt.indexOf("obfs-uri=") == -1? puri : "obfs-uri=" + decodeURIComponent(cnt.split("obfs-uri=")[1].split(";")[0].split("#")[0])
    } else if (cnt.indexOf("&type=ws")!=-1 || cnt.indexOf("?type=ws")!=-1) {//v2rayN uri
      obfs = cnt.indexOf("security=tls") != -1? "obfs=wss" : obfs 
      thost=cnt.indexOf("&host=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("&host=")[1].split("&")[0].split("#")[0])
      puri = cnt.indexOf("&path=") == -1? puri : "obfs-uri=" + decodeURIComponent(cnt.split("&path=")[1].split("&")[0].split("#")[0])
    }
    // Reality para 2025-12-31
    prlt= version>=891? Reality_Handle(cnt) : ""
    ntrojan.push(type + ip, pwd, obfs, pcert, thost, puri, pudp, ptfo,prlt,tag)
    QX = ntrojan.filter(Boolean).join(", ");
    //$notify("title","subtitle",QX)
    return QX;
}

function joinx(total,item) {
  return total+":"+item
}

//SS 类型 URI 转换 quanx 格式
function SS2QX(subs, Pudp, Ptfo) {
  var nssr = []
  var cnt = subs.split("ss://")[1]
  QX=""
  if (cnt.split(":").length <= 10) { //排除难搞的 ipv6 节点
    type = "shadowsocks=";
    let cntt = cnt.split("#")[0]// 
    //console.log(cntt)
    if (cntt.indexOf("@") != -1 && cntt.indexOf(":") != -1) { 
      ip = cnt.split("@")[1].split("#")[0].split("/")[0].split("?")[0];
      if(cntt.indexOf("%")==-1 || cntt.split("@")[0].indexOf(":")==-1){ // 2025-05-16 
        pwdmtd = Base64.decode(cnt.split("@")[0].replace(/-/g, "+").replace(/_/g, "/").replace(/%3D/g,"")).split("\u0000")[0].split(":")
      } else {
        pwdmtd = decodeURIComponent(cnt.split("@")[0]).split(":")
      }
    } else if (cntt.indexOf("?")==-1) { // 后部 b64 encode 类型
      var cnt0 = Base64.decode(cnt.split("#")[0].replace(/-/g, "+").replace(/_/g, "/").split("\u0000")[0]);
      ip = cnt0.split("@")[1].split("#")[0].split("/")[0];
      pwdmtd = cnt0.split("@")[0].split(":")
    } else if (cntt.indexOf("?") !=-1) { // 火箭类型？
      var cnt0 = Base64.decode(cnt.split("#")[0].split("?")[0].replace(/-/g, "+").replace(/_/g, "/").split("\u0000")[0]);
      var cnt1 = Base64.decode(cnt.split("#")[0].split("?")[1].split("=")[1].replace(/-/g, "+").replace(/_/g, "/").split("\u0000")[0]);
      ip = cnt0.split("@")[1].split("#")[0].split("/")[0];
      pwdmtd = cnt0.split("@")[0].split(":")
    } 
    if(Pdbg) {$notify("dd","",pwdmtd)}
    mtd = "method=" + pwdmtd[0];
    pwdmtd.splice(0,1) 
    pwd = "password=" + pwdmtd.reduce(joinx);
    if (cntt.indexOf("v2ray-plugin")==-1 && cntt.indexOf("plugin=v2ray")==-1) { //Shadowrocket style v2-plugin
      obfs = cnt.split("obfs%3D")[1] != null ? ", obfs=" + cnt.split("obfs%3D")[1].split("%3B")[0].split("#")[0] : "";
      obfshost = cnt.split("obfs-host%3D")[1] != null ? ", obfs-host=" + cnt.split("obfs-host%3D")[1].split("&")[0].split("#")[0] : "";
    } else if (cnt1 != undefined){
      cnt1 = JSON.parse(cnt1)
      obfs= cnt1.tls? ", obfs=wss" : ", obfs=ws"
      obfshost = cnt1.host? ", obfs-host="+cnt1.host+", tls-verification=false" : ""
    } else if (cntt.indexOf("v2ray-plugin")!=-1){
      cnt1 = decodeURIComponent(cntt.split("v2ray-plugin")[1])
      obfs= cnt1.indexOf("tls")!=-1? ", obfs=wss" : ", obfs=ws"
      obfshost = cnt1.indexOf("host=")!=-1? ", obfs-host="+cnt1.split("host=")[1].split(";")[0].split("#")[0].trim() : ""
      obfshost = obfshost != "obfs-host="? obfshost : ""
      //$notify("CNTT","",cnt1+obfs+obfshost)
    } else if (cntt.indexOf("plugin=v2ray")!=-1) {
      cnt1 = decodeURIComponent(cntt.split("plugin=v2ray")[1])
      obfs= cnt1.indexOf("tls")!=-1? ", obfs=wss" : ", obfs=ws"
      obfshost = cnt1.indexOf("host=")!=-1? ", obfs-host="+cnt1.split("host=")[1].split(";")[0].split("#")[0].trim() : ""
      obfshost = obfshost != "obfs-host="? obfshost : ""
      //$notify("CNTT","",cnt1+obfs+obfshost)

    }
    tag = decodeURIComponent(cnt.split("#")[1])!="undefined"? "tag=" + decodeURIComponent(cnt.split("#")[1]) : "tag=" + ip
    pudp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
    ptfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
    nssr.push(type + ip, pwd, mtd + obfs + obfshost, pudp, ptfo, tag)
    QX = nssr.join(", ")
    if(Pdbg==1) {$notify("SS","content",cnt+"\n"+QX)}
  }
  return QX;
}


//SSD 类型 URI 转换 quanx 格式
function SSD2QX(subs, Pudp, Ptfo) {
    var j = 0
    var QX = []
    var cnt = JSON.parse(Base64.decode(subs.split("ssd://")[1]))
    var type = "shadowsocks=";
    var pwd = "password=" + cnt.password;
    var mtd = "method=" + cnt.encryption;
    var obfs = ""
    var obfshost = ""
    var port = cnt.port ? ":" + cnt.port : ""
    if (cnt.plugin_options) {
        obfs = cnt.plugin_options.split(";")[0] != null ? ", " + cnt.plugin_options.split(";")[0] : "";
        obfshost = cnt.plugin_options.split(";")[1] != null ? ", " + cnt.plugin_options.split(";")[1] : "";
    }
    pudp = Pudp == 1 ? "udp-relay=true" : "udp-relay=false";
    ptfo = Ptfo == 1 ? "fast-open=true" : "fast-open=false";
    for (var i in cnt.servers) {
        ip = cnt.servers[i].server;
        if (cnt.servers[i].plugin_options) {
            obfs = cnt.servers[i].plugin_options.split(";")[0] != null ? ", " + cnt.servers[i].plugin_options.split(";")[0] : "";
            obfshost = cnt.servers[i].plugin_options.split(";")[1] != null ? ", " + cnt.servers[i].plugin_options.split(";")[1] : "";
        }
        if (cnt.servers[i].encryption) {  //独立的加密方式
            mtd = "method=" + cnt.servers[i].encryption
        }
        if (cnt.servers[i].password) {  //独立的密码
            pwd = "password=" + cnt.servers[i].password
        }
        if (ip.indexOf(".") > 0) { //排除难搞的 ipv6 节点
            port = cnt.servers[i].port ? ":" + cnt.servers[i].port : port;
            tag = "tag=" + cnt.servers[i].remarks;
            QX[j] = type + ip + port + ", " + pwd + ", " + mtd + obfs + obfshost + ", " + pudp + ", " + ptfo + ", " + tag;
            var j = j + 1;
        }
    }
    return QX;
}

// 纠正部分不规范的写法(没有把 tag 写在最后)
function QXFix(cntf) {
var cnti = cntf.replace(/\s*tag\s*\=/g,"tag=").replace("chacha20-poly","chacha20-ietf-poly")
try {
  var hd = cnti.split(",tag=")[0]
  var tag = "tag="+cnti.split(",tag=")[1].split(",")[0].trim()
  var tail = cnti.split(tag+",")
  cnti = tail.length<=1?  cnti : String(hd + ","+tail[1].split("\r")[0] +"," + tag)
  cntis = cnti.split(",").filter(Boolean).map(item => item.trim()) //防止节点名中有,符号而导致的错误情况
  tagfix = ""
  cntii = ""
  for (i in cntis) {
    if (cntis[i].indexOf("=") == -1 && cntis[i].trim() !="") {  // tag 中多出的项目
      tagfix += ","+cntis[i]
    } else {
      cntis[i].indexOf("tag=") != 0? cntii += cntis[i]+", ": cntii=cntii
    }
  }
  cntii = cntii+tag+tagfix
  //$notify("tag-fix","Look","cntf:\n"+cntf+"\nhd:\n"+hd+"\ntag:\n"+tag+"\ntail:\n"+tail+"\ncnti: \n"+cnti +"\n\ncntii: \n"+cntii)
  return cntii
} catch (err) {
  if(Perror == 0) {
  $notify("❌ 解析出现错误,已忽略该条目", "⚠️ 请点击通知，发送订阅链接进行反馈", cntf+"\n"+ err, bug_link);
}
}
  return ""
}

// 用于过滤非节点部分（比如整份配置中其它内容）,同时纠正部分不规范的写法(没有把 tag 写在最后)
function isQuanX(content) {
    var cnts = content.split("\n");
    var nlist = []
    for (var i = 0; i < cnts.length; i++) {
        var cnti = cnts[i];
        if (cnti.indexOf("=") != -1 && cnti.indexOf("tag") != -1) {
            var cnt = cnti.split("=")[0].trim()
            if (cnt == "http" || cnt == "shadowsocks" || cnt == "trojan" || cnt == "vmess" || cnt == "socks5" || cnt == "vless" ||  cnt == "anytls") {
                nlist.push(QXFix(cnti))
            }
        }
    }
   return nlist
}

//surge script/quanx-rewrite - > quanx
function isQuanXRewrite(content) {
  cnt = content.filter(Boolean)
  cnt0=[]
  var RuleK = ["host,", "-suffix,", "DOMAIN","domain,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,","force-http", "ip-asn"];
  for (var i = 0; i< cnt.length; i++){
    if(cnt[i]){
      var cnti = cnt[i].trim()
      const RuleCheck = (item) => cnti.toLowerCase().indexOf(item) != -1;
      if (cnti.indexOf("pattern")!=-1 && cnti.indexOf("type")!=-1 || cnti.indexOf("http-r")!=-1) {
        cnti=SGMD2QX(cnti)[0]? SGMD2QX(cnti)[0]:""
        //console.log(cnti)
      }else if ((cnti.indexOf(" 302")!=-1 || cnti.indexOf(" 307")!=-1 || (/\s(_|-)\s(reject|REJECT)/.test(cnti)) || (/\sreject$/.test(cnti)) || (/\sreject-/.test(cnti))) && cnti.indexOf(" url ")==-1 && cnti.indexOf(" url-and-header ")==-1 ){
        cnti=SGMD2QX(cnti)[0]? SGMD2QX(cnti)[0]:""
        //console.log("sss",cnti)
      }else if(cnti.indexOf(" data=")!=-1){
        cnti = SGMD2QX("[Map Local]\n"+cnti)[0]? SGMD2QX("[Map Local]\n"+cnti)[0]:""
        //cnti=cnti.replace(/ /g, "").split("data=")[0] + " url " + "reject-dict"
      }else if(cnti.indexOf("URL-REGEX")!=-1 || cnti.indexOf(" header")!=-1 || cnti.replace(/ /g,"").indexOf("hostname=")!=-1){
        cnti=SGMD2QX(cnti)[0]? SGMD2QX(cnti)[0]:""
      }else if (cnti.indexOf(" url ")!=-1 && cnti.indexOf(" simple-response ")==-1 && cnti.indexOf(" url = ")==-1){ // 2023-03-09 去掉 quan类型的 simple- response
        cnti = cnti.replace("^http","http") // 去掉 ^ 以去重
        cnti= cnti.split(" ")[1] == "url" ? cnti : ""
      } else if (cnti.indexOf(" url-and-header ")!=-1 ){ // url-and-header : ^https:xxx.com header-content url-and-header type-rule content
        cnti= cnti //cnti.split(" ")[2] == "url-and-header" ? cnti : ""
      } else if (RuleK.some(RuleCheck) && Pmix==1) {
        cnti= Rule_Policy(cnti)
      } else if (Pjsonjq==0 && cnti.indexOf(" url jsonjq-")!=-1) { // lower version jsonjq pass
        cnti=""
      } else {
        cnti=""
      }
      if (cnti!="" && cnti.trim()[0]!="[" && cnti.indexOf("RULE-SET")==-1 && !/cronexp\=|type\=cron/.test(cnti.replace(/ /g,""))) { //&& !RuleK.some(RuleCheck)
        if (!(/\;$/.test(cnti))) { // 某些特殊情形 let url = xxx;
        cnt0.push(cnti) //  排除其它项目后写入
        //$notify(cnti,"已经写入")
      }
      }
    }
  }
  //console.log(cnt0)
  return cnt0
}



//根据节点名排序(不含emoji 部分)
function QXSort(content, para) {
    var nlist = content;//.split("\n");
    if (para == 1) {
        return nlist.sort(ToTag)
    } else if (para == -1) {
        return nlist.sort(ToTagR)
    } else if(para == "x") {
        return shuffle(nlist)
    } else if(para == "0") {
        return nlist
    } else {
      return Sort_KWD (nlist,para) //关键词排序
    }
}
//正序
function ToTag(elem1, elem2) {
    var tag1 = elem1.split("tag")[1].split("=")[1].trim()
    var tag2 = elem2.split("tag")[1].split("=")[1].trim()
    res = tag1 > tag2 ? 1 : -1
    return res
}
//逆序
function ToTagR(elem1, elem2) {
    var tag1 = elem1.split("tag")[1].split("=")[1].trim()
    var tag2 = elem2.split("tag")[1].split("=")[1].trim()
    res = tag1 > tag2 ? -1 : 1
    return res
}
// 随机洗牌排序
function shuffle(arr) {
    var input = arr;
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

//根据指定规则排序
function Sort_KWD (cnt,strs) {
  strlist = strs.indexOf("<") != -1 ? strs.split("<"):strs.split(">")
  regj = strlist.map(item => RegExp(item, "i"))
  //dir = PsortX
  dir = strs.indexOf("<") != -1 ? -1:1
  var arr =  new Array(strlist.length+1);   //表格有n行
  for(var i = 0;i < arr.length; i++){
    arr[i] = [];    //每行有列
  }
  for (var i =0; i<cnt.length ; i++) {
    flag = 0
    for (var j=0; j<strlist.length ; j++){
      if(regj[j].test(cnt[i])) {
        arr[j].push(cnt[i])
        flag = 1
        break
      } 
    }
    if (flag != 1){
      arr[strlist.length].push(cnt[i]) } // 不匹配项
  }
  //console.log(arr)
  arr = PsortX == -1? arr.map(item => item.sort(ToTagR)):arr
  arr = PsortX == 1? arr.map(item => item.sort(ToTag)):arr
  newarr = MixArr(arr,dir)
  return newarr
}

function MixArr(cnt,dir){
  var cnt0=[]
  for (i=0; i<cnt.length-1; i++){
    //console.log(dir)
    cnt0 = dir ==1? cnt0.concat(cnt[i]):cnt0.concat(cnt[cnt.length-2-i])
  }
  cnt0 = dir ==1? cnt0.concat(cnt[cnt.length-1].sort(ToTag)):(cnt[cnt.length-1].sort(ToTagR)).concat(cnt0)
  return cnt0
}


//正则删除节点名内的字符
function DelReg(content) {
    delreg = RegExp(delreg, "gmi")
    content=content.replace(/tag\s*\=\s*/,"tag=")
    cnt0 = content.split("tag=")[0]
    cnt1 = content.split("tag=")[1].split(",")[0]
    cnt2 = content.split("tag=")[1].split(",").length==1 ? "": content.split(cnt1)[1]
    cnt = cnt0 + "tag=" + cnt1.replace(delreg, "")+cnt2
    return cnt
}

//节点重命名
function Rename(str) {
    var server = str;
    if (server.indexOf("tag=") != -1) {
        hd = server.split("tag=")[0] // 非 name 部分
        name = server.split("tag=")[1].split(",")[0].trim() // name 部分
        tail = server.split("tag=")[1].split(",").length <=1 ? "" : server.split("tag=")[1].split(name)[1]
        for (var i = 0; i < Prn.length; i++) {
            nname = Prn[i].split("@")[1] ? decodeURIComponent(Prn[i].split("@")[1]) : Prn[i].split("@")[1];
            oname = Prn[i].split("@")[0] ? decodeURIComponent(Prn[i].split("@")[0]) : Prn[i].split("@")[0];
            if (oname && nname) { //重命名
                var rn = escapeRegExp(oname)
                name = name.replace(new RegExp(rn, "gm"), nname)
            } else if (oname && nname == "") {//前缀
                var nemoji = emoji_del(name)
                if ((Pemoji == 1 || Pemoji == 2) && Prname ) { //判断是否有重复 emoji，有则删除旧有
                    name = oname + nemoji //name.replace(name.split(" ")[0] + " ", name.split(" ")[0] + " " + oname)
                } else { name = oname + name.trim() }
            } else if (nname && oname == "") {//后缀
                name = name.trim() + nname
            } else if (oname && oname.indexOf("☠️") != -1) { //删除特定字符，多字符用.连接
                hh = Dot2(oname.slice(0, oname.length - 2)).split(".") //符号.的特殊处理
                for (j = 0; j < hh.length; j++) {
                    var nn = escapeRegExp(ToDot(hh[j]))
                    var del = new RegExp(nn, "gm");
                    name = name.replace(del, "")
                }
            } else if (oname == "" && nname == "") { //仅有@时，删除@符号
                name = name.replace(/@/g, "")
            } else {
                name = name
            }
            nserver = hd + "tag=" + name + tail
        }
      return nserver
    } else {
      return server
    }
}

function RenameScript(servers, script) {
    $notify("🤖 启用脚本进行重命名", "", script);
    try {
        const $ = Tools().rename;
        // extract server tags
        const nodes = Tools().getNodeInfo(servers);
        eval(script);
        const newNames = rename(nodes);
        // rename nodes
        return servers.map((s, i) => s.split("tag=")[0] + "tag=" + newNames[i]);
    } catch (err) {
        $notify("❌ 脚本重命名出现错误", "", err);
        return servers;
    }

}

//删除 emoji 
function emoji_del(str) {
    return str.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim();//unescape(escape(str).replace(/\%uD.{3}/g, ''));
}

//为节点名添加 emoji
function get_emoji(emojip, sname) {
   var Lmoji = { 
    "🏳️‍🌈": ["流量", "套餐", "剩余", "重置", "到期" , "时间", "应急", "过期", "Bandwidth", "expire", "Traffic", "traffic"],
    "🇴🇲": ["阿曼", " OM "],
    "🇦🇩": ["安道尔","安道爾", "Andorra"],
    "🇦🇴": ["安哥拉"],
    "🇦🇫": ["阿富汗"],
    "🇩🇿": ["阿尔及利亚","阿爾及利亞"],
    "🇫🇴": ["法羅群島","法罗群岛"],
    "🇧🇲": ["百慕大"],
    "🇦🇽": ["奧蘭群島", "奥兰群岛"],
    "🇦🇿": ["阿塞拜疆","Azerbaijan"],
    "🇦🇹": ["奥地利", "奧地利", "Austria", "维也纳"],
    "🇦🇺": ["AU", "Australia", "Sydney", "澳大利亚", "澳洲", "墨尔本", "悉尼" ,"土澳", "京澳","廣澳","滬澳","沪澳","广澳"],
    "🇧🇪": ["BE", "比利時","比利时","Belgium"],
    "🇧🇬": ["保加利亚", "保加利亞","Bulgaria"],
    "🇵🇰": ["巴基斯坦","Pakistan", "PAKISTAN"],
    "🇧🇭": ["巴林","Bahrain"],
    "🇵🇾": ["巴拉圭","Paraguay"],
    "🇧🇧": ["巴巴多斯"],
    "🇬🇶": ["赤道几内亚","赤道幾內亞"],
    "🇹🇱": ["东帝汶","東帝汶"],
    "🇰🇭": ["柬埔寨","Cambodia"],
    "🇿🇼": ["津巴布韦","津巴布韋"],
    "🇺🇦": ["烏克蘭","乌克兰","Ukraine"],
    "🇺🇿": ["乌兹别克斯坦", "烏茲別克斯坦","Uzbekistan"],
    "🇭🇷": ["克罗地亚","HR","克羅地亞", "Croatia"],
    "🇨🇦": ["CA", "Canada","CANADA", "CAN", "Waterloo", "加拿大", "蒙特利尔", "温哥华", "楓葉", "枫叶", "滑铁卢", "多伦多"],
    "🇨🇭": ["瑞士", "苏黎世", "Switzerland", "CH "],
    "🇳🇬": ["尼日利亚", "NG", "尼日利亞","拉各斯", "Nigeria"],
    "🇨🇿": ["Czechia", "捷克"],
    "🇸🇰": ["斯洛伐克", "SK" , "Slovakia"],
    "🇸🇮": ["斯洛文尼亚", "斯洛文尼亞", "Slovenia"],
    "🇦🇲": ["亚美尼亚", "亞美尼亞", "Armenia"],
    "🇷🇸": ["RS ","RS_", "塞尔维亚", "塞爾維亞", "Seville", "Sevilla"],
    "🇲🇩": ["摩爾多瓦"," MD-","摩尔多瓦", "Moldova"," MD "],
    "🇩🇪": ["DE ", "DE-", "DE_", "German", "GERMAN", "德国", "德國", "法兰克福","京德","滬德","廣德","沪德","广德"],
    "🇩🇰": ["DK","DNK","丹麦","丹麥", "Denmark"],
    "🇪🇸": ["ES", "西班牙", "Spain"],
    "🇪🇺": ["EU", "欧盟", "欧罗巴","欧洲", "European"],
    "🇫🇮": ["Finland", "芬兰","芬蘭","赫尔辛基"],
    "🇫🇷": ["FR", "France", "法国", "法國", "巴黎"],
    "🇷🇪": ["留尼汪", "留尼旺", "Réunion", "Reunion"],
    "🇨🇼": ["库拉索", "庫拉索", "Curaçao"],
    "🇬🇧": ["UK", "GB ", "England", "United Kingdom", "英国", "伦敦", "英", "Britain"],
    "🇲🇴": ["MO", "Macao","Macau", "MAC", "澳门", "澳門", "CTM"],
    "🇰🇿": ["哈萨克斯坦", "哈薩克斯坦", "Kazakhstan"],
    "🇱🇦": ["老挝","老挝", "Laos"],
    "🇭🇺": ["匈牙利", "Hungary"],
    "🇭🇳": ["洪都拉斯"],
    "🇱🇹": ["立陶宛", "Lithuania"],
    "🇱🇰": ["斯里兰卡", "斯里蘭卡", "Sri Lanka"],
    "🇧🇾": ["BY","白俄罗斯","白俄羅斯", "White Russia", "Republic of Belarus", "Belarus"],
    "🇷🇺": ["RU ","RU-", "RU_", "RUS", "Russia", "俄罗斯", "毛子", "俄国", "俄羅斯", "伯力", "莫斯科", "圣彼得堡", "西伯利亚", "新西伯利亚", "京俄", "杭俄","廣俄","滬俄","广俄","沪俄"],
    "🇸🇬": ["SG", "Singapore","SINGAPORE", "新加坡", "狮城", "獅城", "沪新", "京新", "泉新", "穗新", "深新", "杭新", "广新","廣新","滬新"],
    "🇺🇸": ["US", "USA", "America", "United States", "美国", "美", "京美", "波特兰", "达拉斯", "俄勒冈", "凤凰城", "费利蒙", "硅谷", "矽谷", "拉斯维加斯", "洛杉矶", "圣何塞", "圣荷西", "圣克拉拉", "西雅图", "芝加哥", "沪美", "哥伦布", "纽约"],
    "🇹🇼": ["TW", "Taiwan","TAIWAN", "台湾", "台北", "台中", "新北", "彰化", "CHT", "台", "HINET"],
    "🇮🇩": ["ID ","ID-", "IDN ", "Indonesia", "印尼", "印度尼西亚", "雅加达"],
    "🇮🇪": ["Ireland", "IRELAND", "IE ", "爱尔兰", "愛爾蘭", "都柏林"],
    "🇮🇱": ["Israel", "以色列"],
    "🇮🇳": ["India", "IND", "INDIA","印度", "孟买", "Mumbai","IN "],
    "🇮🇸": ["IS","ISL", "冰岛","冰島", "Iceland"],
    "🇰🇵": ["KP", "朝鲜", "North Korea","朝鮮"],
    "🇰🇷": ["KR", "Korea", "KOR", "韩国", "首尔", "韩", "韓","春川"],
    "🇬🇭": ["加纳", "Ghana", "迦納"],
    "🇱🇺": ["卢森堡", "盧森堡", "LU ", "Luxembourg"],
    "🇱🇻": ["Latvia", "Latvija", "拉脱维亚"],
    "🇧🇩": ["孟加拉", "Bengal"],
    "🇲🇽️": [" MEX", "MX", "墨西哥", "Mexico", "MEXICO"],
    "🇲🇾": [" MY", "MY-", "Malaysia","MALAYSIA", "马来西亚", "马来", "馬來", "大马", "大馬", "馬來西亞", "吉隆坡"],
    "🇲🇲": ["缅甸","緬甸"],
    "🇳🇮": ["尼加拉瓜"],
    "🇳🇱": [" NL","NL-", "Netherlands", "荷兰", "荷蘭", "尼德蘭", "阿姆斯特丹"],
    "🇵🇭": [" PH", "Philippines", "菲律宾", "菲律賓"],
    "🇷🇴": [" RO ", "罗马尼亚", "Rumania", "羅馬尼亞"],
    "🇸🇦": ["沙特", "利雅得", "Saudi Arabia", "Saudi"],
    "🇸🇪": ["SE", "Sweden","瑞典"],
    "🇹🇭": [" TH", "Thailand", "泰国", "泰國", "曼谷"],
    "🇹🇷": ["TR ","TR-", "TR_", "TUR", "Turkey", "土耳其", "伊斯坦布尔"],
    "🇻🇳": ["VN", "越南", "胡志明市", "Vietnam"],
    "🇮🇹": ["Italy", " IT ", "Nachash", "意大利", "米兰", "義大利"],
    "🇿🇦": ["South Africa", "南非", "Johannesburg"],
    "🇦🇪": ["United Arab Emirates", "阿联酋","AE ", "迪拜", "阿聯酋", "Dubai"],
    "🇧🇷": ["BR", "Brazil", "巴西", "圣保罗"],
    "🇯🇵": ["JP", "Japan","JAPAN", "日本", "东京", "大阪", "埼玉", "京日", "苏日", "沪日","上日", "穗日", "川日", "中日", "泉日", "杭日", "深日", "辽日", "广日", "Tokyo"],
    "🇦🇷": ["AR ", "Argentina", "阿根廷","AR-"],
    "🇳🇴": ["Norway", "挪威", "NO"],
    "🇵🇱": [" PL", "POL", "波兰","波蘭", "Poland"],
    "🇨🇱": ["智利","Chile","CHILE"],
    "🇳🇿": ["新西蘭","新西兰", "New Zealand"],
    "🇬🇷": ["希腊","希臘", "Greece"],
    "🇪🇬": ["埃及", "Egypt"],
    "🇮🇲": ["马恩岛","馬恩島", "Isle of Man", "Mannin"],
    "🇵🇹": ["葡萄牙", "Portugal"],
    "🇲🇳": ["蒙古", "Mongolia"],
    "🇵🇪": ["秘鲁","祕魯", "Peru"],
    "🇨🇴": ["哥伦比亚", "哥倫比亞", "Colombia"],
    "🇪🇪": ["爱沙尼亚", "愛沙尼亞", "Estonia"],
    "🇱🇾": ["利比亚","利比亞", "Libya"],
    "🇲🇰": ["马其顿","馬其頓", "Macedonia"],
    "🇲🇹": ["马耳他", "馬其他", "Malta"],
    "🇻🇪": ["委内瑞拉", "Venezuela"],
    "🇧🇦": ["波黑共和国","波黑", "Bosnia and Herzegovina"],
    "🇬🇪": ["格魯吉亞","格鲁吉亚", "Georgia"],
    "🇦🇱": ["阿爾巴尼亞","阿尔巴尼亚", "Albania"],
    "🇨🇾": ["CY","塞浦路斯", "Cyprus"],
    "🇨🇷": ["哥斯达黎加", "哥斯達尼加", "Costa Rica"],
    "🇹🇳": ["突尼斯", "Tunisia"],
    "🇻🇦": ["梵蒂冈","梵蒂岡"],
    "🇷🇼": ["卢旺达","盧旺達"],
    "🇵🇦": ["巴拿马","巴拿馬", "Panama"],
    "🇮🇷": ["伊朗", "Iran"],
    "🇯🇴": ["约旦", "約旦", "Jordan"],
    "🇺🇾": ["乌拉圭" , "烏拉圭", "Uruguay"],
    "🇰🇪": ["肯尼亚", "肯尼亞", "Kenya"],
    "🇰🇬": ["吉尔吉斯坦","吉尔吉斯斯坦", "Kyrghyzstan"],
    "🇳🇵": ["尼泊尔", "尼泊爾", "Nepal"],
    "🇽🇰": ["科索沃", "Kosovo"],
    "🇲🇦": ["摩洛哥", "Morocco"],
    "🇪🇨": ["厄瓜多尔", "厄瓜多爾", "EC", "Ecuador"],
    "🇲🇺": ["毛里求斯", "Mauritius"],
    "🇵🇷": ["波多黎各", "PR ","PR-", "Puerto Rico"],
    "🇬🇹": ["危地马拉", "危地馬拉", " GT "],
    "🇭🇰": ["HK", "Hongkong", "Hong Kong", "HongKong", "HONG KONG","香港", "深港", "沪港", "呼港", "HKT", "HKBN", "HGC", "WTT", "CMI", "穗港", "京港", "港"],
    "🇨🇳": ["CN", "China", "回国", "中国","中國", "江苏", "北京", "上海", "广州", "深圳", "杭州", "徐州", "青岛", "宁波", "镇江", "back"],
    "🇨🇺": ["古巴"],
    "🇸🇲": ["圣马力诺","聖馬利諾"],
    "🇰🇾": ["开曼群岛","開曼群島"],
    "🇫🇯": ["斐济","斐濟"],
    "🇬🇱": ["格陵兰","格陵蘭"],
    "🇬🇮": ["直布罗陀","直布羅陀"],
    "🇲🇪": ["黑山"],
    "🇱🇮": ["列支敦士登"],
    "🇬🇺": ["关岛","關島"],
    "🇦🇶": ["南极","南極"],
    "🇧🇹": ["不丹"], 
    "🇲🇻": ["马尔代夫", "馬爾代夫"],
    "🇮🇶": ["伊拉克"],
    "🇸🇨": ["塞舌尔","塞舌爾"],
    "🇶🇦": ["卡塔尔", "卡塔爾", " QA "],
    "🇸🇾": ["叙利亚", "敘利亞", " SY "],
    "🇱🇧": ["黎巴嫩","LB", "Lebanon"],
    "🇧🇳": ["文莱","汶萊", "BRN","Negara Brunei Darussalam"],
    "🇨🇻": ["佛得角"],
    "🇸🇷": ["苏里南","蘇里南"],
    "🇲🇨": ["摩纳哥","摩納哥"],
    "🇯🇲": ["牙买加","牙買加 "],
    "🌏": ["亚洲","Asia"],
    "🇹🇬": ["多哥"],
    "🇵🇸": ["巴勒斯坦"],
    "🇬🇫": ["法屬圭亞那","法属圭亚那"],
    "🇹🇹": ["特立尼达和多巴哥","特立尼達和多巴哥"]
  }
    str1 = JSON.stringify(Lmoji)
    aa = JSON.parse(str1)
    bb = JSON.parse(str1.replace(/🇹🇼/g, " 🇨🇳"))
    var cnt = emojip ==1? aa:bb;
    var flag = 0;
    for (var key in cnt) {
        dd = cnt[key]
        for (i in dd) {
            if (sname.indexOf(dd[i]) != -1) {
                flag = 1;
                nname = key + " " + sname.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim(); // use regex to remove the original flag
                return [nname,key]
            }
        }
    }
    if (flag == 0) { return ["🏴‍☠️ " + sname.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim(), "🏴‍☠️"] }
}

//emoji 处理
function emoji_handle(servers, Pemoji) {
    var nlist = []
    var ser0 = servers

    for (var i = 0; i < ser0.length; i++) {
        if (ser0[i].indexOf("tag=") != -1) {
            var oname = ser0[i].split("tag=")[1].trim();
            var hd = ser0[i].split("tag=")[0];
            var nname = oname;//emoji_del(oname);
            // Code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2, Emoji: https://emojipedia.org/flags/
            if (Pemoji == 1) {
                var nname = get_emoji(1, nname)[0]
            } else if (Pemoji == 2) {
                var nname = get_emoji(2, nname)[0]
            } else if (Pemoji == -1) {
                nname = emoji_del(oname);
            }
            var nserver = hd + "tag=" + nname.replace("  ", " ").trim()
            nlist.push(nserver)
        }
    }
    return nlist
}

//Surge2QX 转换主函数
function Surge2QX(conf) {
  var QXlist = conf.split("\n").map(isSurge).filter(Boolean)
  var Nlist = []
  var node=""
  for (var i = 0; i < QXlist.length; i++) {
    var cnt = QXlist[i];
    if (cnt.split("=")[1].split(",")[0].indexOf("trojan") != -1) {
      node = Strojan2QX(cnt)//surge 3的trojan
    } else if (cnt.split("=")[1].split(",")[0].indexOf("http") != -1) {
      node = Shttp2QX(cnt) //surge 3的http
    } else if (cnt.split("=")[1].split(",")[0].indexOf("vmess") != -1) {
      node = SVmess2QX(cnt) //surge 3的Vmess
    } else if (cnt.split("=")[1].split(",")[0].indexOf("ss") != -1) {
      node = SSS2QX(cnt) //surge 3的SS
    } else if (cnt.split("=")[1].split(",")[0].indexOf("socks5") != -1) {
      node = SS52QX(cnt) //surge 3的Socks5
    } else if (cnt.split("=")[1].split(",")[0].indexOf("custom") != -1) {
      node = SCT2QX(cnt) //surge2写法
    } else if (cnt.split("=")[1].split(",")[0].indexOf("anytls") != -1 && version>913) {
      node = SATS2QX(cnt) // surge anytls from version 913 afterward
    }
    node = Pudp0 != 0 ? XUDP(node,Pudp0) : node
    node = Ptfo0 != 0 ? XTFO(node,Ptfo0) : node
    if (cnt.indexOf("test-url") !=-1) {
      var checkurl = ", server_check_url" + cnt.split("test-url")[1].split(",")[0]
      node = node.replace(/\,(\s)*tag/, checkurl + ", tag")
    }
    Nlist.push(node)
  }
  return (Nlist)
}


// surge2 中的 SS 类型写法(custom)
//🇷🇺 俄罗斯 GIA = custom, ip, 152, aes-128-gcm, password123, https://xxx/download/SSEncrypt.module, obfs=tls, obfs-host=xxx.windows.com, udp-relay=true
function SCT2QX(content) {
    var cnt = content;
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var pmtd = "method=" + cnt.split(",")[3].trim();
    var pwd = "password=" + cnt.split(",")[4].trim();
    if (cnt.indexOf("obfs") != -1) {
        pobfs = "obfs=" + cnt.replace(/obfs-host/, "").split("obfs")[1].split(",")[0].split("=")[1]
    } else { pobfs = "" }
    var phost = cnt.indexOf("obfs-host") != -1 ? "obfs-host" + cnt.split("obfs-host")[1].split(",")[0].trim() : "";
    if (phost != "") {
        pobfs = pobfs + ", " + phost
    }
    var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var pudp = paraCheck(cnt, "udp-relay") == "true" ? "udp-relay=true" : "udp-relay=false";
    var nserver = pobfs != "" ? "shadowsocks= " + [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(", ") : "shadowsocks= " + [ipport, pmtd, pwd, ptfo, pudp, tag].join(", ");
    return nserver
}


// surge3 中的 SS 类型
function SSS2QX(content) {
    var cnt = content;
    var cnts=cnt.replace(" ","").replace("\"","")
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var pmtd = "method=" + cnt.split("encrypt-method")[1].split(",")[0].split("=")[1];
    var pwd = "password=" + cnts.split("password=")[1].split(",")[0].replace("\"","")//.split("\"")[0];
    if (cnt.indexOf("obfs") != -1) {
        pobfs = "obfs=" + cnt.replace(/obfs-host/, "").split("obfs")[1].split(",")[0].split("=")[1]
    } else { pobfs = "" }
    var phost = cnt.indexOf("obfs-host") != -1 ? "obfs-host" + cnt.split("obfs-host")[1].split(",")[0].trim() : "";
    if (phost != "") {
        pobfs = pobfs + ", " + phost
    }
    var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var pudp = paraCheck(cnt, "udp-relay") == "true" ? "udp-relay=true" : "udp-relay=false";
    var nserver = pobfs != "" ? "shadowsocks= " + [ipport, pmtd, pwd, pobfs, ptfo, pudp, tag].join(", ") : "shadowsocks= " + [ipport, pmtd, pwd, ptfo, pudp, tag].join(", ");
    return nserver
}


// surge 中的 Vmess 类型
function SVmess2QX(content) {
    var cnt = content;
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var puname = cnt.indexOf("username") != -1 ? "password=" + cnt.split("username")[1].split(",")[0].split("=")[1].trim() : "";
    var pmtd = "method=aes-128-gcm";
    var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
    var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1 ? "tls-verification=true" : "tls-verification=false";
    pvefify = Pcert0 == 1? "tls-verification=true" : pverify ;
    if (paraCheck(cnt.replace(/tls13/, ""), "tls") == "true" && paraCheck(cnt.replace(/ws-header/, ""), "ws") == "true") {
        pobfs = "obfs=wss" + ", " + ptls13 + ", " + pverify
    } else if (paraCheck(cnt.replace(/ws-header/, ""), "ws") == "true") {
        pobfs = "obfs=ws"
    } else if (paraCheck(cnt.replace(/tls13/, ""), "tls") != "false") {
        pobfs = "obfs=over-tls" + ", " + ptls13 + ", " + pverify
    } else if (paraCheck(cnt.replace(/ws-header/, ""), "ws") == "false") {
        pobfs = ""
    }
    var puri = paraCheck(cnt, "ws-path") != "false" ? "obfs-uri=" + cnt.split("ws-path")[1].split(",")[0].split("=")[1].trim() : "obfs-uri=/"
    var phost = cnt.indexOf("ws-headers") != -1 ? "obfs-host=" + cnt.split("ws-headers")[1].split(",")[0].split("=")[1].split(":")[1].trim() : "";
    if (pobfs.indexOf("ws" || "wss") != -1) {
        if (phost != "") {
            pobfs = pobfs + ", " + puri + ", " + phost
        } else { pobfs = pobfs + ", " + puri }
    }
    var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var nserver = pobfs != "" ? "vmess= " + [ipport, puname, pmtd, pobfs, ptfo, tag].join(", ") : "vmess= " + [ipport, puname, pmtd, ptfo, tag].join(", ");
    return nserver
}

// 用于过滤非节点部分（比如整份配置中其它内容）
function isSurge(content) {
  if (content.indexOf("=") != -1) {
    cnt = content.split("=")[1].split(",")[0].trim()
    if (cnt == "http" || cnt == "ss" || cnt == "trojan" || cnt == "vmess" || cnt == "custom" || cnt == "https" || cnt == "socks5"|| cnt == "socks5-tls"|| cnt == "anytls") {
        return content
    }
  }
}
// 用于参数检查
function paraCheck(content, para) {
  content=content.replace(/ /g,"")
  if (content.indexOf(para+"=") == -1) {
    return "false"
  } else {
      //console.log(para)
    return content.split(para+"=")[1].split(",")[0].trim()
  }
}
//surge中 trojan 类型转换
function Strojan2QX(content) {
  var cnt = content;
  var tag = "tag=" + cnt.split("=")[0].trim();
  var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
  var pwd = "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim();
  var ptls = "over-tls=true";
  var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
  var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1 ? "tls-verification=true" : "tls-verification=false";
  var phost = cnt.indexOf("sni")!=-1? "tls-host="+cnt.split("sni")[1].split(",")[0].split("=")[1]:""
  pvefify = Pcert0 == 1? "tls-verification=true" : pverify ;
  var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
  var nserver = "trojan= " + [ipport, pwd, ptls, ptfo, ptls13, phost,pverify, tag].filter(Boolean).join(", ");
  return nserver
}

// surge中 anytls类型转换
function SATS2QX(content) {
  try {
    var cnt = content;
    if (Pdbg==1) {$notify(cnt)}
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var pwd = "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim();
    var ptls = "over-tls=true";
    //var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1 ? "tls-verification=true" : "tls-verification=false";
    pvefify = Pcert0 == 1? "tls-verification=true" : pverify ;
    var phost = cnt.indexOf("sni")!=-1? "tls-host="+cnt.split("sni")[1].split(",")[0].split("=")[1]:""
    pudp = Pudp0 == -1 ? "udp-relay=false" : "udp-relay=true" // 默认开启
    var nserver = "anytls= " + [ipport, pwd, ptls, pverify, phost,pudp, tag].filter(Boolean).join(", ");
    return nserver
  } catch (error) {
    console.log("surge-anytls:"+error)
  }
}


// surge 中的 http 类型
function Shttp2QX(content) {
  var cnt = content;
  var tag = "tag=" + cnt.split("=")[0].trim();
  var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
  var puname = cnt.indexOf("username") != -1 ? "username=" + cnt.split("username")[1].split(",")[0].split("=")[1].trim() : "";
  var pwd = cnt.indexOf("password") != -1 ? "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim() : "";
  var ptls = cnt.split("=")[1].split(",")[0].trim() == "https" ? "over-tls=true" : "over-tls=false";
  var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
  if (ptls == "over-tls=true") {
    var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1 ? "tls-verification=true" : "tls-verification=false";
    pvefify = Pcert0 == 1? "tls-verification=true" : pverify ;
    var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
    ptls = ptls + ", " + pverify + ", " + ptls13
  }
  var nserver = puname != "" ? "http= " + [ipport, puname, pwd, ptls, ptfo, tag].join(", ") : "http= " + [ipport, ptls, ptfo, tag].join(", ");
  return nserver
}

// surge 中的 socks5 类型
function SS52QX(content) {
  var cnt = content;
  var tag = "tag=" + cnt.split("=")[0].trim();
  var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
  var puname = cnt.indexOf("username") != -1 ? "username=" + cnt.split("username")[1].split(",")[0].split("=")[1].trim() : "";
  var pwd = cnt.indexOf("password") != -1 ? "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim() : "";
  var ptls = cnt.split("=")[1].split(",")[0].trim() == "socks5-tls" ? "over-tls=true" : "over-tls=false";
  var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
  if (ptls == "over-tls=true") {
    var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1 ? "tls-verification=true" : "tls-verification=false";
    pvefify = Pcert0 == 1? "tls-verification=true" : pverify ;
    var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
    ptls = ptls + ", " + pverify + ", " + ptls13
  }
  var nserver = puname != "" ? "socks5= " + [ipport, puname, pwd, ptls, ptfo, tag].join(", ") : "socks5= " + [ipport, ptls, ptfo, tag].join(", ");
  return nserver
}

function Loon2QX(cnt) {
  var type = cnt.split("=")[1].split(",")[0].trim()
  var node = ""
  if (type == "Shadowsocks") { //ss 类型
      node = LoonSS2QX(cnt)
  } else if (type == "ShadowsocksR") { //ssr 类型
      node = LoonSSR2QX(cnt)
  } else if (type == "VLESS") { // vless 类型
    node = LoonVL2QX(cnt)
  } else if (type == "AnyTLS" && version > 913) { // anytls 类型
    node = LoonTLS2QX(cnt)
  }
  return node
}
//Loon 的 ss 部分
function LoonSS2QX(cnt) {
  var node = "shadowsocks="
  var ip = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":")
  var mtd = "method=" + cnt.split(",")[3].trim()
  var pwd = "password=" + cnt.split(",")[4].trim().split("\"")[1]
  var obfs = cnt.split(",").length == 7 ? ", " + ["obfs=" + cnt.split(",")[5].trim(), "obfs-host=" + cnt.split(",")[6].trim()].join(",") : ""
  var tag = ", tag=" + cnt.split("=")[0].trim()
  node = node + [ip, mtd, pwd].join(", ") + obfs + tag
  return node
}

//Loon 的 ssr 部分
//# SSR 格式：名称=协议类型,地址,端口,加密方式,密码,协议类型,{协议参数},混淆类型,{混淆参数}
//3 = ShadowsocksR, 1.2.3.4, 443, aes-256-cfb,"password",auth_aes128_md5,{},tls1.2_ticket_auth,{}
function LoonSSR2QX(cnt) {
  var node = "shadowsocks="
  var ip = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":")
  var mtd = "method=" + cnt.split(",")[3].trim()
  var pwd = "password=" + cnt.split(",")[4].trim().split("\"")[1]
  var ssrp = "ssr-protocol=" + cnt.split(",")[5].trim()
  var ssrpara = "ssr-protocol-param=" + cnt.split(",")[6].replace(/\{|\}/g, "").trim()
  var obfs = "obfs=" + cnt.split(",")[7].trim()
  var obfshost = "obfs-host=" + cnt.split(",")[8].replace(/\{|\}/g, "").trim()
  var tag = ", tag=" + cnt.split("=")[0].trim()
  node = node + [ip, mtd, pwd, ssrp, ssrpara, obfs, obfshost].join(", ") + tag
  return node
}

// read parameters
function param1(res,org,mbody) {
  mbodys=mbody.replace(/\s/g,"")
  if(mbodys.indexOf(org)!=-1) {
    tmp=mbodys.split(org)[1].split("=")[1].split(",")[0].replace(/\"/g,"")
    return res+"="+tmp
  }
  else return ""
}

//Loon 的 VLESS 部分
//vls = VLESS,1.1.1.1,443,"b0dd64e4-0fbd-4038-9139-d1f32a68a0dc",transport=ws,path=patha,host=host.com,udp=true,over-tls=true,tls-name=sni.co
//2025-12-31 add reality part support
//vls-name = VLESS,ip,port,"pwd",transport=tcp,flow=xtls-rprx-vision,public-key="pbk",short-id=sid,udp=true,block-quic=true,over-tls=true,sni=sni.com
function LoonVL2QX(cnt) {
  var tag = ", tag=" + cnt.split("=")[0].trim()
  cnt=cnt.replace(" ","") //去掉空格 简化 
  var node = "vless="
  var ip = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":")
  var mtd = "method=none"
  var pwd = "password=" + cnt.split(",")[3].trim().split("\"")[1]
  if (cnt.indexOf("transport=tcp")!=-1) {
    obfs= cnt.indexOf("over-tls=true")=="-1"? "":"obfs=over-tls"
  } else if (cnt.indexOf("transport=http")!=-1) {
    obfs="obfs=http"
  } else if (cnt.indexOf("transport=ws")!=-1) {
    obfs= cnt.indexOf("over-tls=true")=="-1"? "obfs=ws":"obfs=wss"
  }
  vpath = cnt.indexOf("path=")==-1? "":"obfs-uri="+cnt.split("path=")[1].split(",")[0]
  if (cnt.indexOf("host=")!=-1) {
    obfshost="obfs-host="+cnt.split("host=")[1].split(",")[0]
  }  else if (cnt.indexOf("tls-name=")!=-1) {
    obfshost="obfs-host="+cnt.split("tls-name=")[1].split(",")[0]
  } else if (cnt.indexOf("sni=")!=-1) {
    obfshost="obfs-host="+cnt.split("sni=")[1].split(",")[0]
  }
  vflow=param1("vless-flow","flow",cnt)
  vpbk=param1("reality-base64-pubkey","public-key",cnt)
  vsid=param1("reality-hex-shortid","short-id",cnt)
  node = node + [ip, mtd, pwd, obfs, obfshost, vpath,vflow,vpbk,vsid].filter(Boolean).join(", ") + tag
  return node
}

// loon anytls
//loon-tls = AnyTLS,1.1.1.1,443,"jdjdhd",sni=abc.com,skip-cert-verify=true,udp=true,block-quic=false
function LoonTLS2QX(content) {
  try {
    var cnt = content;
    $notify("Loon","",cnt)
    if (Pdbg==1) {$notify(cnt)}
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":");
    var pwd = "password=" +  + cnt.split(",")[3].trim().split("\"")[1];
    var ptls = "over-tls=true";
    var phost = cnt.indexOf("sni")!=-1? "tls-host="+cnt.split("sni")[1].split(",")[0].split("=")[1]:""
    pudp = Pudp0 == -1 ? "udp-relay=false" : "udp-relay=true" // 默认开启
    var pverify = cnt.replace(/ /g,"").indexOf("skip-cert-verify=false") != -1 ? "tls-verification=true" : "tls-verification=false";
    pvefify = Pcert0 == 1? "tls-verification=true" : pverify ;
    var nserver = "anytls= " + [ipport, pwd, ptls, pverify, phost,pudp, tag].filter(Boolean).join(", ");
    $notify("Loon","",nserver)
    return nserver
  } catch (error) {
    console.log("loon-anytls:"+error)
  }

}

////////////////////

function YAMLFix(cnt){
  cnt = cnt.replace(/\[/g,"yaml@bug𝟙").replace(/\\r/g,"").replace(/\*/g,"yaml@bug𝟚")
  //2022-08-08 增加 .replace(/\*/g,"🌟@bug2") 以解决名字以 * 开始时引起的部分问题
  if (cnt.indexOf("{") != -1 && /\{\s*\"*(name|type|server)/.test(cnt)){ // - { } 类型 yaml
    cnt =  cleanYamlSpaces(cnt) // 2026-02-06 部分空格解析错误
    cnt = cnt.replace(/(^|\n)- /g, "$1  - ").replace(/    - /g,"  - ").replace(/:(?!\s)/g,": ").replace(/\,\"/g,", \"").replace(/: {\s{0,1}/g, ": {,   ").replace(/, (Host|host|path|mux)/g,",   $1")
    //2022-04-11 remove tls|skip from replace(/, (Host|host|path|mux)/g,",   $1")
    console.log("1st:\n"+cnt)
    cnt = cnt.replace(/{\s*name: (.*?), (.*?):/g,"{name: \"$1\", $2:").replace(/\"/gi,"").replace(/, short-id\"{0,1}/gi,",   short-id") //cnt.replace(/{\s*name: /g,"{name: \"").replace(/, (.*?):/,"\", $1:")
    cnt = cnt.replace(/{\s*|\s*}/g,"").replace(/,/g,"\n   ")
  }
  cnt = cnt.replace(/\n\s*\-\s*\n.*name/g,"\n  - name").replace(/\$|\`/g,"").split("proxy-providers:")[0].split("proxy-groups:")[0].replace(/\"(name|type|server|port|cipher|password|uuid|alterId|udp)(\"*)/g,"$1")
    if(Pdbg == 1) {
  $notify("part-fix0:","","part-fix0:\nproxies:\n"+cnt.split("proxies:")[1])}
  // 缩进修正
  // old 2023-03-23  👇修正部分类型 
  // cnt = cnt.replace(/\n\s{2}([a-zA-Z]+.*\:)/g,"\n    $1").replace(/\n(\-.*)/g,"\n  $1")
  //new  2026-01-08 
  cnt = /\n\-\s[a-zA-Z]/.test(cnt)? cnt.replace(/\n(.*(\:|\-))/g,"\n  $1"):cnt.replace(/\n\s{2}([a-zA-Z]+.*\:)/g,"\n    $1").replace(/\n(\-.*)/g,"\n  $1")
  if(Pdbg == 1) {
  $notify("part-fix1:","","part-fix1:\nproxies:\n"+cnt.split("proxies:")[1])}
  // cnt = cnt.indexOf("proxies:") == -1? "proxies:\n" + cnt :"proxies:"+cnt.split("proxies:")[1]
  cnt = cnt.replace(/name\:(.*?)\:(.*?)\n/gmi,"name:$1冒号$2\n").replace(/\s{6}Host\:/g,"      Host:")//.replace(/\{\s*(Host\:.*)\}/gmi,"$1") //罕见bug情况 修复
  items=cnt.split("\n").map(yamlcheck)
  cnt=items.join("\n")
  //console.log(cnt.replace(/name\:(.*?)\:(.*?)\n/gmi,"name:$1冒号$2"))
  //2022-05-11 增加⬇️
  //cnt = cnt.replace(/\n\s{4}headers/g,"\n      headers").replace(/\n\s{6}(H|h)ost/g,"\n        Host").replace(/\t/g,"")
  //2022-06-07 修改为👇，解决部分无 proxies 字段的
  //2022-09-01 remove host in s{6}(H|h)ost
  //cnt = cnt.indexOf("proxies:") != -1?cnt.replace(/\n\s{4}headers/g,"\n      headers").replace(/\n\s{6}Host/g,"\n        Host").replace(/\t/g,""):cnt
  //2022-11-29 修改
  cnt = cnt.indexOf("proxies:") != -1 && /\n\s{4}server/.test(cnt)  ? cnt.replace(/\n\s{4}(headers|path)/g,"\n      $1").replace(/\n\s{6}Host/g,"\n        Host").replace(/\t/g,""):cnt
  //console.log("part-fix:\n"+cnt.split("proxies:")[1])
  cnt = cnt.indexOf("proxies:") == -1? "proxies:\n" + cnt :"proxies:"+cnt.split("proxies:")[1]
  cnt = cnt.replace(/>/g,"⟩") // 2026-02-02 部分奇葩问题
  //cnt=cnt.replace(/yaml@bug𝟙/g,"[").replace(/冒号/gmi,":").replace(/yaml@bug𝟚/g,"*")
  console.log("after-fix\n"+cnt)
  if(Pdbg == 1) {
  $notify("After-Fix","this is", "After-fix:\n"+cnt)}
  //$notify("After-Fix","this is", cnt)

  return cnt
}

// 2026-02-06 {} yaml 空格问题修复
function cleanYamlSpaces(yamlText) {
  return yamlText.split('\n').map(line => {
    if (line.includes('{') && line.includes('}')) {
      return '  ' + line.trim().replace(/ {2,}/g, ' ');
    }
    return line;
  }).join('\n');
}

function yamlcheck(cnt){
  if (cnt.indexOf("name") !=-1){ //名字以某些数字结尾时，解析有 bug
    for (var i=0;i<10;i++) {
      cnt = cnt.replace(new RegExp(patn[0][i], "gmi"),patn[4][i])
    }
    
  }
  if (/(:)/.test(cnt) && !/alpn\s*\:/.test(cnt)) {
    return cnt
  }
}

//2026-01-07

/**
* 将不规范的 JS 对象字符串转换为标准 JSON 对象
*/
function superMagicParse(str) {
  let s = str;
  $notify(1,1,s)
  // 1. 结构修复：解决你的 "...right"]" 缺少 "}" 的问题
  // 逻辑：如果发现 冒号+值+"]" 的组合，说明少了一个 "}"，把它变成 "}]"
  // (这里兼容了值带引号或不带引号的情况)
  s = s.replace(/(:\s*(?:".*?"|[^,}\]]+?))\s*]/g, '$1}]');
  $notify(1,2,s)
  // 2. 补全 Key 的引号
  // 逻辑：匹配 { 或 , 开头，后面跟着“非冒号的任意字符”，直到冒号为止
  // 允许 key 中包含字母、数字、下划线、横杠 - 等
  s = s.replace(/([{\s,])([a-zA-Z0-9_\-]+)\s*:/g, '$1"$2":');
  
  // 3. 补全 Value 的引号 (核心修改部分)
  // 逻辑：匹配 冒号，后面捕获“非引号、非逗号、非括号”的一串字符
  s = s.replace(/:\s*([^",}\]]+?)\s*(?=[,}\]])/g, (match, rawValue) => {
    const val = rawValue.trim();
    
    // A. 如果是纯数字，保持原样 (支持负数和小数)
    if (!isNaN(Number(val))) {
      return `:${val}`;
    }
    
    // B. 如果是关键字，保持原样
    if (['true', 'false', 'null', 'undefined'].includes(val)) {
      return `:${val}`;
    }
    
    // C. 其他情况（包括带 - 的字符串、UUID、日期等），全部加上双引号
    return `:"${val}"`;
  });
  $notify(1,3,s)
  // 调试输出，这一步很有用，能让你看到变成什么样了
  // console.log("标准化后的字符串:", s); 
  
  try {
    return s;//JSON.parse(s);
  } catch (e) {
    //console.error("解析失败，可能是标点符号仍有错误:", e.message);
    return null; // 或者返回 undefined
  }
}

//yaml string - {} type direct to json 
function YJSON(cnt) {
  cnt=cnt.replace(/proxies\:\n.*?\-/g,"{\"proxies\":[").replace(/}\s*\n.*?\-/g,"},").replace(/\n/g,"")+"]}"
  //console.log(cnt)
  cnt=superMagicParse(cnt)
  //console.log("repair"+"\n"+cnt)
  return cnt
}

function reorderYamlByNesting(yamlString, decodeUnicode = true) {
  // 如果需要，先解码 Unicode
  if (decodeUnicode) {
    yamlString = decodeUnicodeEscapes(yamlString);
  }
  
  const lines = yamlString.split('\n');
  const result = [];
  let i = 0;
  // 收集字段块（包括所有子级）
  function collectFieldBlock(startIdx, parentIndent) {
    const block = [lines[startIdx]];
    let idx = startIdx + 1;
    while (idx < lines.length) {
      const line = lines[idx];
      const indent = line.search(/\S/);
      const trimmed = line.trim();
      if (!trimmed) {
        idx++;
        continue;
      }
      if (indent <= parentIndent) {
        break;
      }
      block.push(line);
      idx++;
    }
    return { block, nextIdx: idx };
  }
  // 判断是否有子级
  function hasChildren(block, parentIndent) {
    return block.slice(1).some(line => {
      const trimmed = line.trim();
      return trimmed && line.search(/\S/) > parentIndent;
    });
  }
  // 处理单个列表项
  function processListItem(startIdx, listIndent) {
    const simpleFields = [];
    const nestedFields = [];
    const fieldIndent = listIndent + 2;
    let idx = startIdx;
    while (idx < lines.length) {
      const line = lines[idx];
      const indent = line.search(/\S/);
      const trimmed = line.trim();
      if (!trimmed) {
        idx++;
        continue;
      }
      if (indent <= listIndent) {
        break;
      }
      if (indent === fieldIndent && trimmed.includes(':')) {
        const { block, nextIdx } = collectFieldBlock(idx, fieldIndent);
        
        if (hasChildren(block, fieldIndent)) {
          nestedFields.push(...block);
        } else {
          simpleFields.push(block[0]);
        }
        
        idx = nextIdx;
      } else {
        idx++;
      }
    }
    return { simpleFields, nestedFields, endIdx: idx };
  }
  // 主循环
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      const listIndent = line.search(/\S/);
      result.push(line);
      
      const { simpleFields, nestedFields, endIdx } = processListItem(i + 1, listIndent);
      result.push(...simpleFields, ...nestedFields);
      
      i = endIdx;
    } else {
      result.push(line);
      i++;
    }
  }
  return result.join('\n');
}
function decodeUnicodeEscapes(str) {
  return str
  .replace(/\\U([0-9A-Fa-f]{8})/g, (match, hex) => {
    return String.fromCodePoint(parseInt(hex, 16));
  })
  .replace(/\\u\{([0-9A-Fa-f]+)\}/g, (match, hex) => {
    return String.fromCodePoint(parseInt(hex, 16));
  })
  .replace(/\\u([0-9A-Fa-f]{4})/g, (match, hex) => {
    return String.fromCodePoint(parseInt(hex, 16));
  })
  .replace(/\\x([0-9A-Fa-f]{2})/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
}

// 完整的json
function JCheck(cnt) {
  if (/^{/.test(cnt) &&/}$/.test(cnt)) {
    return 1
  } else {
    return 0
  }
}


// Clash parser
function Clash2QX(cnt) {
  const yaml = new YAML()
  //if (Pdbg==1) { $notify(" Before YAML Parse", "content", cnt)}
  // 如果本身为json则无需解析
  aa = JCheck(cnt)==0 ? JSON.stringify(yaml.parse(reorderYamlByNesting(YAMLFix(cnt)))).replace(/yaml@bug𝟙/g,"[").replace(/冒号/gmi,":").replace(/yaml@bug𝟚/g,"*") : cnt
  for (var i=0;i<10;i++) {
    aa = aa.replace(new RegExp(patn[4][i], "gmi"),patn[0][i])
  }
  var bb = JSON.parse(aa).proxies
  if (Pdbg==1) { $notify("After YAML Parse", "content", JSON.stringify(bb))}
  //console.log(bb)
  var nl = bb.length
  var nodelist=[]
  var node=""
  for (i=0; i<nl; i++){
    try{
      node=bb[i]
      typecc = node.type
      if (typecc == "ss") {
        node = CSS2QX(node)
      } else if (typecc == "ssr"){
        node = CSSR2QX(node)
      } else if (typecc == "vmess"){
        node = CV2QX(node)
      } else if (typecc == "trojan"){
        node = CT2QX(node)
      } else if (typecc == "http"){
        node = CH2QX(node)
      } else if (typecc == "socks5"){
        node = CS52QX(node)
      } else if (typecc == "vless"){
        node = CVL2QX(node)
      } else if (typecc=="anytls" && version >913) { //anytls
        node = CTLS2QX(node)
      } else { // not support type
        PNS = PNS+1
        NSList.push(numToEmoji10(PNS)+bb[i])
        if (Pdbg==1) { // 通知提示
          $notify("不支持该类型节点，已忽略",typecc,JSON.stringify(node))
        }
        typecc="NS"
      }
      node = Pudp0 != 0 ? XUDP(node,Pudp0) : node
      node = Ptfo0 != 0 ? XTFO(node,Ptfo0) : node
      if (typecc!="NS") {
      node=node.replace(/^([^,]*)\s+/g, (match, p1) => { // 某些ipv6节点空格问题
        return p1.replace(/\s+/g, '');
      });
      nodelist.push(node)
    } 
    }catch (e) {
      $notify(`⚠️该节点解析错误, 暂时已忽略处理`,`可点击通知并发送链接反馈至 bot`,JSON.stringify(node),bug_link )
      $notify(`⚠️错误内容如下`,`可复制错误内容到反馈 bot`,JSON.stringify(node)+"\n\n"+e)
    }
  }
  return nodelist.join("\n")
}

//Clash ss type server
function CSS2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi,"")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  mtd = "method="+ cnt.cipher
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  uot = cnt["udp-over-tcp"] ?  "udp-over-tcp=true" : "udp-over-tcp=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  obfs = cnt["plugin-opts"] ? "obfs=" + cnt["plugin-opts"].mode : ""
  ohost = cnt["plugin-opts"] ? "obfs-host=" + cnt["plugin-opts"].host : ""
  ouri = ""
  cert = ""
  if (obfs.indexOf("websocket") != -1) {
      obfs = cnt["plugin-opts"].tls? "obfs=wss" : "obfs=ws"
      ohost = cnt["plugin-opts"].host? "obfs-host=" + cnt["plugin-opts"].host:""
      ouri = cnt["plugin-opts"].path? "obfs-uri=" + cnt["plugin-opts"].path: ""
    if (obfs == "obfs=wss") { // tls verification
      cert = Pcert0 == 1? "" : "tls-verification =false"}
  }
  node = "shadowsocks="+[ipt, pwd, mtd, udp, uot, tfo, obfs, ohost, ouri, cert, tag].filter(Boolean).join(", ")
  return node
}

//Clash ssr type server
function CSSR2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi,"")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  mtd = "method="+ cnt.cipher
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  prot = "ssr-protocol=" + cnt.protocol
  ohost=""
  ppara=""
  if(cnt["protocolparam"]) {
    cnt["protocol-param"] = cnt["protocolparam"]
  }
  if (typeof(cnt["protocol-param"]) == "string") {
    ppara = "ssr-protocol-param=" + cnt["protocol-param"]
  } else if (typeof(cnt["protocol-param"]) == "object") {
    console.log(typeof(cnt["protocol-param"]))
    ppara = "ssr-protocol-param=" + JSON.stringify(cnt["protocol-param"]).replace(/{|}|\s|"/g,"")
  }
  obfs = "obfs=" + cnt.obfs
  if ( cnt["obfs-param"]) {
     ohost = "obfs-host=" + cnt["obfs-param"]
  } else if (cnt["obfsparam"]) {
     ohost = "obfs-host=" + cnt["obfsparam"]
  }
 
  node = "shadowsocks="+[ipt, pwd, mtd, udp, tfo, prot, ppara, obfs, ohost, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}


//Clash vmess type server
function CV2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.uuid
  mtd = "method="+ "aes-128-gcm" //cnt.cipher
  udp = cnt.udp ? "udp-relay=false" : "udp-relay=false" //暂不支持
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  obfs = ""
  if (cnt.network == "ws" && cnt.tls) {
    obfs = "obfs=wss"
  } else if (cnt.network == "ws"){
    obfs = "obfs=ws"
  } else if (cnt.network == "http"){
    obfs = "obfs=http"
  } else if (cnt.tls){
    obfs = "obfs=over-tls"
  }
  console.log(obfs)
  const phost = getValue(()=>cnt["ws-opts"]["headers"]["Host"]) 
  ohost = cnt["ws-headers"]? "obfs-host=" + cnt["ws-headers"]["Host"] : ""
  ohost = phost ? "obfs-host="+phost : ohost
  //ohost= cnt["ws-opts"]? "obfs-host=" + cnt["ws-opts"]["headers"]["Host"] : ohost
  ohost = cnt["servername"]? "obfs-host=" + cnt["servername"] : ohost
  console.log(ohost)
  ouri = cnt["ws-path"]? "obfs-uri="+cnt["ws-path"] : ""
  ouri = cnt["ws-opts"]? "obfs-uri="+cnt["ws-opts"]["path"] : ouri
  cert = cnt["skip-cert-verify"] && cnt.tls ? "tls-verification=false" : ""
  caead = cnt["alterId"] && cnt["alterId"]!=0? "aead=false" : "" // aead 选项
  //caead = cnt["alterId"] == 0? "aead=true" : caead // aead 选项
  console.log(caead)
  //caead=""
  //$notify(cert)
  if (Pcert0 == 1 && cnt.tls) {
    cert = "tls-verification=true"
  } else if (Pcert0 != 1 && cnt.tls) {
    cert = "tls-verification=false"
  }
  node = "vmess="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, caead, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}


//Clash Trojan
function CT2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  otls = "over-tls=true"
  opath=""
  ohost=""
  cert = cnt["skip-cert-verify"] ? "tls-verification=false" : "tls-verification=true"
  cert = Pcert0 == 1 ? "tls-verification=true" : "tls-verification=false"
  tls13 = PTls13 == 1 ? "tls13=true" : "tls13=false"
  udp = cnt.udp ? "udp-relay=false" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  if (cnt.network=="ws") { //wss类型
    otls = "obfs=wss"
    //$notify("trojan","WS",JSON.stringify(cnt))
    if (cnt["ws-opts"]){
    opath = cnt["ws-opts"]["path"]? "obfs-uri="+cnt["ws-opts"]["path"] : ""
    ohost = cnt["ws-opts"]["headers"]? "obfs-host="+cnt["ws-opts"]["headers"]["Host"] : ""
    }
    //$notify("trojan","WS",opath+":"+ohost)
  }
  node = "trojan="+[ipt, pwd, otls, opath, ohost, cert, tls13, udp, tfo, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}

// Clash Anytls 2026-04-15

function CTLS2QX(cnt) {
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  otls = "over-tls=true"
  opath=""
  ohost= "tls-host="+cnt.sni
  cert = cnt["skip-cert-verify"] ? "tls-verification=false" : "tls-verification=true"
  cert = Pcert0 == 1 ? "tls-verification=true" : "tls-verification=false"
  pudp = Pudp0 == -1 ? "udp-relay=false" : "udp-relay=true" // 默认开启
  node = "anytls="+[ipt, pwd, otls, ohost, pudp, cert, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}

// Clash http
function CH2QX(cnt){
    tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
    ipt = cnt.server+":"+cnt.port
    uname = cnt.username ? "username=" + cnt.username : ""
    pwd = cnt.password && typeof(cnt.password) == "string" ? "password=" + cnt.password : ""
    tls = cnt.tls ? "over-tls=true" : ""
    cert = cnt["skip-cert-verify"] && cnt.tls ? "tls-verification=false" : ""
    if (Pcert0 == 1 && cnt.tls) {
      cert = "tls-verification=true"
    } else if (Pcert0 != 1 && cnt.tls) {
      cert = "tls-verification=false"
    }
    node = "http="+[ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(", ")
    //console.log(node)
    return node
}

// Clash socks5
function CS52QX(cnt){
    tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ")
    ipt = cnt.server+":"+cnt.port
    uname = cnt.username ? "username=" + cnt.username : ""
    pwd = cnt.password && typeof(cnt.password) == "string" ? "password=" + cnt.password : ""
    tls = cnt.tls ? "over-tls=true" : ""
    cert = cnt["skip-cert-verify"] && cnt.tls ? "tls-verification=false" : ""
    if (Pcert0 == 1 && cnt.tls) {
      cert = "tls-verification=true"
    } else if (Pcert0 != 1 && cnt.tls) {
      cert = "tls-verification=false"
    }
    node = "socks5="+[ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(", ")
    //console.log(node)
    return node
}

// clash vless type ,2026-01-07
function CVL2QX(cnt){
  tag = "tag="+cnt.name.replace(/\\U.+?\s{1}/gi," ").replace(/(\"|\')/gi,"")
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.uuid
  mtd = "method=none" //cnt.cipher
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  obfs = ""
  if (cnt.network == "ws" && cnt.tls) {
    obfs = "obfs=wss"
  } else if (cnt.network == "ws"){
    obfs = "obfs=ws"
  } else if (cnt.tls){
    obfs = "obfs=over-tls"
  }
  vfl=cnt.flow? "vless-flow=xtls-rprx-vision":""
  const ppbk=getValue(()=>cnt["reality-opts"]["public-key"]) 
  const psid=getValue(()=>cnt["reality-opts"]["short-id"])
  pbk=ppbk? "reality-base64-pubkey="+ppbk : ""
  sid=typeof(psid)=='string'? "reality-hex-shortid="+psid : ""
//  console.log(obfs)
  const phost = getValue(()=>cnt["ws-opts"]["headers"]["Host"]) 
  ohost = cnt["ws-headers"]? "obfs-host=" + cnt["ws-headers"]["Host"] : ""
  ohost = phost ? "obfs-host="+phost : ohost
  //ohost= cnt["ws-opts"]? "obfs-host=" + cnt["ws-opts"]["headers"]["Host"] : ohost
  ohost = cnt["servername"]? "obfs-host=" + cnt["servername"] : ohost
  ohost=ohost.toLowerCase()

  const ppath = getValue(()=>cnt["ws-opts"]["path"]) 
  puri = ppath ? "obfs-uri="+ppath : ""

  cert = cnt["skip-cert-verify"] && cnt.tls ? "tls-verification=false" : ""
  //$notify(cert)
  if (Pcert0 == 1 && cnt.tls) {
    cert = "tls-verification=true"
  } else if (Pcert0 != 1 && cnt.tls) {
    cert = "tls-verification=false"
  }
  const pspt = getValue(()=>cnt["ws-opts"]["v2ray-http-upgrade"])
  if (pspt==true) {
    PNS = PNS +1
    NSList.push(numToEmoji10(PNS)+cnt)
    node=""
  } else {
    node = "vless="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, puri, vfl, pbk, sid, cert, tag].filter(Boolean).join(", ")
  }
  //console.log(node)
  return node
}

// UDP/TFO 参数 (强制 surge/quanx 类型转换)
function XUDP(cnt,pudp) {
  var udp = pudp != -1 && /^(shadowsocks|trojan|vmess|vless|anytls)/.test(cnt.trim()) ? "udp-relay=true, " : "udp-relay=false, "
  if(cnt.indexOf("udp-relay") != -1){
    var cnt0 = cnt.replace(RegExp("udp\-relay.*?\,", "gmi"), udp)
  }else{
    var cnt0 = cnt.replace(new RegExp("tag.*?\=", "gmi"), udp+"tag=")
  }
  //console.log("UDP-Handle","",cnt0)
  return cnt0
}

function XTFO(cnt,ptfo) {
    var tfo = ptfo == 1? "fast-open=true, " : "fast-open=false, "
    if(cnt.indexOf("fast-open") != -1){
        var cnt0 = cnt.replace(RegExp("fast\-open.*?\,", "gmi"), tfo)
    }else{
        var cnt0 = cnt.replace(RegExp("tag.*?\=", "gmi"), tfo+"tag=")
    }
    return cnt0
}


// udp-over-tcp=true  开启
function UOT(cnt) {
  cnts=cnt.replace(/\s*/g,"")
  if(/^shadowsocks=/.test(cnts)) {
    cnt= cnts.indexOf("udp-over-tcp")!=-1? cnt.replace(/udp-over-tcp\s*\=\s*false/g,"udp-over-tcp=true") : cnt+", udp-over-tcp=true"
    
  }
  return cnt
}

//比较完美的一款 base64 encode/decode 工具
/*
 *  base64.js: https://github.com/dankogai/js-base64#readme
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
//base64 完毕
function Base64Code() {
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function (bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                    + fromCharCode(0x80 | (cc & 0x3f)))
                    : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                        + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                        + fromCharCode(0x80 | (cc & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                + fromCharCode(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function (u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function (ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
            ord = ccc.charCodeAt(0) << 16
                | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
                | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
            chars = [
                b64chars.charAt(ord >>> 18),
                b64chars.charAt((ord >>> 12) & 63),
                padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
                padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
            ];
        return chars.join('');
    };
    var btoa = function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    // var _encode = function(u) {
    //  var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
    //  return isUint8Array ? u.toString('base64')
    //    : btoa(utob(String(u)));
    // }
    this.encode = function (u) {
        var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
        return isUint8Array ? u.toString('base64')
            : btoa(utob(String(u)));
    }
    var uriencode = function (u, urisafe) {
        return !urisafe
            ? _encode(u)
            : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function (u) { return uriencode(u, true) };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                    | ((0x3f & cccc.charCodeAt(1)) << 12)
                    | ((0x3f & cccc.charCodeAt(2)) << 6)
                    | (0x3f & cccc.charCodeAt(3)),
                    offset = cp - 0x10000;
                return (fromCharCode((offset >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
            case 3:
                return fromCharCode(
                    ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    | (0x3f & cccc.charCodeAt(2))
                );
            default:
                return fromCharCode(
                    ((0x1f & cccc.charCodeAt(0)) << 6)
                    | (0x3f & cccc.charCodeAt(1))
                );
        }
    };
    var btou = function (b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function (cccc) {
        var len = cccc.length,
            padlen = len % 4,
            n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
                | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
                | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0)
                | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
            chars = [
                fromCharCode(n >>> 16),
                fromCharCode((n >>> 8) & 0xff),
                fromCharCode(n & 0xff)
            ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = function (a) {
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function (a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    // var _decode = buffer ?
    //  buffer.from && Uint8Array && buffer.from !== Uint8Array.from
    //  ? function(a) {
    //    return (a.constructor === buffer.constructor
    //        ? a : buffer.from(a, 'base64')).toString();
    //  }
    //  : function(a) {
    //    return (a.constructor === buffer.constructor
    //        ? a : new buffer(a, 'base64')).toString();
    //  }
    //  : function(a) { return btou(_atob(a)) };
    var _decode = function (u) {
        return btou(_atob(u))
    }
    this.decode = function (a) {
        return _decode(
            String(a).replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        ).replace(/&gt;/g, ">").replace(/&lt;/g, "<");
    };
}


/*
YAML parser for Javascript
Author: Diogo Costa

This program is released under the MIT License as follows:

Copyright (c) 2011 Diogo Costa (costa.h4evr@gmail.com)

*/

function YAML() {
        var errors = [],
                reference_blocks = [],
                processing_time = 0,
                regex =
                {
                        "regLevel" : new RegExp("^([\\s\\-]+)"),
                        "invalidLine" : new RegExp("^\\-\\-\\-|^\\.\\.\\.|^\\s*#.*|^\\s*$"),
                        "dashesString" : new RegExp("^\\s*\\\"([^\\\"]*)\\\"\\s*$"),
                        "quotesString" : new RegExp("^\\s*\\\'([^\\\']*)\\\'\\s*$"),
                        "float" : new RegExp("^[+-]?[0-9]+\\.[0-9]+(e[+-]?[0-9]+(\\.[0-9]+)?)?$"),
                        "integer" : new RegExp("^[+-]?[0-9]+$"),
                        "array" : new RegExp("\\[\\s*(.*)\\s*\\]"),
                        "map" : new RegExp("\\{\\s*(.*)\\s*\\}"),
                        "key_value" : new RegExp("([a-z0-9_-][ a-z0-9_-]*):( .+)", "i"),
                        "single_key_value" : new RegExp("^([a-z0-9_-][ a-z0-9_-]*):( .+?)$", "i"),
                        "key" : new RegExp("([a-z0-9_-][ a-z0-9_-]+):( .+)?", "i"),
                        "item" : new RegExp("^-\\s+"),
                        "trim" : new RegExp("^\\s+|\\s+$"),
                        "comment" : new RegExp("([^\\\'\\\"#]+([\\\'\\\"][^\\\'\\\"]*[\\\'\\\"])*)*(#.*)?")
                };
 
         /**
            * @class A block of lines of a given level.
            * @param {int} lvl The block's level.
            * @private
            */
        function Block(lvl) {
                return {
                        /* The block's parent */
                        parent: null,
                        /* Number of children */
                        length: 0,
                        /* Block's level */
                        level: lvl,
                        /* Lines of code to process */
                        lines: [],
                        /* Blocks with greater level */
                        children : [],
                        /* Add a block to the children collection */
                        addChild : function(obj) {
                                this.children.push(obj);
                                obj.parent = this;
                                ++this.length;
                        }
                };
        }

        // function to create an XMLHttpClient in a cross-browser manner

        function fromURL(src, ondone) {
                var client = createXMLHTTPRequest();
                client.onreadystatechange = function() {
                        if (this.readyState == 4 || this.status == 200) {
                                var txt = this.responseText;
                                ondone(YAML.eval0(txt));
                        }
                };
                client.open('GET', src);
                client.send();
        }

        function parser(str) {
                var regLevel = regex["regLevel"];
                var invalidLine = regex["invalidLine"];
                var lines = str.split("\n");
                var m;
                var level = 0, curLevel = 0;
                
                var blocks = [];
                
                var result = new Block(-1);
                var currentBlock = new Block(0);
                result.addChild(currentBlock);
                var levels = [];
                var line = "";
                
                blocks.push(currentBlock);
                levels.push(level);
                
                for(var i = 0, len = lines.length; i < len; ++i) {
                        line = lines[i];
                        
                        if(line.match(invalidLine)) {
                                continue;
                        }
                
                        if(m = regLevel.exec(line)) {
                                level = m[1].length;
                        } else
                                level = 0;
                        
                        if(level > curLevel) {
                                var oldBlock = currentBlock;
                                currentBlock = new Block(level);
                                oldBlock.addChild(currentBlock);
                                blocks.push(currentBlock);
                                levels.push(level);
                        } else if(level < curLevel) {                
                                var added = false;

                                var k = levels.length - 1;
                                for(; k >= 0; --k) {
                                        if(levels[k] == level) {
                                                currentBlock = new Block(level);
                                                blocks.push(currentBlock);
                                                levels.push(level);
                                                if(blocks[k].parent!= null)
                                                        blocks[k].parent.addChild(currentBlock);
                                                added = true;
                                                break;
                                        }
                                }
                                
                                if(!added) {
                                        errors.push("Error: Invalid indentation at line " + i + ": " + line);
                                        return;
                                }
                        }
                        
                        currentBlock.lines.push(line.replace(regex["trim"], ""));
                        curLevel = level;
                }
                
                return result;
        }
        
        function processValue(val) {
                val = val.replace(regex["trim"], "");
                var m = null;

                if(val == 'true') {
                        return true;
                } else if(val == 'false') {
                        return false;
                } else if(val == '.NaN') {
                        return Number.NaN;
                } else if(val == 'null') {
                        return null;
                } else if(val == '.inf') {
                        return Number.POSITIVE_INFINITY;
                } else if(val == '-.inf') {
                        return Number.NEGATIVE_INFINITY;
                } else if(m = val.match(regex["dashesString"])) {
                        return m[1];
                } else if(m = val.match(regex["quotesString"])) {
                        return m[1];
                } else if(m = val.match(regex["float"])) {
                        return parseFloat(m[0]);
                } else if(m = val.match(regex["integer"])) {
                        return parseInt(m[0]);
                } else if( !isNaN(m = Date.parse(val))) {
                        return new Date(m);
                } else if(m = val.match(regex["single_key_value"])) {
                        var res = {};
                        res[m[1]] = processValue(m[2]);
                        return res;
                } else if(m = val.match(regex["array"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                                } else if(str === false && (c == '[' || c == '{')) {
                                        ++count;
                                } else if(str === false && (c == ']' || c == '}')) {
                                        --count;
                                } else if(str === false && count == 0 && c == ',') {
                                        res.push(processValue(content));
                                        content = "";
                                        continue;
                                }
                                
                                content += c;
                        }
                        
                        if(content.length > 0)
                                res.push(processValue(content));
                        return res;
                } else if(m = val.match(regex["map"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                                } else if(str === false && (c == '[' || c == '{')) {
                                        ++count;
                                } else if(str === false && (c == ']' || c == '}')) {
                                        --count;
                                } else if(str === false && count == 0 && c == ',') {
                                        res.push(content);
                                        content = "";
                                        continue;
                                }
                                
                                content += c;
                        }
                        
                        if(content.length > 0)
                                res.push(content);
                                
                        var newRes = {};
                        for(var j = 0, lenJ = res.length; j < lenJ; ++j) {
                                if(m = res[j].match(regex["key_value"])) {
                                        newRes[m[1]] = processValue(m[2]);
                                }
                        }
                        
                        return newRes;
                } else 
                        return val;
        }
        
        function processFoldedBlock(block) {
                var lines = block.lines;
                var children = block.children;
                var str = lines.join(" ");
                var chunks = [str];
                for(var i = 0, len = children.length; i < len; ++i) {
                        chunks.push(processFoldedBlock(children[i]));
                }
                return chunks.join("\n");
        }
        
        function processLiteralBlock(block) {
                var lines = block.lines;
                var children = block.children;
                var str = lines.join("\n");
                for(var i = 0, len = children.length; i < len; ++i) {
                        str += processLiteralBlock(children[i]);
                }
                return str;
        }
        
        function processBlock(blocks) {
                var m = null;
                var res = {};
                var lines = null;
                var children = null;
                var currentObj = null;
                
                var level = -1;
                
                var processedBlocks = [];
                
                var isMap = true;
                
                for(var j = 0, lenJ = blocks.length; j < lenJ; ++j) {
                        
                        if(level != -1 && level != blocks[j].level)
                                continue;
                
                        processedBlocks.push(j);
                
                        level = blocks[j].level;
                        lines = blocks[j].lines;
                        children = blocks[j].children;
                        currentObj = null;
                
                        for(var i = 0, len = lines.length; i < len; ++i) {
                                var line = lines[i];

                                if(m = line.match(regex["key"])) {
                                        var key = m[1];
                                        
                                        if(key[0] == '-') {
                                                key = key.replace(regex["item"], "");
                                                if (isMap) { 
                                                        isMap = false;
                                                        if (typeof(res.length) === "undefined") {
                                                                res = [];
                                                        } 
                                                }
                                                if(currentObj != null) res.push(currentObj);
                                                currentObj = {};
                                                isMap = true;
                                        }
                                        
                                        if(typeof m[2] != "undefined") {
                                                var value = m[2].replace(regex["trim"], "");
                                                if(value[0] == '&') {
                                                        var nb = processBlock(children);
                                                        if(currentObj != null) currentObj[key] = nb;
                                                        else res[key] = nb;
                                                        reference_blocks[value.substr(1)] = nb;
                                                } else if(value[0] == '|') {
                                                        if(currentObj != null) currentObj[key] = processLiteralBlock(children.shift());
                                                        else res[key] = processLiteralBlock(children.shift());
                                                } else if(value[0] == '*') {
                                                        var v = value.substr(1);
                                                        var no = {};
                                                        
                                                        if(typeof reference_blocks[v] == "undefined") {
                                                                errors.push("Reference '" + v + "' not found!");
                                                        } else {
                                                                for(var k in reference_blocks[v]) {
                                                                        no[k] = reference_blocks[v][k];
                                                                }
                                                                
                                                                if(currentObj != null) currentObj[key] = no;
                                                                else res[key] = no;
                                                        }
                                                } else if(value[0] == '>') {
                                                        if(currentObj != null) currentObj[key] = processFoldedBlock(children.shift());
                                                        else res[key] = processFoldedBlock(children.shift());
                                                } else {
                                                        if(currentObj != null) currentObj[key] = processValue(value);
                                                        else res[key] = processValue(value);
                                                }
                                        } else {
                                                if(currentObj != null) currentObj[key] = processBlock(children);
                                                else res[key] = processBlock(children);                        
                                        }
                                } else if(line.match(/^-\s*$/)) {
                                        if (isMap) { 
                                                isMap = false;
                                                if (typeof(res.length) === "undefined") {
                                                        res = [];
                                                } 
                                        }
                                        if(currentObj != null) res.push(currentObj);
                                        currentObj = {};
                                        isMap = true;
                                        continue;
                                } else if(m = line.match(/^-\s*(.*)/)) {
                                        if(currentObj != null) 
                                                currentObj.push(processValue(m[1]));
                                        else {
                                                if (isMap) { 
                                                        isMap = false;
                                                        if (typeof(res.length) === "undefined") {
                                                                res = [];
                                                        } 
                                                }
                                                res.push(processValue(m[1]));
                                        }
                                        continue;
                                }
                        }
                        
                        if(currentObj != null) {
                                if (isMap) { 
                                        isMap = false;
                                        if (typeof(res.length) === "undefined") {
                                                res = [];
                                        } 
                                }
                                res.push(currentObj);
                        }
                }
                
                for(var j = processedBlocks.length - 1; j >= 0; --j) {
                        blocks.splice.call(blocks, processedBlocks[j], 1);
                }

                return res;
        }
                
        function semanticAnalysis(blocks) {
                var res = processBlock(blocks.children);
                return res;
        }
        
        function preProcess(src) {
                var m;
                var lines = src.split("\n");
                
                var r = regex["comment"];
                
                for(var i in lines) {
                        if(m = lines[i].match(r)) {
/*                var cmt = "";
                                if(typeof m[3] != "undefined")
                                        lines[i] = m[1];
                                else if(typeof m[3] != "undefined")
                                        lines[i] = m[3]; 
                                else
                                        lines[i] = "";
                                        */
                                if(typeof m[3] !== "undefined") {
                                        lines[i] = m[0].substr(0, m[0].length - m[3].length);
                                }
                        }
                }
                
                return lines.join("\n");
        }
        
        this.parse = function eval0(str) {
                errors = [];
                reference_blocks = [];
                processing_time = (new Date()).getTime();
                var pre = preProcess(str)
                var doc = parser(pre);
                var res = semanticAnalysis(doc);
                processing_time = (new Date()).getTime() - processing_time;
                
                return res;
        }

};


/***********************************************************************************************/
function Tools() {
    const filter = (src, ...regex) => {
        const initial = [...Array(src.length).keys()].map(() => false);
        return regex.reduce((a, expr) => OR(a, src.map(item => expr.test(item))), initial)
    }

    const rename = {
        replace: (src, old, now) => {
            return src.map(item => item.replace(old, now));
        },

        delete: (src, ...args) => {
            return src.map(item => args.reduce((now, expr) => now.replace(expr, ''), item));
        },

        trim: (src) => {
            return src.map(item => item.trim().replace(/[^\S\r\n]{2,}/g, ' '));
        }
    }

    const getNodeInfo = servers => {
        const nodes = {
            names: servers.map(s => s.split("tag=")[1]),
            types: servers.map(s => {
                const type = s.match(/^(vmess|trojan|shadowsocks|http)=/);
                return type ? type[1] : 'unknown';
            })
        };
        return nodes;
    }


    return {
        filter, rename, getNodeInfo
    }
}

function AND(...args) {
    return args.reduce((a, b) => a.map((c, i) => b[i] && c));
}

function OR(...args) {
    return args.reduce((a, b) => a.map((c, i) => b[i] || c))
}

function NOT(array) {
    return array.map(c => !c);
}

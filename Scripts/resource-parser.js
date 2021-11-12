/** 
☑️ 资源解析器 ©𝐒𝐡𝐚𝐰𝐧  ⟦2021-11-12 10:15⟧
----------------------------------------------------------
🛠 发现 𝐁𝐔𝐆 请反馈: @ShawnKOP_bot
⛳️ 关注 🆃🅶 相关频道: https://t.me/QuanX_API
🗣 🆃🄷🄰🄽🄺🅂 🆃🄾  @Jamie CHIEN, @M**F**, @c0lada, @Peng-YM, @vinewx, @love4taylor, @shadowdogy 

🤖 主要功能: 
❶ 将其它格式的⟦服务器订阅⟧解析成 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 格式
☑︎ 支持 𝐕2𝐫𝐚𝐲𝐍/𝗦𝗦(𝗥/𝗗)/𝗛𝗧𝗧𝗣(𝗦)/𝗧𝗿𝗼𝗷𝗮𝗻/𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁(𝗫)/𝗦𝘂𝗿𝗴𝗲/𝐂𝐥𝐚𝐬𝐡/𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭/𝐋𝐨𝐨𝐧 格式
☑︎ 提供说明 1⃣️ 中的可选个性化参数(筛选、重命名 等)
❷ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲(重写) & 𝗳𝗶𝗹𝘁𝗲𝗿(分流) 的 转换 & 筛选 
☑︎ 用于禁用/修改远程引用中某(几)项 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲/𝗳𝗶𝗹𝘁𝗲𝗿
☑︎ 𝐒𝐮𝐫𝐠𝐞/𝐂𝐥𝐚𝐬𝐡 类型规则 𝗹𝗶𝘀𝘁 与 模块 𝐦𝐨𝐝𝐮𝐥𝐞 的解析使用
----------------------------------------------------------
0️⃣ 在 ⟦订阅链接⟧ 后加 "#" 使用, 不同参数用 "&" 连接 
⚠️ ☞ https://mysub.com#emoji=1&tfo=1&in=香港+台湾
❖ 本地资源片段引用, 请将参数如 "#𝗶𝗻=𝘅𝘅𝘅." 填入文件第 ① 行
❖ 🚦 支持中文, "操作" 以下特殊字符时请先替换 🚦
  ∎ "+"⇒"%2B", 空格⇒"%20", "@"⇒"%40", "&"⇒"%26", "."⇒"\."

1️⃣ ⟦𝐬𝐞𝐫𝐯𝐞𝐫 节点⟧ ➠ 参数说明:
⦿ emoji=1(国行设备用2)/-1, 添加/删除节点名内地区旗帜;
⦿ udp=1/-1, tfo=1/-1, 分别强制开启(关闭) 𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲/𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧;
⦿ tls13=1, cert=1, 分别开启 𝐭𝐥𝐬1.3 及 𝐭𝐥𝐬 证书验证(默认关闭);
⦿ in, out, regex, regout 分别为 保留、删除、正则保留、正则删除 节点;
  ❖ in, out 中多参数(逻辑"或")用 "+", 逻辑"与"用 "." 表示;
  ❖ in/out/regex/regout 均对节点的完整信息进行匹配(类型、端口、加密等);
  ❖ 示范: "in=香港.0\.2倍率+台湾&out=BGP&regex=iplc"
⦿ rename 重命名, "旧名@新名", "前缀@", "@后缀", 用 "+" 连接多个参数;
  ❖ 删除字段: "字段1.字段2☠️", 想删除 "." 时用 "\." 替代
  ❖ 示范: "rename=香港@𝐇𝐊+[𝐒𝐒]@+@[1𝐗]+流量.0\.2☠️"
  ❖ 默认 emoji 先生效, 如想调换顺序, 请用 𝗿𝗿𝗻𝗮𝗺𝗲 参数
⦿ replace 正则替换节点中字段, 可用于重命名/更改加密方式等
  ❖ replace=regex1@𝘀𝘁𝗿1+regex2@𝘀𝘁𝗿2
  ❖ replace=𝗿𝗲𝗴𝗲𝘅1@ 则等效于 delreg 参数
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
⦿ ptn=1-8, 将节点名英文替换成样式 ⇒ 🅰/🄰/𝐀/𝗮/𝔸/𝕒/ᵃ/ᴬ
⦿ npt=1-8, 将节点名数字替换成样式 ⇒ ①\❶\⓵\𝟙\¹\₁\𝟏\𝟷
⦿ delreg, 利用正则表达式来删除 "节点名" 中的字段(⚠️ 慎用)
⦿ sort=1/-1/x/参数规则, 按节点名 正/逆/随机/参数规则 排序
  ❖ 参数规则是正则表达式或简单关键词, 用"<" 或 ">" 连接
  ❖ sort=🇭🇰>🇸🇬>🇯🇵>🇺🇸 , 靠前排序
  ❖ sort=IEPL<IPLC<BGP , 靠后排序
⦿ info=1, 开启通知提示机场 ✈️ 流量信息(如有提供);
⦿ del=1, 有重名节点时用此参数删除重复节点(默认改名保留)
⦿ ⟦进阶参数⟧: 𝘀𝗳𝗶𝗹𝘁𝗲𝗿/𝘀𝗿𝗲𝗻𝗮𝗺𝗲, 传入一段 base64 编码的脚本, 可用于更为复杂的[过滤/重命名] 需求
  ❖ 说明: https://github.com/KOP-XIAO/QuantumultX/pull/9

2⃣️ ⟦𝐫𝐞𝐰𝐫𝐢𝐭𝐞 重写⟧/⟦𝐟𝐢𝐥𝐭𝐞𝐫 分流⟧ ➠ 参数说明:
⦿ in, out, 根据关键词 保留/禁用 相关分流、重写规则;
⦿ inhn, outhn, “保留/删除”主机名(𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆);
  ❖ 示范: 禁用 "淘宝比价" 及 "weibo" 的 js 同主机名
  𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐥𝐢𝐬𝐭#𝒐𝒖𝒕=tb_price.js+wb_ad.js&outhn=weibo
⦿ regex/regout, 正则保留/删除, 请自行折腾正则表达式;
  ❖ 可与 in(hn)/out(hn) 一起使用，in(hn)/out(hn) 会优先执行;
  ❖ 对 𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆 & 𝐫𝐞𝐰𝐫𝐢𝐭𝐞/𝐟𝐢𝐥𝐭𝐞𝐫 同时生效(⚠️ 慎用)
⦿ policy 参数, 用于直接指定策略组，或为 𝐒𝐮𝐫𝐠𝐞 类型 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 生成策略组(默认"𝐒𝐡𝐚𝐰𝐧"策略组);
⦿ pset=regex1@policy1+regex2@policy2, 为同一分流规则中不同关键词(允许正则表达式)指定不同策略组;
⦿ replace 参数, 正则替换 𝐟𝐢𝐥𝐭𝐞𝐫/𝐫𝐞𝐰𝐫𝐢𝐭𝐞 内容, regex@newregex;
  ❖ 将淘宝比价中脚本替换成 lite 版本, tiktok 中 JP 换成 KR
    ∎ replace=(price)(.*)@$1_lite$2+jp@kr 
⦿ dst=rewrite/filter，分别为将 𝐦𝐨𝐝𝐮𝐥𝐞&𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转换成 重写/分流;
  ❖ ⚠️ 默认将 𝐦𝐨𝐝𝐮𝐥𝐞 转换到重写, 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转成分流
  ❖ ⚠️ 把 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 中 𝐮𝐫𝐥-𝐫𝐞𝐠𝐞𝐱 转成重写时, 必须要加 dst=rewrite;
  ❖ ⚠️ 把 𝐦𝐨𝐝𝐮𝐥𝐞 中的分流规则转换时, 必须要加 dst=filter
⦿ cdn=1, 将 github 脚本的地址转换成免翻墙cdn.jsdelivr.net
⦿ fcr=1/2, 为分流规则添加 force-cellular/multi-interface 参数，强制移动数据/混合数据
⦿ via=接口, 为分流规则添加 via-interface 参数, 0 表示 via-interface=%TUN%

3⃣️ 其他参数
⦿ 通知参数 ntf=0/1, 用于 关闭/打开 资源解析器的提示通知
  ❖ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗳𝗶𝗹𝘁𝗲𝗿 默认“开启”通知提示, 以防规则误删除
  ❖ 𝘀𝗲𝗿𝘃𝗲𝗿 资源解析则默认”关闭“通知提示
⦿ 类型参数 type=domain-set/rule/module/list/nodes
  ❖ 当解析器未能正确识别类型时, 可尝试使用此参数强制指定
⦿ 隐藏参数 hide=1, 隐藏筛除的分流/重写，默认方式为禁用
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
const subtag = $resource.tag != undefined ? $resource.tag : "";
////// 非 raw 链接的沙雕情形
content0 = content0.indexOf("DOCTYPE html") != -1 && link0.indexOf("github.com") != -1 ? ToRaw(content0) : content0 ;
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
const bug_link = { "open-url": "https://t.me/ShawnKOP_bot", "media-url": "https://shrtm.nu/obcB" } // bug link
const sub_link = { "open-url": link1, "media-url": "https://shrtm.nu/ebAr" } // server link


SubFlow() //流量通知


// 参数获取
var Pin0 = mark0 && para1.indexOf("in=") != -1 ? (para1.split("in=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
var Pout0 = mark0 && para1.indexOf("out=") != -1 ? (para1.split("out=")[1].split("&")[0].split("+")).map(decodeURIComponent) : null;
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
var Prname = mark0 && para1.indexOf("rename=") != -1 ? para1.split("rename=")[1].split("&")[0].split("+") : null;
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
var Phide = mark0 && para1.indexOf("hide=") != -1 ? para1.split("hide=")[1].split("&")[0] : 0;
var Pb64 = mark0 && para1.indexOf("b64=") != -1 ? para1.split("b64=")[1].split("&")[0] : 0;
var emojino = [" 0️⃣ ", " 1⃣️ ", " 2⃣️ ", " 3⃣️ ", " 4⃣️ ", " 5⃣️ ", " 6⃣️ ", " 7⃣️ ", " 8⃣️ ", " 9⃣️ ", " 🔟 "]
var pfi = Pin0 ? "in=" + Pin0.join(", ") + ",  " : ""
var pfo = Pout0 ? "out=" + Pout0.join(", ") : ""
var pfihn = Phin0 ? "inhn=" + Phin0.join(", ") + ",  " : ""
var pfohn = Phout0 ? "outhn=" + Phout0.join(", ") : ""
var Pcnt =  para1.indexOf("cnt=") != -1 ? para1.split("cnt=")[1].split("&")[0] : 0;
var Pcap = para1.indexOf("cap=") != -1 ? para1.split("cap=")[1].split("&")[0] : "";
var Pptn = para1.indexOf("ptn=") != -1 ? para1.split("ptn=")[1].split("&")[0] : ""; //花式英文字符
var Pnptn = para1.indexOf("npt=") != -1 ? para1.split("npt=")[1].split("&")[0] : ""; //花式数字
var Pcdn = para1.indexOf("cdn=") != -1 ? para1.split("cdn=")[1].split("&")[0] : "";
let [flow, exptime, errornode, total] = "";
var Pdel = mark0 && para1.indexOf("del=") != -1 ? para1.split("del=")[1].split("&")[0] : 0; //删除重复节点
var typeU = para1.indexOf("type=") != -1 ? para1.split("type=")[1].split("&")[0] : "";
var Pfcr = para1.indexOf("fcr=") != -1 ? para1.split("fcr=")[1].split("&")[0] : ""; // force-cellular 参数
var Pvia = para1.indexOf("via=") != -1 ? para1.split("via=")[1].split("&")[0] : ""; // via-interface 参数

var typeQ = $resource.type? $resource.type:"unsupported"   //返回 field 类型参数



//花漾字 pattern
var pat=[]
pat[0] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","k","r","s","t","u","v","w","x","y","z"]
pat[1] = ["🅰","🅱","🅲","🅳","🅴","🅵","🅶","🅷","🅸","🅹","🅺","🅻","🅼","🅽","🅾","🅿","🅺","🆁","🆂","🆃","🆄","🆅","🆆","🆇","🆈","🆉"]
pat[2] = ["🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🄺","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉"]
pat[3] = ["𝐀","𝐁","𝐂","𝐃","𝐄","𝐅","𝐆","𝐇","𝐈","𝐉","𝐊","𝐋","𝐌","𝐍","𝐎","𝐏","𝐊","𝐑","𝐒","𝐓","𝐔","𝐕","𝐖","𝐗","𝐘","𝐙"]
pat[4] = ["𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","𝗶","𝗷","𝗸","𝗹","𝗺","𝗻","𝗼","𝗽","𝗸","𝗿","𝘀","𝐭","𝘂","𝘃","𝘄","𝘅","𝘆","𝘇"]
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
patn[7] = ["𝟎","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟖","𝟗"]
patn[8] = ["𝟶","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿"]


var type0=""
//flag=1,2,3分别为 server、rewrite、rule 类型
var flag = 1

function Parser() {
  type0 = Type_Check(content0); //  类型判断
  //$notify(type0)
  if (type0 != "web" && type0 != "wrong-field"){
    try {
      //$notify(type0,"hh")
      if (Pdbg){
        $notify(link0,type0,content0)
      }
      total = ResourceParse();
      
    } catch (err) {
      $notify("❌ 解析出现错误", "⚠️ 请点击发送链接反馈", err, bug_link);
    }
  } else if (type0 == "wrong-field"){
    //$notify(type0+"ss")
    $notify("❌ 解析类型与目标类型"+" 「"+typeQ+" 」不符", "⚠️ 请自行检查链接内容，或点击通知反馈", $resource.link, bug_link)
    total=""
  } else {
    total=""
  }
    //$notify("","",total)
    $done({ content: total });
}

if (typeof($resource)!=="undefined") {
  Parser()
  $done({ content: total })
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
    $notify("😭 未能识别该订阅格式：  " + "⟦" + subtag + "⟧",  "⚠️ 将直接导入Quantumult X \n 如认为是 BUG, 请点通知跳转反馈", "链接返回内容:\n"+cnt, bug_link);
  }
}



function ResourceParse() {
  //预处理，分流/重写等处理完成
  if (type0 == "Subs-B64Encode") {
    total = Subs2QX(Base64.decode(content0), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "Subs") {
    total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "QuanX" || type0 == "Clash" || type0 == "Surge") {
    total = Subs2QX(isQuanX(content0).join("\n"), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "sgmodule") { // surge module 模块/含 url-regex 的 rule-set
    flag = 2 
    total = SGMD2QX(content0) // 转换 
    total = Rewrite_Filter(total, Pin0, Pout0,Preg,Pregout); // 筛选过滤
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    if (Pcdn) {total = CDN(total)
    } else { total = total.join("\n")}
  } else if (type0 == "rewrite") { // rewrite 类型
    flag = 2;
    total = Rewrite_Filter(isQuanXRewrite(content0.split("\n")), Pin0, Pout0,Preg,Pregout);
    if (Preplace) { total = ReplaceReg(total, Preplace) }
    if (Pcdn) {total = CDN(total)
    } else {total = total.join("\n")}
  } else if (type0 == "Rule") {  // rule 类型, 已处理完毕
    flag = 3;
    total = Rule_Handle(content0.split("\n"), Pout0, Pin0).filter(Boolean);
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
    total = total.join("\n")
  } else if (content0.trim() == "") {
    $notify("‼️ 引用" + "⟦" + subtag + "⟧" + " 返回內容为空", "⁉️ 点通知跳转以确认链接是否失效", para.split("#")[0], nan_link);
    flag = 0;
  } else if (type0 == "unknown") {
    ParseUnknown(content0)
    flag = -1;
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
    if (Pemoji) { total = emoji_handle(total, Pemoji); }
    if (Pregdel) {
      delreg = Pregdel
      total = total.map(DelReg)
    }
    if (Preplace) { // server 类型也可用 replace 参数进行重命名操作
      total = ReplaceReg(total, Preplace)
    }
    if (Prname) {
      Prn = Prname;
      total = total.map(Rename);
    }
    if (Psrename) { total = RenameScript(total, Psrename) }
    if (total.length > 0){
      if (Psuffix==1 || Psuffix==-1) {total = Psuffix == 1? total.map(type_suffix):total.map(type_prefix)
      }
      total = total.map(type_handle).map(emoji_prefix_handle).map(tag_handle) //各类节点名操作
      if (Psort0) { //排序操作
        total = QXSort(total, Psort0);
      }
      total = para1.indexOf("node_index_prefix")!=-1 ?index_handle(total):total // 节点序号操作
      total = TagCheck_QX(total).join("\n") //节点名检查
      if (Pcnt == 1) {$notify("解析后最终返回内容" , "节点数量: " +total.split("\n").length, total)}
      total = Base64.encode(total) //强制节点类型 base64 加密后再导入 Quantumult X
      $done({ content: total });
    } else {
      $notify("❓❓ 友情提示 ➟ "+ "⟦" + subtag + "⟧", "⚠️⚠️ 解析后无有效内容", "🚥🚥 请自行检查相关参数, 或者点击通知跳转反馈", bug_link)
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
  if (Pcnt == 1 && flag !=1) {$notify("解析后最终返回内容" , "总数量： " +total.split("\n").length, total)}
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
    var RuleK = ["host,", "-suffix,", "domain,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,"];
    var DomainK = ["domain-set,"]
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=custom,", "=https,", "=shadowsocks", "=shadowsocksr"];
    var ClashK = ["proxies:"]
    var SubK = ["dm1lc3M", "c3NyOi8v", "CnNzOi8", "dHJvamFu", "c3M6Ly", "c3NkOi8v", "c2hhZG93",,"aHR0c"];
    var RewriteK = [" url "]
    var SubK2 = ["ss://", "vmess://", "ssr://", "trojan://", "ssd://", "https://"];
    var ModuleK = ["[Script]", "[Rule]", "[URL Rewrite]", "[Map Local]", "[MITM]", "\nhttp-r"]
    var html = "DOCTYPE html"
    var subi = subs.replace(/ /g, "")
    const RuleCheck = (item) => subi.toLowerCase().indexOf(item) != -1;
    const NodeCheck = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
    const RewriteCheck = (item) => subs.indexOf(item) != -1;
    var subsn = subs.split("\n")
    if (subs.indexOf(html) != -1 && link0.indexOf("github.com" == -1)) {
      $notify("‼️ 该链接返回网页内容,无有效订阅"+ " ➟ " + "⟦" + subtag + "⟧", "⁉️ 点通知跳转以确认链接是否失效\n"+link0, subs, nan_link);
      type = "web";
    } else if (typeU == "nodes" ) {
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs-B64Encode":"wrong-field"
    } else if (ClashK.some(NodeCheck) || typeU == "clash"){ // Clash 类型节点转换
      type = (typeQ == "unsupported" || typeQ =="server")? "Clash":"wrong-field";
      content0 = Clash2QX(subs)
    } else if ((/^hostname\s*\=|pattern\=/.test(subi) || RewriteK.some(RewriteCheck)) && !/\[(Proxy|filter_local)\]/.test(subs) && para1.indexOf("dst=filter")==-1 && subi.indexOf("securehostname") == -1 && !/module|nodes|rule/.test(typeU) ) {
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "rewrite":"wrong-field" //Quantumult X 类型 rewrite/ Surge Script/
    } else if ( (((ModuleK.some(RewriteCheck) || para1.indexOf("dst=rewrite") != -1) && (para1.indexOf("dst=filter") == -1) && subs.indexOf("[Proxy]") == -1) || typeU == "module") && typeU != "nodes" && typeU != "rule" && typeQ !="filter") { // Surge 类型 module /rule-set(含url-regex) 类型
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "sgmodule" : "wrong-field"
    } else if (((RuleK.some(RuleCheck) && subs.indexOf(html) == -1 && !/\[(Proxy|server_local)\]/.test(subs)) || typeU == "rule" || para1.indexOf("dst=filter")!=-1) && typeU != "nodes") {
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
    } else if ((DomainK.some(RuleCheck) || typeU == "domain-set") && subs.indexOf("[Proxy]") == -1 && typeU != "nodes") {
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
      content0 = Domain2Rule(content0) // 转换 domain-set
    } else if (subsn.length >= 1 && SubK2.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) { //未b64加密的多行URI 组合订阅
      type = (typeQ == "unsupported" || typeQ =="server"||typeQ =="uri") ? "Subs":"wrong-field"
    } else if (SubK.some(NodeCheck)) {  //b64加密的订阅类型
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs-B64Encode":"wrong-field"
    } else if ((subi.indexOf("tag=") != -1 && QuanXK.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU =="list") {
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field" // QuanX list
    } else if (subs.indexOf("[Proxy]") != -1) {
      type = (typeQ == "unsupported" || typeQ =="server")? "Surge":"wrong-field"; // Surge Profiles
      content0 = Surge2QX(content0).join("\n");
    } else if ((SurgeK.some(NodeCheck)  && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU == "list") {
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field" // Surge proxy list
    } else if (subs.indexOf("[server_local]") != -1) {
      //type = "QuanX"  // QuanX Profile
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field"
    } else if (content0.indexOf("server") !=-1 && content0.indexOf("server_port") !=-1) { //SIP008
      //type = "QuanX"
      type = (typeQ == "unsupported" || typeQ =="server")? "Subs":"wrong-field"
      content0 = SIP2QuanX(content0)
    } 
  // 用于通知判断类型，debug
  if(typeU == "X"){
    $notify(type,"",content0)
  }
    return type
}

// 检查节点名字(重复以及空名)等QuanX 不允许的情形，以及多个空格等“不规范”方式
function TagCheck_QX(content) {
  typefix = {"shadowsocks":["𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","SS"],"shadowsocksr":["𝐬𝐬𝐫","𝐒𝐒𝐑","🅢🅢🅡","🆂🆂🆁","ⓢⓢⓡ","🅂
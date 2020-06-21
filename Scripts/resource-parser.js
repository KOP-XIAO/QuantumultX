/** 
☑️ 资源解析器 ©𝐒𝐡𝐚𝐰𝐧  ⟦2020-06-21 13:59⟧
----------------------------------------------------------
🚫 发现 𝐁𝐔𝐆 请反馈: @Shawn_KOP_bot
⛳️ 关注 🆃🅶 相关频道: https://t.me/QuanX_API
🗣 🆃🄷🄰🄽🄺🅂 🆃🄾  @Jamie CHIEN, @M**F**, @c0lada

🤖 主要功能: 
A. 将各格式服务器订阅解析成 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 格式引用
✔︎ 支持 V2RayN/SSR/SS/SSD/Trojan/QuanX/Surge/https 订阅
✔︎ 提供说明 1⃣️ 中的可选个性化参数
B. rewrite(重写) /filter(分流) 的转换&筛选 
✔︎ 用于禁用远程引用中某(几)项 rewrite/hostname/filter
✔︎ Surge 类型规则 list(不含策略组)的解析与使用
----------------------------------------------------------
0️⃣ ⟦原始订阅链接⟧ 后加 "#" , 不同参数用 "&" 连接: 
⚠️ ☞ https://mysub.com#in=香港+台湾&emoji=1&tfo=1
❖ 本地资源引用, 请将参数 "#in=xxx.." 填入资源文件第一行 ❖

1️⃣ ⟦server 节点⟧ ➠ 参数说明:
⦿ info=1, 开启通知提示机场 ✈️ 流量信息(如有提供);
⦿ emoji=1,2 或 -1, 为添加/删除节点名中的地区 emoji 旗帜;
    ♦︎ 国行设备请用 emoji=2
⦿ udp=1, tfo=1, tls13=1, 分别开启 udp-relay/fast-open/tls1.3;
⦿ cert=0, 强制"tls-verification=false" 跳过证书验证;
⦿ in, out, 分别为 保留/删除 节点, 多参数用 "+" 连接(逻辑"或"), 逻辑"与"用 "." 连接;
    ♦︎ 可直接用中文, 特殊字符请 urlencode 后使用, 如
        ❖ "@"☞"%40", "+"☞"%2B", 空格☞"%20", "&"☞"%26"
    ♦︎ 如 "in=香港.IPLC.04+台湾&out=香港%20BGP"
⦿ rename 重命名、删除字段, "旧名@新名", "删除字段1.删除字段2☠️", 以及 "前缀@", "@后缀",用 "+" 连接多个参数;
    ♦︎ 如 "rename=香港@HK+[SS]@+@[1X]+倍率.流量☠️"
    ♦︎ 如想删除 ".", 请用"rename=.@點+點☠️" 类似操作
⦿ sort=1, -1, 排序参数, 分别根据节点名 正序/逆序 排列;

2⃣️ ⟦rewrite 重写⟧/⟦filter 分流⟧ ➠ 参数说明:
⦿ in, out, 根据关键词 保留/禁用 相关的规则、重写;
⦿ inhn, outhn, 根据关键词 保留/删除 相关的主机名(hostname);
⦿ 分流规则另有 "policy=xxx" 参数, 可用于直接指定策略组，或为 Surge 类型 rule-set 生成策略组(默认"Shawn"策略组);
⦿ 示范: 禁用某重写引用中的 "淘宝比价 js" 以及 "weibo 的 js"
⚠️ ☞  https://myrewrite.list#out=tb_price.js+wb_ad.js

----------------------------------------------------------
 */


/**
 * 使用说明，
0️⃣ 在QuantumultX 配置文件中[general] 部分，加入 resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
⚠️⚠️如提示"没有自定义解析器"，请长按右下角图标后点击左侧刷新按钮，更新资源，后台退出 app，直到出现解析器说明
1️⃣ 假设原始订阅连接为: https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt , 
2️⃣ 假设你想要保留的参数为 in=tls+ss, 想要过滤的参数为 out=http+2, 请注意下面订阅链接后一定要加 ”#“ 符号
3️⃣ 则填入 Quanx 节点引用的的总链接为  https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt#in=tls+ss&out=http+2
4️⃣ 填入上述链接, 并打开的资源解析器开关

PS. 隐藏参数 ntf=1, 用于打开资源解析器的操作提示通知 (默认关闭)
⦿ rewrite/filter 资源在有 in/out 参数时会强制开启通知提示, 以防规则误删除

------------------------------
 */
//$notify("test",$resource.link)
var content0=$resource.content;
var link0=$resource.link;
var para=(link0.indexOf("http")!=-1 && link0.indexOf("://")!=-1)? link0:link0+content0.split("\n")[0];
var mark0=para.indexOf("#")!=-1? true:false;
var type0=Type_Check(content0);
para1=para.slice(para.indexOf("#")+1) //防止参数中其它位置也存在"#"
var Pin0=mark0 && para1.indexOf("in=")!=-1? (para1.split("in=")[1].split("&")[0].split("+")).map(decodeURIComponent):null;
var Pout0=mark0 && para1.indexOf("out=")!=-1? (para1.split("out=")[1].split("&")[0].split("+")).map(decodeURIComponent):null;
//$notify(link0,"type0",para)
var Phin0=mark0 && para1.indexOf("inhn=")!=-1? (para1.split("inhn=")[1].split("&")[0].split("+")).map(decodeURIComponent):null; //hostname 
var Phout0=mark0 && para1.indexOf("outhn=")!=-1? (para1.split("outhn=")[1].split("&")[0].split("+")).map(decodeURIComponent):null; //hostname
//$notify(link0,"type1",para)
var Pemoji=mark0 && para1.indexOf("emoji=")!=-1? para1.split("emoji=")[1].split("&")[0]:null;
var Pudp0=mark0 && para1.indexOf("udp=")!=-1? para1.split("udp=")[1].split("&")[0]:0;
var Ptfo0=mark0 && para1.indexOf("tfo=")!=-1? para1.split("tfo=")[1].split("&")[0]:0;
var Pinfo=mark0 && para1.indexOf("info=")!=-1? para1.split("info=")[1].split("&")[0]:0;
var Prname=mark0 && para1.indexOf("rename=")!=-1? para1.split("rename=")[1].split("&")[0].split("+"):null;
var Prrname=mark0 && para1.indexOf("rrname=")!=-1? para1.split("rrname=")[1].split("&")[0].split("+"):null;
var Ppolicy=mark0 && para1.indexOf("policy=")!=-1? decodeURIComponent(para1.split("policy=")[1].split("&")[0]):"Shawn";
var Pcert0=mark0 && para1.indexOf("cert=")!=-1? para1.split("cert=")[1].split("&")[0]:1;
var Psort0=mark0 && para1.indexOf("sort=")!=-1? para1.split("sort=")[1].split("&")[0]:0;
var PTls13=mark0 && para1.indexOf("tls13=")!=-1? para1.split("tls13=")[1].split("&")[0]:0;
var Pntf0= mark0 && para1.indexOf("ntf=")!=-1? para1.split("ntf=")[1].split("&")[0]:0;
var Pb64= mark0 && para1.indexOf("b64=")!=-1? para1.split("b64=")[1].split("&")[0]:0;
var emojino=[" 0️⃣ "," 1⃣️ "," 2⃣️ "," 3⃣️ "," 4⃣️ "," 5⃣️ "," 6⃣️ "," 7⃣️ "," 8⃣️ "," 9⃣️ "," 🔟 "]
var pfi=Pin0? "in="+Pin0+", ":""
var pfo=Pout0? "out="+Pout0:""
var pfihn=Phin0? "inhn="+Phin0+", ":""
var pfohn=Phout0? "outhn="+Phout0:""

const subinfo=$resource.info;
const subtag=$resource.tag!=undefined? $resource.tag:"";
const Base64=new Base64Code();
const escapeRegExp = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); //处理特殊符号以便正则匹配使用
const qxpng="https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png"
var subinfo_link = {"open-url": "https://t.me/QuanX_API", "media-url" :"https://shrtm.nu/ebAr"};
var rwrite_link = {"open-url":link0, "media-url": "https://shrtm.nu/G2Xn"}
var rule_link={"open-url":link0, "media-url": "https://shrtm.nu/7eiK"}
var nan_link={"open-url":link0, "media-url": qxpng}
var sub_link={"open-url":link0, "media-url": "https://shrtm.nu/ebAr"}


//$notify(link0,type0,content0)

//响应头流量处理部分
if(Pinfo==1 && subinfo){
	var sinfo=subinfo.replace(/ /g,"").toLowerCase();
	var total="总流量: "+(parseFloat(sinfo.split("total=")[1].split(",")[0])/(1024**3)).toFixed(2)+"GB";
	var usd="已用流量: "+((parseFloat(sinfo.split("upload=")[1].split(",")[0])+parseFloat(sinfo.split("download=")[1].split(",")[0]))/(1024**3)).toFixed(2)+"GB"
	var left="剩余流量: "+((parseFloat(sinfo.split("total=")[1].split(",")[0])/(1024**3))-((parseFloat(sinfo.split("upload=")[1].split(",")[0])+parseFloat(sinfo.split("download=")[1].split(",")[0]))/(1024**3))).toFixed(2)+"GB"
	if(sinfo.indexOf("expire=")!=-1){
		var epr= new Date(parseFloat(sinfo.split("expire=")[1].split(",")[0])*1000);
		var year=epr.getFullYear();  // 获取完整的年份(4位,1970)
		var mth=epr.getMonth()+1 < 10 ? '0'+(epr.getMonth()+1):(epr.getMonth()+1);  // 获取月份(0-11,0代表1月,用的时候记得加上1)
		var day=epr.getDate()<10 ? "0"+(epr.getDate()):epr.getDate(); 
		epr="过期时间: "+year+"-"+mth+"-"+day
		} else{
			epr=""; //"过期时间: ✈️ 未提供該信息" //没过期时间的显示订阅链接
		}
	var message=total+"\n"+usd+", "+left;
	$notify("流量信息: ⟦"+subtag+"⟧", epr, message,subinfo_link)
}

if(type0=="Subs-B64Encode"){
	total=SubsEd2QX(content0,Pudp0,Ptfo0,Pcert0,PTls13);
	flag=1;
}else if(type0=="Subs"){
	total=Subs2QX(content0,Pudp0,Ptfo0,Pcert0,PTls13);
	flag=1;
}else if(type0=="QuanX"){
	total=isQuanX(content0);
	flag=1;
}else if(type0=="Surge"){
	total=Surge2QX(content0);
	flag=1;
}else if(type0=="rewrite"){
	flag=2;
	content0=content0.split("\n");
	total=Rewrite_Filter(content0,Pin0,Pout0);
}else if(type0=="Rule"){
	flag=3;
	total=content0.split("\n");
	total=Rule_Handle(total,Pout0,Pin0);
}else if(content0.trim()==""){
	$notify("‼️ 引用"+"⟦"+subtag+"⟧"+" 链接返回內容为空","⁉️请自行复制原始链接到浏览器, 确认链接是否失效",para.split("#")[0],nan_link);
	flag=0;
	$done({content : ""})
}else if(type0=="unknown"){
	$notify("😭 太难写了, 可能是 bug ⁉️  "+"⟦"+subtag+"⟧", "👻 本解析器 暂未支持/未能识别 该订阅格式", "⚠️ 已尝试直接导入Quantumult X",nan_link);
	$done({content : content0});
	flag=-1;
}else { flag=0 }

if(flag==3){
	$done({content : total.join("\n")});
}else if(flag==2){
	$done({content:total.join("\n")});
}else if(flag==1){
	if(Pin0||Pout0){
		total=Filter(total,Pin0,Pout0)
		} else {
			if(Pntf0!=0){
		$notify("👥 引用"+"⟦"+subtag+"⟧"+" 开始转换节点订阅","🐼️ 如需筛选节点请使用in/out及其他参数，可参考此示范:","👉 https://t.me/QuanXNews/110",sub_link);}
	}
	if(Prrname){
		if(Pntf0!=0){ 
		$notify("👥 引用"+"⟦"+subtag+"⟧"+" 开始节点重命名","⚠️ 格式为 \"旧名@新名\",\"删除字段☠️\",及 \"前缀@\",\"@后缀\"","👉 当前添加参数为: "+Prrname, sub_link);}
		var Prn=Prrname;
		total=total.map(Rename);
	}
	if(Pemoji){
				if(Pntf0!=0){
				$notify("👥 引用"+"⟦"+subtag+"⟧"+" 开始更改旗帜 emoji","⚠️ 清除emoji请用参数 -1, 国行设备添加emoji请使用参数 2","👉 当前添加参数为: emoji="+Pemoji,sub_link)};
				total=emoji_handle(total,Pemoji);
			}
	if(Prname){
		if(Pntf0!=0){ 
		$notify("👥 引用"+"⟦"+subtag+"⟧"+" 开始节点重命名","⚠️ 格式为 \"旧名@新名\",\"删除字段☠️\",及 \"前缀@\",\"@后缀\"","👉 当前添加参数为: "+Prname,sub_link);}
		var Prn=Prname;
		total=total.map(Rename);
	}
	if(Psort0==1 || Psort0==-1){
		total=QXSort(total,Psort0);
	}
	total=TagCheck_QX(total)
	if(total.length==0){
		$notify("‼️ 引用"+"⟦"+subtag+"⟧"+"无有效节点","⁉️请自行检查原始链接以及过滤参数",para,nan_link)
		};
	//$notify("Final","List",total)
    total=total.join("\n");
	if(flag==1){
		total=Base64.encode(total)} //强制 base64
	$done({content : total});
}

//判断订阅类型
function Type_Check(subs){
	var type="unknown"
	var RuleK=["host","domain","ip-cidr","geoip","user-agent","ip6-cidr"];
	var QuanXK=["shadowsocks=","trojan=","vmess=","http="];
	var SurgeK=["=ss,","=vmess,","=trojan,","=http,","=custom,","=https,"];
	var SubK=["dm1lc3M","c3NyOi8v","dHJvamFu","c3M6Ly","c3NkOi8v"];
	var RewriteK=[" url "]
	var SubK2=["ss://","vmess://","ssr://","trojan://","ssd://"];
	var html="DOCTYPE html"
	var subi=subs.replace(/ /g,"")
	const RuleCheck = (item) => subs.toLowerCase().indexOf(item)!=-1;
	const QuanXCheck = (item) => subi.toLowerCase().indexOf(item)!=-1;
	const SurgeCheck = (item) => subi.toLowerCase().indexOf(item)!=-1;
	const SubCheck = (item) => subs.indexOf(item)!=-1;
	const RewriteCheck = (item) => subs.indexOf(item)!=-1;
	var subsn=subs.split("\n")
	//$notify("Subs","cnt",subs)
	if(subs.indexOf(html)!=-1){
		$notify("‼️ 该链接返回内容有误","⁉️ 请自行复制原始链接到浏览器, 确认链接是否失效",link0,nan_link);
		type="web";
	} else if(SubK.some(SubCheck)){  //b64加密的订阅类型
		type="Subs-B64Encode"
	} else if(subsn.length>=1 && SubK2.some(SubCheck)){ //未b64加密的多行URI 组合订阅
		type="Subs"
	} else if(subi.indexOf("tag=")!=-1 && QuanXK.some(QuanXCheck)){
		type="QuanX"
	} else if(subs.indexOf("[Proxy]")!=-1){
		type="Surge";
	} else if(SurgeK.some(SurgeCheck)){
		type="Surge"
	} else if(subi.indexOf("hostname=")!=-1 || RewriteK.some(RewriteCheck)){
		type="rewrite"
	} else if(RuleK.some(RuleCheck) && subs.indexOf(html)==-1){
		type="Rule";
	}
	return type
}


function Trim(item){
	return item.trim()
	}


//Rewrite过滤，使用+连接多个关键词(逻辑"或"):in 为保留，out 为排除
function Rewrite_Filter(subs,Pin,Pout){
	//var subs=subs0.split("\n")
	var Nlist=[];
	var noteK=["//","#",";"];
	var hnc=0;
	var dwrite=[]
	var hostname=""
	for(var i=0;i<subs.length;i++){
		subi=subs[i].trim();
		var subii=subi.replace(/ /g,"")
		if(subi!=""){
		const notecheck = (item) => subi.indexOf(item)==0
		if(noteK.some(notecheck)){ // 注释项跳过 
		//console.log("notion")
			//Nlist.push(subs[i])
			continue;
		}else if(hnc==0 && subii.indexOf("hostname=")==0){ //host name 部分
			//console.log("hostname");
			hostname=(Phin0||Phout0)? HostNamecheck(subi,Phin0,Phout0):subi;//hostname 部分
		}else if(subii.indexOf("hostname=")!=0){ //rewrite 部分
		var inflag=Rcheck(subi,Pin);
		//if(inflag==1){$notify(inflag)}
		var outflag=Rcheck(subi,Pout);
		if(outflag==1 || inflag==0){
			//$notify("a","b",subi)
			dwrite.push(subi); //out 命中
		}else if(outflag==0 && inflag!=0){ //out 未命中 && in 未排除
			Nlist.push(subi);
		}else if(outflag==2 && inflag!=0){ //无 out 参数 && in 未排除
			Nlist.push(subi);
		}//		
		} 
		}
	}
	if(dwrite.length>0){
		nowrite=dwrite.length<=10?emojino[dwrite.length]:dwrite.length
		$notify("🤖 "+"重写引用  ➟ "+"⟦"+subtag+"⟧","⛔️ 筛选参数: "+pfi+pfo,"☠️ 重写 rewrite 中已禁用以下"+nowrite+"个匹配项:"+"\n ⨷ "+dwrite.join("\n ⨷ "),rwrite_link )
	}
	if(Nlist.length==0){$notify("🤖 "+"重写引用  ➟ "+"⟦"+subtag+"⟧","⛔️ 筛选参数: "+pfi+pfo,"⚠️ 筛选后剩余rewrite规则数为 0️⃣ 条, 请检查参数及原始链接",nan_link)}
	if(hostname!=""){Nlist.push(hostname)}
	return Nlist
}

// 主机名处理
function HostNamecheck(content,parain,paraout){
	var hname=content.replace(/ /g,"").split("=")[1].split(",");
	var nname=[];
	var dname=[]; //删除项
	for(i=0;i<hname.length;i++){
		dd=hname[i]
		const excludehn = (item) => dd.indexOf(item)!=-1;
		if(paraout && paraout!=""){ //存在 out 参数时
		if(!paraout.some(excludehn)){ //out 未命中🎯️
			if(parain && parain!=""){
				if(parain.some(excludehn)){ //Pin 命中🎯️
					nname.push(hname[i])
				} else{$notify("..xx")
				dname.push(hname[i])} //Pin 未命中🎯️的记录
			}else{nname.push(hname[i])}	//无in 参数		
		}else{dname.push(hname[i])} //out 参数命中
	}else if(parain && parain!=""){ //不存在 out，但有 in 参数时
		if(parain.some(excludehn)){ //Pin 命中🎯️
					nname.push(hname[i])
				}else{dname.push(hname[i])}
			}else {
				nname.push(hname[i])
			}
	} //for j
	hname="hostname="+nname.join(", ");
	// $notify(hname,dname)
	if(dname.length>0){
		if(paraout || parain){
			var noname=dname.length<=10?emojino[dname.length]:dname.length
			$notify("🤖 "+"重写引用  ➟ "+"⟦"+subtag+"⟧","⛔️ 筛选参数: "+pfihn+pfohn,"☠️ 主机名 hostname 中已删除以下"+noname+"个匹配项:"+"\n ⨷ "+dname.join(","),rwrite_link )
		}
	}
	if(nname.length==0){
		$notify("🤖 "+"重写引用  ➟ "+"⟦"+subtag+"⟧","⛔️ 筛选参数: "+pfihn+pfohn,"⚠️ 主机名 hostname 中剩余 0️⃣ 项, 请检查参数及原始链接",nan_link )
	}
	return hname
}

//Rewrite 筛选的函数
function Rcheck(content,param){
	name=content.toUpperCase()
	if(param){
		var flag=0; //没命中
		const checkpara= (item) => name.indexOf(item.toUpperCase()) !=-1;
		if(param.some(checkpara)){
			flag=1 //命中
		}
	return flag
	}else { //if param
		return 2} //无参数
}

//分流规则转换及过滤，可用于 surge 及 quanx 的 rule-list
function Rule_Handle(subs,Pout,Pin){
	cnt=subs //.split("\n");
	Tin=Pin; //保留参数
	Tout=Pout; //过滤参数
	ply=Ppolicy; //策略组
	var nlist=[]
	var RuleK=["//","#",";"];
	if(Tout!="" && Tout!=null){
		var dlist=[];
		for(var i=0;i<cnt.length;i++){
			cc=cnt[i]
			const exclude = (item) =>cc.indexOf(item)!=-1; // 删除项
			const RuleCheck = (item) => cc.indexOf(item)!=-1; //无视注释行
			if(Tout.some(exclude) && !RuleK.some(RuleCheck)){
				dlist.push(Rule_Policy("-"+cnt[i]))
			} else if(!RuleK.some(RuleCheck) && cc ){ //if Pout.some, 不操作注释项
			dd=Rule_Policy(cc);
			if(Tin!="" && Tin!=null){
			const include = (item) =>dd.indexOf(item)!=-1; // 保留项
			if(Tin.some(include)){
			nlist.push(dd);
		}
	}else{nlist.push(dd);
	}
		} //else if cc
		}//for cnt
		var no=dlist.length<=10?emojino[dlist.length]:dlist.length
		if(dlist.length>0){$notify("🤖 "+"分流引用  ➟ "+"⟦"+subtag+"⟧","⛔️ 禁用: "+ Tout,"☠️ 已禁用以下"+no+"条匹配规则:"+"\n ⨷ "+dlist.join("\n ⨷ "),rule_link)
		}else{$notify("🤖 "+"分流引用  ➟ "+"⟦"+subtag+"⟧","⛔️ 禁用: "+Tout,"⚠️ 未发现任何匹配项, 请检查参数或原始链接",nan_link)}
		if(Tin!="" && Tin!=null){  //有 in 跟 out 参数时
		if(nlist.length>0 ){
			var noin0=nlist.length<=10?emojino[nlist.length]:nlist.length
			$notify("🤖 "+"分流引用  ➟ "+"⟦"+subtag+"⟧","✅ 保留:"+Tin,"🎯 已保留以下 "+noin0+"条匹配规则:"+"\n ⨁ "+nlist.join("\n ⨁ "),rule_link)
		} else{$notify("🤖 "+"分流引用  ➟ "+"⟦"+subtag+"⟧","✅ 保留:"+Tin+",⛔️ 禁用: "+Tout,"⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接",nan_link)
	} 
	} else {// if Tin (No Tin)
		if(nlist.length==0 ){
			$notify("🤖 "+"分流引用  ➟ "+"⟦"+subtag+"⟧","⛔️ 禁用: "+Tout,"⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接",nan_link)
	}
	} 
	return [...dlist,...nlist];
	} else if(Tin!="" && Tin!=null){ //if Tout
		var dlist=[];
		for(var i=0;i<cnt.length;i++){
			cc=cnt[i]
			const RuleCheck = (item) => cc.indexOf(item)!=-1; //无视注释行
			if(!RuleK.some(RuleCheck) && cc ){ //if Pout.some, 不操作注释项
			dd=Rule_Policy(cc);
			const include = (item) =>dd.indexOf(item)!=-1; // 保留项
			if(Tin.some(include)){
			nlist.push(dd);
		}else{dlist.push("-"+dd)}
		}
	} // for cnt
	if(nlist.length>0){
		var noin=nlist.length<=10?emojino[nlist.length]:nlist.length
	$notify("🤖 "+"分流引用  ➟ "+"⟦"+subtag+"⟧","✅ 保留:"+Tin,"🎯 已保留以下 "+noin+"条匹配规则:"+"\n ⨁ "+nlist.join("\n ⨁ "),rule_link)
} else{$notify("🤖 "+"分流引用  ➟ "+"⟦"+subtag+"⟧","✅ 保留:"+Tin,"⚠️ 筛选后剩余规则数为 0️⃣ 条, 请检查参数及原始链接",nan_link)}
	return [...dlist,...nlist];
	} else {  //if Tin
	return cnt.map(Rule_Policy)
}
}

function Rule_Policy(content){ //增加、替换 policy
	var cnt=content.split(",");
	var RuleK=["//","#",";"];
	var RuleK1=["host","domain","ip-cidr","geoip","user-agent","ip6-cidr"];
	const RuleCheck = (item) => cnt[0].toLowerCase().indexOf(item)!=-1; //无视注释行
	const RuleCheck1 = (item) => cnt[0].toLowerCase().indexOf(item)!=-1; //无视 quanx 不支持的规则类别
	if(RuleK1.some(RuleCheck1)){
	if(cnt.length==3 && cnt.indexOf("no-resolve")==-1){
		ply0 = Ppolicy!="Shawn"? Ppolicy:cnt[2]
		nn=cnt[0]+", "+cnt[1]+", "+ply0
	} else if(cnt.length==2){ //Surge rule-set
		ply0 = Ppolicy!="Shawn"? Ppolicy:"Shawn"
		nn=cnt[0]+", "+cnt[1]+", "+ply0
	}else if(cnt.length==3 && cnt[2].indexOf("no-resolve")!=-1){
		ply0 = Ppolicy!="Shawn"? Ppolicy:"Shawn"
		nn=cnt[0]+", "+cnt[1]+", "+ply0+", "+cnt[2]
	}else if(cnt.length==4 && cnt[3].indexOf("no-resolve")!=-1){
		ply0 = Ppolicy!="Shawn"? Ppolicy:cnt[2]
		nn=cnt[0]+", "+cnt[1]+", "+ply0+", "+cnt[3]
	}else if(!RuleK.some(RuleCheck)&& content){
		$notify("未能解析"+"⟦"+subtag+"⟧"+"其中部分规则:",content,nan_link);
		return ""
	}else{return ""}
	if(cnt[0].indexOf("URL-REGEX")!=-1 || cnt[0].indexOf("PROCESS")!=-1){
		nn=""
	} else {nn=nn.replace("IP-CIDR6","ip6-cidr")}
	return nn	
	} else{return ""}//if RuleK1 check	
}

//混合订阅类型，用于整体进行了 base64 encode 后的类型
function SubsEd2QX(subs,Pudp,Ptfo,Pcert,Ptls13){ 
	var list0=Base64.decode(subs).split("\n");
	//$notify("After B64","lists",list0)
	var QuanXK=["shadowsocks=","trojan=","vmess=","http="];
	var SurgeK=["=ss","=vmess","=trojan","=http","=custom"];
	var QXlist=[];
	for(i=0;i<list0.length;i++){
		var node=""
		if(list0[i].trim().length>3){
		var type=list0[i].split("://")[0].trim()
		//$notify(type)
		var listi=list0[i].replace(/ /g,"")
		const QuanXCheck = (item) => listi.toLowerCase().indexOf(item)!=-1;
		const SurgeCheck = (item) => listi.toLowerCase().indexOf(item)!=-1;
		if(type=="vmess"){
			node= V2QX(list0[i],Pudp,Ptfo,Pcert,Ptls13)
		}else if(type=="ssr"){
			node= SSR2QX(list0[i],Pudp,Ptfo)
		}else if(type=="ss"){
			node = SS2QX(list0[i],Pudp,Ptfo)
		}else if(type=="trojan"){
			node = TJ2QX(list0[i],Pudp,Ptfo,Pcert,Ptls13)
		}else if(type=="https"){ //subs,Ptfo,Pcert,Ptls13
			node = HPS2QX(list0[i],Ptfo,Pcert,Ptls13)
		}else if(QuanXK.some(QuanXCheck)){
			node = list0[i]
		}else if(SurgeK.some(SurgeCheck)){
			node = Surge2QX(list0[i])
		}
		//$notify("Final","results",node)
		if(node!=""){
        QXlist.push(node)}
	}
	}
	return QXlist
}

//混合订阅类型，用于未整体进行 base64 encode 的类型
function Subs2QX(subs,Pudp,Ptfo,Pcert,Ptls13){ 
	//$notify("start","cnt",subs)
	var list0=subs.split("\n");
	var QuanXK=["shadowsocks=","trojan=","vmess=","http="];
	var SurgeK=["=ss","=vmess","=trojan","=http"];
	var QXlist=[];
	for(i=0;i<list0.length;i++){
		var node=""
		if(list0[i].trim().length>3){
		var type=list0[i].split("://")[0].trim()
		var listi=list0[i].replace(/ /g,"")
		const QuanXCheck = (item) => listi.toLowerCase().indexOf(item)!=-1;
		const SurgeCheck = (item) => listi.toLowerCase().indexOf(item)!=-1;
		if(type=="vmess"){
			node= V2QX(list0[i],Pudp,Ptfo,Pcert,Ptls13)
		}else if(type=="ssr"){
			node= SSR2QX(list0[i],Pudp,Ptfo)
		}else if(type=="ss"){
			node = SS2QX(list0[i],Pudp,Ptfo)
		}else if(type=="ssd"){
			node = SSD2QX(list0[i],Pudp,Ptfo)
		}else if(type=="trojan"){
			node = TJ2QX(list0[i],Pudp,Ptfo,Pcert,Ptls13)
		}else if(type=="https"){
			node = HPS2QX(list0[i],Ptfo,Pcert,Ptls13)
		}else if(QuanXK.some(QuanXCheck)){
			node = list0[i]
		}else if(SurgeK.some(SurgeCheck)){
			node = Surge2QX(list0[i])
		}
		if (node instanceof Array){
		    for (var j in node) {
		        QXlist.push(node[j])
		    }
		}else if(node!=""){
	        QXlist.push(node)
	    }
	}
	}
	//$notify("final", "list", QXlist)
	return QXlist
}

// 检查节点名字(重复以及空名)等QuanX 不允许的情形
function TagCheck_QX(content){
	var Olist=content
	var Nlist=[]
	var nmlist=[]
	var nulllist=[]; //记录空名字节点
	var duplist=[];  //记录重名节点
	var no=0;
	for(i=0;i<Olist.length;i++){
		var item=Olist[i]
		var nl=item.slice(item.indexOf("tag"))
		//$notify(nl)
		var nm=nl.slice(nl.indexOf("=")+1)
		//nl<3? item.split("tag")[1].split("=")[1].trim():item.split("tag")[1].split("=")[1].trim() // get tag
		//$notify(nm)
		if(nm==""){ //空名字
			nm=" ["+item.split("=")[0]+"] "+item.split("=")[1].split(",")[0].split(":")[0]
			item=item.split("tag")[0]+"tag="+nm.replace("shadowsocks","ss")
			nulllist.push(nm.replace("shadowsocks","ss"))
		}
		var ni=0
		while(nmlist.indexOf(nm)!=-1){ //重名
			nm=ni<=10? nm.split(" ⌘")[0]+" ⌘"+emojino[ni]:nm.split(" ⌘")[0]+" ⌘"+ni
			item=item.split("tag")[0]+"tag="+nm
			ni=ni+1
			}
		if(ni!=0){ duplist.push(nm)}	
		nmlist.push(nm)	
		ni=0	
		Nlist.push(item)
	} // for
	//$notify(nulllist.length,)
	if(nulllist.length>=1){
		no= nulllist.length<=10? emojino[nulllist.length]:nulllist.length ;
		$notify("⚠️ 引用"+"⟦"+subtag+"⟧"+" 内有"+no+"个空节点名 ", "✅ 已将节点“类型+IP”设为节点名"," ⨁ "+nulllist.join("\n ⨁ "),nan_link)}
	if(duplist.length>=1){
		no= duplist.length<=10? emojino[duplist.length]:duplist.length ;
		$notify("⚠️ 引用"+"⟦"+subtag+"⟧"+" 内有"+no+"个重复节点名 ", "✅ 已添加⌘符号作为区分:", " ⨁ "+duplist.join("\n ⨁ "),nan_link)}
	return Nlist
}
//http=example.com:443, username=name, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, tls13=true, fast-open=false, udp-relay=false, tag=http-tls-02
//HTTPS 类型 URI 转换成 QUANX 格式
function HPS2QX(subs,Ptfo,Pcert,Ptls13){

	var server=Base64.decode(subs.replace("https://","")).trim().split("\u0000")[0];
	var nss=[]
	if(server!=""){
		var ipport="http="+server.split("@")[1].split("#")[0].split("/")[0];
		var uname="username="+server.split(":")[0];
		var pwd="password="+server.split("@")[0].split(":")[1];
		var tag="tag="+server.split("#")[1];
		var tls="over-tls=true";
		var cert=Pcert!=0? "tls-verification=true":"tls-verification=false";
		var tfo=Ptfo==1? "fast-open=true":"fast-open=false";
		var tls13=Ptls13==1? "tls13=true":"tls13=false";
		nss.push(ipport,uname,pwd,tls,cert,tfo,tls13,tag)
	}
	var QX=nss.join(",");
	return QX
	//$notify("ts","content",QX)
}	

//V2RayN uri转换成 QUANX 格式
function V2QX(subs,Pudp,Ptfo,Pcert,Ptls13){
	var cert=Pcert
	var tls13=Ptls13
	var server=String(Base64.decode(subs.replace("vmess://","")).trim()).split("\u0000")[0];
	var nss=[];
	if(server!=""){
		ss=JSON.parse(server);
		ip="vmess="+ss.add+":"+ss.port;
		pwd="password="+ss.id;
		mtd="method=aes-128-gcm"
		tag="tag="+decodeURIComponent(ss.ps);
		udp= Pudp==1? "udp-relay=true":"udp-relay=false";
		tfo= Ptfo==1? "fast-open=true":"fast-open=false";
		obfs=Pobfs(ss,cert,tls13);
		if(obfs=="" || obfs==undefined){
			nss.push(ip,mtd,pwd,tfo,udp,tag)
		}else {
			nss.push(ip,mtd,pwd,obfs,tfo,udp,tag);}
		QX=nss.join(", ");
	}
	return QX
}

// Vmess obfs 参数
function Pobfs(jsonl,Pcert,Ptls13){
	var obfsi=[];
	var cert=Pcert;
	tcert= cert==0? "tls-verification=false":"tls-verification=true";
	tls13= Ptls13==1? "tls13=true":"tls13=false"
	if(jsonl.net=="ws" && jsonl.tls=="tls"){
		obfs0="obfs=wss, "+tcert+", "+tls13+", ";
		uri0= jsonl.path && jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		host0= jsonl.host && jsonl.host!=""? "obfs-host="+jsonl.host+",":"";
		obfsi.push(obfs0+host0+uri0)
		return obfsi.join(", ")
	}else if(jsonl.net=="ws"){
		obfs0="obfs=ws";
		uri0= jsonl.path && jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		host0= jsonl.host && jsonl.host!=""? "obfs-host="+jsonl.host+",":"";
		obfsi.push(obfs0,host0+uri0);
		return obfsi.join(", ")
	}else if(jsonl.tls=="tls"){
		obfs0="obfs=over-tls, "+tcert+", "+tls13;
		uri0=jsonl.path && jsonl.path!=""? "obfs-uri="+jsonl.path:"";
		host0=jsonl.host && jsonl.host!=""? ", obfs-host="+jsonl.host:"";
		obfsi.push(obfs0+host0)
		return obfsi.join(", ")
	}
}


// 判断节点过滤的函数
function Scheck(content,param){
	name=content.split("tag=")[1].toUpperCase()
	if(param){
		var flag=0;
	for(i=0;i<param.length;i++){
		//console.log(param[i])
		var params=param[i].split(".");
		const checkpara= (item) => name.indexOf(item.toUpperCase()) !=-1;
		if(params.every(checkpara)){
			flag=1
		}
	}//for
	return flag
	}else { //if param
		return 2}
}

//节点过滤，使用+连接多个关键词(逻辑"或"):in 为保留，out 为排除, "与"逻辑请用符号"."连接
function Filter(servers,Pin,Pout){
	var Nlist=[];
	var Delist=[]
	for(var i=0;i<servers.length;i++){
		if(Scheck(servers[i],Pin)!=0 && Scheck(servers[i],Pout)!=1){
			Nlist.push(servers[i])
		}else{Delist.push(servers[i].replace(/ /g,"").split("tag=")[1])} //记录未被保留节点
	}//for
	if(Pntf0!=0 && Delist.length>=1){//通知部分
	var no= Delist.length<=10? emojino[ Delist.length]:Delist.length ;
	$notify("👥 引用"+"⟦"+subtag+"⟧"+" 开始节点筛选","🕹 筛选关键字: "+pfi+pfo, "☠️ 已删除以下 "+no+"个节点\n"+" ⨁ "+Delist.join(", "),sub_link);
	}
	return Nlist
}

//SSR 类型 URI 转换 quanx 格式
function SSR2QX(subs,Pudp,Ptfo){
	var nssr=[]
	var cnt=Base64.decode(subs.split("ssr://")[1].replace(/-/g,"+").replace(/_/g,"/")).split("\u0000")[0]
	var obfshost = '';
	var oparam = '';
	if(cnt.split(":").length<=6) { //排除难搞的 ipv6 节点
	type="shadowsocks=";
	ip=cnt.split(":")[0]+":"+cnt.split(":")[1];
	pwd="password="+Base64.decode(cnt.split("/?")[0].split(":")[5].replace(/-/g,"+").replace(/_/g,"/")).split("\u0000")[0];
	mtd="method="+cnt.split(":")[3];
	obfs="obfs="+cnt.split(":")[4]+", ";
	ssrp="ssr-protocol="+cnt.split(":")[2];
	if(cnt.indexOf("obfsparam=")!=-1){
		obfshost=cnt.split("obfsparam=")[1].split("&")[0]!=""? "obfs-host="+Base64.decode(cnt.split("obfsparam=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")).split(",")[0].split("\u0000")[0]+", ":""
	}
	if(cnt.indexOf("protoparam=")!=-1){
		oparam=cnt.split("protoparam=")[1].split("&")[0]!=""? "ssr-protocol-param="+Base64.decode(cnt.split("protoparam=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")).split(",")[0].split("\u0000")[0]+", ":""
	}
	tag="tag="+(Base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/"))).split("\u0000")[0]
	//console.log(Base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")))
	pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
	ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
	nssr.push(type+ip,pwd,mtd,obfs+obfshost+oparam+ssrp,pudp,ptfo,tag)
	QX=nssr.join(", ")
}
	return QX;
}

//Trojan 类型 URI 转换成 QX
function TJ2QX(subs,Pudp,Ptfo,Pcert,Ptls13){
	var ntrojan=[]
	var cnt=subs.split("trojan://")[1]
	type="trojan=";
	if(cnt.indexOf(":443")!=-1){
		ip=cnt.split("@")[1].split(":443")[0]+":443";
	}else{
		ip=cnt.split("@")[1].split("?")[0].split("\n")[0].trim(); //非 443 端口的奇葩机场？
	}
	pwd="password="+cnt.split("@")[0];
	obfs="over-tls=true";
	pcert= cnt.indexOf("allowInsecure=0")!= -1? "tls-verification=true":"tls-verification=false";
	ptls13= Ptls13==1?"tls13=true":"tls13=false"
	if(Pcert==0){pcert="tls-verification=false"}	
	pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
	ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
	tag=cnt.indexOf("#")!=-1? "tag="+decodeURIComponent(cnt.split("#")[1]):"tag= [trojan]"+ip
	ntrojan.push(type+ip,pwd,obfs,pcert,ptls13,pudp,ptfo,tag)
	QX=ntrojan.join(", ");
	return QX;
}

//SS 类型 URI 转换 quanx 格式
function SS2QX(subs,Pudp,Ptfo){
	var nssr=[]
	var cnt=subs.split("ss://")[1]
	//$notify("SS转换 ing","SS",cnt)	
	if(cnt.split(":").length<=6) { //排除难搞的 ipv6 节点
	type="shadowsocks=";
	if(cnt.indexOf("@")!=-1){
		ip=cnt.split("@")[1].split("#")[0].split("/")[0];
		pwdmtd=Base64.decode(cnt.split("@")[0].replace(/-/g,"+").replace(/_/g,"/")).split("\u0000")[0].split(":")
	}else{
		var cnt0=Base64.decode(cnt.split("#")[0].replace(/-/g,"+").replace(/_/g,"/").split("\u0000")[0]);
		ip=cnt0.split("@")[1].split("#")[0].split("/")[0];
		pwdmtd=cnt0.split("@")[0].split(":")

	}
	pwd="password="+pwdmtd[1];
	mtd="method="+pwdmtd[0];
	obfs= cnt.split("obfs%3D")[1]!=null ? ", obfs="+cnt.split("obfs%3D")[1].split("%3B")[0]: "";
	obfshost=cnt.split("obfs-host%3D")[1]!=null ? ", obfs-host="+cnt.split("obfs-host%3D")[1].split("&")[0].split("#")[0]:"";
	tag="tag="+decodeURIComponent(cnt.split("#")[1])
	pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
	ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
	nssr.push(type+ip,pwd,mtd+obfs+obfshost,pudp,ptfo,tag)
	QX=nssr.join(", ")
	return QX;
	//console.log(QX)
}
}

//SSD 类型 URI 转换 quanx 格式
function SSD2QX(subs,Pudp,Ptfo){
    var j=0
	var QX=[]
    var cnt=JSON.parse(Base64.decode(subs.split("ssd://")[1]))	
	var type="shadowsocks=";
    var pwd="password="+cnt.password;
	var mtd="method="+cnt.encryption;
	var obfs=""
	var obfshost=""
	var port=cnt.port? ":"+cnt.port:""
	if(cnt.plugin_options){
		obfs=cnt.plugin_options.split(";")[0]!=null ? ", "+cnt.plugin_options.split(";")[0]: "";
		obfshost=cnt.plugin_options.split(";")[1]!=null ? ", "+cnt.plugin_options.split(";")[1]: "";
	}
	pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
	ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
	for (var i in cnt.servers) {
        ip=cnt.servers[i].server;
		if(obfs==""){
			obfs=cnt.servers[i].plugin_options.split(";")[0]!=null ? ", "+cnt.plugin_options.split(";")[0]: "";
			obfshost=cnt.servers[i].plugin_options.split(";")[1]!=null ? ", "+cnt.plugin_options.split(";")[1]: "";
		}
        if(ip.indexOf(".")>0){ //排除难搞的 ipv6 节点
            port=cnt.servers[i].port?":"+cnt.servers[i].port:port;
            tag="tag="+cnt.servers[i].remarks;
            QX[j]=type+ip+port+", "+pwd+", "+mtd+obfs+obfshost+", "+pudp+", "+ptfo+", "+tag;
            var j=j+1;
        }
    }
	//$notify("QX","tst",QX)
	return QX;
	//console.log(QX)
}

// 用于过滤非节点部分（比如整份配置中其它内容）
function isQuanX(content){
	var cnts=content.split("\n");
	var nlist=[]
	for(var i=0;i<cnts.length;i++){
		var cnti=cnts[i];
		if(cnti.indexOf("=")!=-1&&cnti.indexOf("tag")!=-1){
			var cnt=cnti.split("=")[0].trim()
			if(cnt=="http"||cnt=="shadowsocks"||cnt=="trojan"||cnt=="vmess"){
				nlist.push(cnti)
			}
		}
}  
return nlist
}

//根据节点名排序(不含emoji 部分)
function QXSort(content,para){
	var nlist=content;//.split("\n");
	if(para==1){
		return nlist.sort(ToTag)
	}else if(para==-1){
		return nlist.sort(ToTagR)
	}
}
//正序
function ToTag(elem1,elem2){
	var tag1=emoji_del(elem1.split("tag")[1].split("=")[1].trim())
	var tag2=emoji_del(elem2.split("tag")[1].split("=")[1].trim())
	res = tag1>tag2? 1:-1
	return res
}
//逆序
function ToTagR(elem1,elem2){
	var tag1=emoji_del(elem1.split("tag")[1].split("=")[1].trim())
	var tag2=emoji_del(elem2.split("tag")[1].split("=")[1].trim())
	res = tag1>tag2? -1:1
	return res
}


//节点重命名
function Rename(str){
	var server=str;
	if(server.indexOf("tag=")!=-1){
		hd=server.split("tag=")[0]
		name=server.split("tag=")[1].trim()
		for(i=0;i<Prn.length;i++){
			nname=Prn[i].split("@")[1]? decodeURIComponent(Prn[i].split("@")[1]):Prn[i].split("@")[1];
			oname=Prn[i].split("@")[0]? decodeURIComponent(Prn[i].split("@")[0]):Prn[i].split("@")[0];
			if(oname&&nname){ //重命名
				var rn=escapeRegExp(oname)
				name=name.replace(new RegExp(rn,"gm"),nname)
				}else if(oname && nname==""){//前缀
					var nemoji=emoji_del(name)
						if(Pemoji==1 || Pemoji==2){ //判断是否有重复 emoji，有则删除旧有
						name=name.replace(name.split(" ")[0]+" ",name.split(" ")[0]+" "+oname)
					}else { name=oname+name}
				}else if(nname && oname==""){//后缀
					name= name+nname
				}else if(oname && oname.indexOf("☠️")!=-1){ //删除特定字符，多字符用.连接
					hh=oname.slice(0,oname.length-2).split(".")
					for(j=0;j<hh.length;j++){
						var nn=escapeRegExp(hh[j])
						var del=new RegExp(nn,"gm");
						name=name.replace(del,"")
					}
				}else if(oname=="" && nname==""){ //删除@符号
					name=name.replace(/@/g,"")
				}else{
					name=name}	
			nserver=hd+"tag="+name
		}
	} return nserver
}

//删除 emoji 
function emoji_del(str) {
	return unescape(escape(str).replace(/\%uD.{3}/g, ''));
}

//为节点名添加 emoji
function get_emoji(source,sname){
	var cnt=source;
	var flag=0;
	for(var key in cnt){
		dd=cnt[key]
		for(i in dd){
			if(sname.indexOf(dd[i])!=-1){
				flag=1;
				sname=Pemoji==1 && key=="🇹🇼"? sname.replace("🇨🇳","🇹🇼"):sname;
				sname=Pemoji==2 && key==" 🇨🇳"? sname.replace("🇹🇼","🇨🇳"):sname; //避免key重复，所以" 🇨🇳" 与"🇨🇳"
				nname=sname.indexOf(key.trim())==-1? key+" "+sname.trim():key+" "+sname.replace(key.trim(),"").trim();
				return nname
				break;
			}
		}
	}
	if(flag==0){return "🏴‍☠️ "+sname.trim()}
}

//emoji 处理
function emoji_handle(servers,Pemoji){
	var nlist=[]
	var ser0=servers
	for(var i=0;i<ser0.length; i++){
		if(ser0[i].indexOf("tag=")!=-1){
		var oname=ser0[i].split("tag=")[1].trim();
		var hd=ser0[i].split("tag=")[0];
		var nname=oname;//emoji_del(oname);
		var Lmoji={"🏳️‍🌈": ["流量","时间","应急","过期","Bandwidth","expire"],"🇦🇨": ["AC"],"🇦🇹": ["奥地利","维也纳"],"🇦🇺": ["AU","Australia","Sydney","澳大利亚","澳洲","墨尔本","悉尼"],"🇧🇪": ["BE","比利时"],"🇧🇬": ["保加利亚","Bulgaria"],"🇧🇷": ["BR","Brazil","巴西","圣保罗"],"🇨🇦": ["Canada","Waterloo","加拿大","蒙特利尔","温哥华","楓葉","枫叶","滑铁卢","多伦多"],"🇨🇭": ["瑞士","苏黎世","Switzerland"],"🇩🇪": ["DE","German","GERMAN","德国","德國","法兰克福"],"🇩🇰": ["丹麦"],"🇪🇸": ["ES","西班牙","Spain"],"🇪🇺": ["EU","欧盟","欧罗巴"],"🇫🇮": ["Finland","芬兰","赫尔辛基"],"🇫🇷": ["FR","France","法国","法國","巴黎"],"🇬🇧": ["UK","GB","England","United Kingdom","英国","伦敦","英"],"🇲🇴": ["MO","Macao","澳门","CTM"],"🇭🇺":["匈牙利","Hungary"],"🇭🇰": ["HK","Hongkong","Hong Kong","香港","深港","沪港","呼港","HKT","HKBN","HGC","WTT","CMI","穗港","京港","港"],"🇮🇩": ["Indonesia","印尼","印度尼西亚","雅加达"],"🇮🇪": ["Ireland","爱尔兰","都柏林"],"🇮🇳": ["India","印度","孟买","Mumbai"],"🇯🇵": ["JP","Japan","日本","东京","大阪","埼玉","沪日","穗日","川日","中日","泉日","杭日","深日","辽日","广日"],"🇰🇵": ["KP","朝鲜"],"🇰🇷": ["KR","Korea","KOR","韩国","首尔","韩","韓"],"🇱🇻":["Latvia","Latvija","拉脱维亚"], "🇲🇽️": ["MEX","MX","墨西哥"],"🇲🇾": ["MY","Malaysia","马来西亚","吉隆坡"],"🇳🇱": ["NL","Netherlands","荷兰","荷蘭","尼德蘭","阿姆斯特丹"],"🇵🇭": ["PH","Philippines","菲律宾"],"🇷🇴": ["RO","罗马尼亚"],"🇷🇺": ["RU","Russia","俄罗斯","俄羅斯","伯力","莫斯科","圣彼得堡","西伯利亚","新西伯利亚","京俄","杭俄"],"🇸🇦": ["沙特","迪拜"],"🇸🇪": ["SE","Sweden"],"🇸🇬": ["SG","Singapore","新加坡","狮城","沪新","京新","泉新","穗新","深新","杭新","广新"],"🇹🇭": ["TH","Thailand","泰国","泰國","曼谷"],"🇹🇷": ["TR","Turkey","土耳其","伊斯坦布尔"],"🇹🇼": ["TW","Taiwan","台湾","台北","台中","新北","彰化","CHT","台","HINET"],"🇺🇸": ["US","USA","America","United States","美国","美","京美","波特兰","达拉斯","俄勒冈","凤凰城","费利蒙","硅谷","矽谷","拉斯维加斯","洛杉矶","圣何塞","圣克拉拉","西雅图","芝加哥","沪美","哥伦布","纽约"],"🇻🇳": ["VN","越南","胡志明市"],"🇮🇹": ["Italy", "IT", "Nachash","意大利","米兰","義大利"],"🇿🇦":["South Africa","南非"],"🇦🇪":["United Arab Emirates","阿联酋"],"🇦🇷": ["AR","阿根廷"],"🇳🇴":["Norway","挪威","NO"], "🇨🇳": ["CN","China","回国","中国","江苏","北京","上海","广州","深圳","杭州","徐州","青岛","宁波","镇江","back"]}
		if(Pemoji==1) { 
			str1 = JSON.stringify(Lmoji)
			aa=JSON.parse(str1)
			var nname=get_emoji(aa,nname)
			} else if(Pemoji==2){
				str1 = JSON.stringify(Lmoji)
				bb=JSON.parse(str1.replace(/🇹🇼/g," 🇨🇳"))
				var nname=get_emoji(bb,nname)
			}else if(Pemoji==-1){
				nname=emoji_del(oname);
			}
		var nserver=hd+"tag="+nname.replace(" ️"," ").trim()
		nlist.push(nserver)
		}
	}
	return nlist
}

//Surge2QX 转换主函数
function Surge2QX(conf){
	var QXlist=conf.split("\n").map(isSurge).filter(Boolean)
	var Nlist=[]
	for(i=0;i<QXlist.length;i++){
		var cnt=QXlist[i];
		//console.log(cnt)
		if(cnt.split("=")[1].split(",")[0].indexOf("trojan")!=-1){
			Nlist.push(Strojan2QX(cnt))//surge 3的trojan
			}else if(cnt.split("=")[1].split(",")[0].indexOf("http")!=-1){
				Nlist.push(Shttp2QX(cnt)) //surge 3的http
			}else if(cnt.split("=")[1].split(",")[0].indexOf("vmess")!=-1){
				Nlist.push(SVmess2QX(cnt)) //surge 3的Vmess
			}else if(cnt.split("=")[1].split(",")[0].indexOf("ss")!=-1){
				Nlist.push(SSS2QX(cnt)) //surge 3的SS
			}else if(cnt.split("=")[1].split(",")[0].indexOf("custom")!=-1){
				Nlist.push(SCT2QX(cnt)) //surge2写法
			}
	}
	return(Nlist)
	//console.log(Nlist)
	}
	
// surge2 中的 SS 类型写法(custom)
//🇷🇺 俄罗斯 GIA = custom, ip, 152, aes-128-gcm, password123, https://dler.cloud/download/SSEncrypt.module, obfs=tls, obfs-host=xxx.windows.com, udp-relay=true
function SCT2QX(content){
	var cnt=content;
	var tag="tag="+cnt.split("=")[0].trim();
	var ipport=cnt.split(",")[1].trim()+":"+cnt.split(",")[2].trim();
	var pmtd="method="+cnt.split(",")[3].trim();
	var pwd="password="+cnt.split(",")[4].trim();
	if(cnt.indexOf("obfs")!=-1){
			pobfs="obfs="+cnt.replace(/obfs-host/,"").split("obfs")[1].split(",")[0].split("=")[1]
		}else {pobfs=""}
	var phost=cnt.indexOf("obfs-host")!=-1? "obfs-host"+cnt.split("obfs-host")[1].split(",")[0].trim():"";
	if(phost!=""){
			pobfs=pobfs+", "+phost
		}
	var ptfo= paraCheck(cnt,"tfo")=="true"? "fast-open=true":"fast-open=false";
	var pudp= paraCheck(cnt,"udp")=="true"? "udp-relay=true":"udp-relay=false";
	var nserver= pobfs!=""? "shadowsocks= "+[ipport,pmtd,pwd,pobfs,ptfo,pudp,tag].join(", "):"shadowsocks= "+[ipport,pmtd,pwd,ptfo,pudp,tag].join(", ");
	return nserver
}

	
// surge 中的 SS 类型
function SSS2QX(content){
	var cnt=content;
	var tag="tag="+cnt.split("=")[0].trim();
	var ipport=cnt.split(",")[1].trim()+":"+cnt.split(",")[2].trim();
	var pmtd="method="+cnt.split("encrypt-method")[1].split(",")[0].split("=")[1];
	var pwd="password="+cnt.split("password")[1].split(",")[0].split("=")[1];
	if(cnt.indexOf("obfs")!=-1){
			pobfs="obfs="+cnt.replace(/obfs-host/,"").split("obfs")[1].split(",")[0].split("=")[1]
		}else {pobfs=""}
	var phost=cnt.indexOf("obfs-host")!=-1? "obfs-host"+cnt.split("obfs-host")[1].split(",")[0].trim():"";
	if(phost!=""){
			pobfs=pobfs+", "+phost
		}
	var ptfo= paraCheck(cnt,"tfo")=="true"? "fast-open=true":"fast-open=false";
	var pudp= paraCheck(cnt,"udp")=="true"? "udp-relay=true":"udp-relay=false";
	var nserver= pobfs!=""? "shadowsocks= "+[ipport,pmtd,pwd,pobfs,ptfo,pudp,tag].join(", "):"shadowsocks= "+[ipport,pmtd,pwd,ptfo,pudp,tag].join(", ");
	return nserver
}

// surge 中的 Vmess 类型
function SVmess2QX(content){
	var cnt=content;
	var tag="tag="+cnt.split("=")[0].trim();
	var ipport=cnt.split(",")[1].trim()+":"+cnt.split(",")[2].trim();
	var puname=cnt.indexOf("username")!=-1? "password="+cnt.split("username")[1].split(",")[0].split("=")[1].trim():"";
	var pmtd="method=aes-128-gcm";
	var ptls13=paraCheck(cnt,"tls13")=="true"? "tls13=true":"tls13=false";
	var pverify=paraCheck(cnt,"skip-cert-verify")=="true"? "tls-verification=false":"tls-verification=true";
	if(paraCheck(cnt.replace(/tls13/,""),"tls")=="true" && paraCheck(cnt.replace(/ws-header/,""),"ws")=="true"){
			pobfs="obfs=wss"+", "+ptls13+", "+pverify
		}else if(paraCheck(cnt.replace(/ws-header/,""),"ws")=="true"){
					pobfs="obfs=ws"
		}else if(paraCheck(cnt.replace(/tls13/,""),"tls")!="false"){
			pobfs="obfs=over-tls"+", "+ptls13+", "+pverify
		}else if(paraCheck(cnt.replace(/ws-header/,""),"ws")=="false"){
			pobfs=""
		}
	var puri=paraCheck(cnt,"ws-path")!="false"? "obfs-uri="+cnt.split("ws-path")[1].split(",")[0].split("=")[1].trim():"obfs-uri=/"
	var phost=cnt.indexOf("ws-headers")!=-1? "obfs-host="+cnt.split("ws-headers")[1].split(",")[0].split("=")[1].split("Host:")[1].trim():"";
	if(pobfs.indexOf("ws"||"wss")!=-1){
		if(phost!=""){
			pobfs=pobfs+", "+puri+", "+phost
		}else {pobfs=pobfs+", "+puri}
	}
	var ptfo= paraCheck(cnt,"tfo")=="true"? "fast-open=true":"fast-open=false";
	var nserver= pobfs!=""? "vmess= "+[ipport,puname,pmtd,pobfs,ptfo,tag].join(", "):"vmess= "+[ipport,puname,pmtd,ptfo,tag].join(", ");
	return nserver
}

// 用于过滤非节点部分（比如整份配置中其它内容）
function isSurge(content){
	if(content.indexOf("=")!=-1){
		cnt=content.split("=")[1].split(",")[0].trim()
		if(cnt=="http"||cnt=="ss"||cnt=="trojan"||cnt=="vmess"||cnt=="custom"){
			return content
		}
	}
}
// 用于参数检查
function paraCheck(content, para){
	if(content.indexOf(para)==-1){
		return "false"
	} else{
		return content.split(para)[1].split(",")[0].split("=")[1].trim()
	}
}
//surge中 trojan 类型转换
function Strojan2QX(content){
	var cnt=content;
	var tag="tag="+cnt.split("=")[0].trim();
	var ipport=cnt.split(",")[1].trim()+":"+cnt.split(",")[2].trim();
	var pwd="password="+cnt.split("password")[1].split(",")[0].split("=")[1].trim();
	var ptls="over-tls=true";
	var ptfo= paraCheck(cnt,"tfo")=="true"? "fast-open=true":"fast-open=false";
	var pverify=paraCheck(cnt,"skip-cert-verify")=="true"? "tls-verification=false":"tls-verification=true";
	var ptls13=paraCheck(cnt,"tls13")=="true"? "tls13=true":"tls13=false";
	var nserver="trojan= "+[ipport,pwd,ptls,ptfo,ptls13,pverify,tag].join(", ");
	return nserver
	//console.log(nserver)
}
// surge 中的 http 类型
function Shttp2QX(content){
	var cnt=content;
	var tag="tag="+cnt.split("=")[0].trim();
	var ipport=cnt.split(",")[1].trim()+":"+cnt.split(",")[2].trim();
	var puname=cnt.indexOf("username")!=-1? "username="+cnt.split("username")[1].split(",")[0].split("=")[1].trim():"";
	var pwd=cnt.indexOf("password")!=-1? "password="+cnt.split("password")[1].split(",")[0].split("=")[1].trim():"";
	var ptls=cnt.split("=")[1].split(",")[0].trim()=="https"? "over-tls=true":"over-tls=false";
	var ptfo= paraCheck(cnt,"tfo")=="true"? "fast-open=true":"fast-open=false";
	if(ptls=="over-tls=true"){
		var pverify=paraCheck(cnt,"skip-cert-verify")=="true"? "tls-verification=false":"tls-verification=true";
		var ptls13=paraCheck(cnt,"tls13")=="true"? "tls13=true":"tls13=false";
		ptls=ptls+", "+pverify+", "+ptls13
	}
	var nserver= puname!=""? "http= "+[ipport,puname,pwd,ptls,ptfo,tag].join(", "):"http= "+[ipport,ptls,ptfo,tag].join(", ");
	return nserver
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
function Base64Code(){
	// constants
	var b64chars
		= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var b64tab = function(bin) {
		var t = {};
		for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
		return t;
	}(b64chars);
	var fromCharCode = String.fromCharCode;
	// encoder stuff
	var cb_utob = function(c) {
		if (c.length < 2) {
			var cc = c.charCodeAt(0);
			return cc < 0x80 ? c
				: cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
								+ fromCharCode(0x80 | (cc & 0x3f)))
				: (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
					+ fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
					+ fromCharCode(0x80 | ( cc         & 0x3f)));
		} else {
			var cc = 0x10000
				+ (c.charCodeAt(0) - 0xD800) * 0x400
				+ (c.charCodeAt(1) - 0xDC00);
			return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
					+ fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
					+ fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
					+ fromCharCode(0x80 | ( cc         & 0x3f)));
		}
	};
	var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	var utob = function(u) {
		return u.replace(re_utob, cb_utob);
	};
	var cb_encode = function(ccc) {
		var padlen = [0, 2, 1][ccc.length % 3],
		ord = ccc.charCodeAt(0) << 16
			| ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
			| ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
		chars = [
			b64chars.charAt( ord >>> 18),
			b64chars.charAt((ord >>> 12) & 63),
			padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
			padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
		];
		return chars.join('');
	};
	var btoa = function(b) {
		return b.replace(/[\s\S]{1,3}/g, cb_encode);
	};
	// var _encode = function(u) {
	// 	var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
	// 	return isUint8Array ? u.toString('base64')
	// 		: btoa(utob(String(u)));
	// }
	this.encode=function(u){
			var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
			return isUint8Array ? u.toString('base64')
				: btoa(utob(String(u)));
		}
	var uriencode = function(u, urisafe) {
		return !urisafe
			? _encode(u)
			: _encode(String(u)).replace(/[+\/]/g, function(m0) {
				return m0 == '+' ? '-' : '_';
			}).replace(/=/g, '');
	};
	var encodeURI = function(u) { return uriencode(u, true) };
	// decoder stuff
	var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
	var cb_btou = function(cccc) {
		switch(cccc.length) {
		case 4:
			var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
				|    ((0x3f & cccc.charCodeAt(1)) << 12)
				|    ((0x3f & cccc.charCodeAt(2)) <<  6)
				|     (0x3f & cccc.charCodeAt(3)),
			offset = cp - 0x10000;
			return (fromCharCode((offset  >>> 10) + 0xD800)
					+ fromCharCode((offset & 0x3FF) + 0xDC00));
		case 3:
			return fromCharCode(
				((0x0f & cccc.charCodeAt(0)) << 12)
					| ((0x3f & cccc.charCodeAt(1)) << 6)
					|  (0x3f & cccc.charCodeAt(2))
			);
		default:
			return  fromCharCode(
				((0x1f & cccc.charCodeAt(0)) << 6)
					|  (0x3f & cccc.charCodeAt(1))
			);
		}
	};
	var btou = function(b) {
		return b.replace(re_btou, cb_btou);
	};
	var cb_decode = function(cccc) {
		var len = cccc.length,
		padlen = len % 4,
		n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
			| (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
			| (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
			| (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
		chars = [
			fromCharCode( n >>> 16),
			fromCharCode((n >>>  8) & 0xff),
			fromCharCode( n         & 0xff)
		];
		chars.length -= [0, 0, 2, 1][padlen];
		return chars.join('');
	};
	var _atob = function(a){
		return a.replace(/\S{1,4}/g, cb_decode);
	};
	var atob = function(a) {
		return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
	};
	// var _decode = buffer ?
	// 	buffer.from && Uint8Array && buffer.from !== Uint8Array.from
	// 	? function(a) {
	// 		return (a.constructor === buffer.constructor
	// 				? a : buffer.from(a, 'base64')).toString();
	// 	}
	// 	: function(a) {
	// 		return (a.constructor === buffer.constructor
	// 				? a : new buffer(a, 'base64')).toString();
	// 	}
	// 	: function(a) { return btou(_atob(a)) };
	var _decode=function(u){
		return btou(_atob(u))
	}
	this.decode = function(a){
		return _decode(
			String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
				.replace(/[^A-Za-z0-9\+\/]/g, '')
		);
	};
}
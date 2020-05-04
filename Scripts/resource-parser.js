/** 
#Quantumult X 资源解析器 (2020-05-04: 22:33)

本资源解析器作者: Shawn(@XIAO_KOP), 有问题请反馈: @Shawn_KOP_bot

主要功能: 将各类服务器订阅解析成 Quantumult X 引用片段(已支持 V2RayN/SSR/SS/Trojan/QuanX(list)/Surge3⬆️(conf&list)格式)，并提供下列可选参数；

附加功能: rewrite(复写) /filter(分流) 过滤, 可用于解决无法单独禁用远程引用资源中某(几)条 rewrite/hostname/filter 的问题

0️⃣ 请在订阅链接后加入 "#" 符号后再加参数, 不同参数间请使用 "&" 来连接, 如: "#in=香港+台湾&emoji=1&tfo=1"

1️⃣ 筛选参数 in, out, 分别为保留与排除, 多参数用 "+" 连接, 可直接用中文 (如 "in=香港+台湾&out=BGP" )

2️⃣ emoji 参数为 emoji=1,2 或 -1, 为添加或删除节点名中的 emoji 旗帜 (国行设备请用 emoji=2 )

3️⃣ udp=1, tfo=1 参数开启 udp-relay 及 fast-open (默认关闭, 且此参数对源类型为 QuanX/Surge 的链接无效)

4️⃣ rename 重命名, rename=旧名@新名, 以及 "前缀@", "@后缀", 用 "+" 连接, 如 "rename=香港@HK+[SS]@+@[1X]"

5⃣️ cert=0，跳过证书验证(vmess/trojan)，即强制 tls-verification=false

6⃣️ rewrite(复写)/filter(分流) 引用的筛选，参数为 "out=xxx", 分流规则额外支持 "policy=xx" 参数, 可用于直接指定策略组，或者为 Surge 格式的 rule-set 生成策略组(默认"Shawn"策略组)

7⃣️ info=1, 用于打开服务器类型下转换解析器的提示通知 (默认关闭), rewrite/filter 类型则会强制在有 out 参数时开启通知提示，以免规则误删除

 */


/**
 * 使用说明，
0️⃣ 在Quantumult X 配置文件中[general] 部分，加入 resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
1️⃣ 假设原始订阅连接为: https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt , 
2️⃣ 假设你想要保留的参数为 in=tls+ss, 想要过滤的参数为 out=http+2, 请注意下面订阅链接后一定要加 ”#“ 符号
3️⃣ 则填入 Quanx 节点引用的的总链接为  https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt#in=tls+ss&out=http+2
4️⃣ 填入上述链接并打开的资源解析器开关
5⃣️ 因为 rewrite/filter 的 UI 中暂时没有提供解析器开关，需要去配置文件中自行添加参数开启(opt-parser=true)
 */

var content0=$resource.content;
var para=decodeURIComponent($resource.link);
var type0=Type_Check(content0);
var Pin0=para.indexOf("in=")!=-1? para.split("#")[1].split("in=")[1].split("&")[0].split("+"):null;
var Pout0=para.indexOf("out=")!=-1? para.split("#")[1].split("out=")[1].split("&")[0].split("+"):null;
var Pemoji=para.indexOf("emoji=")!=-1? para.split("#")[1].split("emoji=")[1].split("&")[0].split("+"):null;
var Pudp0=para.indexOf("udp=")!=-1? para.split("#")[1].split("udp=")[1].split("&")[0].split("+"):0;
var Ptfo0=para.indexOf("tfo=")!=-1? para.split("#")[1].split("tfo=")[1].split("&")[0].split("+"):0;
var Pinfo=para.indexOf("info=")!=-1? para.split("#")[1].split("info=")[1].split("&")[0].split("+"):0;
var Prname=para.indexOf("rename=")!=-1? para.split("#")[1].split("rename=")[1].split("&")[0].split("+"):null;
var Ppolicy=para.indexOf("policy=")!=-1? para.split("#")[1].split("policy=")[1].split("&")[0].split("+"):"Shawn";
var Pcert0=para.indexOf("cert=")!=-1? para.split("#")[1].split("cert=")[1].split("&")[0].split("+"):1;


if(type0=="Vmess"){
	total=V2QX(content0,Pudp0,Ptfo0,Pcert0);
	flag=1;
}else if(type0=="QuanX"){
	total=content0.split("\n");
	flag=1;
}else if(type0=="SSR"){
	total=SSR2QX(content0,Pudp0,Ptfo0);
	flag=1;
}else if(type0=="Trojan"){
	total=TJ2QX(content0,Pudp0,Ptfo0,Pcert0);
	flag=1;
}else if(type0=="SS"){
	total=SS2QX(content0,Pudp0,Ptfo0);
	flag=1
}else if(type0=="Surge"){
	total=Surge2QX(content0);
	flag=1;
}else if(type0=="rewrite"){
	flag=2;
	content0=content0.split("\n");
	total=Rewrite_Filter(content0,Pout0);
}else if(type0=="Rule"){
	flag=3;
	total=content0.split("\n");
	total=Rule_Handle(total,Pout0);
}else {
	$notify("👻 该解析器暂未支持您的订阅格式, 已尝试直接导入","😭 太难写了", "☠️ stay tuned");
	flag=0;
}

if(flag==3){
	$done({content : total.join("\n")});
}else if(flag==2){
	$done({content:total.join("\n")});
}else if(flag==1){
	if(Pin0||Pout0){
		if(Pinfo!=0){
		$notify("👥 开始转换节点，类型："+type0,"🐶 您已添加节点筛选参数，如下","👍️ 保留的关键字："+Pin0+"\n👎️ 排除的关键字："+Pout0);}
		total=filter(total,Pin0,Pout0)
		} else {
			if(Pinfo!=0){
		$notify("🐷 开始转换节点，类型："+type0,"🐼️ 如需筛选节点请使用in/out及其他参数，可参考此示范:","👉 https://t.me/QuanXNews/110");}
	}
	if(Pemoji){
			if(Pinfo!=0){
			$notify("🏳️‍🌈 开始更改旗帜 emoji","清除emoji请用参数 -1, 国行设备添加emoji请使用参数 2","你当前所用的参数为 emoji="+Pemoji)};
			total=emoji_handle(total,Pemoji);
		}
	if(Prname){
		if(Pinfo!=0){ 
		$notify("🏳️‍🌈 开始节点重命名","格式为 \"旧名字@新名字\"","你当前所用的参数为"+Prname);}
		var Prn=Prname;
		total=total.map(Rename);
	}
	$done({content : total.join("\n")});	
}else {
	$done({content : content0});
}


//判断订阅类型
function Type_Check(subs){
	var type=""
	var RuleK=["host","domain","ip-cidr","geoip","user-agent"];
	const RuleCheck = (item) => subs.toLowerCase().indexOf(item)!=-1;
	if(RuleK.some(RuleCheck) && subs.indexOf("=")==-1){
		type="Rule";
	} else if (subs.indexOf("dm1lc3M6Ly")!= -1){
		type="Vmess"
	}  else if(subs.indexOf("[Proxy]")!=-1){
			type="Surge";
	}else if (subs.indexOf("tag")!=-1){
		type="QuanX"
	} else if (subs.indexOf("c3NyOi8v")!= -1){
		type="SSR"
	} else if (subs.indexOf("dHJvamFu")!= -1){
		type="Trojan"
	} else if (subs.indexOf("c3M6Ly")!= -1){
		type="SS"
	} else if(subs.indexOf("hostname")!=-1){
		type="rewrite"
	} else if(subs.indexOf("ss"||"vmess"||"trojan"||"http")!=-1){
		type="Surge"
		}
	return type
}

function Trim(item){
	return item.trim()
	}
//删除 rewrite 引用中的某部分
function Rewrite_Filter(subs,Pout){
	cnt=subs;
	nlist=[];
	drewrite=[];
	Pout=Pout.map(Trim);
	if(Pout!="" && Pout!=null){
	for(var i=0;i<cnt.length;i++){
		var cc=cnt[i];
		if(cc.trim()!=""){
		const exclude = (item) => cc.indexOf(item)!=-1;
		if(Pout.some(exclude)){
			if(cc.indexOf("hostname")!=-1 && cc.indexOf("=")!=-1){ //hostname  部分
				nname=[];//保留项
				dname=[];//删除项目
				hname=cc.split("=")[1].split(",");
				for(var j=0;j<hname.length;j++){
					dd=hname[j]
					const excludehn = (item) => dd.indexOf(item)!=-1;
					if(!Pout.some(excludehn)){
						nname.push(hname[j])	
					}else{dname.push(hname[j])}
				} //for j
				hname="hostname="+nname.join(", ");
				//console.log(hname)
				nlist.push(hname)
				if(dname.length>0){$notify("🤖 您添加的[rewrite]过滤关键词为："+Pout0.join(", "),"☠️ 主机名 hostname 中已为您删除以下"+dname.length+"个匹配项",dname.join(",") )}
				}  // if cc -hostname
				else{
					drewrite.push(cc);
					nlist.push(cc.replace(/ url /g," - "));
				}
		}else{ //if Pout.some
				nlist.push(cc)
					} //else
		}
	}//cnt for
	if(drewrite.length>0){$notify("🤖 您添加的[rewrite]过滤关键词为："+Pout0.join(", "),"☠️ 复写 rewrite 中已为您禁用以下"+drewrite.length+"个匹配项",drewrite.join("\n") )};
	return nlist
	} else{ // Pout if
		return cnt;}
}

//分流规则转换及过滤，可用于 surge 及 quanx 的 rule-list
function Rule_Handle(subs,Pout){
	cnt=subs //.split("\n");
	out=Pout; //过滤参数
	ply=Ppolicy; //策略组
	var nlist=[]
	var RuleK=["//","#",";"];
	if(Pout!="" && Pout!=null){
		var dlist=[];
		for(var i=0;i<cnt.length;i++){
			cc=cnt[i]
			const exclude = (item) =>cc.indexOf(item)!=-1;
			const RuleCheck = (item) => cc.indexOf(item)!=-1; //无视注释行
			if(Pout.some(exclude) && !RuleK.some(RuleCheck)){
				dlist.push(cnt[i])
			} else if(!RuleK.some(RuleCheck) && cc){ //if Pout.some, 不操作注释项
			dd=Rule_Policy(cc);
			nlist.push(dd);
			}
		}//for cnt
		var no=dlist.length
		if(dlist.length>0){$notify("🤖 您添加的分流 [filter] 过滤关键词为："+out,"☠️ 已为您删除以下 "+no+"条匹配规则", dlist.join("\n"))
		}else{$notify("🤖 您添加的[filter]过滤关键词为："+out,"☠️ 没有发现任何匹配项",dlist)}
		return nlist
	} else{return cnt.map(Rule_Policy)}//if Pout
}

function Rule_Policy(content){ //增加、替换 policy
	var cnt=content.split(",");
	var RuleK=["//","#",";"];
	const RuleCheck = (item) => cnt[0].indexOf(item)!=-1; //无视注释行
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
		$notify("未能解析其中部分规则",content);
		return ""
	}else{return ""}
	if(cnt[0].indexOf("URL-REGEX")!=-1 || cnt[0].indexOf("PROCESS")!=-1){
		nn=""
	} else {nn=nn.replace("IP-CIDR6","ip6-cidr")}
	return nn
		
}

//V2RayN 订阅转换成 QUANX 格式
function V2QX(subs,Pudp,Ptfo,Pcert){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[]
	var cert=Pcert
	for(var i=0;i<list0.length; i++){
		if(list0[i].trim()!=""){
		var server=String($base64.decode(list0[i].replace("vmess://","")).trim()).split("\u0000")[0];
		var nss=[];
		if(server!=""){
			ss=JSON.parse(server);
			ip="vmess="+ss.add+":"+ss.port;
			pwd="password="+ss.id;
			mtd="method=aes-128-gcm"
			tag="tag="+decodeURIComponent(ss.ps);
			udp= Pudp==1? "udp-relay=true":"udp-relay=false";
			tfo= Ptfo==1? "fast-open=true":"fast-open=false";
			obfs=Pobfs(ss,cert);
			if(obfs=="" || obfs==undefined){
				nss.push(ip,mtd,pwd,tfo,udp,tag)
			}else {
				nss.push(ip,mtd,pwd,obfs,tfo,udp,tag);}
			QX=nss.join(", ");
			//$notify("Lists","check",QX)
			QXList.push(QX)
		}
	}
}
		return QXList
}

//节点过滤，使用+连接多个关键词:in 为保留，out 为排除
function filter(Servers,Pin,Pout){
	var NList=[];
	for(var i=0;i<Servers.length; i++){
		if(Servers[i].indexOf("tag")!=-1){
			name=Servers[i].split("tag=")[1]
			const include = (item) => name.indexOf(item) != -1;
			const exclude = (item) => name.indexOf(item) != -1;
			if(Pin){
				if(Pin.some(include)&&Pout){
					if(!Pout.some(exclude)){
					NList.push(Servers[i])
					}
				} else if(Pin.some(include)&&!Pout) {NList.push(Servers[i])}
			} else{
				if(!Pout.some(exclude)){
				NList.push(Servers[i])
				}
			}		
		}
			}
	return NList
}

// Vmess obfs 参数
function Pobfs(jsonl,Pcert){
	var obfsi=[];
	var cert=Pcert;
	tcert= cert==0? "tls-verification=false":"tls-verification=true"
	if(jsonl.net=="ws" && jsonl.tls=="tls"){
		obfs0="obfs=wss, "+tcert+", ";
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		host0= jsonl.host!=""? "obfs-host="+jsonl.host+",":"";
		obfsi.push(obfs0+host0+uri0)
		return obfsi.join(", ")
	}else if(jsonl.net=="ws"){
		obfs0="obfs=ws";
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		host0= jsonl.host!=""? "obfs-host="+jsonl.host+",":"";
		obfsi.push(obfs0,host0+uri0);
		return obfsi.join(", ")
	}else if(jsonl.tls=="tls"){
		obfs0="obfs=over-tls, "+tcert;
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"";
		host0=jsonl.host!=""? "obfs-host="+jsonl.host:"";
		obfsi.push(obfs0+host0)
		return obfsi.join(", ")
	}
}

//SSR 转换 quanx 格式
function SSR2QX(subs,Pudp,Ptfo){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[];
	for(var i=0;i<list0.length; i++){
		if(list0[i].indexOf("ssr://")!=-1){
			var nssr=[]
			var cnt=$base64.decode(list0[i].split("ssr://")[1].replace(/-/g,"+").replace(/_/g,"/")).split("\u0000")[0]
			var obfshost = '';
			var oparam = '';
			if(cnt.split(":").length<=6) { //排除难搞的 ipv6 节点
			type="shadowsocks=";
			ip=cnt.split(":")[0]+":"+cnt.split(":")[1];
			pwd="password="+$base64.decode(cnt.split("/?")[0].split(":")[5].replace(/-/g,"+").replace(/_/g,"/")).split("\u0000")[0];
			mtd="method="+cnt.split(":")[3];
			obfs="obfs="+cnt.split(":")[4]+", ";
			ssrp="ssr-protocol="+cnt.split(":")[2];
			if(cnt.indexOf("obfsparam=")!=-1){
				obfshost=cnt.split("obfsparam=")[1].split("&")[0]!=""? "obfs-host="+$base64.decode(cnt.split("obfsparam=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")).split(",")[0].split("\u0000")[0]+", ":""
			}
			if(cnt.indexOf("protoparam=")!=-1){
				oparam=cnt.split("protoparam=")[1].split("&")[0]!=""? "ssr-protocol-param="+$base64.decode(cnt.split("protoparam=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")).split(",")[0].split("\u0000")[0]+", ":""
			}
			tag="tag="+($base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/"))).split("\u0000")[0]
			//console.log($base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")))
			pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
			ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
			nssr.push(type+ip,pwd,mtd,obfs+obfshost+oparam+ssrp,pudp,ptfo,tag)
			QX=nssr.join(", ")
			QXList.push(QX);
		}
		}
	} 
	return QXList;
}

//Trojan 类型转换成 QX
function TJ2QX(subs,Pudp,Ptfo,Pcert){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[];
	for(var i=0;i<list0.length; i++){
		if(list0[i].indexOf("trojan://")!=-1){
			var ntrojan=[]
			var cnt=list0[i].split("trojan://")[1]
			type="trojan=";
			ip=cnt.split("@")[1].split("?")[0];
			pwd="password="+cnt.split("@")[0];
			obfs="over-tls=true";
			pcert= cnt.indexOf("allowInsecure=0")!= -1? "tls-verification=true":"tls-verification=false";
			if(Pcert==0){pcert="tls-verification=false"}	
			pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
			ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
			tag="tag="+decodeURIComponent(cnt.split("#")[1])
			ntrojan.push(type+ip,pwd,obfs,pcert,pudp,ptfo,tag)
			QX=ntrojan.join(", ");
			QXList.push(QX);
		}
	}
	return QXList;
}

//SS 转换 quanx 格式
function SS2QX(subs,Pudp,Ptfo){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	//console.log(list0)
	var QXList=[];
	for(var i=0;i<list0.length; i++){
		if(list0[i].indexOf("ss://")!=-1){
			var nssr=[]
			var cnt=list0[i].split("ss://")[1]	
			if(cnt.split(":").length<=6) { //排除难搞的 ipv6 节点
			type="shadowsocks=";
			ip=cnt.split("@")[1].split("/")[0];
			pwdmtd=$base64.decode(cnt.split("@")[0].replace(/-/g,"+").replace(/_/g,"/")).split("\u0000")[0].split(":")
			pwd="password="+pwdmtd[1];
			mtd="method="+pwdmtd[0];
			obfs= cnt.split("obfs%3D")[1]!=null ? ", obfs="+cnt.split("obfs%3D")[1].split("%3B")[0]+", ": "";
			obfshost=cnt.split("obfs-host%3D")[1]!=null ? "obfs-host="+cnt.split("obfs-host%3D")[1].split("&")[0]: "";
			tag="tag="+decodeURIComponent(cnt.split("#")[1])
			pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
			ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
			nssr.push(type+ip,pwd,mtd+obfs+obfshost,pudp,ptfo,tag)
			QX=nssr.join(", ")
			//console.log(QX)
			QXList.push(QX);
		}
		}
	} 
	return QXList;
}

//节点重命名
function Rename(str){
	var server=str;
	if(server.indexOf("tag=")!=-1){
		hd=server.split("tag=")[0]
		name=server.split("tag=")[1]
		for(i=0;i<Prn.length;i++){
			nname=Prn[i].split("@")[1];
			oname=Prn[i].split("@")[0];
			if(oname&&nname){
				name=name.replace(new RegExp(oname,"gm"),nname)
				}else if(oname){
					name=oname+name
				}else if(nname){
					name=name+nname
				}else(name=name)	
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
				flag=1
				nname=key+" "+sname.trim();
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
		var oname=ser0[i].split("tag=")[1];
		var hd=ser0[i].split("tag=")[0];
		var nname=emoji_del(oname);
		var Lmoji={"🏳️‍🌈": ["流量","时间","应急","过期","Bandwidth","expire"],"🇦🇨": ["AC"],"🇦🇹": ["奥地利","维也纳"],"🇦🇺": ["AU","Australia","Sydney","澳大利亚","澳洲","墨尔本","悉尼"],"🇧🇪": ["BE","比利时"],"🇧🇬️": ["保加利亚"],"🇧🇷": ["BR","Brazil","巴西","圣保罗"],"🇨🇦": ["Canada","Waterloo","加拿大","蒙特利尔","温哥华","楓葉","枫叶","滑铁卢","多伦多"],"🇨🇭": ["瑞士","苏黎世"],"🇩🇪": ["DE","German","GERMAN","德国","德國","法兰克福"],"🇩🇰": ["丹麦"],"🇪🇸": ["ES"],"🇪🇺": ["EU"],"🇫🇮": ["Finland","芬兰","赫尔辛基"],"🇫🇷": ["FR","France","法国","法國","巴黎"],"🇬🇧": ["UK","England","United Kingdom","英国","伦敦","英"],"🇲🇴": ["MO","Macao","澳门","CTM"],"🇭🇰": ["HK","Hongkong","Hong Kong","香港","深港","沪港","呼港","HKT","HKBN","HGC","WTT","CMI","穗港","京港","港"],"🇮🇩": ["Indonesia","印尼","印度尼西亚","雅加达"],"🇮🇪": ["Ireland","爱尔兰","都柏林"],"🇮🇳": ["India","印度","孟买","Mumbai"],"🇮🇹": ["Italy","Nachash","意大利","米兰","義大利"],"🇯🇵": ["JP","Japan","日本","东京","大阪","埼玉","沪日","穗日","川日","中日","泉日","杭日","深日","辽日"],"🇰🇵": ["KP","朝鲜"],"🇰🇷": ["KR","Korea","KOR","韩国","首尔","韩","韓"],"🇲🇽️": ["MEX","MX","墨西哥"],"🇲🇾": ["MY","Malaysia","马来西亚","吉隆坡"],"🇳🇱": ["NL","Netherlands","荷兰","荷蘭","尼德蘭","阿姆斯特丹"],"🇵🇭": ["PH","Philippines","菲律宾"],"🇷🇴": ["RO","罗马尼亚"],"🇷🇺": ["RU","Russia","俄罗斯","俄羅斯","伯力","莫斯科","圣彼得堡","西伯利亚","新西伯利亚","京俄","杭俄"],"🇸🇦": ["沙特","迪拜"],"🇸🇪": ["SE","Sweden"],"🇸🇬": ["SG","Singapore","新加坡","狮城","沪新","京新","泉新","穗新","深新","杭新"],"🇹🇭": ["TH","Thailand","泰国","泰國","曼谷"],"🇹🇷": ["TR","Turkey","土耳其","伊斯坦布尔"],"🇹🇼": ["TW","Taiwan","台湾","台北","台中","新北","彰化","CHT","台","HINET"],"🇺🇸": ["US","USA","America","United States","美国","美","京美","波特兰","达拉斯","俄勒冈","凤凰城","费利蒙","硅谷","矽谷","拉斯维加斯","洛杉矶","圣何塞","圣克拉拉","西雅图","芝加哥","沪美","哥伦布","纽约"],"🇻🇳": ["VN","越南","胡志明市"],"🇿🇦":["South Africa","南非"],"🇦🇪":["United Arab Emirates","阿联酋"],"🇦🇷": ["AR","阿根廷"],"🇨🇳": ["CN","China","回国","中国","江苏","北京","上海","广州","深圳","杭州","徐州","青岛","宁波","镇江","back"]}
		if(Pemoji==1) { 
			str1 = JSON.stringify(Lmoji)
			aa=JSON.parse(str1)
			var nname=get_emoji(aa,nname)
			} else if(Pemoji==2){
				str1 = JSON.stringify(Lmoji)
				aa=JSON.parse(str1.replace(/🇹🇼/g," 🇨🇳"))
				var nname=get_emoji(aa,nname)
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
		if(cnt.indexOf("trojan")!=-1){
			Nlist.push(Strojan2QX(cnt))
			}else if(cnt.split("=")[1].split(",")[0].indexOf("http")!=-1){
				Nlist.push(Shttp2QX(cnt))
			}else if(cnt.split("=")[1].split(",")[0].indexOf("vmess")!=-1){
				Nlist.push(SVmess2QX(cnt))
			}else if(cnt.split("=")[1].split(",")[0].indexOf("ss")!=-1){
				Nlist.push(SSS2QX(cnt))
			}
	}
	return(Nlist)
	//console.log(Nlist)
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
	var phost=paraCheck(cnt,"ws-headers")!="false"? "obfs-host="+cnt.split("ws-headers")[1].split(",")[0].split("=")[1].split("Host:")[1].trim():"";
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
		if(cnt=="http"||cnt=="ss"||cnt=="trojan"||cnt=="vmess"){
			return content
		}
	}
}
// 用于参数检查
function paraCheck(content, para){
	if(content.indexOf(para)==-1){
		return false
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


// Base64, adapted from internet : https://www.jianshu.com/p/54084db83d70
function Base64(){
	
	// 一般的Base64编码字符
	var commonbase64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	// 对URL进行编码使用的字符
	var urlBase64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
	
	// Base64解码用到的映射表，兼容一般编码的Base64和针对URL进行扩展编码的Base64
	var base64DecodeChars = new Array(
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, 63, -1, -1, 63,
		52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
		-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
		15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 62, -1,
		-1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
		41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
	
	
	/** 通用的Base64编码函数
	 * str为待编码的串
	 * isUrl用来表明编码的对象(str)是否是一个URL
	*/
	function base64encode(str,isUrl){
		var out, i, len;
		var c1, c2, c3;
		
		// 针对不同的编码方式，选择不同的字符集
		var base64EncodeChars = isUrl ? urlBase64EncodeChars : commonbase64EncodeChars;
		
		len = str.length;
		i = 0;
		out = "";
		while(i < len){
			c1 = str.charCodeAt(i++) & 0xff;
			
			// 当最后只有一个字节时
			if(i == len){
				out += base64EncodeChars.charAt(c1 >> 2);
				out += base64EncodeChars.charAt((c1 & 0x3) << 4);
				out += "==";
				break;
			}
			
			
			c2 = str.charCodeAt(i++);

			// 当最后剩余两个字节时
			if(i == len){
				out += base64EncodeChars.charAt(c1 >> 2);
				out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
				out += base64EncodeChars.charAt((c2 & 0xF) << 2);
				out += "=";
				break;
			}
			
			//当剩余字节数大于等于3时
			c3 = str.charCodeAt(i++);
			out += base64EncodeChars.charAt(c1 >> 2);
			out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
			out += base64EncodeChars.charAt(c3 & 0x3F);
		}
		return out;
	}

	/**
	 * Base64解码函数
	 * @param str
	 * @returns {*}
	 */
	function base64decode(str){
		var c1, c2, c3, c4;
		var i, len, out;
		
		len = str.length;
		i = 0;
		out = "";
		while(i < len){
			/*  得到第一个字符 c1
				* 并过虑掉前后所有与Base64编码无关的字符
				* */
			do{
				c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
			}while(i < len && c1 == -1);
			
			// 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
			if(c1 == -1)
				break;
			
			/*  得到字符 c2
			 * 并过滤掉所有与Base64编码无关的字符
			 */
			do{
				c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
			}while(i < len && c2 == -1);

			// 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
			if(c2 == -1)
				break;
			
			// 根据Base64编码的 c1 和 c2 解码得到一个编码前的字符
			out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

			/*  得到字符 c3
			 * 并过滤掉所有与Base64编码无关的字符
			 * 如果获取的 c3 是 '=' 字符则说明已经解码完成，返回解码得到的字符串
			 */
			do{
				c3 = str.charCodeAt(i++) & 0xff;
				if(c3 == 61)
					return out;
				c3 = base64DecodeChars[c3];
			}while(i < len && c3 == -1);

			// 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
			if(c3 == -1)
				break;
			
			// 根据Base64编码的 c2 和 c3 解码得到一个编码前的字符
			out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
			
			/* 这一步就比较复杂了
			 * 先是尝试获取第四个Base64 编码的字符 c4
			 * 如果获取的 c4 是 '=' 字符则说明已经解码完成，返回解码得到的字符串
			 * */
			do{
				c4 = str.charCodeAt(i++) & 0xff;
				if(c4 == 61)
					return out;
				c4 = base64DecodeChars[c4];
			}while(i < len && c4 == -1);

			// 如果已经到达字符串结尾，并最后还未得到有效的Base64编码字符就结尾循环
			if(c4 == -1)
				break;

			// 根据Base64编码的 c3 和 c4 解码得到一个编码前的字符
			out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
		}
		return out;
	}

	/**
	 * 把 unicode 码转换成 utf8 编码
	 * @param str
	 * @returns {string}
	 */
	function unicodeToUtf8(str){
		var out, i, len, c;
		
		out = "";
		len = str.length;
		for(i = 0; i < len; i++){
			c = str.charCodeAt(i);
			
			// 兼容 ASCII
			if((c >= 0x0001) && (c <= 0x007F)){
				out += str.charAt(i);
			}else if(c > 0x07FF){
				// 占三个字节的 utf8
				out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
				out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			}else{
				// 占两个字节的 utf8
				out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
				out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
			}
		}
		return out;
	}

	/**
	 * 把 utf8 编码转换成 unicode 码
	 * @param str
	 * @returns {string}
	 */
	function utf8ToUnicode(str){
		var out, i, len, c;
		var char2, char3;
		
		out = "";
		len = str.length;
		i = 0;
		while(i < len){
			c = str.charCodeAt(i++);
			switch(c >> 4){
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					// 0xxxxxxx ASCII 编码
					out += str.charAt(i - 1);
					break;
				case 12:
				case 13:
					// 110x xxxx   10xx xxxx
					// 占两个字节的 utf8
					char2 = str.charCodeAt(i++);
					out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
					break;
				case 14:
					// 1110 xxxx  10xx xxxx  10xx xxxx
					// 占三个字节的 utf8
					char2 = str.charCodeAt(i++);
					char3 = str.charCodeAt(i++);
					out += String.fromCharCode(((c & 0x0F) << 12) |
						((char2 & 0x3F) << 6) |
						((char3 & 0x3F) << 0));
					break;
			}
		}
		
		return out;
	}

	/**
	 * 转成 十六 进制编码
	 * @param str
	 * @returns {string}
	 * @constructor
	 */
	function CharToHex(str){
		var out, i, len, c, h;
		out = "";
		len = str.length;
		i = 0;
		while(i < len){
			c = str.charCodeAt(i++);
			
			// 把数据转换成十六进制的字符串
			h = c.toString(16);
			if(h.length < 2)
				h = "0" + h;
			
			out += "\\x" + h + " ";
			if(i > 0 && i % 8 == 0)
				out += "\r\n";
		}
		
		return out;
	}
	
	this.encode=function(str){
				// 普通 Base64 编码
				return base64encode(unicodeToUtf8(str));
			};
	this.decode=function(str){
				// 普通 Base64 编码
				return utf8ToUnicode(base64decode(str));
			};
//	base64={
//		encode:function(str){
//			// 普通 Base64 编码
//			return base64encode(unicodeToUtf8(str));
//		},
//		encodeUrl:function(str){
//			// 使用 Base64 编码字符串
//			return base64encode(unicodeToUtf8(str),1)
//		},
//		decode:function(str){
//			// 兼容的 Base64 解码
//			return utf8ToUnicode(base64decode(str));
//		},
//		encodeToHex:function(str){
//			// 普通 Base64 编码 以十六进制显示
//			return CharToHex(base64encode(unicodeToUtf8(str)));
//		},
//		encodeUrlToHex:function(str){
//			// 使用 Base64 编码 url 以十六进制显示
//			return CharToHex(base64encode(unicodeToUtf8(str),1));
//		}
//	}
};

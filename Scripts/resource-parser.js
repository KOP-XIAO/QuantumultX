/** 

#Quantumult X 节点资源解析器

本资源解析器作者: Shawn (@XIAO_KOP) , 有问题请反馈:@Shawn_KOP_bot

#tag 2020-04-25: 11:50

功能：将不同格式订阅转换成 Quantumult X，并支持简单的节点过滤/emoji添加删除，udp/tfo 的开启.
- 目前支持 V2RayN/SSR/Trojan/Quanx 格式写法的节点引用；

1⃣️ 过滤参数为 in,out, 分别为保留与排除，多个参数间用+号连接, 可直接使用中文(如 in=香港+台湾)
2⃣️ emoji 参数为 emoji=1,2 或-1，为添加或删除节点名中的emoji旗帜（国行设备请用 emoji=2）
3⃣️ udp=1，tfo=1 参数开启 udp-relay 及fast-open

 */

/**
 * 使用，
0⃣️ 在quantumult X 配置文件中[general] 部分，加入 resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
1⃣️ 原始订阅连接为: https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt , 
2⃣️ 想要保留的参数为 in=tls+ss, 想要过滤的参数为 out=http+2, 请注意下面订阅链接后一定要加 ”#“ 符号
3⃣️ 则填入 quanx 的总链接为  https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt#in=tls+ss&out=http+2
4⃣️ 填入上述链接并打开的资源解析器开关
 */

var content0=$resource.content;
var para=decodeURIComponent($resource.link);
var type0=Type_Check(content0);
var Pin0=para.indexOf("in=")!=-1? para.split("#")[1].split("in=")[1].split("&")[0].split("+"):null;
var Pout0=para.indexOf("out=")!=-1? para.split("#")[1].split("out=")[1].split("&")[0].split("+"):null;
var Pemoji=para.indexOf("emoji=")!=-1? para.split("#")[1].split("emoji=")[1].split("&")[0].split("+"):null;
var Pudp0=para.indexOf("udp=")!=-1? para.split("#")[1].split("udp=")[1].split("&")[0].split("+"):0;
var Ptfo0=para.indexOf("tfo=")!=-1? para.split("#")[1].split("tfo=")[1].split("&")[0].split("+"):0;

qx=["trojan=13.235.70.75:8443, password=8cacb13816.wns.windows.com, over-tls=true, tls-verification=false, tag=印度 AWS",
"trojan=47.105.52.185:458, password=8cacb13816.wns.windows.com, over-tls=true, tls-verification=false, tag=😀上海 BGP"]

if(type0=="Vmess"){
	total=V2QX(content0,Pudp0,Ptfo0);
	flag=1;
}else if(type0=="QuanX"){
	total=content0.split("\n");
	flag=1;
}else if(type0=="SSR"){
	total=SSR2QX(content0,Pudp0,Ptfo0);
	flag=1;
}else if(type0=="Trojan"){
	total=TJ2QX(content0,Pudp0,Ptfo0);
	flag=1;
}else{
	$notify("👻该解析器暂未支持您的订阅格式","😭太难写了", "stay tuned");
	flag=0;
	$done({content : content0});
}
	
if(flag==1){
	if(Pin0||Pout0){
		$notify("👥 开始转换节点，类型："+type0,"🐶 您已添加节点筛选参数，如下","👍️ 保留的关键字："+Pin0+"\n👎️ 排除的关键字："+Pout0);
		total=filter(total,Pin0,Pout0)
		} else {
		$notify("🐷 开始转换节点，类型："+type0,"🐼️ 如需筛选节点请使用in/out及其他参数，可参考此示范:","👉 https://t.me/QuanXNews/110");
	}
	if(Pemoji){
		$notify("🏳️‍🌈 开始更改旗帜 emoji","清除emoji请用参数 -1, 国行设备添加emoji请使用参数 2","你当前所用的参数为 emoji="+Pemoji);
		total=emoji_handle(total,Pemoji);
	}
	$done({content : total.join("\n")});	
}


//判断订阅类型
function Type_Check(subs){
	var type=""
	if (subs.indexOf("dm1lc3M6Ly")!= -1){
		type="Vmess"
	} else if (subs.indexOf("tag")!=-1){
		type="QuanX"
	} else if (subs.indexOf("c3NyOi8v")!= -1){
		type="SSR"
	} else if (subs.indexOf("dHJvamFu")!= -1){
		type="Trojan"
	}
	return type
}

//V2RayN 订阅转换成 QUANX 格式
function V2QX(subs,Pudp,Ptfo){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[]
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
			obfs=Pobfs(ss);
			if(obfs==""){
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
function Pobfs(jsonl){
	var obfsi=[]
	if(jsonl.net=="ws" && jsonl.tls=="tls"){
		obfs0="obfs=wss, ";
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		host0= jsonl.host!=""? "obfs-host="+jsonl.host+",":"";
		obfsi.push(obfs0+host0+uri0)
		return obfsi.join(", ")
	}else if(jsonl.net=="ws"){
		obfs0="obfs=ws";
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		obfsi.push(obfs0,uri0)
		return obfsi.join(", ")
	}else if(jsonl.tls=="tls"){
		obfs0="obfs=over-tls";
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
			var cnt=$base64.decode(list0[i].split("ssr://")[1].replace(/-/g,"+").replace(/_/g,"/"))
			console.log(cnt)
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
	return QXList;
}

//Trojan 类型转换成 QX
function TJ2QX(subs,Pudp,Ptfo){
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
				nname=key+" "+sname;
				return nname
				break;
			}
		}
	}
	if(flag==0){return "🏴‍☠️ "+sname}
}

//emoji 处理
function emoji_handle(servers,Pemoji){
	var nlist=[]
	var ser0=servers
	for(var i=0;i<ser0.length; i++){
		var oname=ser0[i].split("tag=")[1];
		var hd=ser0[i].split("tag=")[0];
		var nname=emoji_del(oname);
		var Lmoji={"🏳️‍🌈": ["流量","时间","应急","过期","Bandwidth","expire"],"🇦🇨": ["AC"],"🇦🇷": ["AR","阿根廷"],"🇦🇹": ["奥地利","维也纳"],"🇦🇺": ["AU","Australia","Sydney","澳大利亚","澳洲","墨尔本","悉尼"],"🇧🇪": ["BE","比利时"],"🇧🇬️": ["保加利亚"],"🇧🇷": ["BR","Brazil","巴西","圣保罗"],"🇨🇦": ["Canada","Waterloo","加拿大","蒙特利尔","温哥华","楓葉","枫叶","滑铁卢","多伦多"],"🇨🇭": ["瑞士","苏黎世"],"🇩🇪": ["DE","German","GERMAN","德国","法兰克福","德"],"🇩🇰": ["丹麦"],"🇪🇸": ["ES"],"🇪🇺": ["EU"],"🇫🇮": ["Finland","芬兰","赫尔辛基"],"🇫🇷": ["FR","France","法国","法國","巴黎"],"🇬🇧": ["UK","England","United Kingdom","英国","伦敦","英"],"🇲🇴": ["MO","Macao","澳门","CTM"],"🇭🇰": ["HK","Hongkong","Hong Kong","香港","深港","沪港","呼港","HKT","HKBN","HGC","WTT","CMI","穗港","京港","港"],"🇮🇩": ["Indonesia","印尼","印度尼西亚","雅加达"],"🇮🇪": ["Ireland","爱尔兰","都柏林"],"🇮🇳": ["IN","India","印度","孟买","Mumbai"],"🇮🇹": ["Italy","Nachash","意大利","米兰","義大利"],"🇯🇵": ["JP","Japan","日本","东京","大阪","埼玉","沪日","穗日","川日","中日","泉日","杭日","深日","辽日"],"🇰🇵": ["KP","朝鲜"],"🇰🇷": ["KR","Korea","KOR","韩国","首尔","韩","韓"],"🇲🇽️": ["MEX","MX","墨西哥"],"🇲🇾": ["MY","Malaysia","马来西亚","吉隆坡"],"🇳🇱": ["NL","Netherlands","荷兰","荷蘭","尼德蘭","阿姆斯特丹"],"🇵🇭": ["PH","Philippines","菲律宾"],"🇷🇴": ["RO","罗马尼亚"],"🇷🇺": ["RU","Russia","俄罗斯","俄羅斯","伯力","莫斯科","圣彼得堡","西伯利亚","新西伯利亚","京俄","杭俄"],"🇸🇦": ["沙特","迪拜"],"🇸🇪": ["SE","Sweden"],"🇸🇬": ["SG","Singapore","新加坡","狮城","沪新","京新","泉新","穗新","深新","杭新"],"🇹🇭": ["TH","Thailand","泰国","泰國","曼谷"],"🇹🇷": ["TR","Turkey","土耳其","伊斯坦布尔"],"🇹🇼": ["TW","Taiwan","台湾","台北","台中","新北","彰化","CHT","台","HINET"],"🇺🇸": ["US","America","United States","美国","美","京美","波特兰","达拉斯","俄勒冈","凤凰城","费利蒙","硅谷","拉斯维加斯","洛杉矶","圣何塞","圣克拉拉","西雅图","芝加哥","沪美","哥伦布","纽约"],"🇻🇳": ["VN","越南","胡志明市"],"🇨🇳": ["CN","China","回国","中国","江苏","北京","上海","广州","深圳","杭州","徐州","青岛","宁波","镇江","back"   ]}
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
	return nlist
}

//来自 yichahucha 大佬的 Base64 编码/解码: https://github.com/yichahucha/surge/tree/master
function Base64() {
	// private property
	_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	// public method for encoding
	this.encode = function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
		input = _utf8_encode(input);
		while (i < input.length) {
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
			output = output +
				_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
				_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
		}
		return output;
	}
	// public method for decoding
	this.decode = function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = _utf8_decode(output);
		return output;
	}
	// private method for UTF-8 encoding
	_utf8_encode = function (string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}
		return utftext;
	}
	// private method for UTF-8 decoding
	_utf8_decode = function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}

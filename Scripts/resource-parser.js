/**
 * @supported Quantumult X (v1.0.8-build253)
 * Author: Shawn @XIAO_KOP
 * 功能： 将不同格式订阅转换成 Quantumult X，并支持简单的过滤.
 * 目前仅支持 V2RayN 格式的订阅，以及 quanx 格式写法的节点引用；
 * 过滤参数为 in,out, 分别为保留与排除，多个参数间用+号连接，建议将所有参数 url-encode
 * 示范，
0⃣️ 在quantumult X 配置文件中[general] 部分，加入 resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
1⃣️ 原始订阅连接为: https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt , 
2⃣️ 想要保留的参数为 in=tls+ss, 想要过滤的参数为 out=http+2, 请注意下面订阅链接后一定要加 ”#“ 符号
3⃣️ 则填入 quanx 的总链接为  https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt#in=tls+ss&out=http+2
4⃣️ 填入上述链接并打开的资源解析器开关
 */

//判断订阅类型
function Type_Check(subs){
	var type=""
	if (subs.indexOf("dm1lc3M6Ly")!= -1){
		type="Vmess"
	} else if (subs.indexOf("tag")!=-1){
		type="QuanX"
	}
	return type
}

//V2RayN 订阅转换成 QUANX 格式
function V2QX(subs){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[]
	for(i in list0){
if(list0[i].trim()!=""){
		var server=String($base64.decode(list0[i].replace("vmess://","")).trim()).split("\u0000")[0];
		var nss=[];
		if(server!=""){
			ss=JSON.parse(server);
			ip="vmess="+ss.add+":"+ss.port;
			pwd="password="+ss.id;
			mtd="method=aes-128-gcm"
			tag="tag="+decodeURIComponent(ss.ps);
			tfo="fast-open=false";
			udp="udp-relay=false";
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
	for(i in Servers){
		if(Servers[i].indexOf("tag")!=-1){
			name=Servers[i].split("tag=")[1]
			const include = (item) => name.indexOf(item) != -1;
			const exclude = (item) => name.indexOf(item) != -1;
			if(Pin){
				if(Pin.some(include)){
					if(!Pout.some(exclude)){
					NList.push(Servers[i])
					}
				}
			} else{
				if(!Pout.some(exclude)){
				NList.push(Servers[i])
				}
			}		
		}
			}
	return NList
}

var content0=$resource.content;
var para=decodeURIComponent($resource.link);
var type0=Type_Check(content0);

if(type0=="Vmess"){
	total=V2QX(content0);
	flag=1;
}else if(type0=="QuanX"){
	total=content0.split("\n");
	flag=1;
} else{
	$notify("👻该解析器暂未支持您的订阅格式");
	falg=0;
	$done({content : content0});
}
	
if(flag==1){
	$notify("🤖您订阅类型为:"+type0,"☠️您的订阅连接为: 其中#后面的为自定义传入参数",para);
	var Pin0=para.indexOf("in=")!=-1? para.split("#")[1].split("in=")[1].split("&")[0].split("+"):null;
	var Pout0=para.indexOf("out=")!=-1? para.split("#")[1].split("out=")[1].split("&")[0].split("+"):null;
	if(Pin0||Pout0){
		$notify("开始转换并过滤节点","具体参数如下","👍️保留参数："+Pin0+"\n👎️排除参数："+Pout0);
		total=filter(total,Pin0,Pout0)
	} else {
		$notify("未开启过滤节点","如需过滤节点请使用in/out参数，具体操作参考此示范:","https://t.me/QuanXNews/110");
	}
	console.log(total)
	$done({content : total.join("\n")});	
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

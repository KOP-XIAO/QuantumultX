/***

For Quantumult-X 631+ ONLY!!

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/traffic-check.js, tag=策略流量查询, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Download.png, enabled=true

ps. 简单查询策略/策略组流量使用统计（仅支持一级、二级策略）

@XIAO_KOP

**/

const messageTraffic = {
    action: "get_traffic_statistics"
};

let result = {
    "title" : "策略流量查詢"
}

var policy = $environment.params
const message = {
    action: "get_customized_policy",
    content: policy

};

let [datad, datau]= [0, 0]

var pflag=1 //是否是策略，或者简单节点

//策略组 or 节点
$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
        $done()
    }
    if (resolve.ret) {
        output=JSON.stringify(resolve.ret[message.content])? JSON.parse(JSON.stringify(resolve.ret[message.content]["candidates"])) : [$environment.params]
        pflag = JSON.stringify(resolve.ret[message.content])? pflag:0
        console.log("节点or策略组："+pflag)
        DisplayNodeTraffic(output,pflag)
    }
    //$done();|
}, reject => {
    // Normally will never happen.
    $done();
});

function getJsonLength(jsonData){
    var jsonLength = 0;
    for(var item in jsonData){
       jsonLength++;
    }
    return jsonLength;
}


// 计算流量信息
var [Tdatad,Tdatau,Udatad,Udatau]=[0,0,0,0]

function getServerTraffic(data,node){
    //console.log(data.name)
    let type = data.type
    //console.log("下载用量："+(data.rx_transfer/1024/1024).toFixed(1)+"MB")
    if (data.name==node ) {
        if (type == "tcp") {
            console.log(typeof(Tdatad),typeof(Tdatau))
            Tdatad=(Number(Tdatad)+data.rx_transfer/1024/1024).toFixed(1)
            Tdatau=(Number(Tdatau)+data.tx_transfer/1024/1024).toFixed(1)
            console.log(Tdatad,Tdatau)
        } else if (type == "udp") {
            Udatad=(Number(Udatad)+data.rx_transfer/1024/1024).toFixed(1)
            Udatau=(Number(Udatau)+data.tx_transfer/1024/1024).toFixed(1)
        }
    } else {
    }
}

//查询流量
function DisplayNodeTraffic(nodes,pflag) {
$configuration.sendMessage(messageTraffic).then(resolve => {
    if (resolve.error) {
        console.log(resolve.error);
    }
    if (resolve.ret) {
        let output=JSON.stringify(resolve.ret, null, 2);
        let len = getJsonLength(resolve.ret)
        for (var no in nodes) {
            console.log(nodes[no])
            for (var item in resolve.ret) {
                getServerTraffic(resolve.ret[item],nodes[no])
        }   
    }
        //console.log(output);
        content = NodeData(nodes,pflag);
        //console.log(content)
        $done({"title":result["title"],"htmlMessage":content})
    }
    $done();
}, reject => {
    // Normally not gonna happen.
    $done();
});
}

function NodeData(nodes,pflag){
    datad = "<b>TCP : </b>"+" <font color=#2874A6 > "+Tdatad+" MB ⟱ </font>|  <font color=#9B59B6>"+Tdatau+" MB ⟰ </font> "
    datau = "<b>UDP : </b>"+" <font color=#2874A6 > "+Udatad+" MB ⟱ </font>|  <font color=#9B59B6>"+Udatau+" MB ⟰ </font> "
    //console.log(datad,datau)
    Ncontent = "--------------------------------------</br></br>"+[datad,datau].join("</br></br>")+ "</br></br>--------------------------------------</br></br>"
    Ncontent = pflag == 0? Ncontent +"<font color=#CD5C5C>"+"<b>节点</b> ➟ " + policy+ "</font>" : Ncontent +"<font color=#CD5C5C>"+"<b> 策略组</b> ➟ " + policy+ " </br> ❬共"+ nodes.length+"个节点❭ </font>"
    //console.log(Ncontent)
    Ncontent = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + Ncontent + `</p>`
    //console.log(Ncontent)
    return Ncontent
}

/** 
☑️ 资源解析器 ©𝐒𝐡𝐚𝐰𝐧  ⟦2026-11-25 08:43⟧
----------------------------------------------------------
🛠 发现 𝐁𝐔𝐆 请反馈: https://t.me/ShawnKOP_Parser_Bot
⛳️ 关注 🆃🅶 相关频道: https://t.me/QuanX_API
📖 使用 教程: https://tinyurl.com/2jyygfom
🗣 🆃🄷🄰🄽🄺🅂 🆃🄾  @Jamie CHIEN, @M**F**, @c0lada, @Peng-YM, @vinewx, @love4taylor, @shadowdogy 

🤖 主要功能: 
❶ 将其它格式的⟦服务器订阅⟧解析成 𝐐𝐮𝐚𝐧𝐭𝐮𝐦𝐮𝐥𝐭 𝐗 格式
☑︎ 支持 𝐕2𝐫𝐚𝐲𝐍/𝗦𝗦(𝗥/𝗗)/𝗧𝗿𝗼𝗷𝗮𝗻/𝐕𝐋𝗲𝐬𝐬/𝗛𝗧𝗧𝗣(𝗦)/𝗔𝗻𝘆𝗧𝗟𝗦/𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁(𝗫)/𝗦𝘂𝗿𝗴𝗲/𝐂𝐥𝐚𝐬𝐡/𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭/𝐋𝐨𝐨𝐧/𝗛𝘆𝘀𝘁𝗲𝗿𝗶𝗮𝟮/𝗺𝗶𝗲𝗿𝘂 格式
☑︎ 提供说明 1⃣️ 中的可选个性化参数(筛选、重命名 等)
☑︎ 节点扫码识别疑似订阅链接时，点击通知跳转添加节点订阅
❷ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲(重写) & 𝗳𝗶𝗹𝘁𝗲𝗿(分流) 的 转换 & 筛选 
☑︎ 用于禁用/修改远程引用中某(几)项 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲/𝗳𝗶𝗹𝘁𝗲𝗿
☑︎ 𝐒𝐮𝐫𝐠𝐞/𝐂𝐥𝐚𝐬𝐡 类型规则 𝗹𝗶𝘀𝘁 与 模块 𝐦𝐨𝐝𝐮𝐥𝐞 的解析使用
----------------------------------------------------------
0️⃣ 在 ⟦订阅链接⟧ 后加 "#" 使用, 不同参数用 "&" 连接 
⚠️ ☞ "你的订阅连接#emoji=1&tfo=1&in=香港+台湾"
❖ 951+ 本地/iCloud 路径也支持 "#in=xxx&out=yyy"；路径参数优先，未提供时兼容资源片段第 ① 行的 #参数
❖ 分流/重写支持行首说明 {# note #}：950+ 保留说明，旧版仅输出规则正文；筛选、替换和策略修改只作用于正文
❖ 🚦 支持中文, "操作" 以下特殊字符时请先替换(URL-Encode) 🚦
  ∎ "+"⇒"%2B", 空格⇒"%20", "@"⇒"%40", "&"⇒"%26", "."⇒"\.", ","⇒"%2C"

1️⃣ ⟦𝐬𝐞𝐫𝐯𝐞𝐫 节点⟧ ➠ 参数说明:
⦿ emoji=1(国行设备用2)/-1, 添加/删除节点名内地区旗帜;
⦿ udp=1/-1, tfo=1/-1, 分别强制开启(关闭) 𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲/𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧;
⦿ uot=1, 开启 udp-over-tcp=true选项（仅限SS(R)）
⦿ cert=1/-1/domain, 分别开启/关闭 𝐭𝐥𝐬 证书验证；938+ 支持 domain 作为 tls-verification 校验证书域名，省略时沿用来源;
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
⦿ UA=1，将尝试使用 shadowrocket 的UA重新获取节点信息
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
  ❖ $type0～$type8 用于插入节点类型标签，支持 HY2 和 MIERU。$type 与 $type8 同义
    ∎ rename=@|$type2
    ∎ 样式分别为 "𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","𝕊𝕊","ˢˢ","SS"
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
⦿ 通知参数 ntf=0/1，每次刷新最多显示一条解析结果
  ❖ 𝘀𝗲𝗿𝘃𝗲𝗿 默认提示跳过的节点和需处理的问题。ntf=0 仅关键提醒，ntf=1 显示结果汇总
  ❖ 未导入节点按原因归组，示例展示原始 URI 或配置。cnt=1 高于 ntf 并附完整保留列表
  ❖ dbg=1 或 type=X 在已有横幅上补充输入格式
  ❖ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗳𝗶𝗹𝘁𝗲𝗿 默认提示拒转和异常。ntf=1 显示汇总，cnt=1 附脱敏预览
⦿ sfilter/srename 通过资源链接或路径的 #参数 设置，脚本须为每个输入节点返回一项结果
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

// ==== Parser Helper UI by Quantumult-X (918+) ====
var $parser = $parser || {};

// schema：作者声明的全部参数（不带 value）
$parser.hashSchema = function () {
  // helper 必须定义在函数体内部 —— 协议要求三个函数自包含
  function _overrideOptions() {
    return [
      { label: "沿用来源", value: "" },
      { label: "强制开启", value: "1" },
      { label: "强制关闭", value: "-1" }
    ];
  }
  function _emojiOptions() {
    return [
      { label: "沿用原有旗帜", value: "" },
      { label: "🇭🇰 添加旗帜", value: "1" },
      { label: "添加旗帜（国行设备）", value: "2" },
      { label: "移除旗帜", value: "-1" }
    ];
  }
  function _ptnOptions() {
    return [
      { label: "原样", value: "" },
      { label: "🅰🅱 实心方块", value: "1" },
      { label: "🄰🄱 描边方块", value: "2" },
      { label: "𝐀𝐁 加粗", value: "3" },
      { label: "𝗮𝗯 加粗小写", value: "4" },
      { label: "𝔸𝔹 双线", value: "5" },
      { label: "𝕒𝕓 双线小写", value: "6" },
      { label: "ᵃᵇ 小写上标", value: "7" },
      { label: "ᴬᴮ 大写上标", value: "8" }
    ];
  }
  function _nptOptions() {
    return [
      { label: "原样", value: "" },
      { label: "①②③ 圈号", value: "1" },
      { label: "❶❷❸ 实心圈号", value: "2" },
      { label: "⓵⓶⓷ 双圈", value: "3" },
      { label: "𝟙𝟚𝟛 双线", value: "4" },
      { label: "¹²³ 上标", value: "5" },
      { label: "₁₂₃ 下标", value: "6" },
      { label: "𝟏𝟐𝟑 粗体", value: "7" },
      { label: "𝟷𝟸𝟹 等宽", value: "8" }
    ];
  }

  function _form(schema) {
    for (var group of schema.sections) {
      for (var item of group.items) {
        if (item.description) item.description = item.label + "｜" + item.description;
      }
    }
    return schema;
  }

  function _notificationItems(node) {
    return [
      { type: "select", key: "ntf", label: "解析通知",
        options: [
          { label: "有问题时提醒（默认）", value: "" },
          { label: "仅关键提醒", value: "0" },
          { label: "显示结果汇总", value: "1" }
        ] },
      { type: "switch", key: "cnt", label: node ? "显示保留节点明细" : "显示规则预览",
        description: node ? "显示保留节点的完整配置。此项优先于解析通知设置。" : "在通知中附最多 10 条脱敏规则预览。",
        onValue: "1", offValue: "" }
    ];
  }

  function _ruleFilterGroup(rewrite) {
    var regexScope = rewrite ? "匹配规则正文和主机名。" : "匹配规则正文。";
    var keywords = "匹配规则正文，多个标签命中任一项即可。";
    return {
      type: "group",
      title: "🔎 规则筛选",
      items: [
        { type: "tags", key: "in", label: "保留规则（in）", description: keywords, placeholder: "weibo" },
        { type: "tags", key: "out", label: "排除规则（out）", description: keywords, placeholder: "ad.example.com" },
        { type: "select", key: "hide", label: "关键词筛除后的处理",
          description: "正则筛除会直接移除条目。",
          options: [
            { label: "移除筛除项（默认）", value: "1" },
            { label: "保留为禁用", value: "0" }
          ] },
        { type: "text", key: "regex", label: "正则保留（regex）", description: regexScope, placeholder: "weibo|bilibili" },
        { type: "text", key: "regout", label: "正则排除（regout）", description: regexScope, placeholder: "ad|tracking" }
      ]
    };
  }

  var resourceType = typeof $resource === "undefined" || !$resource ? "" : String($resource.type || "").toLowerCase();
  if (resourceType === "server" || resourceType === "uri") {
    var nodeKeywords = "按节点名匹配。多个标签命中其一。同一标签内以 . 连接时须同时命中，字面点写作 \\.";
    return _form({
      version: 1,
      sections: [
        { type: "group", title: "🔎 节点筛选",
          items: [
            { type: "tags", key: "in", label: "保留节点（in）", description: nodeKeywords, placeholder: "香港.IPLC" },
            { type: "tags", key: "out", label: "排除节点（out）", description: nodeKeywords, placeholder: "BGP.试用" },
            { type: "text", key: "regex", label: "正则保留（regex）",
              description: "匹配完整节点配置。", placeholder: "香港|IPLC" },
            { type: "text", key: "regout", label: "正则排除（regout）",
              description: "匹配完整节点配置。", placeholder: "试用|到期" }
          ] },
        { type: "group", title: "🏷️ 命名与排序",
          items: [
            { type: "text", key: "rename", label: "节点重命名（rename）",
              description: "填写旧名@新名、前缀@ 或 @后缀。多项用 + 连接，删除字段在末尾加 ☠️。",
              placeholder: "香港@HK+@[1X]" },
            { type: "text", key: "rrname", label: "前置重命名（rrname）",
              description: "用法同 rename，在常规重命名和旗帜处理前执行。", placeholder: "香港@HK" },
            { type: "select", key: "emoji", label: "地区旗帜",
              options: _emojiOptions() },
            { type: "select", key: "ptn", label: "节点名字母样式（ptn）", options: _ptnOptions() },
            { type: "select", key: "npt", label: "节点名数字样式（npt）", options: _nptOptions() },
            { type: "text", key: "sort", label: "节点排序（sort）",
              description: "1 为正序，-1 为逆序，x 为随机。可用 > 或 < 指定关键词或正则排序。",
              placeholder: "🇭🇰>🇯🇵>🇺🇸" }
          ] },
        { type: "group", title: "🔐 连接与 TLS",
          items: [
            { type: "select", key: "udp", label: "UDP 转发", options: _overrideOptions() },
            { type: "select", key: "tfo", label: "TCP Fast Open", options: _overrideOptions() },
            { type: "switch", key: "uot", label: "UDP over TCP（SS/SSR）", onValue: "1", offValue: "" },
            { type: "select", key: "aead", label: "VMess AEAD", options: _overrideOptions() },
            { type: "text", key: "cert", label: "TLS 证书验证",
              description: "留空沿用来源，1 开启，-1 关闭。build 938+ 可填证书校验域名，此域名独立于握手 SNI。",
              placeholder: "1 / -1 / cert.example.com" },
            { type: "text", key: "host", label: "TLS 或混淆主机名（host）",
              description: "替换已有主机名。适用时可在末尾加 ☠️ 新增该字段。", placeholder: "cdn.example.com" },
            { type: "text", key: "alpn", label: "TLS ALPN", description: "用于适用的 TLS 传输。", placeholder: "h2" },
            { type: "text", key: "checkurl", label: "节点测速地址（checkurl）",
              description: "直接粘贴完整 URL，可包含查询参数。", placeholder: "https://example.com/ping", keyboard: "url" }
          ] },
        { type: "group", title: "🔔 通知与流量",
          items: _notificationItems(true).concat([
            { type: "switch", key: "info", label: "显示订阅流量",
              description: "来源提供有效流量时显示，有解析通知时合并到同一条。", onValue: "1", offValue: "" },
            { type: "text", key: "flow", label: "手动设置流量及到期时间",
              description: "到期日:总流量GB:已用GB。",
              placeholder: "2027-06-30:1000:54" }
          ]) },
        { type: "group", title: "⚙️ 高级",
          items: [
            { type: "switch", key: "UA", label: "用 Shadowrocket UA 重试",
              description: "build 921+。适用于订阅按客户端返回不同内容的情况。", onValue: "1", offValue: "" },
            { type: "select", key: "type", label: "来源格式（type）",
              options: [
                { label: "自动识别", value: "" },
                { label: "节点订阅", value: "nodes" },
                { label: "节点列表", value: "list" },
                { label: "Clash", value: "clash" }
              ] },
            { type: "text", key: "replace", label: "正则替换节点配置（replace）",
              description: "作用于完整节点配置。填写 正则@替换内容，多项用 + 连接。",
              placeholder: "Example@Sample" }
          ] }
      ]
    });
  }

  var isFilter = resourceType === "filter";
  var sections = [_ruleFilterGroup(!isFilter)];
  if (isFilter) {
    sections.push(
      { type: "group", title: "🧭 策略",
        items: [
          { type: "text", key: "policy", label: "指定策略（policy）",
            description: "留空时沿用规则已有策略，缺少策略时使用 Shawn。", placeholder: "如 Proxy" },
          { type: "text", key: "pset", label: "按正则分配策略（pset）",
            description: "填写 正则@策略，多项用 + 连接。", placeholder: "如 weibo@Proxy" }
        ] },
      { type: "group", title: "🔗 网络接口与代理链",
        items: [
          { type: "select", key: "fcr", label: "网络接口模式（fcr）",
            options: [
              { label: "默认", value: "" },
              { label: "强制蜂窝数据", value: "1" },
              { label: "混合接口", value: "2" },
              { label: "负载均衡", value: "3" }
            ] },
          { type: "text", key: "via", label: "指定分流规则的接口（via）",
            description: "填写接口名，0 表示 %TUN%。和 relay 分开设置。", placeholder: "0" },
          { type: "text", key: "relay", label: "生成代理链规则（relay）",
            description: "将节点订阅转成规则，填中转策略或节点名。以分流资源添加，关闭该引用的「策略偏好」。",
            placeholder: "中转策略组或节点名" }
        ] }
    );
  } else {
    sections.push(
      { type: "group", title: "🌐 主机名",
        items: [
          { type: "tags", key: "inhn", label: "保留主机名（inhn）", description: "只筛选 hostname 列表。", placeholder: "api.example.com" },
          { type: "tags", key: "outhn", label: "排除主机名（outhn）", description: "只筛选 hostname 列表。", placeholder: "ad.example.com" }
        ] },
      { type: "group", title: "✏️ 替换与脚本链接",
        items: [
          { type: "text", key: "replace", label: "正则替换（replace）",
            description: "填写 正则@替换内容，多项用 + 连接。", placeholder: "如 example@sample" },
          { type: "switch", key: "cdn", label: "改写 GitHub 脚本链接",
            description: "把 raw.githubusercontent.com 链接改写为 jsDelivr CDN 链接。", onValue: "1", offValue: "" }
        ] }
    );
  }

  sections.push({ type: "group", title: "🔔 通知", items: _notificationItems(false) });
  var typeOptions = [{ label: "自动识别", value: "" }];
  if (isFilter) {
    typeOptions.push({ label: "分流规则", value: "rule" }, { label: "域名集合", value: "domain-set" });
  } else {
    typeOptions.push({ label: "Surge 模块", value: "module" });
  }
  var conversion = [
    { type: "select", key: "type", label: "来源格式（type）", options: typeOptions },
    { type: "select", key: "dst", label: "转换目标（dst）",
      description: "将转换结果放入对应的资源类型。",
      options: [
        { label: "按来源自动转换", value: "" },
        { label: "重写", value: "rewrite" },
        { label: "分流", value: "filter" }
      ] }
  ];
  if (isFilter) {
    conversion.push({ type: "text", key: "replace", label: "正则替换规则（replace）",
      description: "填写 正则@替换内容，多项用 + 连接。", placeholder: "如 example@sample" });
  }
  sections.push({ type: "group", title: "⚙️ 高级转换", items: conversion });
  return _form({version: 1, sections: sections});
};

// hashToUI：回填已声明的字段，保留未识别参数的原文。
$parser.hashToUI = function (hash) {
  if (!hash) return { version: 1, sections: [], unknown: "" };

  var schema = $parser.hashSchema();
  var allItems = Object.create(null);
  schema.sections.forEach(function (g) {
    g.items.forEach(function (it) { allItems[it.key] = it; });
  });

  var pairs = hash.split("&");
  var values = Object.create(null);
  var unknown = [];
  var decodedTextKeys = ["checkurl", "regex", "regout", "policy", "relay"];

  pairs.forEach(function (p) {
    if (!p) return;
    var eq = p.indexOf("=");
    var k = eq < 1 ? "" : p.substring(0, eq).trim();
    if (k === "tls-verification" && allItems.cert) k = "cert";
    var meta = allItems[k];
    if (!meta) {
      unknown.push(p);
      return;
    }
    if (k in values) return;
    var raw = p.substring(eq + 1);
    if ((k === "type" && raw === "X") || (k === "flow" && Number(raw) === 1)) {
      // 预置诊断值只在原始链接里保留。dbg 未声明，已由同一透传机制处理。
      values[k] = undefined;
      unknown.push(p);
      return;
    }
    if (meta.type === "switch") {
      // CDN 以非空值开启。其他开关兼容手写的 0。
      if (raw === meta.onValue || raw === meta.offValue || (raw === "0" && k !== "cdn")) {
        values[k] = raw === meta.onValue;
      } else {
        values[k] = undefined;
        unknown.push(p);
      }
      return;
    }
    try {
      values[k] = meta.type === "tags" ? raw.split("+").filter(Boolean).map(decodeURIComponent) :
        decodedTextKeys.includes(k) ? decodeURIComponent(raw) : raw;
    } catch (err) {
      // 保存时原样交还无法解码的值，避免改变旧链接的含义。
      values[k] = undefined;
      unknown.push(p);
    }
  });

  var sections = [];

  schema.sections.forEach(function (g) {
    var items = [];
    g.items.forEach(function (it) {
      if (values[it.key] === undefined) return;

      var clone = JSON.parse(JSON.stringify(it));
      clone.value = values[it.key];
      if (it.type === "select") {
        if (it.key === "udp" || it.key === "tfo") {
          var number = Number(clone.value);
          if (number === 0 || number === 1 || number === -1) clone.value = number === 0 ? "" : String(number);
        } else if (it.key === "aead" && clone.value !== "") {
          clone.value = clone.value == -1 ? "-1" : "1";
        }
        if (!clone.options.some(function (option) { return option.value === clone.value; })) {
          clone.options.push({ label: "保留现有值（" + clone.value + "）", value: clone.value });
        }
      }

      items.push(clone);
    });

    if (items.length) {
      sections.push({
        type: "group",
        title: g.title,
        description: g.description,
        items: items
      });
    }
  });

  return {
    version: 1,
    sections: sections,
    unknown: unknown.join("&")
  };
};


// uiToHash：按字段语法写入 fragment，透传未识别参数。
$parser.uiToHash = function (values) {
  var schema = $parser.hashSchema();
  var allItems = Object.create(null);
  schema.sections.forEach(function (g) {
    g.items.forEach(function (it) { allItems[it.key] = it; });
  });

  var parts = [];
  var decodedTextKeys = ["checkurl", "regex", "regout", "policy", "relay"];

  Object.keys(values).forEach(function (k) {
    if (k === "__unknown") return;
    var v = values[k];
    if (v == null) return;
    var meta = allItems[k];
    var serialized;

    if (meta && meta.type === "switch") {
      serialized = v ? meta.onValue : meta.offValue;
    } else if (meta && meta.type === "tags") {
      serialized = v.filter(Boolean).map(encodeURIComponent).join("+");
      if (!serialized) return;
    } else {
      serialized = String(v);
      if (k === "policy" && !serialized.trim()) return;
      if (serialized === "" && (k === "udp" || k === "tfo" || k === "aead")) return;
      if (decodedTextKeys.includes(k)) serialized = encodeURIComponent(serialized);
    }

    // 复合字段按原语法处理，保留 + 和 @ 等分隔符。
    parts.push(k + "=" + serialized.replace(/&/g, "%26"));
  });

  if (typeof values.__unknown === "string" && values.__unknown) parts.push(values.__unknown);
  return parts.join("&");
};

// end ==== Parser Helper UI by Quantumult-X (918+) ====



//beginning 解析器正常使用，調試註釋此部分


//
let version = typeof $environment != "undefined" && $environment ? Number(String($environment.version || "").split("build")[1]) : 0

const UA_Retry= "Shadowrocket/3218 CFNetwork/3860.600.12 Darwin/25.5.0 iPhone18,1"
const currentUA = $resource.user_agent;
const inRetry = currentUA && currentUA.length > 0;

let link0 = typeof $resource.link == "string" ? $resource.link : ""
let content0 = typeof $resource.content == "string" ? $resource.content : ""
let subinfo = $resource.info
var invalidParameter = false

function DecodeParameter(value) {
  try { return decodeURIComponent(value) }
  catch (err) {
    invalidParameter = true
    return ""
  }
}

const ADDRes = `quantumult-x:///add-resource?remote-resource=url-encoded-json`
const Field = {
  "filter" : "filter_remote",
  "rewrite": "rewrite_remote",
  "server" : "server_remote"
}  

const subtag = typeof $resource.tag != "undefined" ? $resource.tag : "";


// 文件路径的 hash 从 build 951 起可用；旧式本地首行参数必须以 #key= 开头，不能读取说明块中的 #。
var firstResourceLine = content0.split("\n")[0].trim();
var useLinkParameters = /^https?:\/\//i.test(link0) || (version >= 951 && link0.includes("#"))
var para = useLinkParameters ? link0 :
  (/^#[ \t]*[a-z][\w-]*=/i.test(firstResourceLine) ? firstResourceLine : "");
var para1 = para.slice(para.indexOf("#") + 1).replace(/\$type/g,"node_type_para_prefix").replace(/\$emoji/g,"node_emoji_flag_prefix").replace(/\$tag/g,"node_tag_prefix").replace(/\$index/g,"node_index_prefix") //防止参数中其它位置也存在"#"
// 分隔后只按完整键名读取，保留值中的等号，转义按各参数的语法处理。
var resourceParams = new Map()
if (para.includes("#")) {
  for (var pair of para1.split("&")) {
    var separator = pair.indexOf("=")
    if (separator < 1) continue
    var key = pair.slice(0, separator).trim()
    if (!resourceParams.has(key)) resourceParams.set(key, pair.slice(separator + 1))
  }
}
const Base64 = new Base64Code()
const escapeRegExp = str => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

function KeywordParameter(key) {
  var terms = (resourceParams.get(key) ?? "").split("+").filter(Boolean)
  return terms.length ? terms.map(DecodeParameter) : null
}
function RegexParameter(key) {
  return resourceParams.has(key) ? DecodeParameter(resourceParams.get(key)).replace(/，/g, ",") : null
}

var UARetry = resourceParams.get("UA") === "1"
var Pinfo = resourceParams.get("info") === "1"
var Pin0 = KeywordParameter("in")
var Pout0 = KeywordParameter("out")
var Psfilter = useLinkParameters && resourceParams.get("sfilter") ? Base64.decode(resourceParams.get("sfilter"), true) : ""
var Preg = RegexParameter("regex")
var Pregout = RegexParameter("regout")
var Pregdel = RegexParameter("delreg")
var Phin0 = KeywordParameter("inhn")
var Phout0 = KeywordParameter("outhn")
var Preplace = resourceParams.get("replace") ?? null
var Pemoji = resourceParams.get("emoji") ?? null
var Pdbg = resourceParams.get("dbg") === "1"
var Pudp0 = resourceParams.get("udp") ?? 0
var Ptfo0 = resourceParams.get("tfo") ?? 0
var Prname = resourceParams.has("rename") ? resourceParams.get("rename").split("+") : null
var Psrename = useLinkParameters && resourceParams.get("srename") ? Base64.decode(resourceParams.get("srename"), true) : ""
var Prrname = resourceParams.has("rrname") ? resourceParams.get("rrname").split("+") : null
var Psuffix = resourceParams.get("suffix") ?? 0
var Ppolicy = DecodeParameter(resourceParams.get("policy") ?? "") || "Shawn"
var Ppolicyset = DecodeParameter(resourceParams.get("pset") ?? "")
var certKey = [...resourceParams.keys()].find(key => key === "cert" || key === "tls-verification")
var Pcert0 = resourceParams.get(certKey)
var Psort0 = resourceParams.get("sort") ?? 0
var PsortX = resourceParams.get("sortx") ?? 0
var PTls13 = resourceParams.get("tls13") ?? 0
var notificationOption = resourceParams.get("ntf")
var Pntf0 = notificationOption === "0" || notificationOption === "1" ? Number(notificationOption) : 2
var Phide = resourceParams.get("hide") ?? 1
var Pb64 = resourceParams.get("b64") ?? 0
var Pcnt = resourceParams.get("cnt") === "1"
var Pcap = resourceParams.get("cap") ?? ""
var Pptn = resourceParams.get("ptn") ?? ""
var Pnptn = resourceParams.get("npt") ?? ""
var Pcdn = resourceParams.get("cdn") ?? ""
var total = ""
var Pdel = resourceParams.get("del") ?? 0
var typeU = resourceParams.get("type") ?? ""
var Pdst = resourceParams.get("dst")
var Pfcr = resourceParams.get("fcr") ?? ""
var Pvia = resourceParams.get("via") ?? ""
var Paead = resourceParams.get("aead") ?? ""
var Phost = resourceParams.get("host") ?? ""
var Pcsha256 = version >= 646 ? resourceParams.get("csha") ?? "" : ""
var Ppsha256 = version >= 646 ? resourceParams.get("psha") ?? "" : ""
var typeQ = $resource.type ? String($resource.type).toLowerCase() : "unsupported"
var PRelay = DecodeParameter(resourceParams.get("relay") ?? "")
var PUOT = version >= 665 ? resourceParams.get("uot") ?? "" : ""
var PcheckU = DecodeParameter(resourceParams.get("checkurl") ?? "")
typeQ = PRelay != "" ? "server" : typeQ
const nodeTarget = /^(?:server|uri|unsupported)$/i.test(typeQ)
var typec = ""
var Pflow = resourceParams.get("flow") ?? 0
var PProfile = resourceParams.get("profile") ?? 0
var Palpn = version >= 712 ? resourceParams.get("alpn") ?? "" : ""
var Pobfs = version >= 770 ? resourceParams.get("obfs") ?? "" : ""
var Psession = version >= 771 ? resourceParams.get("tsession") ?? "" : ""
// 0/1 代表关闭 session-ticket/reuse，2 表示全部关闭。
var Pmix = version>=844? 1 : 0 // allow rewrite and filter mix from version 844
var Pjsonjq = version>=845? 0 : 1 // allow jsonjq from version 845

// tls-verification 参数修复说明 ⟦2026-07-21 17:47:28 +08⟧
// Quantumult X build 938+ 支持 tls-verification=domain；旧版仍只输出 true/false，避免旧客户端误读域名值。
function TLSCertDomainValue(Pcert0) {
  var raw = Pcert0 === undefined || Pcert0 === null ? "" : String(Pcert0).trim();
  if (raw === "") return "";
  try { raw = decodeURIComponent(raw); } catch (e) {}
  raw = raw.trim();
  var low = raw.toLowerCase();
  if (low === "1" || low === "true") return "true";
  if (low === "-1" || low === "0" || low === "false") return "false";
  if (version >= 938 && /^(?=.{1,253}$)(?!-)(?:[A-Za-z0-9-]{1,63}\.)+[A-Za-z0-9-]{2,63}$/.test(raw)) {
    return raw;
  }
  return "";
}

function TLSCertParam(override, sourceVerification) {
  var value = TLSCertDomainValue(override) || sourceVerification || (Pcsha256 || Ppsha256 ? "true" : "false")
  return "tls-verification=" + value
}

function QXNodeField(line, key) {
  var match = new RegExp(",[ \\t]*" + key + "[ \\t]*=([^,]*)", "i").exec(line)
  return match ? match[1].trim() : undefined
}

function TLSFromSkipVerify(value) {
  if (typeof value == "string") value = value.trim()
  if (value === undefined || value === "") return ""
  return NodeBool(value) ? "false" : "true"
}

function TLSFromProxyLine(line) {
  var value = QXNodeField(line, "skip-cert-verify")
  return TLSFromSkipVerify(value === undefined ? value : value.replace(/^["']|["']$/g, ""))
}

function TLSFromURI(uri) {
  var query = uri.split("#", 1)[0].split("?").slice(1).join("?")
  var verification = ""
  for (var match of query.matchAll(/(?:^|&)(?:allowinsecure|insecure)=([^&]*)/gi)) {
    var value = TLSFromSkipVerify(decodeURIComponent(match[1]))
    if (verification && value != verification) NodeInvalid("URI 证书校验开关冲突")
    verification = value
  }
  return verification
}

function HasTLSTransport(line) {
  return /,\s*(?:over-tls\s*=\s*true|obfs\s*=\s*(?:over-tls|wss))\s*(?=,|$)/i.test(line)
}

var PNS=0 // 不支持的节点统计
var HY2Supported = Number.isInteger(version) && version >= 965
var MieruSupported = Number.isInteger(version) && version >= 968
const nodeProtocolLabels = {
  hysteria2: "Hysteria 2", hy2: "Hysteria 2", hysteria: "Hysteria",
  mieru: "mieru", mierus: "mieru", tuic: "TUIC", wireguard: "WireGuard", wg: "WireGuard",
  vless: "VLESS", vmess: "VMess", anytls: "AnyTLS", trojan: "Trojan",
  ss: "Shadowsocks", shadowsocks: "Shadowsocks", ssr: "ShadowsocksR", shadowsocksr: "ShadowsocksR",
  ssd: "SSD", http: "HTTP", https: "HTTPS", socks: "SOCKS", socks5: "SOCKS5", ssocks: "SOCKS"
}
const nodeSkipped = new Map()
const preparedNodeSources = []
const nodeExampleLimit = 3
const nodeSummaryNumbers = ["", "1️⃣", "2️⃣", "3️⃣"]
const nodeIssues = []
if (nodeTarget && !useLinkParameters && (resourceParams.get("sfilter") || resourceParams.get("srename"))) {
  nodeIssues.push("脚本参数需在资源链接或路径的 #参数 中设置。")
}
const nodeCounts = {filtered: 0, duplicates: 0, renamed: 0, unnamed: 0}
const noticeSeparator = " | "
const unsupportedProtocolMessage = "Quantumult X 版本暂未支持此协议"
var nodeFlow = ""

function Profile_Handle() {
  if (version && version < 670) return
  var selection = PProfile == 1 ? "001" : PProfile == 8 ? "010" : PProfile == 9 ? "011" : String(PProfile)
  var sections = content0.split(/^\s*\[([\w-]+)\][ \t]*\r?$/m)
  var resources = {}
  var fields = [Field.server, Field.filter, Field.rewrite]
  fields.forEach(function (field, index) {
    if (selection[index] != "1") return
    var section = sections.findIndex((part, i) => i % 2 == 1 && part == field)
    if (section < 0) return
    var rows = sections[section + 1].split("\n").map(row => row.trim()).filter(row => /^https?:\/\//i.test(row))
    if (rows.length) resources[field] = rows
  })
  if (Object.keys(resources).length) return AddResourceURL(resources)
}

//
//流量信息
//{bytes_used: 1073741824, bytes_remaining: 2147483648, expire_date: 1653193966}}
var Finfo={}
if (Pflow && Pflow != 1) {
  var flowValues = Pflow.split(":")
  var flowDate = Date.parse(flowValues[0]) / 1000
  var flowTotal = Number(flowValues[1] || 0) * 1024 ** 3
  var flowUsed = Number(flowValues[2] || 0) * 1024 ** 3
  if (Number.isFinite(flowDate) && Number.isFinite(flowTotal) && Number.isFinite(flowUsed) && flowTotal >= 0 && flowUsed >= 0) {
    Finfo = {bytes_used: flowUsed, bytes_remaining: flowTotal ? Math.max(0, flowTotal - flowUsed) : 1, expire_date: flowDate}
  }
}

//STATUS=🚀↑:0.62GB,↓:15.1GB,TOT:200GB💡Expires:2026-08-02
//status=🚀↑:0.83gb,↓:17.73gb,tot:200gb💡expires:2026-08-02
//2026-05-06 for shadowrocket sub with flow-info-fake server
function Rocket_flow(info) {
  var upload = /↑:\s*(\d+(?:\.\d+)?)gb/i.exec(info)
  var download = /↓:\s*(\d+(?:\.\d+)?)gb/i.exec(info)
  var total = /tot:\s*(\d+(?:\.\d+)?)gb/i.exec(info)
  var expiry = /expires:\s*(\d{4}-\d{2}-\d{2})(?!\d)/i.exec(info)
  var bytes = 1024 ** 3
  var used = upload && download ? (Number(upload[1]) + Number(download[1])) * bytes : NaN
  var quota = total ? Number(total[1]) * bytes : NaN
  var date = expiry ? FlowExpiry(expiry[1]) : NaN
  if (Number.isFinite(used) && Number.isFinite(quota)) {
    Finfo = {bytes_used: used, bytes_remaining: quota ? Math.max(0, quota - used) : 1}
    if (Number.isFinite(date)) Finfo.expire_date = date
  }
  if (Pinfo && !nodeFlow) nodeFlow = FlowSummary(quota, used, date)
}

//花漾字 pattern
var pat=[]
pat[0] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
pat[1] = ["🅰","🅱","🅲","🅳","🅴","🅵","🅶","🅷","🅸","🅹","🅺","🅻","🅼","🅽","🅾","🅿","🆀","🆁","🆂","🆃","🆄","🆅","🆆","🆇","🆈","🆉"]
pat[2] = ["🄰","🄱","🄲","🄳","🄴","🄵","🄶","🄷","🄸","🄹","🄺","🄻","🄼","🄽","🄾","🄿","🅀","🅁","🅂","🅃","🅄","🅅","🅆","🅇","🅈","🅉"]
pat[3] = ["𝐀","𝐁","𝐂","𝐃","𝐄","𝐅","𝐆","𝐇","𝐈","𝐉","𝐊","𝐋","𝐌","𝐍","𝐎","𝐏","𝐐","𝐑","𝐒","𝐓","𝐔","𝐕","𝐖","𝐗","𝐘","𝐙"]
pat[4] = ["𝗮","𝗯","𝗰","𝗱","𝗲","𝗳","𝗴","𝗵","i","𝗷","𝗸","𝗹","𝗺","𝗻","𝗼","𝗽","𝗾","𝗿","𝘀","𝐭","𝘂","𝘃","𝘄","𝘅","𝘆","𝘇"]
pat[5] = ["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ"]
pat[6] = ["𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"]
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


// 花漾字类型标签，索引 8 用于 $type 或 $type8。
const nodeTypeStyles = {
  "shadowsocks": ["𝐬𝐬", "𝐒𝐒", "🅢🅢", "🆂🆂", "ⓢⓢ", "🅂🅂", "𝕊𝕊", "ˢˢ", "SS"],
  "shadowsocksr": ["𝐬𝐬𝐫", "𝐒𝐒𝐑", "🅢🅢🅡", "🆂🆂🆁", "ⓢⓢⓡ", "🅂🅂🅁", "𝕊𝕊ℝ", "ˢˢʳ", "SSR"],
  "vmess": ["𝐯𝐦𝐞𝐬𝐬", "𝐕𝐌𝐄𝐒𝐒", "🅥🅜🅔🅢🅢", "🆅🅼🅴🆂🆂", "ⓥⓜⓔⓢⓢ", "🅅🄼🄴🅂🅂", "𝕍𝕞𝕖𝕤𝕤", "ᵛᵐᵉˢˢ", "VMESS"],
  "trojan": ["𝐭𝐫𝐨𝐣𝐚𝐧", "𝐓𝐑𝐎𝐉𝐀𝐍", "🅣🅡🅞🅙🅐🅝", "🆃🆁🅾🅹🅰🅽", "ⓣⓡⓞⓙⓐⓝ", "🅃🅁🄾🄹🄰🄽", "𝕋𝕣𝕠𝕛𝕒𝕟", "ᵀʳᵒʲᵃⁿ", "TROJAN"],
  "http": ["𝐡𝐭𝐭𝐩", "𝐇𝐓𝐓𝐏", "🅗🅣🅣🅟", "🅷🆃🆃🅿", "ⓗⓣⓣⓟ", "🄷🅃🅃🄿", "𝕙𝕥𝕥𝕡", "ʰᵗᵗᵖ", "HTTP"],
  "socks5": ["𝐬𝐨𝗰𝗸𝐬", "𝐒𝐎𝐂𝐊𝐒", "🅢🅞🅒🅚🅢", "🆂🅾🅲🅺🆂", "ⓢⓞⓒⓚⓢ", "🅂🄾🄲🄺🅂", "𝕤𝕠𝕔𝕜𝕤", "ˢᵒᶜᵏˢ", "SOCKS"],
  "vless": ["𝐯𝐥𝐞𝐬𝐬", "𝐕𝐋𝐄𝐒𝐒", "🅥🅛🅔🅢🅢", "🆅🅻🅴🆂🆂", "ⓥⓛⓔⓢⓢ", "🅅🄻🄴🅂🅂", "𝕍𝕝𝕖𝕤𝕤", "ᵛˡᵉˢˢ", "VLESS"],
  "anytls": ["𝐚𝐧𝐲𝐭𝐥𝐬", "𝐀𝐍𝐘𝐓𝐋𝐒", "🅐🅝🅨🅣🅛🅢", "🅰🅽🆈🆃🅻🆂", "ⓐⓝⓨⓣⓛⓢ", "🄰🄽🅈🅃🄻🅂", "𝔸𝕟𝕪𝕥𝕝𝕤", "ᴬⁿʸᵗˡˢ", "𝖠𝖭𝖸𝖳𝖫𝖲"],
  "hysteria2": ["𝐡𝐲𝟐", "𝐇𝐘𝟐", "🅗🅨❷", "🅷🆈2", "ⓗⓨ②", "🄷🅈2", "𝕙𝕪𝟚", "ʰʸ²", "HY2"],
  "mieru": ["𝐦𝐢𝐞𝐫𝐮", "𝐌𝐈𝐄𝐑𝐔", "🅜🅘🅔🅡🅤", "🅼🅸🅴🆁🆄", "ⓜⓘⓔⓡⓤ", "🄼🄸🄴🅁🅄", "𝕞𝕚𝕖𝕣𝕦", "ᴹⁱᵉʳᵘ", "MIERU"]
}

//避免json undefined错误的 函数
const getValue = (fn, defaultVaule) => {
  try {
    return fn();
  } catch (error) {
    return defaultVaule;
  }
};

var type0 = ""
// flag=1,2,3 分别为节点、重写、分流。
var flag = 1
var subscriptionURL = SubscriptionURL(content0)

// 订阅二维码先引导添加资源，URL 的 #参数留给添加后的订阅解析。
if (subscriptionURL) {
  type0 = "sub-http"
  $done({content: ResourceParse()})
} else if (UARetry && !inRetry && version > 920) {
  $done({retry: {user_agent: UA_Retry}})
} else {
  total = Parser()
  $done({content: total, info: Finfo})
}

function Parser() {
  if (Pinfo && nodeTarget) nodeFlow = SubFlow()
  if (invalidParameter) {
    NotifyNode("❌ 资源参数无效", ["请检查参数中的百分号编码后重试。"])
    return ""
  }
  try {
    if (/^https?:\/\/(?:www\.)?github\.com\//i.test(link0) && IsHTML(content0)) {
      content0 = ToRaw(content0)
    }
    var loonLink = /^https?:\/\/nsloon\.com\/openloon\/import\?plugin=(.+)$/i.exec(link0)
    if (loonLink) {
      var url = /^https?%3a/i.test(loonLink[1]) ? DecodeParameter(loonLink[1]) : loonLink[1]
      var action = ResourceAddAction(url, Field[typeQ] || Field.rewrite, "Loon 资源")
      NotifyNode("⚠️ 请添加 Loon 原始资源",
        [action ? "点按通知，在资源添加页确认原始链接。" : "请复制插件的原始链接后手动添加。"], "", action)
      return ""
    }
    type0 = PProfile != 0 ? "profile" : Type_Check(content0)
    if (type0 == "wrong-field") {
      var kind = typec.split("-")[0]
      var category = {server: "节点", rewrite: "重写", filter: "分流"}[kind]
      var action = ResourceAddAction(link0, Field[kind], "重新添加的资源")
      NotifyNode("⚠️ 资源添加类型有误", [
        category ? "检测为" + category + "资源。" : "请检查资源格式和添加位置。",
        action ? "点按通知，在正确的资源分类中添加。" : "请在对应的资源分类中手动添加。"
      ], "", action)
      return ""
    }
    if (type0 == "web" || type0 == "JS-0") {
      var web = type0 == "web"
      var title = web ? "❌ 订阅返回网页" : "❌ 资源内容为 JavaScript"
      var step = web ? "请检查订阅是否有效，或确认提供方要求的 User-Agent。" : "请使用节点订阅或相应的重写资源链接。"
      if (nodeTarget) NotifyNodeResult(0, title, step)
      else NotifyNode(title, [step].concat(nodeIssues))
      return ""
    }
    if (type0 == "wrong-link") return ""
    if (type0 == "profile") {
      if (PProfile == 0) PProfile = "111"
      var action = Profile_Handle()
      NotifyNode("ℹ️ 检测到完整配置", [
        action ? "点按通知，选择要添加的远程资源。" : "请从配置中复制所需资源并手动添加。"
      ], "", action)
      return ""
    }

    return ResourceParse()
  } catch (err) {
    if (nodeTarget) {
      NotifyNodeResult(0, "❌ 节点解析中断", err.nodeReason || "请检查订阅格式与解析参数后重试。")
    } else {
      NotifyNode("❌ 规则解析中断", [err.nodeReason || "请检查规则格式和筛选参数后重试。"].concat(nodeIssues))
    }
    return ""
  }
}

function IsHTML(content) {
  return /^\s*(?:<!doctype\s+html\b|<html\b)/i.test(content)
}

function ResourceAddAction(url, field, tag) {
  if (!field || version && version < 670 ||
      !/^https?:\/\/[^/?#]+(?:[/?#]|$)/i.test(url) || /[\s\x00-\x1f\x7f<>"\\]/.test(url)) return
  var resource = {[field]: [url.replace(/,/g, "%2C") + ", opt-parser=true, tag=" + tag]}
  return AddResourceURL(resource)
}

function AddResourceURL(resources) {
  return {"open-url": ADDRes.replace("url-encoded-json", encodeURIComponent(JSON.stringify(resources)))}
}

function ParseUnknown() {
  if (nodeTarget) {
    NotifyNodeResult(0, "❌ 无法识别节点内容", "请核对订阅地址、返回格式和解析参数。")
  } else {
    NotifyNode("❌ 无法识别资源内容", ["请核对资源地址和返回格式。"])
  }
}

function ResourceParse() {
  var ruleReport = {failures: [], filtered: 0, duplicates: 0, hostnameFiltered: 0, hostnameEmpty: false}
  //预处理，分流/重写等处理完成
  if (type0 == "Subs-B64Encode") { // subs2QX 负责所有节点的转换
    total = Subs2QX(Base64.decode(content0, true), Pudp0, Ptfo0, Pcert0, PTls13);
  } else if (type0 == "Subs") {
    //$notify("subs","",content0+Pudp0+Ptfo0+Pcert0+PTls13)
    total = Subs2QX(content0, Pudp0, Ptfo0, Pcert0, PTls13, preparedNodeSources);
  } else if (type0 == "QuanX" || type0 == "Clash" || type0 == "Surge") {
    var normalizedSources = []
    var normalized = isQuanX(content0, preparedNodeSources, normalizedSources)
    total = Subs2QX(normalized.join("\n"), Pudp0, Ptfo0, Pcert0, PTls13, normalizedSources);
  } else if (type0 == "sgmodule" || type0 == "rewrite") {
    flag = 2
    total = Rewrite_Filter(isQuanXRewrite(content0.split("\n"), ruleReport.failures), Pin0, Pout0, ruleReport)
    if (Preplace) total = ReplaceReg(total, Preplace)
    var unique = Array.from(new Set(total))
    ruleReport.duplicates = total.length - unique.length
    total = Pcdn ? CDN(unique) : unique.join("\n")
  } else if (type0 == "Rule") {
    flag = 3
    total = Rule_Handle(content0.split("\n").map(row => row.trim()), Pout0, Pin0, ruleReport)
    if (Preg || Pregout) {
      var active = total.filter(row => !RuleNoteBody(row).startsWith("-")).length
      total = FilterRuleRegex(total)
      ruleReport.filtered += active - total.filter(row => !RuleNoteBody(row).startsWith("-")).length
    }
    if (Preplace) total = ReplaceReg(total, Preplace)
    if (Ppolicyset) total = policy_sets(total, Ppolicyset)
    var unique = Array.from(new Set(total))
    ruleReport.duplicates = total.length - unique.length
    total = unique.join("\n")
  } else if (type0 == "sub-http") {
    var action = ResourceAddAction(subscriptionURL, Field.server, "扫码订阅-" + Date.now())
    NotifyNode("ℹ️ 疑似节点订阅链接", [
      action ? "点按通知，在节点资源添加页确认订阅地址。" : "请复制订阅地址并手动添加到节点资源。"
    ], "", action)
    return ""
  } else if (!content0.trim()) {
    NotifyNodeResult(0, "❌ 订阅返回空内容", "请检查订阅地址和提供方的返回内容。")
    return ""
  } else if (type0 == "unknown") {
    if (nodeTarget && IsDirectHttpProxy(content0)) NotifyNodeResult(1, "", "", content0.trim())
    else ParseUnknown()
    return typeQ == "filter" || typeQ == "rewrite" ? content0.split("\n").map(RuleNoteOutput).join("\n") : content0
  }

  if (flag == 1) {
    var nodes = isQuanX(total.filter(Boolean).join("\n")).filter(Boolean)
    if (Pinfo && !nodeFlow) nodeFlow = FlowCheck(nodes)
    var converted = nodes.length
    if (nodes.length && (Pin0 || Pout0)) nodes = Filter(nodes, Pin0, Pout0)
    var filterParameter = "regex"
    try {
      if (nodes.length && Preg) {
        var include = new RegExp(Preg, "i")
        nodes = nodes.filter(node => include.test(node))
      }
      filterParameter = "regout"
      if (nodes.length && Pregout) {
        var exclude = new RegExp(Pregout, "i")
        nodes = nodes.filter(node => !exclude.test(node))
      }
    } catch (err) {
      nodeCounts.filtered = converted - nodes.length
      NotifyNodeResult(0, "❌ 节点解析中断", filterParameter + " 筛选正则无效，请检查参数。")
      return ""
    }
    if (nodes.length && Psfilter) nodes = FilterScript(nodes, Psfilter)
    nodeCounts.filtered = converted - nodes.length

    if (nodes.length) {
      if (Prrname) {
        Prn = Prrname;
        nodes = nodes.map(Rename);
      }
      if (Pregdel) {
        delreg = Pregdel
        nodes = nodes.map(DelReg)
      }
      if (Psrename) nodes = RenameScript(nodes, Psrename)
      if (Preplace) nodes = ReplaceReg(nodes, Preplace)
      if (Prname) {
        Prn = Prname;
        nodes = nodes.map(Rename);
      }
      if (Pemoji) nodes = emoji_handle(nodes, Pemoji)
      if (Psuffix == 1 || Psuffix == -1) nodes = nodes.map(Psuffix == 1 ? type_suffix : type_prefix)
      nodes = nodes.map(type_handle).map(emoji_prefix_handle).map(tag_handle)
      if (Psort0) nodes = QXSort(nodes, Psort0)
      if (para1.indexOf("node_index_prefix") != -1) nodes = index_handle(nodes)
      nodes = TagCheck_QX(nodes)
      if (PUOT == 1) nodes = nodes.map(UOT)
    }

    var relay = PRelay ? ServerRelay(nodes, PRelay) : null
    if (relay) nodes = relay.nodes
    var nodeContent = !relay || Pcnt ? nodes.join("\n") : ""
    var output = relay ? relay.rules : nodes.length ? Base64.encode(nodeContent) : ""
    if (Pflow == 1 && nodes.length) {
      Finfo = {bytes_used: 3073741824, bytes_remaining: 2147483648, expire_date: 1854193966}
    }
    NotifyNodeResult(nodes.length, "", "", nodeContent)
    return output
  }
  // 说明先随规则完成转换和筛选，输出到不支持说明的客户端时才降级。
  var rows = total.split("\n").map(RuleNoteOutput)
  NotifyRuleResult(flag == 2 ? "重写" : "分流", rows, ruleReport)
  return rows.join("\n")
}

function NotifyNode(title, details, counts = "", action, nodeContent = "", numbers = patn[1]) {
  var name = typeof subtag == "string" ? subtag : ""
  // 部分客户端以原始 URL 充当资源名。只显示便于识别的短名称。
  if (/(?:[a-z][\w+.-]*(?::\/\/|%3a%2f%2f)|(?:password|token|secret|uuid|auth|key)\s*(?:=|%3d))/i.test(name) || name == link0) name = ""
  name = name.replace(/[\x00-\x1f\x7f\u0085\u2028\u2029\u202a-\u202e\u2066-\u2069]/g, " ").trim()
  name = Array.from(name).slice(0, 40).join("") || "资源"
  var body = details.slice(0, 3).map((detail, index) => numbers[index + 1] + " " + detail).join("\n")
  if (nodeContent) body = body ? body + "\n\n" + nodeContent : nodeContent
  var subtitle = counts ? name + noticeSeparator + counts : name
  if (action) $notify(title, subtitle, body, action)
  else $notify(title, subtitle, body)
}

function NodeFailureExample(source, number) {
  return patn[1][number] + " " + source.raw + (source.fields ? "\n（节点字段）" : "")
}

function NodeOmittedLine(label) {
  var digits = label.replace(/\D/g, "").length
  var han = label.length - digits
  // iPhone 17 Pro 通知详情实测正文约 45.6 列，分隔线占用最多 44 列。
  var labelColumns = han * 1.68 + digits
  var dashCount = Math.max(1, Math.floor((44 - labelColumns) / 2))
  var dashes = "-".repeat(dashCount)
  var lineColumns = labelColumns + 2 * dashCount
  var indent = Math.max(0, Math.round((45.6 - lineColumns) / 2))
  return "\u00A0".repeat(indent) + dashes + label + dashes
}

function NotifyNodeResult(kept, title = "", nextStep = "", nodeContent = "") {
  var reasons = Array.from(nodeSkipped.values())
  var critical = reasons.some(item => item.critical) || nodeIssues.length > 0
  var showSummary = Pntf0 == 1
  var showNodes = Pcnt && nodeContent != ""
  if (kept && !title && !critical && !showSummary && !showNodes && !nodeFlow && (Pntf0 == 0 || !PNS)) return

  var skipInTitle = !title && kept > 0 && PNS > 0
  if (!title) {
    if (!kept) title = nodeCounts.filtered ? "⚠️ 筛选后无节点" : "❌ 未导入节点"
    else if (PNS) title = "⚠️ " + PNS + " 条节点未导入"
    else if (critical) title = "⚠️ 节点处理需检查"
    else if (showNodes) title = "ℹ️ 节点解析明细"
    else title = showSummary ? "✅ 节点解析完成" : "ℹ️ 订阅流量"
  }
  var showAllCounts = showSummary || Pcnt
  var counts = ["保留 " + kept + " 条"]
  for (var [label, count] of [["筛除", nodeCounts.filtered], ["跳过", PNS], ["去重", nodeCounts.duplicates]]) {
    if (!(label == "跳过" && skipInTitle) && (count || showAllCounts)) counts.push(label + " " + count + " 条")
  }

  var details = []
  if (nextStep) details.push(nextStep)
  else if (!kept && nodeCounts.filtered) details.push("请检查节点筛选参数。")
  else if (!kept && !PNS) details.push("请检查订阅是否包含可转换的节点。")

  var limit = nodeFlow ? 2 : 3
  var available = limit - details.length
  reasons.sort((a, b) => Number(b.critical) - Number(a.critical))
  var visible = reasons.slice(0, available)
  var exampleNumber = 0
  var hiddenCount = PNS
  for (var item of visible) {
    var samples = item.sources.map(source => NodeFailureExample(source, ++exampleNumber))
    var lines = [item.label + " ×" + item.count + noticeSeparator + item.reason, ...samples]
    var unshown = item.count - samples.length
    if (unshown > 0) lines.push(NodeOmittedLine(unshown + "条未展开"))
    details.push(lines.join("\n"))
    hiddenCount -= item.count
  }
  if (visible.length && hiddenCount > 0) {
    details[details.length - 1] += "\n" + NodeOmittedLine("其他原因" + hiddenCount + "条未展开")
  }
  details.push(...nodeIssues.slice(0, available - visible.length))
  if (showSummary) {
    if (nodeCounts.unnamed) details.push("补全 " + nodeCounts.unnamed + " 个空节点名。")
    if (nodeCounts.renamed) details.push("为 " + nodeCounts.renamed + " 个重名节点添加编号。")
  }
  if (Pntf0 != 0 && (Pdbg || typeU == "X")) {
    var formats = {Subs: "节点列表", "Subs-B64Encode": "Base64", QuanX: "QuanX", Clash: "Clash", Surge: "Surge"}
    if (formats[type0]) details.push("识别格式" + noticeSeparator + formats[type0])
  }
  details = details.slice(0, limit)
  if (nodeFlow) details.push(nodeFlow)
  var keptNodes = showNodes ? (PNS ? "保留节点\n" : "") + nodeContent : ""
  NotifyNode(title, details, counts.join(noticeSeparator), undefined, keptNodes, nodeSummaryNumbers)
}

// 响应头信息只读取数值和日期，缺失或无效字段不影响节点解析。
function SubFlow() {
  if (typeof subinfo != "string") return ""
  var values = Object.create(null)
  var info = subinfo.replace(/^\s*subscription-userinfo\s*:\s*/i, "")
  for (var part of info.split(/[;,]/)) {
    var field = /^\s*(upload|download|total|expire)\s*=\s*(.*?)\s*$/i.exec(part)
    if (field) {
      var key = field[1].toLowerCase()
      var value = /^\d+$/.test(field[2]) ? Number(field[2]) : NaN
      values[key] = Number.isSafeInteger(value) && (!(key in values) || values[key] == value) ? value : NaN
    }
  }
  return FlowSummary(values.total, (values.upload === undefined ? 0 : values.upload) + values.download, values.expire)
}

function FlowExpiry(value) {
  var date = new Date(value + "T00:00:00Z")
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) == value ? date.getTime() / 1000 : NaN
}

function FlowSummary(total, used, expires) {
  var details = []
  if (Number.isFinite(total) && Number.isFinite(used) && total > 0 && used >= 0) {
    var gb = 1024 ** 3
    details.push("已用 " + (used / gb).toFixed(2) + " / " + (total / gb).toFixed(2) + " GB")
    details.push("剩余 " + (Math.max(0, total - used) / gb).toFixed(2) + " GB")
  }
  if (expires > 0) {
    var date = new Date(expires * 1000)
    if (Number.isFinite(date.getTime())) {
      var day = [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(value => String(value).padStart(2, "0")).join("-")
      details.push(day + " 到期")
    }
  }
  return details.length ? ["流量"].concat(details).join(noticeSeparator) : ""
}

// 从流量信息节点的名称中仅提取可识别的容量和日期。
function FlowCheck(nodes) {
  var remaining = "", expires = ""
  for (var node of nodes) {
    var tag = node.match(/,\s*tag=(.*)$/)
    if (!tag) continue
    var capacity = /剩余流量\s*[:：]?\s*(\d+(?:\.\d+)?)\s*([KMGT]i?B|B)\b/i.exec(tag[1])
    var date = /(?:到期时间|过期时间|有效期至)\s*[:：]?\s*(\d{4}-\d{2}-\d{2})(?!\d)/.exec(tag[1])
    if (capacity && Number.isFinite(Number(capacity[1]))) remaining = "剩余 " + Number(capacity[1]) + " " + capacity[2].toUpperCase()
    if (date && Number.isFinite(FlowExpiry(date[1]))) expires = date[1] + " 到期"
  }
  return remaining || expires ? ["流量", remaining, expires].filter(Boolean).join(noticeSeparator) : ""
}

// 行首说明仅作为元数据保留；不跨行、不扫描正文，转换失败时不留下孤立说明。
function RuleNoteSplit(row) {
  var match = row.match(/^([ \t]*\{#[^\r\n]*?#\}[ \t]*)([^\r\n]*)\r?$/);
  return match ? { note: match[1], body: match[2] } : { note: "", body: row };
}

function RuleNoteBody(row) {
  return RuleNoteSplit(row).body;
}

function RuleNoteJoin(note, body) {
  return body && body.trim() && body.trim() != "-" ? note + body : "";
}

function RuleNoteMap(row, transform) {
  var parts = RuleNoteSplit(row);
  return RuleNoteJoin(parts.note, transform(parts.body));
}

function RuleNoteOutput(row) {
  var parts = RuleNoteSplit(row);
  if (parts.note) { return RuleNoteJoin(version >= 950 ? parts.note : "", parts.body) }
  return /^[ \t]*\{#/.test(row) ? "" : row; // 未闭合说明也不能经未知类型回退输出。
}

//判断订阅类型
// 扫码可能传入订阅 URL；仅识别单个、具有订阅特征的链接，不请求其内容。
function SubscriptionURL(content) {
    if (!/^(server|uri|unsupported)$/i.test(typeQ)) { return "" }
    var url = content.trim()
    var wrapped = /^subs?:\/\//i.test(url)
    if (wrapped) {
      var encoded = url.replace(/^subs?:\/\//i, "").split("#")[0]
      if (!/^[a-z0-9+/_-]+={0,2}$/i.test(encoded)) { return "" }
      url = Base64.decode(encoded.replace(/-/g, "+").replace(/_/g, "/")).trim()
    }
    if (/[\s\x00-\x1f\x7f<>"\\]/.test(url)) { return "" }
    var parts = /^https?:\/\/([^/?#]+)(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i.exec(url)
    if (!parts) { return "" }
    // user:pass@host 和 Base64 主机段属于 HTTP(S) 节点 URI，不能改成订阅。
    if (!/^(?:[a-z0-9-]+(?:\.[a-z0-9-]+)+|\[[a-f0-9:.]+\])(?::\d{1,5})?$/i.test(parts[1])) { return "" }
    var path = parts[2] || "", query = parts[3] || ""
    var subscriptionPath = /(?:^|\/)(?:sub|subscribe|subscription|link)(?:[/.]|$)/i.test(path)
    var resourceFile = /\.(?:txt|list|yaml|yml|conf|json|snippet)$/i.test(path)
    var tokenPath = path.split("/").some(function (part) { return /^[a-z0-9_-]{16,}$/i.test(part) && /[a-z]/i.test(part) && /\d/.test(part) })
    var subscriptionQuery = /[?&](?:token|access_token|subscription|subscribe|sub|target)=[^&#]+/i.test(query) || /[?&](?:type|flag|format)=(?:quanx|quantumultx?|clash|surge|v2ray|sing-?box)(?:&|$)/i.test(query)
    return wrapped || subscriptionPath || resourceFile || tokenPath || subscriptionQuery ? url : ""
}

// 单条 HTTP(S) 代理 URI 可交由 QuanX 直接导入。
function IsDirectHttpProxy(content) {
  var url = /^https?:\/\/([^/?#\s]+)\/?(?:\?[^#\s]*)?(?:#[^\r\n]*)?$/i.exec(content.trim())
  if (!url) return false
  var authority = url[1]
  var credentials = /^[^@:]+:[^@]+@/.exec(authority)
  var endpoint = credentials ? authority.slice(credentials[0].length) : authority
  if (!credentials && /^[a-z0-9+_=-]+$/i.test(endpoint)) endpoint = Base64.decode(endpoint, true)
  var address = /^(?:[a-z0-9]+(?:[.-][a-z0-9]+)*|\[[a-f0-9:.]+\])(?::(\d{1,5}))?$/i.exec(endpoint)
  return !!address && (address[1] ? Number(address[1]) > 0 && Number(address[1]) <= 65535 : !!credentials)
}

function Type_Check(subs) {
    // 判型使用正文副本；content0 保留原始说明供逐条转换。
    if (typeQ != "server" && typeQ != "uri" && subs.indexOf("{#") != -1) { subs = subs.split("\n").map(RuleNoteBody).join("\n") }
    var type = "unknown"
    var RuleK = ["host,", "-suffix,", "domain,", "domain-regex,", "-keyword,", "ip-cidr,", "ip-cidr6,",  "geoip,", "user-agent,", "ip6-cidr,", "ip-asn", "and,", "or,", "not,"];
    var DomainK = ["domain-set,"]
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http=", "socks5=", "vless=","anytls=","wireguard=","tuic="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=custom,", "=https,", "=shadowsocks", "=shadowsocksr", "=sock5", "=sock5-tls","=anytls","=wireguard,","=tuic,"];
    var ClashK = ["proxies:","\"proxies\":"]
    var RewriteK = [" url 302", " url 307", " url reject", " url script", " url req", " url res", " url echo", " url-and-header 302", " url-and-header 307", " url-and-header reject", " url-and-header script", " url-and-header req", " url-and-header res", " url-and-header echo", " url jsonjq"] // quantumult X 类型 rewrite
    var JsonJQK = [" response-body-json-jq ", " request-body-json-jq ", " response-body-json-del ", " response-body-json-replace ", " http-response-jq ", " http-request-jq "] // 需要转换成 QuanX jsonjq 的 rewrite
    // 新协议 URI 与旧节点共用订阅入口，逐条检查 build。
    var SubK2 = ["ss://", "vmess://", "ssr://", "trojan://", "ssd://", "\nhttps://", "\nhttp://","socks://","ssocks://","vless://","anytls://","hysteria://","wireguard://","wg://","tuic://","hysteria2://","hy2://","mieru://","mierus://"];
    var ModuleK = ["[Script]", "[Rule]", "[URL Rewrite]", "[Body Rewrite]", "[Map Local]", "\nhttp-r", "script-path"]
    var QXProfile = ["[filter_local]","[filter_remote]","[server_local]","[server_remote]"]
    var html = "DOCTYPE html"
    var subi = subs.replace(/ /g, "")
    const RuleCheck = (item) => subi.toLowerCase().indexOf(item) != -1;
    const NodeCheck = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1;
    const NodeCheck2 = (item) => subi.toLowerCase().indexOf(item.toLowerCase()) != -1; //URI 类型
    const RewriteCheck = (item) => subs.indexOf(item) != -1 ; // quanx 重写判定
    const JsonJQCheck = (item) => (" " + subs.toLowerCase().replace(/\s+/g," ") + " ").indexOf(item) != -1;
    const ProfileCheck = (item) => subs.indexOf(item) != -1; //是否为quanx配置文件
    var subsn = subs.split("\n")
    var allowNodeExtensions = ["server", "uri", "unsupported"].indexOf(String(typeQ).toLowerCase()) != -1
    var extendedClash = ExtendedClashSnippet(subs)
    var extendedLines = subsn.some(ExtendedNodeLine)
    var decodedSubscription
    var encodedPayload
    if (IsHTML(subs)) {
      type = "web";
    } else if (extendedClash || ClashK.some(NodeCheck) || typeU == "clash"){ // Clash 类型节点转换
      type = (extendedClash && allowNodeExtensions || typeQ == "unsupported" || typeQ =="server")? "Clash":"wrong-field";
      typec = "server"
      if (type == "Clash") {
        try { content0 = Clash2QX(extendedClash || subs, subs, preparedNodeSources) }
        catch (err) {
          nodeIssues.push("无法读取 Clash 的 proxies 列表，请检查源配置。")
          throw err
        }
      }
    } else if ( (((ModuleK.some(RewriteCheck) || subsn.some(IsMapLocalInline) || Pdst === "rewrite") && (Pdst !== "filter") && subs.indexOf("[Proxy]") == -1) || typeU == "module") && typeU != "nodes" && typeU != "rule" && typeQ !="filter") { // Surge 类型 module /rule-set(含url-regex) 类型
      typec="rewrite"
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "sgmodule" : "wrong-field"
    } else if ((/(^hostname|\nhostname)\s*\=/.test(subi) || RewriteK.some(RewriteCheck) || JsonJQK.some(JsonJQCheck))  && Pdst !== "filter" && subi.indexOf("securehostname") == -1 && !/module|nodes|rule/.test(typeU) && !(RuleK.some(RuleCheck) && typeQ == "filter") && !(typeQ!= "rewrite" && QXProfile.some(ProfileCheck))) {
      // 2022-07-20 remove constrain && !/\[(Proxy|filter_local)\]/.test(subs)
      typec = "rewrite"
      type = (typeQ == "unsupported" || typeQ =="rewrite")? "rewrite":"wrong-field" //Quantumult X 类型 rewrite/ Surge Script/
    } else if (((RuleK.some(RuleCheck) && subs.indexOf(html) == -1 ) || (typeQ == "filter" && subsn.some(function (row) { return /^[a-z][\w-]*\s*,/i.test(row.trim()) })) || typeU == "rule" || Pdst === "filter") && typeU != "nodes" && !(allowNodeExtensions && extendedLines) && !(typeQ == "server" && (QuanXK.some(NodeCheck) || SurgeK.some(NodeCheck))) ) {
      // rule/filter类型
      // 2022-07-20 remove constrain && !/\[(Proxy|server_local)\]/.test(subs) adter html
      typec = "filter"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
    } else if (typeU == "domain-set") {// 仅限用户指定为 domain-set；((DomainK.some(RuleCheck) || typeU == "domain-set") && subs.indexOf("[Proxy]") == -1 && typeU != "nodes") {
      typec = "filter-domain-set"
      type = (typeQ == "unsupported" || typeQ =="filter")? "Rule":"wrong-field";
      if (type == "Rule") content0 = Domain2Rule(content0)
    } else if (subsn.length >= 1 && SubK2.some(NodeCheck2) && !/\[(Proxy|filter_local)\]/.test(subs)) { //未b64加密的多行URI 组合订阅
      typec = "server-uri"
      type= (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri") ? "Subs":"wrong-field"
    } else if ((subi.indexOf("tag=") != -1 && QuanXK.some(NodeCheck) && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU =="list") {
      typec = "server-quanx"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Subs":"wrong-field" // QuanX list
    } else if (subs.indexOf("[Proxy]") != -1 && typeU != "nodes") {
      typec= "server-surge"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Surge":"wrong-field"; // Surge Profiles
      if (type == "Surge") content0 = Surge2QX(content0, preparedNodeSources).join("\n");
    } else if (extendedLines || subsn.some(IsLoonNode)) {
      typec = "server"
      type = allowNodeExtensions ? "Subs" : "wrong-field"
    } else if ((SurgeK.some(NodeCheck)  && !/\[(Proxy|filter_local)\]/.test(subs)) || typeU == "list") {
      typec="server-surge"
      type = (typeQ == "unsupported" || typeQ =="server" || typeQ =="uri")? "Subs":"wrong-field" // Surge proxy list
    } else if (subs.indexOf("[server_local]") != -1 && QuanXK.some(NodeCheck)) {
      //type = "QuanX"  // QuanX Profile
      typec="server-quanx"
      type = (typeQ == "unsupported" || typeQ =="server"|| typeQ =="uri")? "Subs":"wrong-field"
    } else if (/^\s*[\[{]/.test(subs) && /"server_port"\s*:|"servers"\s*:\s*\[/.test(subs)) {
      typec = "server-sip008"
      type = (typeQ == "unsupported" || typeQ == "server") ? "Subs" : "wrong-field"
      if (type == "Subs") content0 = SIP2QuanX(content0, preparedNodeSources)
    } else if ((encodedPayload = NodeSubscriptionPayload(subs)) &&
        (decodedSubscription = DecodeNodeSubscription(encodedPayload))) {
      typec = "server-b64"
      type = allowNodeExtensions ? "Subs" : "wrong-field"
      if (type == "Subs") content0 = decodedSubscription
    } else if (typeU == "nodes" && typeQ == "server") {
      type = "Subs"
    } else if (typeQ == "filter") {
      typec = subs.indexOf("payload:") == -1 ? "filter-list" : "Clash-Provider"
      type = "Rule"
      if (typec == "filter-list") content0 = content0.split("\n").map(rule_list_handle).join("\n")
    } else if (QXProfile.every(ProfileCheck)) {
      typec = "profile"
      type = "profile"  //默认配置类型
    } else if (/\.[cm]?js$/i.test(link0.split(/[?#]/)[0])) {
      type = "JS-0"
    } else if (typeQ == "server" && subs.length > 100) {
      typec = "server-b64-unknown"
      type = "Subs-B64Encode"
      content0 = encodedPayload
    } else if(subs == "wrong-link") {
      type="wrong-link"
    }
    return type
}

// 检查节点名字(重复以及空名)等QuanX 不允许的情形，以及多个空格等“不规范”方式
function TagCheck_QX(content) {
  var nodes = []
  var names = new Set()
  for (var row of content) {
    var item = row.trim()
    var tagAt = item.search(/,\s*tag=/)
    if (tagAt < 0) {
      NodeSkip(item.split("=")[0].trim(), "缺少节点名字段", false, {format: "QuanX 结果", raw: row})
      continue
    }
    var nl = item.slice(tagAt + 1).trim()
    var name = nl.slice(nl.indexOf("=") + 1)
    var head = item.slice(0, -nl.length)
    if (!name) {
      var extended = HY2LineKind(item) == "quanx" || MieruLineKind(item) == "quanx"
      var endpoint = item.split("=")[1].split(",")[0]
      var host = extended ? endpoint.replace(/:\d+$/, "") : endpoint.split(":")[0]
      name = (getnode_type(item, 3) + " | " + host).replace("shadowsocks", "ss")
      item = head + "tag=" + name
      nodeCounts.unnamed++
    }
    if (names.has(name)) {
      if (Pdel == 1) {
        nodeCounts.duplicates++
        continue
      }
      var base = name
      var index = 1
      do { name = base + NoReplace(index++) } while (names.has(name))
      item = head + "tag=" + name
      nodeCounts.renamed++
    }
    names.add(name)
    if (Pcap) item = Capitalize(item, Pcap)
    if (Pptn || Pnptn) item = Pattern(item, Pptn, Pnptn)
    if (PcheckU) item = Add_URL(item)
    nodes.push(item)
  }
  return nodes
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
  if (item.trim() != "") {
    var label = getnode_type(item, 0)
    var parts = item.split("tag=")
    return [parts[0] + "tag=", label ? "「" + label + "」" : "", parts[1]].join(" ")
  }
}

function type_suffix(item) {
  if (item.trim() != "") {
    var label = !/^\s*socks5\s*=/.test(item) && getnode_type(item, 0)
    return [item, label ? "「" + label + "」" : ""].join(" ")
  }
}

function getnode_type(item, index) {
  var type = item.split("=", 1)[0].trim().toLowerCase()
  if (type == "shadowsocks" && item.includes("ssr-protocol")) type = "shadowsocksr"
  var styles = nodeTypeStyles[type]
  return styles && styles[/^[0-7]$/.test(index) ? index : 8]
}

// 按各自的编号替换类型占位符。
function type_handle(item) {
  return item.replace(/node_type_para_prefix(\d?)/g, (token, index) => getnode_type(item, index) || token)
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
    items[i] = items[i].replace(/node_index_prefix(\d{0,1})/g,PatternN((i+1).toString(),"",ind))
  }
  }
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
function ServerRelay(nodes, policy) {
  var rules = []
  var kept = []
  for (var node of nodes) {
    var endpoint = /^([a-z][\w-]*)\s*=\s*([^,\s]+):(\d+)\s*(?=,|$)/i.exec(node)
    try {
      if (!endpoint) NodeInvalid("代理链节点缺少有效服务器地址或端口")
      var address = NodeHost(endpoint[2])
      NodePort(endpoint[3])
      if (address.startsWith("[")) rules.push("ip6-cidr," + address.slice(1, -1) + "/128," + policy)
      else if (IsIPv4(address)) rules.push("ip-cidr," + address + "/32," + policy)
      else rules.push("host-suffix," + address + "," + policy)
      kept.push(node)
    } catch (err) {
      NodeSkip(endpoint ? endpoint[1] : node.split("=")[0], err.nodeReason || "代理链节点地址无效", false, {format: "QuanX 结果", raw: node})
    }
  }
  return {rules: rules.join("\n"), nodes: kept}
}

// 用于某些奇葩用户不使用 raw 链接的问题
function rawtest(cnt) {
  var Preg0 = RegExp(".*js-file-line\".*?\<\/td\>", "i")
  if (Preg0.test(cnt)) {
    return cnt.replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g,"$2").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim()
  }
}

function ToRaw(cnt) {
  var raw = cnt.split("\n").map(rawtest).filter(Boolean).join("\n")
  var step = "请使用 GitHub 原始文件（Raw）链接。"
  nodeIssues.push(step)
  return raw || cnt
}

function CDN(cnt) {
  cnt = cnt.map(item => RuleNoteMap(item, body => body.replace(/https:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/(.*)/gmi,"https://fastly.jsdelivr.net/gh/$1/$2@$3"))).join("\n")
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
function SHA256_Handle(cnt, pcsha256, ppsha256) {
  if (!HasTLSTransport(cnt) && !/^(?:trojan|anytls)\s*=/i.test(cnt)) return cnt
  var certPin = QXNodeField(cnt, "tls-cert-sha256")
  var keyPin = QXNodeField(cnt, "tls-pubkey-sha256")
  var certOverride = pcsha256 && NodePin(decodeURIComponent(pcsha256))
  var keyOverride = ppsha256 && NodePin(decodeURIComponent(ppsha256))
  if ((certPin && certOverride && NodePin(certPin) != certOverride) ||
      (keyPin && keyOverride && NodePin(keyPin) != keyOverride) ||
      (certPin && !keyPin && keyOverride)) NodeInvalid("资源参数与来源指纹冲突")
  var fields = [
    !certPin && certOverride ? "tls-cert-sha256=" + certOverride : "",
    !keyPin && keyOverride ? "tls-pubkey-sha256=" + keyOverride : ""
  ].filter(Boolean)
  return fields.length ? cnt.replace(/,\s*tag\s*=/, ", " + fields.join(", ") + ", tag=") : cnt
}

// 指定alpn参数,over-tls类型？
function ALPN_Handle(cnt,palpn) {
  cnti = cnt.replace(/\s/gmi,"") //删掉空格
  if (cnti.indexOf("obfs=over-tls") != -1 || cnti.indexOf("over-tls=true")!=-1) {
    cnt = cnt + ", tls-alpn="+palpn
  }
  return cnt
}

// Map Local 修复说明 ⟦2026-09-16 11:05 +08⟧
// 正文效果优先：空白正文用 reject-200，空 JSON 用内置响应，其余安全文本用 response-body。
// 正文替换会访问上游，不保证原状态码/响应头，空响应不执行；不附加行尾注释。
// 不创建文件或辅助脚本；非 200、额外响应头及无法安全表达的替换文本仍跳过。
// ⟦2026-09-16 11:17 +08⟧ 仅通知未转换的原始条目及逐条原因，成功转换不再通知。
// 模块修复说明 ⟦2026-09-16 11:55 +08⟧：tiny-gif 用内置 reject-img，不依赖本地文件。
function IsMapLocalInline(row) {
    var text = row.trim()
    return !/^(?:#|;|\/\/)/.test(text) && /^(?:"[^"]+"|\S+)\s+(?:data(?:-type)?|status-code|header)\s*=/i.test(text) && /\sdata-type\s*=\s*(?:"(?:text|tiny-gif)"|'(?:text|tiny-gif)'|text|tiny-gif)(?=\s|$)/i.test(text)
}

function MapLocalInline2QX(row, ignored) {
    function skip(reason) {
        if (ignored) { ignored.push({ rule: row, reason: reason }) }
        return ""
    }
    var rule = row.match(/^("[^"]+"|\S+)(\s+[\s\S]+)$/)
    if (!rule) { return skip("无法识别 URL 匹配表达式或参数部分") }
    var rest = rule[2], options = Object.create(null)
    while (rest.trim()) {
        var field = rest.match(/^\s+(data-type|data|status-code|header)\s*=\s*/i)
        if (!field) { return skip("含未知参数、行尾注释或参数格式错误") }
        var key = field[1].toLowerCase()
        if (options[key] !== undefined) { return skip("参数 " + key + " 重复") }
        rest = rest.slice(field[0].length)
        var quote = rest[0], end = 0, value = ""
        if (quote === '"' || quote === "'") {
            // data="{"no":0}" 的内层引号不结束字段，只在参数边界处结束正文。
            for (end = 1; end < rest.length; end++) {
                if (rest[end] === "\\") { end++; continue }
                if (rest[end] !== quote) { continue }
                if (key !== "data" || /^\s*$|^\s+(?:[a-z][\w-]*\s*=|#|;|\/\/)/i.test(rest.slice(end + 1))) { break }
            }
            if (end >= rest.length) { return skip("参数 " + key + " 的引号未闭合或边界无法识别") }
            value = rest.slice(1, end)
            end++
        } else {
            var token = rest.match(/^[^\s"'\\]+/)
            if (!token) { return skip("参数 " + key + " 缺少有效值") }
            value = token[0]
            end = value.length
        }
        options[key] = value
        rest = rest.slice(end)
        if (rest && !/^\s/.test(rest)) { return skip("参数之间缺少空白分隔") }
    }
    var tinyGif = /^tiny-gif$/i.test(options["data-type"] || "")
    if (!tinyGif && !/^text$/i.test(options["data-type"] || "")) { return skip("data-type 不是 text 或 tiny-gif，无法按内置正文转换") }
    if (!tinyGif && options.data === undefined) { return skip("缺少 data 正文参数") }
    var status = options["status-code"] === undefined ? "200" : options["status-code"]
    if (status !== "200") {
        return skip(/^\d{3}$/.test(status) ? "指定状态码为 " + status + "，当前转换仅支持 200" : "状态码格式无效")
    }
    if (options.header !== undefined && !/^Content-Type\s*:\s*[\w.+-]+\/[\w.+-]+(?:\s*;\s*charset\s*=\s*[\w-]+)?\s*$/i.test(options.header)) { return skip("含额外响应头或无法识别的 Content-Type 参数") }
    if (tinyGif) {
        if (options.data !== undefined || (options.header !== undefined && !/^Content-Type\s*:\s*image\/gif\s*$/i.test(options.header))) { return skip("tiny-gif 含自定义正文或非 image/gif 响应头，无法用 reject-img 保留") }
        return rule[1] + " url reject-img"
    }
    var action = "", simpleJSON = options.header === undefined || /^Content-Type\s*:\s*application\/json(?:\s*;\s*charset\s*=\s*[\w-]+)?\s*$/i.test(options.header)
    if (/^[ \t]*$/.test(options.data)) {
        action = "reject-200"
    } else if (simpleJSON) {
        try {
            var body = JSON.parse(options.data)
            if (body && typeof body === "object" && Object.keys(body).length === 0) { action = Array.isArray(body) ? "reject-array" : "reject-dict" }
        } catch (err) { /* 非 JSON 文本继续尝试原生正文替换。 */ }
    }
    if (action) { return rule[1] + " url " + action }
    // 不猜测 QX 对替换模板的转义规则，避免 $ 分组引用、反斜线、控制符或分隔符改变正文。
    if (/[\\$\x00-\x1f\x7f\u2028\u2029]/.test(options.data)) { return skip("正文含 $、反斜线或控制字符，无法保证原样替换") }
    if (options.data !== options.data.trim()) { return skip("非空正文的首尾空白无法保证保留") }
    if (/\s(?:response-body|url-and-header)\s/.test(options.data)) { return skip("正文含重写分隔符，可能被 QX 当作规则语法") }
    return rule[1] + " url response-body ^[\\s\\S]+$ response-body " + options.data
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

/*
JSON-JQ rewrite 转换说明 ⟦2026-07-07 20:24:29 +08⟧
----------------------------------------------------------
仅改动 resource-parser-r.js。
新增/扩展以下输入语法转换：
  - pattern response-body-json-jq 'jq expression'      -> pattern url jsonjq-response-body 'jq expression'
  - pattern request-body-json-jq 'jq expression'       -> pattern url jsonjq-request-body 'jq expression'
  - pattern response-body-json-del paths               -> pattern url jsonjq-response-body 'del(...)' / 'delpaths(...)'
  - pattern response-body-json-replace path value, ... -> pattern url jsonjq-response-body 'if ... then setpath(...) else . end'
----------------------------------------------------------
*/
function IsJsonJQRewrite(row) {
  return /^\s*(?:http-(?:request|response)-jq(?:\s|$)|(?:"[^"]+"|'[^']+'|\S+)\s+(?:response-body-json-jq|request-body-json-jq|response-body-json-del|response-body-json-replace)(?:\s|$))/i.test(row);
}

function JsonJQRewrite2QX(row) {
  function stripOuterJQQuotes(str) {
    str = typeof str == "undefined" || str === null ? "" : String(str).trim();
    if (str.length > 1 && ((str[0] == "'" && str[str.length - 1] == "'") || (str[0] == "\"" && str[str.length - 1] == "\""))) {
      return str.slice(1, -1);
    }
    return str;
  }

  function quoteJQExpression(str) {
    return "'" + str.replace(/'/g, "\\'") + "'";
  }

  function normalizeJsonPattern(pattern) {
    pattern = stripOuterJQQuotes(pattern);
    if (/^\^?https?\??/i.test(pattern)) {
      return pattern;
    }
    return pattern;
  }

  function splitTopLevel(str, delimiter) {
    var parts = [];
    var buf = "";
    var quote = "";
    var escaped = false;
    var depth = 0;
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (quote) {
        buf += ch;
        if (quote == "\"" && ch == "\\" && !escaped) {
          escaped = true;
          continue;
        }
        if (quote == "'" && ch == "'" && str[i + 1] == "'") {
          buf += str[++i];
          continue;
        }
        if (ch == quote && !escaped) {
          quote = "";
        }
        escaped = false;
      } else if (ch == "\"" || ch == "'") {
        quote = ch;
        buf += ch;
      } else if (ch == "[" || ch == "{" || ch == "(") {
        depth++;
        buf += ch;
      } else if (ch == "]" || ch == "}" || ch == ")") {
        depth--;
        buf += ch;
      } else if (ch == delimiter && depth == 0) {
        if (buf.trim() != "") {
          parts.push(buf.trim());
        }
        buf = "";
      } else {
        buf += ch;
      }
    }
    if (buf.trim() != "") {
      parts.push(buf.trim());
    }
    return parts;
  }

  function splitTopLevelCommaOrSemi(str) {
    var commaParts = splitTopLevel(str, ",");
    if (commaParts.length > 1) {
      return commaParts;
    }
    return splitTopLevel(str, ";");
  }

  function splitTopLevelWhitespace(str) {
    var parts = [];
    var buf = "";
    var quote = "";
    var escaped = false;
    var depth = 0;
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (quote) {
        buf += ch;
        if (quote == "\"" && ch == "\\" && !escaped) {
          escaped = true;
          continue;
        }
        if (ch == quote && !escaped) {
          quote = "";
        }
        escaped = false;
      } else if (ch == "\"" || ch == "'") {
        quote = ch;
        buf += ch;
      } else if (ch == "[" || ch == "{" || ch == "(") {
        depth++;
        buf += ch;
      } else if (ch == "]" || ch == "}" || ch == ")") {
        depth--;
        buf += ch;
      } else if (/\s/.test(ch) && depth == 0) {
        if (buf.trim() != "") {
          parts.push(buf.trim());
        }
        buf = "";
      } else {
        buf += ch;
      }
    }
    if (buf.trim() != "") {
      parts.push(buf.trim());
    }
    return parts;
  }

  function findTopLevelOperator(str, ops) {
    var quote = "";
    var escaped = false;
    var depth = 0;
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (quote) {
        if (quote == "\"" && ch == "\\" && !escaped) {
          escaped = true;
          continue;
        }
        if (ch == quote && !escaped) {
          quote = "";
        }
        escaped = false;
      } else if (ch == "\"" || ch == "'") {
        quote = ch;
      } else if (ch == "[" || ch == "{" || ch == "(") {
        depth++;
      } else if (ch == "]" || ch == "}" || ch == ")") {
        depth--;
      } else if (depth == 0) {
        for (var j = 0; j < ops.length; j++) {
          if (str.slice(i, i + ops[j].length) == ops[j]) {
            return { index: i, op: ops[j] };
          }
        }
      }
    }
    return null;
  }

  function normalizeJsonPath(path) {
    path = stripOuterJQQuotes(path);
    if (path.indexOf("$.") == 0) {
      return "." + path.slice(2);
    }
    if (path[0] != "." && path[0] != "[" && path.indexOf("getpath(") != 0) {
      return "." + path;
    }
    return path;
  }

  function pathToSegments(path) {
    path = stripOuterJQQuotes(path);
    if (path.indexOf("$.") == 0) {
      path = path.slice(2);
    } else if (path[0] == "$") {
      path = path.slice(1);
    }
    if (/^\[[\s\S]*\]$/.test(path)) {
      try {
        var arr = JSON.parse(path);
        return Array.isArray(arr) ? arr : null;
      } catch (err) {
        return null;
      }
    }
    path = path.replace(/\[['"]([^'"]+)['"]\]/g, ".$1").replace(/\[(\d+)\]/g, ".$1");
    if (path[0] == ".") {
      path = path.slice(1);
    }
    if (!/^[^.\s]+(\.[^.\s]+)*$/.test(path)) {
      return null;
    }
    return path.split(".").map(function(part) {
      return /^\d+$/.test(part) ? Number(part) : part;
    });
  }

  function canUseDirectJQPath(path) {
    return /^\.[A-Za-z_][A-Za-z0-9_]*(\.[A-Za-z_][A-Za-z0-9_]*)*$/.test(path);
  }

  function jqValueLiteral(value) {
    value = stripOuterJQQuotes(value);
    if (value == "") {
      return "null";
    }
    if (/^(true|false|null)$/i.test(value) || /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(value)) {
      return value.toLowerCase();
    }
    if (/^["\[{]/.test(value) || /^(if\s|\.|getpath\(|setpath\(|del\(|delpaths\()/.test(value)) {
      return value;
    }
    return JSON.stringify(value);
  }

  function buildDelJQ(payload) {
    payload = stripOuterJQQuotes(payload);
    if (/^(del|delpaths)\s*\(/.test(payload)) {
      return payload;
    }
    if (/^\[\s*\[/.test(payload)) {
      return "delpaths(" + payload + ")";
    }
    var paths = splitTopLevelCommaOrSemi(payload);
    if (paths.length == 1) {
      var ws = splitTopLevelWhitespace(payload);
      if (ws.length > 1) {
        paths = ws;
      }
    }
    paths = paths.map(function(path) {
      return normalizeJsonPath(path);
    }).filter(Boolean);
    if (paths.length == 0) {
      return "";
    }
    if (paths.every(canUseDirectJQPath)) {
      return "del(" + paths.join(", ") + ")";
    }
    var segments = paths.map(pathToSegments);
    if (segments.every(function(item) { return Array.isArray(item) })) {
      return "delpaths(" + JSON.stringify(segments) + ")";
    }
    return "del(" + paths.join(", ") + ")";
  }

  function parseReplacePair(item) {
    var found = findTopLevelOperator(item, ["=>", "="]);
    if (found) {
      return {
        path: item.slice(0, found.index).trim(),
        value: item.slice(found.index + found.op.length).trim()
      };
    }
    var parts = splitTopLevelWhitespace(item);
    if (parts.length >= 2) {
      return {
        path: parts[0],
        value: parts.slice(1).join(" ")
      };
    }
    return null;
  }

  function buildSafeSetpath(path, value) {
    var segments = pathToSegments(path);
    var literal = jqValueLiteral(value);
    if (!segments || segments.length == 0) {
      return normalizeJsonPath(path) + " = " + literal;
    }
    var parent = segments.slice(0, -1);
    var key = segments[segments.length - 1];
    var typeCheck = typeof key == "number" ? "type == \"array\" and has(" + key + ")" : "type == \"object\" and has(" + JSON.stringify(key) + ")";
    return "if (getpath(" + JSON.stringify(parent) + ")? | " + typeCheck + ") then setpath(" + JSON.stringify(segments) + "; " + literal + ") else . end";
  }

  function buildReplaceJQ(payload) {
    payload = stripOuterJQQuotes(payload);
    if (/^(if\s|setpath\(|getpath\(|reduce\s|map\(|walk\()/.test(payload)) {
      return payload;
    }
    try {
      var obj = JSON.parse(payload);
      if (obj && typeof obj == "object" && !Array.isArray(obj)) {
        return Object.keys(obj).map(function(key) {
          return buildSafeSetpath(key, JSON.stringify(obj[key]));
        }).join(" | ");
      }
    } catch (err) {}
    var items = splitTopLevelCommaOrSemi(payload);
    var expressions = [];
    for (var i = 0; i < items.length; i++) {
      var pair = parseReplacePair(items[i]);
      if (pair) {
        expressions.push(buildSafeSetpath(pair.path, pair.value));
      }
    }
    return expressions.join(" | ");
  }

  // ⟦2026-09-16 11:55 +08⟧ Surge 动作在 URL 前，保留 jq 正文中的空格、引号和运算顺序。
  var surge = row.match(/^\s*http-(request|response)-jq\s+(\"[^\"]+\"|'[^']+'|\S+)\s+([\s\S]+?)\s*$/i);
  if (surge) {
    var surgePattern = normalizeJsonPattern(surge[2]);
    if (/^http-(?:request|response)(?:-jq)?$/i.test(surgePattern) || /\s|^["']/.test(surgePattern)) { return "" }
    var expression = surge[3].trim();
    if ((expression[0] == "'" || expression[0] == '"') && expression.slice(-1) != expression[0]) { return "" }
    row = surge[2] + " " + surge[1].toLowerCase() + "-body-json-jq " + expression;
  }
  var matched = row.match(/^\s*(\"[^\"]+\"|'[^']+'|\S+)\s+(response-body-json-jq|request-body-json-jq|response-body-json-del|response-body-json-replace)\s+([\s\S]+?)\s*$/i);
  if (!matched) { return "" }
  var pattern = normalizeJsonPattern(matched[1]);
  var action = matched[2].toLowerCase();
  var body = matched[3].trim();
  var type = action == "request-body-json-jq" ? "jsonjq-request-body" : "jsonjq-response-body";
  var jq = "";
  if (action == "response-body-json-del") {
    jq = buildDelJQ(body);
  } else if (action == "response-body-json-replace") {
    jq = buildReplaceJQ(body);
  } else {
    jq = stripOuterJQQuotes(body);
  }
  return jq ? pattern + " url " + type + " " + quoteJQExpression(jq) : "";
}

//script&rewrite 转换成 Quantumult X
function SCP2QX(subs, failures, position) {
  var nrw = []
  var rw = ""
  var RewriteK = [" url 302", " url 307", " url reject", " url script", " url req", " url res", " url echo", " url-and-header 302", " url-and-header 307", " url-and-header reject", " url-and-header script", " url-and-header req", " url-and-header res", " url-and-header echo", " url jsonjq"] // quantumult X 类型 rewrite
  var rawSubs = subs.split("\n").map(x => x.trim())
  subs = rawSubs.map(x => x.replace(/\s+/g," "))
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
        if (IsJsonJQRewrite(rawSubs[i])) {
          rw = JsonJQRewrite2QX(rawSubs[i])
          if (rw != "") {
            nrw.push(rw)
          }
        } else if (SC.every(sccheck)) { // surge js 新格式
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
      failures.push({rule: rawSubs[i], reason: "无法读取重写字段", position})
    }
  }
  return nrw
}

// 如果 URL-Regex 跟 rewrite/script 都需要
function SGMD2QX(subs, failures, position) {
    var nrw0 = URX2QX(subs)
    var nrw1 = SCP2QX(subs, failures, position)
    var nrwt = [...nrw0, ...nrw1]
    return nrwt
}

//Rewrite过滤，使用+连接多个关键词(逻辑"或"):in 为保留，out 为排除
function Rewrite_Filter(subs, Pin, Pout, report) {
    var Nlist = [];
    var noteK = ["//", "#", ";"];
    var hnc = 0;
    var dwrite = []
    var hostname = ""
    //$notify("S0","Content",subs)
    for (var i = 0; i < subs.length; i++) {
        var noteParts = RuleNoteSplit(subs[i].trim());
        subi = noteParts.body;
        var subii = subi.replace(/ /g, "")
        if (subi != "" && (subi.indexOf(" url ")!=-1 || subi.indexOf("host")!=-1 || /^(?:ip-cidr|ip6-cidr|geoip|ip-asn|user-agent)\s*,/i.test(subi) || subi.indexOf(" url-and-header ")!=-1 || /^hostname\=/.test(subii))) {
            const notecheck = (item) => subi.indexOf(item) == 0
            if (noteK.some(notecheck)) { // 注释项跳过 
                continue;
            } else if (hnc == 0 && subii.indexOf("hostname=") == 0) { //hostname 部分
                hostname = (Phin0 || Phout0 || Preg || Pregout) ? HostNamecheck(subi, Phin0, Phout0, report) : subi;//hostname 部分
            } else if (subii.indexOf("hostname=") != 0) { //rewrite 部分
                var inflag = Rcheck(subi, Pin);
                var outflag = Rcheck(subi, Pout);
                if (outflag == 1 || inflag == 0) {
                    dwrite.push(RuleNoteJoin(noteParts.note, /^[a-z][\w-]*\s*,/i.test(subi) ? "-" + subi : subi.replace(" url "," - ").replace(" url-and-header "," - "))); // 混合分流也需禁用，hide=0 不能恢复为有效规则
                } else if (outflag == 0 && inflag != 0) { //out 未命中 && in 未排除
                    Nlist.push(RuleNoteJoin(noteParts.note, subi));
                } else if (outflag == 2 && inflag != 0) { //无 out 参数 && in 未排除
                    Nlist.push(RuleNoteJoin(noteParts.note, subi));
                }
            }
        }
    }

    var beforeRegex = Nlist.length
    Nlist = FilterRuleRegex(Nlist)
    report.filtered += dwrite.length + beforeRegex - Nlist.length
    if (hostname != "") Nlist.push(hostname)
    return Phide == 1 ? Nlist : [...dwrite, ...Nlist]
}

// 主机名处理
function HostNamecheck(content, parain, paraout, report) {
    var names = content.replace(/ /g, "").split("=")[1].split(",");
    var hasExclude = paraout && paraout != "";
    var kept = names.filter(host => (!hasExclude || !paraout.some(term => host.includes(term))) &&
        (!parain || parain.some(term => host.includes(term))));
    kept = FilterRuleRegex(kept);
    report.hostnameFiltered = names.filter(Boolean).length - kept.filter(Boolean).length;
    report.hostnameEmpty = report.hostnameFiltered > 0 && !kept.some(Boolean);
    return "hostname=" + kept.join(", ");
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
function Rule_Handle(subs, Pout, Pin, report) {
  var active = []
  var disabled = []
  var hasExclude = Pout && Pout != ""
  for (var i = 0; i < subs.length; i++) {
    var row = subs[i].replace(/^\s*-\s/g, "").trim()
    var original = RuleNoteBody(row)
    if (!original || /^(?:\/\/|#|;|\[|\^)/.test(original)) continue
    var converted = Rule_Policy(row, report.failures, i + 1)
    if (!converted) continue
    var excluded = hasExclude && Pout.some(term => original.includes(term))
    var included = !Pin || Pin.some(term => RuleNoteBody(converted).includes(term))
    if (excluded || !included) {
      report.filtered++
      // 同时使用 in/out 时，仅保留 out 对应的禁用规则。
      if (excluded || !hasExclude) disabled.push(RuleNoteMap(converted, body => "-" + body))
    } else {
      active.push(converted)
    }
  }
  var nlist = Phide == 1 ? active : [...disabled, ...active]
  nlist = Pfcr == 1? nlist.filter(Boolean).map(item => item+", force-cellular") : nlist.filter(Boolean)
  nlist = Pfcr == 2? nlist.filter(Boolean).map(item => item+", multi-interface") : nlist.filter(Boolean)
  nlist = Pfcr == 3? nlist.filter(Boolean).map(item => item+", multi-interface-balance") : nlist.filter(Boolean)

  if (Pvia!="") {
    nlist = Pvia ==0? nlist.filter(Boolean).map(item => item+", via-interface=%TUN%") : nlist.filter(Boolean).map(item => item+", via-interface="+Pvia)
  }

  nlist=nlist.map(item=>RuleNoteMap(item, body => body.replace(/:\d*\s*,/g,",").replace(/(\'|\")/g,"").replace(/(\-suffix|\-SUFFIX)\s*\,\s*\./g,"$1, "))) // 清理规则正文，不修改说明里的引号、端口等文字
  return nlist
}

function Rule_Policy(content, ignored, position) { //增加、替换 policy
    var noteParts = RuleNoteSplit(content);
    if (noteParts.note) {
        var failureStart = Array.isArray(ignored) ? ignored.length : 0;
        var converted = Rule_Policy(noteParts.body, ignored, position);
        if (Array.isArray(ignored)) {
            for (var n = failureStart; n < ignored.length; n++) { ignored[n].rule = RuleNoteJoin(noteParts.note, ignored[n].rule) }
        }
        return RuleNoteJoin(noteParts.note, converted);
    }
    function skip(reason) {
        if (Array.isArray(ignored) && /^[a-z][\w-]*\s*,/i.test(content.trim())) { ignored.push({rule: content, reason: reason, position}) }
        return "";
    }
    if (/^(?:AND|OR|NOT)\s*,/i.test(content.trim())) { return skip("逻辑组合规则无法直接转换，拆开会改变匹配条件") }
    if (/^URL-REGEX\s*,/i.test(content.trim())) { return skip("URL-REGEX 需要作为重写资源导入，不是 Quantumult X 分流语法") }
    var cnt = content.replace(/^\s*\-\s/g,"").replace(/REJECT-TINYGIF/gi,"reject").replace(/REJECT-DROP/gi,"reject").trim().split("//")[0].trim().split(",");
    // ⟦2026-09-16 11:55 +08⟧ 已知 Surge 附加标记按字段移除，不再依赖位置；保留主匹配条件和策略。
    // QX 不复现 Surge 的预匹配阶段或扩展匹配机制，未知参数不擅自删除。
    cnt = cnt.map(function (part) { return part.trim() });
    if (/^(?:domain(?:-suffix|-keyword|-wildcard|-regex)?|host(?:-suffix|-keyword|-wildcard)?|ip-cidr6?|ip6-cidr|ip-asn|geoip|user-agent)$/i.test(cnt[0])) {
        cnt = cnt.slice(0, 2).concat(cnt.slice(2).filter(function (part) { return !/^(?:no-resolve|pre-matching|extended-matching)$/i.test(part) }));
        if (cnt[1]) { cnt[1] = cnt[1].replace(/^(["'])([\s\S]*)\1$/, "$2") }
    }
    // DOMAIN-REGEX 修复说明 ⟦2026-09-10 11:23:07 +08⟧
    // 简单域名正则转为 host-wildcard：.* -> *、. -> ?、\. -> .，保留 ^/$ 边界；复杂语法提示跳过。
    if (/^domain-regex$/i.test(cnt[0].trim())) {
        var pattern = (cnt[1] || "").trim();
        if (!/^\^?(?:[a-z0-9_-]|\\\.|\.\*?)+\$?$/i.test(pattern)) {
            return skip("DOMAIN-REGEX 含无法转换为 host-wildcard 的复杂或无效正则")
        }
        var wildcard = pattern.replace(/^\^|\$$/g, "").replace(/\\\.|\.\*|\./g, token => token == "\\." ? "." : token == ".*" ? "*" : "?");
        cnt[0] = "host-wildcard";
        cnt[1] = ((pattern[0] == "^" ? "" : "*") + wildcard + (pattern.slice(-1) == "$" ? "" : "*")).replace(/\*+/g, "*");
    }
    var RuleK = ["//", "#", ";","[","/", "hostname","no-ipv6","no-system","<","{","}","]","^"];
    var RuleK1 = ["host", "host-suffix", "host-keyword", "host-wildcard", "domain", "domain-suffix", "domain-keyword", "domain-wildcard", "ip-cidr", "ip-cidr6", "geoip", "user-agent", "ip6-cidr", "ip-asn"];
    const RuleCheck = (item) => cnt[0].trim().toLowerCase().indexOf(item) == 0; //无视注释行
    const RuleCheck1 = (item) => cnt[0].trim().toLowerCase() == item; // 类型需完整匹配，不能把未知 DOMAIN-* 输出成 HOST-*
    if (RuleK1.some(RuleCheck1) && !RuleK.some(RuleCheck) ) {
        if (!cnt[1] || (cnt.length > 2 && !cnt[2])) { return skip("分流缺少匹配内容或有效策略") }
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
            return skip("分流参数数量或附加参数无法识别，未擅自删除未知条件")
        } else { return "" }
        if (cnt[0].indexOf("URL-REGEX") != -1 || cnt[0].indexOf("PROCESS") != -1) {
            nn = ""
        } else { 
          nn = nn.replace(/^ip-cidr6/i, "ip6-cidr").replace(/^domain/i,"host")
        }
        return nn
    } else if (cnt.length == 1 && !RuleK.some(RuleCheck) && cnt[0]!="" && cnt[0].indexOf("payload:")==-1 && cnt[0].indexOf("=")==-1 && cnt[0].trim()!="https:") { // 纯域名/ip 列表
      //$notify("LIST-HANDLE")
      return rule_list_handle(cnt[0])
    } else { 
      //$notify("Nothing")
      return skip("当前解析器没有此分流类型的可靠转换") }//if RuleK1 check 
}

// 处理纯列表, 包含 clash-provider
function rule_list_handle(cnt) {
  var noteParts = RuleNoteSplit(cnt);
  if (noteParts.note) { return RuleNoteJoin(noteParts.note, rule_list_handle(noteParts.body)) }
  if (/^[ \t]*\{#/.test(cnt)) { return "" } // 未闭合说明不能误转为域名“{”。
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
        var noteParts = RuleNoteSplit(cnt[i].trim());
        cc = noteParts.body;
        const RuleCheck = (item) => cc.indexOf(item) != -1; //无视注释行
        if(!RuleK.some(RuleCheck) && cc) {
            if (cc[0] == "."){
                nlist.push(RuleNoteJoin(noteParts.note, "host-suffix, " + cc.slice(1 , cc.length)))
            } else {
                nlist.push(RuleNoteJoin(noteParts.note, "host, " + cc))
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
    if (pcnt[i].indexOf("@")!=-1){
      cnt = cnt.map(item => filter_set(item, pcnt[i]))
    }
  }
  cnt=cnt.filter(Boolean)//.join("\n")
  return cnt
}

//策略指定
function filter_set(cnt,para){
  var noteParts = RuleNoteSplit(cnt);
  if (noteParts.note) { return RuleNoteJoin(noteParts.note, filter_set(noteParts.body, para)) }
  if (cnt){
    paras=[para.split("@")[0],para.slice(para.split("@")[0].length+"@".length)]
    cnt = cnt.split(",")
    reg = RegExp(paras[0])
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
        cnt0 = cnt0.map(item => flag == 2 || flag == 3 ? RuleNoteMap(item, body => body.replace(p1, p2)) : item.replace(p1, p2));
        //$notify(p1,p2,cnt0)
    }
  //$notify("1","",cnt0)
    return cnt0//.split("\n")
}


// read parameters 2026-05-17
function param(res,org,mbody) {
  if(mbody.indexOf(org)!=-1) {
    tmp=mbody.split(org)[1].split("&")[0].split("#")[0].replace(/\s/,"")
    tmp = tmp!=""? res+"="+tmp : ""
    return tmp
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
function Subs2QX(subs, Pudp, Ptfo, Pcert0, PTls13, sources = []) {
    var list0 = subs.split("\n");
    var QuanXK = ["shadowsocks=", "trojan=", "vmess=", "http=","socks5=", "vless=", "anytls="];
    var SurgeK = ["=ss,", "=vmess,", "=trojan,", "=http,", "=https,", "=custom,", "=socks5", "=socks5-tls","=anytls","=wireguard,","=tuic,"];
    var QXlist = [];
    var convertedFormat = ["Clash", "Surge", "QuanX"].includes(type0) ? type0 : typec == "server-sip008" ? "SIP008" : ""
    var decoded = type0 == "Subs-B64Encode" || typec == "server-b64"
    for (var i = 0; i < list0.length; i++) {
        var node = ""
        var raw = list0[i].replace(/\r$/, "")
        if (decoded && (type0 == "Subs-B64Encode" || !ExtendedNodeLine(raw))) {
          list0[i] = list0[i].replace(/&gt;/g, ">").replace(/&lt;/g, "<")
        }
        var row = list0[i].trim()
        if (row.length <= 3 || /^[;\/#\[]/.test(row)) continue
        var uri = /^([a-z][\w+.-]*):\/\//i.exec(row)
        var hy2Kind = HY2LineKind(row)
        var format = uri ? "URI" : convertedFormat || (hy2Kind == "surge" ? "Surge" : "QuanX")
        var source = sources[i] || {format, raw}
        if (hy2Kind) {
          node = HY2Convert(hy2Kind, list0[i], source)
          if (node) QXlist.push(node)
          continue
        }
        var mieruKind = MieruLineKind(row)
        if (mieruKind) {
          node = MieruConvert(mieruKind, list0[i], source)
          if (node) QXlist.push(node)
          continue
        }
        if (list0[i].indexOf(" url ")==-1) {
            var type = list0[i].split("://")[0].trim()
            var sourceType = uri ? uri[1] : (list0[i].match(/^[^=]+=\s*([a-z][\w-]*)\s*,/i) || [])[1] || list0[i].split("=")[0].trim()
            var skippedBefore = PNS
            var listi = list0[i].replace(/ /g, "")
            var tag0 = list0[i].indexOf("tag=")!=-1 ? list0[i].split(/\&*(emoji|udp|tfo|cert|rename|replace)\=/)[0].split("tag=")[1] : ""
            list0[i] = (type=="ssr") ? list0[i].split(/#|,|，/)[0] : list0[i] // 2023-04-18 remove type == "vmess" ||
            const NodeCheck = (item) => listi.toLowerCase().indexOf(item) != -1;
            const NodeCheck1 = (item) => listi.toLowerCase().indexOf(item) == 0;
            try {
                if (type == "vmess" && (list0[i].indexOf("remark=") == -1 && list0[i].indexOf("remarks=") == -1) && !/(obfs|alterId|type|\@)\=/.test(list0[i])) {
                    var bnode = Base64.decode(list0[i].split("vmess://")[1])
                    if (bnode.indexOf("over-tls=") == -1) { //v2rayN
                        node = V2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13, source)
                    } else { //quantumult 类型
                        node = VQ2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13)
                    }
                  node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "vmess" && ( list0[i].indexOf("remark=") != -1 || list0[i].indexOf("remarks=") != -1 || /(obfs|alterId|type|\@)\=/.test(list0[i]))) { //shadowrocket 类型
                    node = VR2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13, source)
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "socks" && list0[i].indexOf("remarks=") != -1) { //shadowrocket socks5 类型
                    node = S5R2QX(list0[i])
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "ssocks" && list0[i].indexOf("remarks=") != -1) { //shadowrocket socks5-tls 类型
                    node = S5R2QX(list0[i],tlsp="over-tls")
                    node = tag0 != "" ? URI_TAG(node, tag0) : node
                } else if (type == "socks" && list0[i].indexOf("remarks=") == -1) { // socks URI 2026-05-25
                    node = Socks2QX(list0[i])
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
                  NodeSkip("vless", "需要 Quantumult X build 821+", true, source)
                  continue
                } else if (type == "vless" ) { // version 150 support vless 
                  node=VL2QX(list0[i], Pudp, Ptfo, Pcert0, PTls13, source)
                } else if (type == "anytls") { // 2026-04-15 tls 类型支持
                  if (version <914) {
                    NodeSkip("anytls", "需要 Quantumult X build 914+", true, source)
                    continue
                  } else {
                    node=Anytls2QX(list0[i],Pcert0)
                  }
                } else if (QuanXK.some(NodeCheck1)) { // QuanX type 
                    var native = isQuanX(list0[i], source)[0]
                    if (native) node = QX_TLS(native, Pcert0, PTls13)
                } else if (IsLoonNode(row)) { // Loon type
                    if (!uri) source.format = "Loon"
                    node = Loon2QX(list0[i], source)
                } else if (SurgeK.some(NodeCheck) ) { // Surge type, 第2为端口号
                    if (!uri) source.format = "Surge"
                    var surge = Surge2QX(list0[i], undefined, raw)[0]
                    if (surge) node = QX_TLS(surge, Pcert0, PTls13)
                } else if (/^STATUS\=/i.test(listi)) { // 订阅流量元数据
                  Rocket_flow(listi)
                  continue
                } else {
                  if (uri || /^(?:wireguard|tuic)\s*=/i.test(list0[i].trim())) {
                    NodeSkip(sourceType, unsupportedProtocolMessage, true, source)
                  }
                  continue
                }
            } catch (err) {
                if (PNS == skippedBefore) NodeSkip(sourceType, err.nodeReason || "无法读取节点字段", !!err.nodeReason, source)
                continue
            }
            if (!node || Array.isArray(node) && !node.some(Boolean)) {
                if (PNS == skippedBefore) NodeSkip(sourceType, "无法读取节点字段", false, source)
                continue
            }
            for (var candidate of Array.isArray(node) ? node : [node]) {
                if (!candidate) continue
                try {
                    if (Paead != "") candidate = AeadVmess(candidate, Paead)
                    if (Phost != "") candidate = HOST_Handle(candidate, Phost)
                    if (Pobfs != "") candidate = OBFS_Handle(candidate, Pobfs)
                    if (Psession != "") candidate = Session_Handle(candidate, Psession)
                    if (Pcsha256 || Ppsha256) candidate = SHA256_Handle(candidate, Pcsha256, Ppsha256)
                    if (Palpn != "") candidate = ALPN_Handle(candidate, Palpn)
                    candidate = TLS_Check(candidate)
                    if (Pudp != 0) candidate = XUDP(candidate, Pudp)
                    if (Ptfo != 0) candidate = XTFO(candidate, Ptfo)
                    QXlist.push(candidate)
                } catch (err) {
                    NodeSkip(sourceType, err.nodeReason || "无法处理节点参数", !!err.nodeReason, source)
                }
            }
        }
    }
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
  if (!QXNodeField(cnt, "tls-cert-sha256") && !QXNodeField(cnt, "tls-pubkey-sha256")) return cnt
  if (QXNodeField(cnt, "reality-base64-pubkey")) NodeInvalid("REALITY 和 TLS 证书指纹不能同时设置")
  var verification = QXNodeField(cnt, "tls-verification")
  if (verification && TLSCertDomainValue(verification) == "false") {
    NodeInvalid("关闭证书验证会使 SHA-256 指纹失效")
  }
  return verification === undefined ? cnt.replace(/,\s*tag\s*=/, ", tls-verification=true, tag=") : cnt
}

// 保留原生或转换后的证书设置，只有明确的资源参数才覆盖它。
function QX_TLS(cnt, Pcert0, PTls13) {
  cnt = cnt.replace(/tag\s*=/gm, "tag=")
  var sourceVerification = QXNodeField(cnt, "tls-verification")
  var override = TLSCertDomainValue(Pcert0)
  var tls13 = PTls13 == 1 ? "tls13=true, " : ""
  if (sourceVerification !== undefined) {
    var verification = override || TLSCertDomainValue(sourceVerification)
    if (!verification) NodeInvalid(version < 938 && sourceVerification.includes(".")
      ? "TLS 校验域名需要 Quantumult X build 938+" : "TLS 证书校验值无效")
    if (verification != sourceVerification) {
      cnt = cnt.replace(/(,\s*tls-verification\s*=\s*)[^,]*/i, (_, field) => field + verification)
    }
  } else if (HasTLSTransport(cnt) || override && /^(?:trojan|anytls)\s*=/i.test(cnt)) {
    var sourceHasPin = QXNodeField(cnt, "tls-cert-sha256") || QXNodeField(cnt, "tls-pubkey-sha256")
    var cert = TLSCertParam(Pcert0, sourceHasPin ? "true" : "")
    cnt = cnt.replace(/,\s*tag=/, ", " + cert + ", tag=")
  }
  if (tls13 !="") {
  if(cnt.indexOf("tls13") != -1){
    cnt = cnt.replace(RegExp("tls13.*?\,", "gmi"), tls13)
  } else if(cnt.indexOf("obfs=over-tls")!=-1 || /over\-tls\s*\=\s*true/.test(cnt) || cnt.indexOf("obfs=wss")!=-1){
    cnt = cnt.replace(new RegExp("tag\s*\=", "gmi"), tls13+"tag=")
  }
  }
  if (!/^(shadowsocks|trojan|vmess|vless|anytls)/.test(cnt.trim())) { //关闭非 ss/ssr/trojan/vmess/vless 类型的 udp
    udp =  "udp-relay=false, "
    if(cnt.indexOf("udp-relay") != -1){
      var cnt = cnt.replace(RegExp("udp\-relay.*?\,", "gmi"), udp)
    }else{
      var cnt = cnt.replace(new RegExp("tag\s*\=", "gmi"), udp+"tag=")
    }
  }
  return cnt
}

//将sip008格式的订阅转换成quanx格式
function SIP2QuanX(content, sources = []) {
  var input = JSON.parse(content)
  var servers = Array.isArray(input) ? input : input && input.version === 1 && input.servers
  if (!Array.isArray(servers)) NodeInvalid("无法读取 SIP008 的 servers 列表")
  var records = FlowNodeRecords(content, "servers")
  var exact = records.length == servers.length
  return servers.map((server, index) => {
    var source = {format: "SIP008", raw: exact ? records[index] : JSON.stringify(server), fields: !exact}
    try {
      if (!server || !LegacyNodeValue(server.password) || !LegacyNodeValue(server.method)) {
        NodeInvalid("认证字段或加密方式缺失或无效")
      }
      var endpoint = NodeHost(server.server) + ":" + NodePort(server.server_port)
      var options = ""
      if (server.plugin || server.plugin_opts) {
        if (server.plugin && !/^(?:obfs-local|simple-obfs|obfs)$/.test(server.plugin) ||
            typeof server.plugin_opts != "string") {
          NodeInvalid("无法等价转换 SIP008 的插件")
        }
        var fields = NodeFields(server.plugin_opts.replace(/;/g, ",").replace(/,$/, ""), false)
        if (!/^(?:http|tls)$/.test(fields.obfs) ||
            Object.keys(fields).some(key => key != "obfs" && key != "obfs-host") ||
            fields["obfs-host"] !== undefined && !NodeHostname(fields["obfs-host"])) {
          NodeInvalid("无法等价转换 SIP008 的插件选项")
        }
        options = Object.keys(fields).map(key => key + "=" + fields[key]).join(", ")
      }
      var name = ClashNameFix(server.remarks).replace(/[\r\n]/g, " ")
      sources.push(source)
      return "shadowsocks= " + [endpoint, "password=" + server.password, "method=" + server.method, options,
        "tag=" + name].filter(Boolean).join(", ")
    } catch (err) {
      return NodeSkip("ss", err.nodeReason || "无法读取 SIP008 节点字段", !!err.nodeReason, source)
    }
  }).filter(Boolean).join("\n")
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
        var cert = TLSCertParam(Pcert0, TLSFromURI(subs));
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
    var cert = TLSCertParam(Pcert0, TLSFromURI(subs) || "true") + ", "
    var tls13 = PTls13 == 1 ? "tls13=true, " : ""
    obfs = obfs + cert + tls13
  }
  node = node + obfs + tag
  return node
}


//Shadowrocket 格式的 vmess URI 转换
function VR2QX(subs, Pudp, Ptfo, Pcert0, PTls13, source) {
  var server = String(Base64.decode(subs.replace("vmess://", "").split("?remark")[0].split("&remark")[0].split("?")[0]).trim()).split("\u0000")[0]
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
  // Shadowrocket VMess 传输修复说明 ⟦2026-08-09 08:42:50 +08⟧
  // Quantumult X 不支持 mKCP/DTLS 等传输；统一提示并忽略未支持类型，避免生成 mkcptag 等无效字段。
  } else {
    return NodeTransportSkip("vmess", obfs, source)
  }
  if (obfs.indexOf("obfs=over-tls") != -1 || obfs.indexOf("obfs=wss") != -1) {
    var cert = TLSCertParam(Pcert0, TLSFromURI(subs) || "true") + ", "
    var tls13 = PTls13 == 1 ? "tls13=true, " : ""
    obfs = obfs + cert + tls13
  }
  caead="aead=false, "
  if (subs.indexOf("alterId=") != -1) {
    caead = Number(subs.split("alterId=")[1].split("&")[0]) != 0 ? "aead=false, " : ""
  }
  node = node + obfs + caead + tag
  //$notify(node)
  return node
}

//Shadowrocket 格式的 socks URI 转换
function S5R2QX(cnt,tlsp="false") {
  var listh = Base64.decode(cnt.split("socks://")[1].split("#")[0].split("?")[0])
  server=cnt.indexOf("#")!=-1? listh+"#"+cnt.split("?")[1] : listh+"?"+cnt.split("?")[1]
  var nss = []
  if (server != "") {
      var ipport = "socks5=" + server.split("@")[1].split("#")[0].split("/")[0];
      var uname = "username=" + server.split(":")[0];
      var pwd = "password=" + server.split("@")[0].split(":")[1];
      var tag = "tag=" + decodeURIComponent(server.split("remarks=")[1].split("&")[0]);
      var tls = tlsp=="false"? "":"over-tls=true"
      var cert = TLSCertParam(Pcert0, TLSFromURI(cnt));
      cert = tls == ""? "":cert
      var tfo = Ptfo0 == 1 ? "fast-open=true" : "fast-open=false";
      nss.push(ipport, uname, pwd, tls, cert, tfo, tag)
  }
  var QX = nss.filter(Boolean).join(",");
  return QX
}
 
// socks URI  转换 2026-05-25, 无remarks命名部分
function Socks2QX(cnt,tlsp="false") {
  var listh = Base64.decode(cnt.split("socks://")[1].split("#")[0].split("?")[0])
  server=cnt.indexOf("#")!=-1? listh+"#"+cnt.split("?")[1] : listh+"?"+cnt.split("?")[1]
  var nss = []
  if (server != "") {
      var ipport = "socks5=" + server.split("@")[1].split("#")[0].split("/")[0];
      var uname = "username=" + server.split(":")[0];
      var pwd = "password=" + server.split("@")[0].split(":")[1];
      name = server.indexOf("#") != -1? server.split("#")[1] : ipport.split("=")[1].split(":")[0]
      var tag = "tag=" + decodeURIComponent(name.split("&")[0]);
      var tls = tlsp=="false"? "":"over-tls=true"
      var cert = TLSCertParam(Pcert0, TLSFromURI(cnt));
      cert = tls == ""? "":cert
      var tfo = Ptfo0 == 1 ? "fast-open=true" : "fast-open=false";
      nss.push(ipport, uname, pwd, tls, cert, tfo, tag)
  }
  var QX = nss.filter(Boolean).join(",");
  return QX
}

//V2RayN uri 转换成 QUANX 格式
function V2QX(subs, Pudp, Ptfo, Pcert0, PTls13, source) {
  //console.log("v2 type",subs)
  var cert = Pcert0
  var tls13 = PTls13
  var server = String(Base64.decode(subs.replace("vmess://", "")).trim()).split("\u0000")[0];
  var nss = [];
  var QX = "";
  if (server != "") {
    ss = JSON.parse(server);
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
      return NodeTransportSkip("vmess", ss.net, source)
    }
    QX = nss.join(", ");
  }
  return QX
}

// Vmess obfs 参数
function Fobfs(jsonl, Pcert0, PTls13) {
  var obfsi = [];
  var cert = Pcert0;
  tcert = TLSCertParam(cert, TLSFromSkipVerify(jsonl.allowInsecure ?? jsonl.insecure));
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

function FilterRuleRegex(rows) {
    for (var [parameter, pattern] of [["regex", Preg], ["regout", Pregout]]) {
        if (!pattern || !rows.length) continue
        var expression
        try { expression = new RegExp(pattern, "i") }
        catch (err) { NodeInvalid(parameter + " 筛选正则无效，请检查参数。") }
        rows = rows.filter(row => expression.test(RuleNoteBody(row)) == (parameter == "regex"))
    }
    return rows
}

// 判断节点过滤的函数
function Scheck(content, param) {
    var name = (content.match(/,\s*tag=(.*)$/) || ["", ""])[1].toUpperCase()
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
    return servers.filter(node => Scheck(node, Pin) != 0 && Scheck(node, Pout) != 1)
}

function FilterScript(servers, script) {
    try {
        const tools = Tools();
        const load = new Function("$", script + "\n;return filter;");
        const include = load(tools)(tools.getNodeInfo(servers));
        if (Array.isArray(include) && include.length === servers.length &&
            Array.from(include).every(value => typeof value === "boolean" || value === 0 || value === 1)) {
            return servers.filter((_, i) => include[i]);
        }
        nodeIssues.push("脚本筛选失败" + noticeSeparator + "sfilter 需为每个节点返回布尔值或 0/1。");
    } catch (err) {
        nodeIssues.push("脚本筛选失败，请检查 sfilter 参数。");
    }
    return servers;
}

//a.c.com:0031:origin:aes-256-gcm:plain:pwdpwd/?obfsparam=&remarks=xxxx
//SSR 类型 URI 转换 quanx 格式
function SSR2QX(subs, Pudp, Ptfo) {
    var nssr = []
    var cnt = Base64.decode(subs.split("ssr://")[1].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0]
    var obfshost = '';
    var oparam = '';
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

// ⟦2026-11-20 11:03⟧ Hysteria2 build 965+：四种输入共用校验和输出，失败只记录脱敏原因。
function HY2Type(type) {
  return typeof type == "string" && /^(?:hysteria2|hy2)$/i.test(type)
}

function HY2LineKind(row) {
  var line = row.trim()
  if (/^(?:hysteria2|hy2):\/\//i.test(line)) return "uri"
  if (/^(?:[a-z][\w+.-]*:\/\/|[#;\[])/i.test(line)) return ""
  if (/^[^=\r\n]+=\s*hysteria2\s*,\s*[^,\s]+\s*,/i.test(line)) return "surge"
  return /^hysteria2\s*=/i.test(line) ? "quanx" : ""
}

function MieruLineKind(row) {
  var line = row.trim()
  if (/^mierus?:\/\//i.test(line)) return "uri"
  return /^mieru\s*=/i.test(line) ? "quanx" : ""
}

function ExtendedNodeLine(row) {
  return HY2LineKind(row) || MieruLineKind(row)
}

function ExtendedClashType(type) {
  return HY2Type(type) || typeof type == "string" && /^mieru$/i.test(type)
}

function NodeSubscriptionPayload(content) {
  var text = content.trim().replace(/^(?:[ \t]*(?:[#;]|\/\/[ \t])[^\n]*\n)+/, "")
  var compact = text.replace(/\s/g, "")
  var nextLine = text.indexOf("\n")
  // 兼容旧式首行说明，仅在说明含 Base64 之外的字符时跳过该行。
  if (nextLine >= 0 && /[^A-Za-z0-9+/_=\s-]/.test(text.slice(0, nextLine))) {
    compact = text.slice(nextLine + 1).replace(/\s/g, "")
  }
  return /^[A-Za-z0-9+/_-]+={0,2}$/.test(compact) && compact.replace(/=+$/, "").length % 4 != 1 ? compact : ""
}

function DecodeNodeSubscription(payload) {
  var rows = Base64.decode(payload, true).split("\n")
  var hasNode = rows.some(row => {
    row = row.trim()
    return ExtendedNodeLine(row) || /^[a-z][\w+.-]*:\/\//i.test(row) ||
      /^(?:shadowsocks|vmess|vless|trojan|anytls|http|socks5|wireguard|tuic)\s*=/i.test(row) ||
      isSurge(row) || IsLoonNode(row)
  })
  return hasNode ? rows.join("\n") : ""
}

function ExtendedClashSnippet(content) {
  var text = content.trim()
  if (!/\b(?:hysteria2|hy2|mieru)\b/i.test(text)) return ""
  if (/^[{\[]/.test(text)) {
    try {
      var input = JSON.parse(text)
      var nodes = Array.isArray(input) ? input : [input]
      if (nodes.some(node => node && ExtendedClashType(node.type)) &&
          nodes.every(node => node && typeof node.type == "string")) {
        return JSON.stringify({proxies: nodes})
      }
    } catch (err) {}
  }
  return /^-\s*\{/.test(text) && /(?:[{,]\s*["']?type["']?\s*:\s*["']?(?:hysteria2|hy2|mieru)\b)/i.test(text)
    ? "proxies:\n" + text : ""
}

function ExtendedClashOriginal(content) {
  if (!/\b(?:hysteria2|hy2|mieru)\b/i.test(content)) return null
  try {
    var input = content.trim()
    if (/^{/.test(input)) return JSON.parse(input).proxies || null
    var lines = input.split(/\r?\n/)
    var start = lines.findIndex(line => /^(?:proxies|"proxies"|'proxies')[ \t]*:/.test(line))
    if (start < 0) return null
    var values = lines.slice(start + 1)
    var end = values.findIndex(line => /^(?:[A-Za-z][\w-]*|["'][^"']+["'])[ \t]*:/.test(line))
    if (end >= 0) values = values.slice(0, end)
    // YAML 允许与父键同缩进的序列，内置解析器需要缩进。保留原始标量。
    if (values.some(line => /^-[ \t]/.test(line))) values = values.map(line => "  " + line)
    var yaml = new YAML()
    var nodes = yaml.parse([lines[start]].concat(values).join("\n")).proxies
    return yaml.errors.length || !Array.isArray(nodes) ? null : nodes
  } catch (err) {
    return null
  }
}

// 取出流式列表中的原文片段，分隔符与引号内的内容各自处理。
function FlowNodeRecords(text, key) {
  text = text.trimStart()
  var tokens = /"(?:\\[\s\S]|[^"\\])*"|'(?:''|[^'])*'|[\[\]{},]/g
  if (text.startsWith("{") && key) {
    var depth = 0, arrayStart = -1
    for (var token of text.matchAll(tokens)) {
      var part = token[0]
      if (part == "{" || part == "[") depth++
      else if (part == "}" || part == "]") depth--
      else if (depth == 1 && part == '"' + key + '"') {
        var after = token.index + part.length
        var array = /^\s*:\s*\[/.exec(text.slice(after))
        if (array) arrayStart = after + array[0].length - 1
      }
    }
    if (arrayStart < 0) return []
    text = text.slice(arrayStart)
  }
  if (!text.startsWith("[")) return []
  var rows = [], depth = 0, start = 1
  tokens.lastIndex = start
  for (var token; (token = tokens.exec(text));) {
    var part = token[0]
    if (depth == 0 && (part == "," || part == "]")) {
      var record = text.slice(start, token.index).trim()
      if (record) rows.push(record)
      if (part == "]") return rows
      start = token.index + 1
    } else if (part == "{" || part == "[") depth++
    else if (part == "}" || part == "]") depth--
  }
  return []
}

function ClashSourceRecords(text, wrappedSnippet) {
  var trimmed = text.trim()
  if (/^[{\[]/.test(trimmed)) {
    var rows = FlowNodeRecords(trimmed, "proxies")
    return !rows.length && wrappedSnippet && trimmed.startsWith("{") ? [trimmed] : rows
  }
  var lines = text.split("\n")
  var header = -1, headerIndent = Infinity
  for (var i = 0; i < lines.length; i++) {
    var key = /^([ \t]*)(?:proxies|"proxies"|'proxies')\s*:/.exec(lines[i])
    if (key && key[1].length < headerIndent) {
      header = i
      headerIndent = key[1].length
    }
  }
  var tail = header >= 0 ? lines[header].slice(lines[header].indexOf(":") + 1).trimStart() : ""
  if (tail.startsWith("[")) return FlowNodeRecords([tail, ...lines.slice(header + 1)].join("\n"))
  var starts = [], indent
  var end = lines.length
  for (var i = header + 1; i < lines.length; i++) {
    if (!lines[i].trim() || /^[ \t]*#/.test(lines[i])) continue
    var item = /^([ \t]*)-(?:\s|$)/.exec(lines[i])
    var rowIndent = lines[i].match(/^[ \t]*/)[0].length
    if (indent === undefined && item) indent = item[1].length
    if (item && rowIndent == indent) starts.push(i)
    else if (indent === undefined || rowIndent <= indent) { end = i; break }
  }
  return starts.map((start, index) => {
    var last = starts[index + 1] ?? end
    while (last > start + 1 && (!lines[last - 1].trim() ||
      /^[ \t]*#/.test(lines[last - 1]) && lines[last - 1].match(/^[ \t]*/)[0].length <= indent)) last--
    return lines.slice(start, last).join("\n").replace(/\r$/, "")
  })
}

function NodeSkip(protocol, reason, critical = false, source = {format: "QuanX 结果"}) {
  var key = typeof protocol == "string" ? protocol.toLowerCase() : ""
  var label = Object.prototype.hasOwnProperty.call(nodeProtocolLabels, key) ? nodeProtocolLabels[key] : "节点"
  var group = label + "\n" + source.format + "\n" + reason
  var item = nodeSkipped.get(group)
  if (!item) {
    item = {label, reason, count: 0, critical: false, sources: []}
    nodeSkipped.set(group, item)
  }
  item.count++
  item.critical ||= critical
  if (item.sources.length < nodeExampleLimit && source.raw) item.sources.push(source)
  PNS++
  return ""
}

function NodeTransportSkip(protocol, transport, source) {
  // 只显示已知传输名称，外部协议字段也可能包含任意文本。
  var names = {
    grpc: "gRPC", h2: "HTTP/2", kcp: "mKCP", mkcp: "mKCP", xhttp: "XHTTP",
    httpupgrade: "HTTP Upgrade", "http-upgrade": "HTTP Upgrade", quic: "QUIC", dtls: "DTLS"
  }
  var key = typeof transport == "string" ? transport.toLowerCase() : ""
  var name = Object.prototype.hasOwnProperty.call(names, key) ? names[key] : ""
  return NodeSkip(protocol, name ? "不支持 " + name + " 传输" : "当前目标格式不支持此传输方式", true, source)
}

function NodeInvalid(reason) {
  // 原始行和错误消息可能含密码，通知只使用本函数的固定说明。
  throw {nodeReason: reason}
}

function NodeBool(value, fallback) {
  if (value === undefined) return fallback
  if (value === true || value === 1 || typeof value == "string" && /^(?:1|true)$/i.test(value)) return true
  if (value === false || value === 0 || typeof value == "string" && /^(?:0|false)$/i.test(value)) return false
  NodeInvalid("布尔参数无效")
}

function NodeVerifyName(value) {
  if (value === undefined || value === "") return ""
  if (typeof value != "string" || !value.includes(".") || TLSCertDomainValue(value) != value) {
    NodeInvalid("TLS 校验域名无效")
  }
  return value
}

function NodePin(value) {
  if (value === undefined || value === "") return ""
  if (typeof value != "string" || !/^(?:[0-9a-f]{64}|(?:[0-9a-f]{2}:){31}[0-9a-f]{2})$/i.test(value)) {
    NodeInvalid("SHA-256 指纹格式无效")
  }
  return value.replace(/:/g, "").toLowerCase()
}

function NodeFields(text, quoted) {
  var fields = Object.create(null)
  if (!text.trim()) return fields
  text.split(/,[ \t]*(?=[a-z][\w-]*[ \t]*=)/i).forEach(function (part) {
    var m = part.trim().match(/^([a-z][\w-]*)[ \t]*=([\s\S]*)$/i)
    if (!m || m[1].toLowerCase() in fields) NodeInvalid("节点字段无效或重复")
    var value = m[2].trim()
    if (quoted && /^["']/.test(value)) {
      if (value.length < 2 || value.slice(-1) != value[0]) NodeInvalid("字段引号不完整")
      value = value.slice(1, -1)
    }
    fields[m[1].toLowerCase()] = value
  })
  return fields
}

function NodeQuery(text) {
  var params = Object.create(null)
  var query = (text || "").split("&").filter(Boolean)
  query.forEach(function (pair) {
    var pos = pair.indexOf("=")
    var key = decodeURIComponent((pos < 0 ? pair : pair.slice(0, pos)).replace(/\+/g, " ")).toLowerCase()
    var value = pos < 0 ? "" : decodeURIComponent(pair.slice(pos + 1).replace(/\+/g, " "))
    if (key in params) NodeInvalid("URI 参数重复")
    params[key] = value
  })
  return params
}

function HY2URI(line) {
  var match = line.match(/^(?:hysteria2|hy2):\/\/([^/?#\s]+)\/?(?:\?([^#]*))?(?:#(.*))?$/i)
  if (!match) NodeInvalid("URI 格式无效")
  var at = match[1].lastIndexOf("@")
  var address = match[1].slice(at + 1).match(/^(\[[0-9a-f:.]+\]|[^:\s]+)(?::(.+))?$/i)
  if (at < 1 || !address) NodeInvalid("缺少服务器或认证密码")
  var params = NodeQuery(match[2])
  if (params.ech || params.alpn && params.alpn != "h3") NodeInvalid("当前目标格式无法等价保留 URI 连接参数")
  if (params.insecure !== undefined && params.allowinsecure !== undefined &&
      NodeBool(params.insecure) != NodeBool(params.allowinsecure)) NodeInvalid("URI 证书校验开关冲突")
  var ports = address[2] || "443"
  var gecko = /^gecko$/i.test(params.obfs || "")
  var geckoKey = params["gecko-password"]
  if ((gecko && params["salamander-password"] !== undefined) || (!gecko && geckoKey !== undefined) ||
      (geckoKey !== undefined && params["obfs-password"] !== undefined && geckoKey !== params["obfs-password"])) {
    NodeInvalid("混淆模式与密钥字段冲突")
  }
  return {
    host: address[1], port: ports.split(/[,-]/)[0], auth: decodeURIComponent(match[1].slice(0, at)),
    name: params.tag || decodeURIComponent(match[3] || ""), sni: params.sni || params.peer,
    verification: NodeBool(params.insecure, NodeBool(params.allowinsecure, false)) ? "false" : "true",
    certPin: params.pinsha256, udp: params.udp, obfs: params.obfs,
    key: params.obfs ? params["obfs-password"] || params[gecko ? "gecko-password" : "salamander-password"] : params["salamander-password"],
    geckoSizing: ["obfs-min-packet-size", "obfs-max-packet-size", "minpacketsize", "maxpacketsize"]
      .some(key => params[key] !== undefined),
    ports: params["port-hopping"] || params.mport || (/[,-]/.test(ports) ? ports : undefined),
    interval: params["port-hopping-interval"] || params["hop-interval"],
    down: params["download-bandwidth"] || params.down
  }
}

function HY2Surge(line) {
  var m = line.match(/^([^=]+)=\s*hysteria2\s*,\s*([^,]+),\s*(\d+)\s*,\s*(.+)$/i)
  if (!m) NodeInvalid("Surge 节点字段无效")
  var p = NodeFields(m[4], true)
  var gecko = p["gecko-password"] !== undefined
  if (gecko && p["salamander-password"] !== undefined) NodeInvalid("Gecko 和 Salamander 密钥不能同时设置")
  if (p["client-cert"] || p["ech-config"] || p["underlying-proxy"] || p.sni == "off" ||
      (p.alpn && p.alpn != "h3")) NodeInvalid("当前目标格式无法等价保留 Surge 连接参数")
  var pin = p["server-cert-fingerprint-sha256"]
  var verifyName = NodeVerifyName(p["server-cert-verify-name"])
  var skipVerify = NodeBool(p["skip-cert-verify"], false)
  if (skipVerify && verifyName) NodeInvalid("Surge 证书校验开关与校验域名冲突")
  return {
    host: m[2].trim(), port: m[3], auth: p.password, name: m[1].trim(), sni: p.sni,
    verification: skipVerify ? "false" : verifyName || "true",
    certPin: pin, pinOnly: !!pin, udp: p["udp-relay"], key: p[gecko ? "gecko-password" : "salamander-password"],
    obfs: gecko ? "gecko" : undefined, ports: p["port-hopping"],
    interval: p["port-hopping-interval"], down: p["download-bandwidth"], check: p["test-url"]
  }
}

function HY2Clash(node) {
  if ((node["realm-opts"] && node["realm-opts"].enable) ||
      (node["ech-opts"] && node["ech-opts"].enable) || node["private-key"] ||
      node.certificate || node.ca || node["ca-str"] ||
      (node.alpn && String(node.alpn) != "h3")) NodeInvalid("当前目标格式无法等价保留 Clash 连接参数")
  var skipVerify = NodeBool(node["skip-cert-verify"], false)
  return {
    host: node.server, port: node.port, auth: node.password, name: node.name, sni: node.sni,
    verification: NodeVerifyName(node["name-cert-verify"]) || (skipVerify ? "false" : "true"),
    certPin: node.fingerprint, pinOnly: !!node.fingerprint, udp: node.udp, obfs: node.obfs,
    key: node.obfs ? node["obfs-password"] : undefined,
    geckoSizing: node["obfs-min-packet-size"] !== undefined || node["obfs-max-packet-size"] !== undefined,
    ports: node.ports, interval: node["hop-interval"], down: node.down
  }
}

function IsBareIPv6(host) {
  var tail = host.slice(host.lastIndexOf(":") + 1)
  if (tail.includes(".")) {
    var octets = tail.split(".")
    if (octets.length != 4 || octets.some(octet => !/^(?:0|[1-9]\d{0,2})$/.test(octet) || Number(octet) > 255)) {
      return false
    }
    host = host.slice(0, -tail.length) + "0:0"
  }
  var halves = host.split("::")
  if (halves.length > 2) return false
  var groups = halves.filter(Boolean).flatMap(half => half.split(":"))
  return groups.every(group => /^[0-9a-f]{1,4}$/i.test(group)) &&
    (halves.length == 2 ? groups.length < 8 : groups.length == 8)
}

function HY2QuanX(line) {
  // 原生节点允许不加方括号的 IPv6，最后一个冒号后的数字为端口。
  var m = line.match(/^hysteria2\s*=\s*([^,\s]+):(\d+)\s*,\s*(.*)$/i)
  if (!m) NodeInvalid("原生 QuanX 地址或字段无效")
  if (m[1].includes(":") && !m[1].startsWith("[") && !IsBareIPv6(m[1])) {
    NodeInvalid("原生 QuanX IPv6 地址无效")
  }
  var p = NodeFields(m[3], false)
  var gecko = p["gecko-password"] !== undefined
  if (gecko && p["salamander-password"] !== undefined) NodeInvalid("Gecko 和 Salamander 密钥不能同时设置")
  return {
    host: m[1], port: m[2], auth: p.password, name: p.tag, sni: p["tls-host"],
    verification: p["tls-verification"], certPin: p["tls-cert-sha256"], keyPin: p["tls-pubkey-sha256"],
    udp: p["udp-relay"], key: p[gecko ? "gecko-password" : "salamander-password"], obfs: gecko ? "gecko" : undefined, ports: p["port-hopping"],
    interval: p["port-hopping-interval"], down: p["download-bandwidth"], native: p
  }
}

function NodeSafeValue(value) {
  return typeof value == "string" && value.length > 0 && value.trim() == value &&
    !/[,;"'\\\x00-\x1f\x7f\u0085\u2028\u2029]|tag\s*=|node_(?:type|emoji|tag|index)_prefix/i.test(value)
}
function NodePort(value) {
  if ((typeof value != "number" && typeof value != "string") || !/^\d{1,5}$/.test(value) || Number(value) < 1 || Number(value) > 65535) NodeInvalid("端口超出有效范围")
  return Number(value)
}
function NodeHostname(value) {
  return typeof value == "string" && /^(?=.{1,254}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.?$/i.test(value)
}

function IsIPv4(host) {
  var octets = host.split(".")
  return octets.length == 4 && octets.every(octet => /^(?:0|[1-9]\d{0,2})$/.test(octet) && Number(octet) <= 255)
}

function NodeHost(host) {
  if (NodeHostname(host) && (!/^\d+(?:\.\d+){3}$/.test(host) || IsIPv4(host))) return host
  var bare = typeof host == "string" ? host.replace(/^\[([^\]]+)\]$/, "$1") : ""
  if (!bare.includes(":") || !IsBareIPv6(bare)) NodeInvalid("服务器地址无效")
  return "[" + bare + "]"
}

function LegacyNodeValue(value) {
  return (typeof value == "string" || Number.isFinite(value)) && String(value).trim() != "" &&
    !/[,\x00-\x1f\x7f\u0085\u2028\u2029]/.test(value)
}

function HY2Serialize(node) {
  var host = NodeHost(node.host)
  if (node.native) host = node.host // 保留原生地址的方括号写法或无括号写法。
  if (!NodeSafeValue(node.auth)) NodeInvalid("认证密码缺失或含 QuanX 无法安全表示的字符")
  if (node.sni !== undefined && !NodeHostname(node.sni)) NodeInvalid("SNI 无效")
  var hopping = node.ports === undefined || node.ports === "" ? "" : String(node.ports).trim().split(/[,;/]/).map(function (item) {
    var range = item.trim().split("-").map(NodePort)
    if (range.length > 2 || range.length == 2 && range[0] > range[1]) NodeInvalid("端口跳跃范围无效")
    return range.join("-")
  }).join(",")
  var port = NodePort(node.port === undefined && hopping ? hopping.split(/[,-]/)[0] : node.port)
  var interval = node.interval
  if (interval !== undefined && (!hopping || !/^\d+$/.test(interval) || interval < 5 || interval > 3600)) {
    NodeInvalid("QuanX 端口跳跃仅支持 5–3600 秒的固定间隔")
  }
  // ⟦2026-11-20 12:11⟧ obfs=none/plain 表示无混淆，输出时省略 Salamander 密钥。
  var plainObfs = typeof node.obfs == "string" && /^(?:none|plain)$/i.test(node.obfs)
  if (plainObfs && node.key !== undefined && node.key !== "") NodeInvalid("无混淆设置与混淆密钥冲突")
  var gecko = typeof node.obfs == "string" && /^gecko$/i.test(node.obfs)
  if (node.obfs && !plainObfs && !gecko && node.obfs != "salamander") NodeInvalid("不支持此 Hysteria2 混淆类型")
  if (gecko && version < 969) NodeInvalid("Gecko 需要 build 969+")
  if (gecko && node.geckoSizing) NodeInvalid("当前目标格式不能保留 Gecko 自定义报文大小")
  if (!plainObfs && (node.key !== undefined || node.obfs == "salamander" || gecko)) {
    if (!NodeSafeValue(node.key) || encodeURIComponent(node.key).replace(/%[A-F0-9]{2}/g, "x").length < 4) {
      NodeInvalid((gecko ? "Gecko" : "Salamander") + " 密钥缺失、少于 4 字节或无法安全表示")
    }
  }
  var verification = node.verification
  if (verification !== undefined && !/^(?:true|false)$/i.test(verification)) verification = NodeVerifyName(verification)
  else if (verification !== undefined) verification = verification.toLowerCase()
  var certPin = NodePin(node.certPin)
  var keyPin = NodePin(node.keyPin)
  // QuanX 忽略关闭验证时的指纹；Surge/Mihomo 另有替代常规验证的指纹模式。
  if (node.pinOnly || (verification == "false" && (certPin || keyPin))) {
    NodeInvalid("当前目标格式无法等价保留仅凭指纹验证的设置")
  }
  verification = TLSCertDomainValue(Pcert0) || verification
  var certOverride = Pcsha256 && NodePin(decodeURIComponent(Pcsha256))
  var keyOverride = Ppsha256 && NodePin(decodeURIComponent(Ppsha256))
  if ((certPin && certOverride && certPin != certOverride) ||
      (keyPin && keyOverride && keyPin != keyOverride) ||
      (certPin && !keyPin && keyOverride)) NodeInvalid("资源参数与来源指纹冲突")
  certPin = certPin || certOverride
  keyPin = keyPin || keyOverride
  if (certPin || keyPin) {
    if (verification == "false") NodeInvalid("关闭证书验证会使 SHA-256 指纹失效")
    verification = verification || "true"
  }
  var udp = NodeBool(node.udp, node.native ? undefined : true)
  if (Pudp0 == 1 || Pudp0 == -1) udp = Pudp0 == 1
  var mbps
  if (node.down !== undefined) {
    var rate = String(node.down).trim().match(/^(\d+(?:\.\d+)?)(?:\s*([KMGT]?)([bB])ps)?$/i)
    if (!rate) NodeInvalid("下载带宽格式无效")
    mbps = Number(rate[1]) * (rate[3] ? Math.pow(1000, " KMGT".indexOf(rate[2].toUpperCase() || " ") - 2) * (rate[3] == "B" ? 8 : 1) : 1)
    if (!Number.isFinite(mbps) || /e/i.test(String(mbps))) NodeInvalid("下载带宽超出可表示范围")
  }
  var fields = {
    password: node.auth, "tls-host": node.sni, "tls-verification": verification,
    "tls-cert-sha256": certPin, "tls-pubkey-sha256": keyPin, "udp-relay": udp,
    "salamander-password": plainObfs || gecko ? undefined : node.key, "download-bandwidth": mbps || undefined,
    "port-hopping": hopping, "port-hopping-interval": interval === undefined ? undefined : Number(interval),
    server_check_url: node.check
  }
  if (gecko) fields["gecko-password"] = node.key
  Object.keys(node.native || {}).forEach(function (key) {
    if (key == "tag" || Object.prototype.hasOwnProperty.call(fields, key) && key != "server_check_url") return
    if (!NodeSafeValue(node.native[key])) NodeInvalid("原生 QuanX 字段无法安全表示")
    Object.defineProperty(fields, key, {value: node.native[key], enumerable: true})
  })
  if (node.check !== undefined && !NodeSafeValue(node.check)) NodeInvalid("测试 URL 无法安全表示")
  var name = ClashNameFix(node.name).replace(/[\x00-\x1f\x7f\u0085\u2028\u2029]/g, " ").replace(/=/g, "＝").trim()
  fields.tag = name || "[hysteria2] " + host + ":" + port
  var entries = Object.keys(fields).filter(key => fields[key] !== undefined && fields[key] !== "")
  return "hysteria2=" + host + ":" + port + ", " + entries.map(key => key + "=" + fields[key]).join(", ")
}

function HY2Convert(kind, input, source) {
  if (!HY2Supported) return NodeSkip("hysteria2", "需要 Quantumult X build 965+", true, source)
  try {
    var line = kind == "clash" ? "" : input.trim()
    return HY2Serialize(kind == "uri" ? HY2URI(line) : kind == "surge" ? HY2Surge(line) :
      kind == "quanx" ? HY2QuanX(line) : HY2Clash(input))
  } catch (err) {
    return NodeSkip("hysteria2", err.nodeReason || "无法安全读取节点字段", !!err.nodeReason, source)
  }
}

// mieru: build 968+。原生连接字段按原意输出；外部格式仅转换可等价表示的 TCP 节点。
function MieruURI(line) {
  if (/^mieru:\/\//i.test(line)) NodeInvalid("mieru:// 是完整客户端配置，请使用可等价转换的 mierus:// 链接")
  var match = line.match(/^mierus:\/\/([^/?#\s]+)\?([^#]+)(?:#(.*))?$/i)
  if (!match) NodeInvalid("mierus 分享链接格式无效")
  var at = match[1].lastIndexOf("@")
  var colon = match[1].indexOf(":")
  if (colon < 1 || at <= colon + 1 || at == match[1].length - 1) NodeInvalid("缺少服务器或用户名和密码")
  var params = NodeQuery(match[2])
  var protocol = params.protocol === undefined ? undefined : params.protocol.toUpperCase()
  var transport = params.transport === undefined ? undefined : params.transport.toUpperCase()
  if (protocol !== undefined && transport !== undefined && protocol !== transport) {
    NodeInvalid("mierus 的 protocol 与 transport 冲突")
  }
  if (!params.profile || !/^\d+$/.test(params.port || "") || (protocol === undefined ? transport : protocol) !== "TCP") {
    NodeInvalid("mierus 仅支持含 profile 的单端口 TCP 节点")
  }
  if (Object.keys(params).some(key => !/^(?:profile|port|protocol|transport|udp|user-hint-is-mandatory|handshake-mode)$/.test(key)) ||
      params["handshake-mode"] !== undefined && params["handshake-mode"] !== "HANDSHAKE_STANDARD") {
    NodeInvalid("当前目标格式不能保留分享链接中的连接参数")
  }
  // 服务端握手标记只校验格式，QuanX 节点没有对应字段。
  NodeBool(params["user-hint-is-mandatory"])
  return {
    host: match[1].slice(at + 1), port: params.port,
    username: decodeURIComponent(match[1].slice(0, colon)),
    password: decodeURIComponent(match[1].slice(colon + 1, at)),
    "udp-relay": NodeBool(params.udp, true), tag: decodeURIComponent(match[3] || "") || params.profile
  }
}

function MieruClash(node) {
  if (node.transport !== "TCP" || node["port-range"] ||
      node["handshake-mode"] && node["handshake-mode"] !== "HANDSHAKE_STANDARD" ||
      node.multiplexing || node["traffic-pattern"] ||
      Object.keys(node).some(key => !/^(?:type|name|server|port|port-range|transport|username|password|udp|handshake-mode|multiplexing|traffic-pattern|_subName)$/.test(key))) {
    NodeInvalid("Clash mieru 仅支持单端口 TCP 和可等价表示的连接参数")
  }
  return {
    host: node.server, port: node.port, username: node.username, password: node.password,
    "udp-relay": NodeBool(node.udp, false), tag: node.name
  }
}

function MieruQuanX(line) {
  var match = line.match(/^mieru\s*=\s*(\[[0-9a-f:.]+\]|[^:,\s]+):(\d+)\s*,\s*(.*)$/i)
  if (!match) NodeInvalid("原生 QuanX 地址或字段无效")
  var fields = NodeFields(match[3], false)
  if (Object.keys(fields).some(key => !/^(?:username|password|over-tls|tls-host|tls-verification|tls-cert-sha256|tls-pubkey-sha256|reality-base64-pubkey|reality-hex-shortid|fast-open|udp-relay|udp-over-tcp|tag|server_check_url)$/.test(key))) {
    NodeInvalid("原生 QuanX mieru 包含未识别字段")
  }
  fields.host = match[1]
  fields.port = match[2]
  return fields
}

function MieruSerialize(fields) {
  var host = NodeHost(fields.host)
  var port = NodePort(fields.port)
  if (!NodeSafeValue(fields.username) || !NodeSafeValue(fields.password)) {
    NodeInvalid("用户名或密码缺失，或含 QuanX 无法安全表示的字符")
  }
  var tls = NodeBool(fields["over-tls"])
  var sni = fields["tls-host"]
  var verification = fields["tls-verification"]
  var certPin = NodePin(fields["tls-cert-sha256"])
  var keyPin = NodePin(fields["tls-pubkey-sha256"])
  var realityKey = fields["reality-base64-pubkey"]
  var shortId = fields["reality-hex-shortid"]
  if (!tls && (sni !== undefined || verification !== undefined || certPin || keyPin ||
      realityKey !== undefined || shortId !== undefined)) NodeInvalid("TLS 或 REALITY 字段需要 over-tls=true")
  if (sni !== undefined && !NodeHostname(sni)) NodeInvalid("SNI 无效")
  if (realityKey !== undefined && !/^(?:[A-Za-z0-9+/]{43}|[A-Za-z0-9_-]{43})=?$/.test(realityKey) ||
      shortId !== undefined && (!realityKey || !/^(?:[a-f0-9]{2}){0,8}$/i.test(shortId))) {
    NodeInvalid("REALITY 公钥或 Short ID 格式无效")
  }
  if (verification !== undefined) {
    verification = /^(?:true|false)$/i.test(verification) ? verification.toLowerCase() : NodeVerifyName(verification)
  }
  if (realityKey && (certPin || keyPin)) NodeInvalid("REALITY 和 TLS 证书指纹不能同时设置")
  if (tls && !realityKey) {
    var certOverride = Pcsha256 && NodePin(decodeURIComponent(Pcsha256))
    var keyOverride = Ppsha256 && NodePin(decodeURIComponent(Ppsha256))
    if ((certPin && certOverride && certPin != certOverride) ||
        (keyPin && keyOverride && keyPin != keyOverride)) NodeInvalid("资源参数与来源指纹冲突")
    certPin = certPin || certOverride
    keyPin = keyPin || keyOverride
    var override = TLSCertDomainValue(Pcert0)
    if ((certPin || keyPin) && (verification == "false" || override == "false")) {
      NodeInvalid("关闭证书验证会使 SHA-256 指纹失效")
    }
    verification = override || verification || "true"
  }
  var udp = NodeBool(fields["udp-relay"])
  var udpOverTcp = NodeBool(fields["udp-over-tcp"])
  if (udp && udpOverTcp === false) NodeInvalid("mieru 的 UDP 中继必须经 TCP")
  if (Pudp0 == 1 || Pudp0 == -1) udp = Pudp0 == 1
  if (udp) udpOverTcp = true
  else if (udp === false && udpOverTcp !== undefined) udpOverTcp = false
  var fastOpen = NodeBool(fields["fast-open"])
  if (Ptfo0 == 1 || Ptfo0 == -1) fastOpen = Ptfo0 == 1
  var check = fields.server_check_url
  if (check !== undefined && !NodeSafeValue(check)) NodeInvalid("测试 URL 无法安全表示")
  var name = ClashNameFix(fields.tag).replace(/[\x00-\x1f\x7f\u0085\u2028\u2029]/g, " ").replace(/=/g, "＝").trim()
  var output = {
    username: fields.username, password: fields.password, "over-tls": tls, "tls-host": sni,
    "tls-verification": verification, "tls-cert-sha256": certPin, "tls-pubkey-sha256": keyPin,
    "reality-base64-pubkey": realityKey, "reality-hex-shortid": shortId, "fast-open": fastOpen,
    "udp-relay": udp, "udp-over-tcp": udpOverTcp, server_check_url: check,
    tag: name || "[mieru] " + host + ":" + port
  }
  return "mieru=" + host + ":" + port + ", " + Object.keys(output)
    .filter(key => output[key] !== undefined && (output[key] !== "" || key == "reality-hex-shortid"))
    .map(key => key + "=" + output[key]).join(", ")
}

function MieruConvert(kind, input, source) {
  if (!MieruSupported) return NodeSkip("mieru", "需要 Quantumult X build 968+", true, source)
  try {
    return MieruSerialize(kind == "clash" ? MieruClash(input) :
      kind == "uri" ? MieruURI(input.trim()) : MieruQuanX(input.trim()))
  } catch (err) {
    return NodeSkip("mieru", err.nodeReason || "无法安全读取节点字段", !!err.nodeReason, source)
  }
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
    pcert = TLSCertParam(Pcert0, TLSFromURI(cnt));
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
    return ""
  }
}

// Vless uri 转换成 QUANX 格式
// vless://pwd@a.b.c.gq:443?encryption=none&security=tls&type=ws&host=a.b.c.d&path=dsjdaaaaj#VLESS_WSS
// Vless Shadowrocket URI
// vless://YXV0bzpkampkakAxLjEuMS4xOjY2NjY?remarks=vless&obfsParam=123.com&path=/jsjdj&obfs=websocket&tls=1&peer=abc.com&tfo=1
//;vless=example.com:443, method=none, password=23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, obfs=wss, obfs-uri=/ws, fast-open=false, udp-relay=false, tag=vless-ws-tls-01
//vless://YXV0bzpkampkakAxLjEuMS4xOjY2NjY?remarks=vless&obfsParam=hshdh&path=/jsjdj&obfs=http&tls=1&peer=abc.com&tfo=1
//vls = VLESS,1.1.1.1,443,"b0dd64e4-0fbd-4038-9139-d1f32a68a0dc",transport=ws,path=patha,host=host.com,udp=true,over-tls=true,tls-name=sni.co
function VL2QX(subs, Pudp, Ptfo, Pcert0, PTls13, source) {
  var nvless = []
  var uriKind
  var cnt = subs.split("vless://")[1]
  type = "vless=";
  mtd= "method=none"
  obfs=""
  thost=""
  if((cnt.indexOf("remarks=")==-1 && cnt.indexOf("remark=")==-1) && cnt.indexOf("@")!=-1) { // normal URI
  uriKind = "URI"
  ip = cnt.split("@")[1].split("encry")[0].split("?")[0];
  pwd = cnt.split("@")[0]? "password=" + cnt.split("@")[0]:"";
  thost = cnt.indexOf("sni=") != -1? "tls-host="+cnt.split("sni=")[1].split(/&|#/)[0]:""
  thost = cnt.indexOf("peer=") != -1? "tls-host="+cnt.split("peer=")[1].split(/&|#/)[0]:thost
  tag = cnt.indexOf("#") != -1 ? "tag=" + decodeURIComponent(cnt.split("#").slice(-1)[0]) : "tag= [vless]" + ip
  } else { // shadowrocket style
    uriKind = "SR-URI"
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
  if (uriKind == "SR-URI") {//小火箭内的websocket写法
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
    thost1=cnt.indexOf("&host=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("&host=")[1].split("&")[0].split("#")[0])
    thost2=cnt.indexOf("sni=") == -1? thost : "obfs-host=" + decodeURIComponent(cnt.split("sni=")[1].split("&")[0].split("#")[0]).replace(/\"|(Host\":)|\{|\}/g,"")
    thost = thost1.length >= thost2.length ? thost1 : thost2;
    puri = cnt.indexOf("&path=") == -1? puri : "obfs-uri=" + decodeURIComponent(cnt.split("&path=")[1].split("&")[0].split("#")[0])
  } 
if(obfs=="obfs=wss" || obfs=="obfs=over-tls"){
  ptls13 = PTls13 == 1 ? "tls13=true" : "tls13=false"
  pcert = TLSCertParam(Pcert0, TLSFromURI(cnt));
} else {
  pcert=""
  ptls13=""
}
// Reality para 2025-12-30
  prlt= version>=891? Reality_Handle(cnt) : ""
  nvless.push(type + ip, pwd, mtd, obfs, pcert, thost, puri, pudp, ptfo, prlt, tag)
  QX = type!="NS"? nvless.filter(Boolean).join(", ")  : ""
  if (type=="NS") {
    var transport = /[?&](?:type|obfs)=([^&#]*)/.exec(cnt)
    return NodeTransportSkip("vless", transport && transport[1], source)
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
    thost = cnt.indexOf("sni=") != -1? "tls-host="+cnt.split("sni=")[1].split(/&|#/)[0]:""
    thost = cnt.indexOf("peer=") != -1? "tls-host="+cnt.split("peer=")[1].split(/&|#/)[0]:thost
    ptls13 = PTls13 == 1 ? "tls13=true" : "tls13=false"
    puri = ""
    pcert = TLSCertParam(Pcert0, TLSFromURI(cnt));
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
      if(cntt.indexOf("%")==-1 || cntt.split("@")[0].indexOf(":")==-1){ // 2026-05-18 :(%3D)|(\=)
        pwdmtd = Base64.decode(cnt.split("@")[0].replace(/-/g, "+").replace(/_/g, "/").replace(/(%3D)|(\=)/g,"")).split("\u0000")[0].split(":")
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
    mtd = "method=" + pwdmtd[0];
    pwdmtd.splice(0,1) 
    pwd = "password=" + pwdmtd.reduce(joinx);
    if (cntt.indexOf("v2ray-plugin")==-1 && cntt.indexOf("plugin=v2ray")==-1) { //Shadowrocket style v2-plugin
      obfs = cnt.split("obfs%3D")[1] != null ? ", obfs=" + cnt.split("obfs%3D")[1].split("%3B")[0].split("#")[0] : "";
      obfshost = cnt.split("obfs-host%3D")[1] != null ? ", obfs-host=" + decodeURIComponent(cnt.split("obfs-host%3D")[1].split("&")[0].split("#")[0]) : "";
    } else if (cnt1 != undefined){
      cnt1 = JSON.parse(cnt1)
      obfs= cnt1.tls? ", obfs=wss" : ", obfs=ws"
      obfshost = cnt1.host? ", obfs-host="+cnt1.host+", "+TLSCertParam(Pcert0, TLSFromURI(subs)) : ""
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

/*
QXFix 修复说明 ⟦2026-07-11 09:51:48 +08⟧
----------------------------------------------------------
仅改动 resource-parser-r.js。
修复 obfs-uri 中逗号被 cnti.split(",") 误拆，并被拼入 tag 的问题。
QuanX 不支持 path/uri 中包含逗号，因此在 QXFix 内部拆字段前，将 obfs-uri 值中逗号列表压缩为首项，并保留最后的 query。
----------------------------------------------------------
*/
// 纠正部分不规范的写法(没有把 tag 写在最后)
function QXFix(cntf, source) {
var cnti = cntf.replace(/\s*tag\s*\=/g,"tag=").replace("chacha20-poly","chacha20-ietf-poly")
try {
  function normalizeQXObfsUriValue(str) {
    var fieldK = "(password|method|udp-relay|udp-over-tcp|fast-open|obfs|obfs-host|obfs-uri|over-tls|tls-host|tls-verification|tls13|aead|tag|username|tls-alpn|server_check_url|tls-cert-sha256|tls-pubkey-sha256|reality-base64-pubkey|reality-hex-shortid|vless-flow)";
    return str.replace(new RegExp("(obfs-uri=)([\\s\\S]*?)(,\\s*" + fieldK + "=|$)", "g"), function(match, key, value, tail) {
      if (value.indexOf(",") == -1) {
        return key + value + tail;
      }
      var first = value.split(",")[0];
      var queryIndex = value.lastIndexOf("?");
      var query = queryIndex == -1 ? "" : value.slice(queryIndex);
      if (first.indexOf("?") != -1) {
        first = first.split("?")[0];
      }
      return key + first + query + tail;
    });
  }
  var hd = cnti.split(",tag=")[0]
  var tag = "tag="+cnti.split(",tag=")[1].split(",")[0].trim()
  var tail = cnti.split(tag+",")
  cnti = tail.length<=1?  cnti : String(hd + ","+tail[1].split("\r")[0] +"," + tag)
  cnti = normalizeQXObfsUriValue(cnti)
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
  return NodeSkip(cntf.split("=")[0].trim(), "无法读取原生 QuanX 字段", false, source)
}
}

// 用于过滤非节点部分（比如整份配置中其它内容）,同时纠正部分不规范的写法(没有把 tag 写在最后)
function isQuanX(content, source, keptSources) {
    var cnts = content.split("\n");
    var nlist = []
    for (var i = 0; i < cnts.length; i++) {
        var cnti = cnts[i];
        var origin = (Array.isArray(source) ? source[i] : source) || {format: "QuanX 结果", raw: cnti};
        if ((HY2Supported && HY2LineKind(cnti) == "quanx") || (MieruSupported && MieruLineKind(cnti) == "quanx")) {
            nlist.push(cnti.trim())
            if (keptSources) keptSources.push(origin)
            continue
        }
        if (cnti.indexOf("=") != -1 && cnti.indexOf("tag") != -1) {
            var cnt = cnti.split("=")[0].trim()
            if (cnt == "http" || cnt == "shadowsocks" || cnt == "trojan" || cnt == "vmess" || cnt == "socks5" || cnt == "vless" ||  cnt == "anytls") {
                nlist.push(QXFix(cnti, origin))
                if (keptSources) keptSources.push(origin)
            }
        }
    }
   return nlist
}

/*
Rewrite pattern quote 修复说明 ⟦2026-07-06 18:29:51 +08⟧
----------------------------------------------------------
仅改动 resource-parser-r.js。
修复 Loon/Surge rewrite 转 QuanX 后，规则最前面的 http/https 匹配正则保留外层双引号的问题：
  - 例如 `"^https://example.com/ad" reject` 之前会输出 `"https://example.com/ad" url reject`
  - 修正点放在 isQuanXRewrite() 最终写入前，覆盖各转换分支与原生 QuanX rewrite 透传
  - 只移除首段 pattern 的成对双引号，不全局删除引号，避免影响 echo/header/script 等内容
----------------------------------------------------------
*/
function RewritePatternQuoteFix(cnti) {
  if (!cnti) { return cnti }
  function stripQuote(pattern) {
    if (pattern.length > 1 && pattern[0] == "\"" && pattern[pattern.length - 1] == "\"") {
      var unquoted = pattern.slice(1, -1).trim();
      if (/^\^?https?\??/i.test(unquoted)) {
        return unquoted;
      }
    }
    return pattern;
  }
  var marker = cnti.indexOf(" url-and-header ") != -1 ? " url-and-header " : " url ";
  var idx = cnti.indexOf(marker);
  if (idx == -1) { return cnti }
  var pattern = cnti.slice(0, idx).trim();
  var rest = cnti.slice(idx);
  if (marker == " url-and-header ") {
    var matched = pattern.match(/^(\"[^\"]+\")(\s+[\s\S]+)$/);
    if (matched) {
      return stripQuote(matched[1]) + matched[2] + rest;
    }
  }
  return stripQuote(pattern) + rest;
}

// 通知预览只显示语法类型和位置。规则原文可能携带脚本参数、地址或正文。
function RuleNoticeLabel(row) {
  var body = RuleNoteBody(row).trim().replace(/^-\s*/, "")
  if (/^hostname\s*=/i.test(body)) return "hostname"
  if (/\sdata-type\s*=/i.test(body)) return "Map Local"
  var filter = /^(AND|OR|NOT|URL-REGEX|DOMAIN(?:-SUFFIX|-KEYWORD|-WILDCARD|-REGEX)?|HOST(?:-SUFFIX|-KEYWORD|-WILDCARD)?|IP-CIDR6?|IP6-CIDR|IP-ASN|GEOIP|USER-AGENT|RULE-SET|PROCESS-NAME)\s*,/i.exec(body)
  if (filter) return filter[1].toUpperCase()
  var jq = /(?:^|\s)(http-(?:request|response)-jq|(?:request|response)-body-json-(?:jq|del|replace))(?=\s|$)/i.exec(body)
  if (jq) return jq[1].toLowerCase()
  var rewrite = /\s(?:url(?:-and-header)?|-)\s+(302|307|reject(?:-200|-dict|-array|-img)?|echo-response|script-(?:echo-response|(?:request|response)-(?:header|body))|(?:request|response)-(?:body|header)|jsonjq-(?:request|response)-body)(?=\s|$)/i.exec(body)
  if (rewrite) return rewrite[1].toLowerCase()
  if (/\bscript-path\s*=/i.test(body)) return "Surge Script"
  return "规则条目"
}

function NotifyRuleResult(kind, rows, report) {
  var hostnameCount = 0
  var kept = 0
  var preview = []
  var nonEmptyRows = 0
  for (var i = 0; i < rows.length; i++) {
    var body = RuleNoteBody(rows[i]).trim()
    if (!body) continue
    nonEmptyRows++
    if (Pcnt && preview.length < 10) {
      preview.push("输出第 " + (i + 1) + " 行" + noticeSeparator + RuleNoticeLabel(rows[i]))
    }
    if (/^hostname\s*=/.test(body)) {
      hostnameCount += body.slice(body.indexOf("=") + 1).split(",").filter(host => host.trim()).length
    } else if (!/^-|^\S+\s+-\s+/.test(body)) {
      kept++
    }
  }

  var details = nodeIssues.slice()
  var hasOutput = kept > 0 || hostnameCount > 0
  if (report.hostnameEmpty) details.push("主机名筛选后无匹配项，请检查 inhn/outhn 或正则。")
  if (!hasOutput && !report.failures.length && !report.hostnameEmpty) {
    details.push(report.filtered ? "请检查筛选参数。" : "未识别到可导入的规则。")
  }
  var warn = details.length > 0 || report.failures.length > 0
  if (!warn && Pntf0 != 1 && !Pcnt) return

  var counts = ["保留 " + kept + " 条"]
  if (report.filtered) counts.push("筛除 " + report.filtered + " 条")
  if (report.duplicates) counts.push("去重 " + report.duplicates + " 条")
  if (hostnameCount || report.hostnameFiltered) counts.push("主机名 " + hostnameCount + " 个")
  if (report.hostnameFiltered) counts.push("主机名筛除 " + report.hostnameFiltered + " 个")
  if (Pdbg && Pntf0 != 0) {
    var format = type0 == "sgmodule" ? "Surge 模块" : type0 == "rewrite" ? "重写" : "分流"
    details.push("识别格式" + noticeSeparator + format)
  }
  var listing = preview.length ? "规则预览\n" + preview.join("\n") : ""
  if (preview.length && nonEmptyRows > preview.length) listing += "\n另 " + (nonEmptyRows - preview.length) + " 条未展开"
  if (report.failures.length) {
    NotifyUnsupportedRules(report.failures, counts.join(noticeSeparator), details, listing)
    return
  }
  var title = !hasOutput ? "⚠️ " + kind + (report.filtered ? "筛选后无规则" : "无可用条目") :
    warn ? "⚠️ " + kind + "处理需检查" : Pcnt ? "ℹ️ " + kind + "解析明细" : "✅ " + kind + "解析完成"
  NotifyNode(title, details, counts.join(noticeSeparator), undefined, listing)
}

function NotifyUnsupportedRules(ignored, counts = "", details = [], listing = "") {
  if (!ignored.length) return
  var groups = new Map()
  for (var item of ignored) {
    var group = groups.get(item.reason)
    if (!group) {
      group = {reason: item.reason, count: 0, rules: [], selected: []}
      groups.set(item.reason, group)
    }
    group.count++
    if (group.rules.length < 10) group.rules.push(item)
  }
  var visible = Array.from(groups.values()).slice(0, 5)
  var shown = 0, truncated = false
  // 按组轮流取样，确保少数原因也有可定位的示例。
  for (var round = 0; round < 10 && shown < 10; round++) {
    for (var group of visible) {
      if (shown == 10) break
      if (round < group.rules.length) {
        group.selected.push(group.rules[round])
        shown++
      }
    }
  }
  var messages = visible.map((group, index) => {
    var reason = group.reason.replace(/[\x00-\x1f\x7f\u0085\u2028\u2029]/g, " ")
    var characters = Array.from(reason)
    if (characters.length > 160) {
      truncated = true
      reason = characters.slice(0, 159).join("") + "…"
    }
    var heading = patn[1][index + 1] + " " + reason + noticeSeparator + group.count + " 条"
    var examples = group.selected.map((item, example) => "  " +
      (item.position ? "第 " + item.position + " 行" : "示例 " + (example + 1)) +
      noticeSeparator + RuleNoticeLabel(item.rule))
    return [heading, ...examples].join("\n")
  })
  if (shown < ignored.length) {
    var rest = "其余 " + (ignored.length - shown) + " 条未展开"
    if (groups.size > visible.length) rest += noticeSeparator + "另有 " + (groups.size - visible.length) + " 组原因"
    messages.push(rest)
  }
  if (details.length) messages.push(details.slice(0, 3).join("\n"))
  if (listing) messages.push(listing)
  var summary = [counts, "展示 " + shown + "/" + ignored.length + " 条", truncated ? "长原因已截断" : ""].filter(Boolean)
  NotifyNode("⚠️ 已忽略 " + ignored.length + " 条无法自动转换的规则",
    [], summary.join(noticeSeparator), undefined, messages.join("\n\n"))
}

// ⟦2026-11-02 18:07⟧ reject/跳转重写转换排除已识别的分流，避免把末尾策略误转为 url reject。
function isQuanXRewrite(content, failures) {
  var cnt = content
  var cnt0=[]
  var ignoredEcho = failures || []
  var section = "", inComment = false, sectionInComment = false
  for (var i = 0; i< cnt.length; i++){
    if(cnt[i]){
      var cnti = cnt[i].trim()
      var originalRewrite = cnti
      var position = i + 1
      var noteParts = RuleNoteSplit(cnti)
      cnti = noteParts.body
      if (!noteParts.note && /^\{#/.test(cnti)) { continue } // 未闭合说明不作为重写正文透传。
      if (!cnti || /^(?:#|;|\/\/)/.test(cnti)) { continue }
      // ⟦2026-09-16 16:36 +08⟧ 注释内的配置区段仅在该注释中有效，不延续到脚本正文。
      if (/^\/\*/.test(cnti)) { inComment = inComment || cnti.indexOf("*/", 2) == -1; continue }
      if (/^\*+\/(?:\s|$)/.test(cnti)) {
        if (sectionInComment) { section = "" }
        inComment = false; sectionInComment = false; continue
      }
      if (/^\[[^\]]+\]$/.test(cnti)) { section = cnti.toLowerCase(); sectionInComment = inComment; continue }
      // 分流区段外只识别已知类型且逗号后仍有内容的行，不再把 url, 等 JS 字段视为分流。
      var filterRule = /^[a-z][\w-]*\s*,/i.test(cnti) && (
        section == "[rule]" || section == "[filter_local]" ||
        /^(?:(?:host|domain)(?:-[\w-]+)?|ip-cidr6?|ip6-cidr|ip-asn|geoip|user-agent)\s*,\s*\S/i.test(cnti) ||
        /^(?:AND|OR|NOT)\s*,\s*\(/i.test(cnti)
      )
      var failureCount = ignoredEcho.length
      // echo-response 修复说明 ⟦2026-09-16 09:15:50 +08⟧
      // ⟦2026-09-16 10:32 +08⟧ 拦截上一版本生成的本地辅助脚本引用，不影响用户自己的远程脚本参数。
      if (!/^(?:#|;|\/\/)/.test(cnti) && /\surl(?:-and-header)?\s+script-echo-response\s+resource-parser-response\.js(?:#[^\s]*)?$/i.test(cnti)) {
        ignoredEcho.push({ rule: originalRewrite, position, reason: "旧版本地辅助脚本引用已停用，解析器不能自动部署该文件" })
        continue
      }
      // 内联 text 优先保留正文效果，不引入额外文件依赖。
      if (IsMapLocalInline(cnti)) {
        var inlineRewrite = MapLocalInline2QX(cnti, ignoredEcho)
        if (inlineRewrite) {
          cnt0.push(RuleNoteJoin(noteParts.note, RewritePatternQuoteFix(inlineRewrite)))
        }
        for (var n = failureCount; n < ignoredEcho.length; n++) {
          ignoredEcho[n].rule = originalRewrite
          ignoredEcho[n].position = position
        }
        continue
      }
      // jq 先于脚本识别，避免表达式里的 type/pattern/http-response 被误认为脚本参数。
      if (IsJsonJQRewrite(cnti)) {
        if (version < 845) {
          ignoredEcho.push({ rule: originalRewrite, position, reason: "jsonjq 需要 Quantumult X build 845 或更新版本" })
          continue
        }
        cnti = JsonJQRewrite2QX(cnti)
        if (!cnti) { ignoredEcho.push({ rule: originalRewrite, position, reason: /^http-(?:request|response)-jq\s+http-(?:request|response)(?:-jq)?\s/i.test(originalRewrite) ? "jq 规则的 URL 位置多出 http-request/http-response 动作，源格式错误" : "jq 规则缺少有效 URL、表达式，或引号未闭合" }) }
      } else if (/\surl(?:-and-header)?\s+jsonjq-(?:request|response)-body\s/i.test(cnti)) {
        cnti = cnti.replace(/^\^http/, "http")
      } else if (filterRule && /^(?:AND|OR|NOT)\s*,/i.test(cnti)) {
        ignoredEcho.push({ rule: originalRewrite, position, reason: "逻辑组合规则无法直接转换，拆开会改变匹配条件" })
        continue
      } else if (cnti.indexOf("pattern")!=-1 && cnti.indexOf("type")!=-1 || cnti.indexOf("http-r")!=-1) {
        cnti=SGMD2QX(cnti, ignoredEcho, position)[0] || ""
        //console.log(cnti)
      }else if (!filterRule && (cnti.indexOf(" 302")!=-1 || cnti.indexOf(" 307")!=-1 || (/\s(_|-)\s(reject|REJECT)/.test(cnti)) || (/\sreject$/.test(cnti)) || (/\sreject-/.test(cnti))) && cnti.indexOf(" url ")==-1 && cnti.indexOf(" url-and-header ")==-1 ){
        cnti=SGMD2QX(cnti, ignoredEcho, position)[0] || ""
        //console.log("sss",cnti)
      }else if(cnti.indexOf(" data=")!=-1){
        cnti = SGMD2QX("[Map Local]\n"+cnti, ignoredEcho, position)[0] || ""
        //cnti=cnti.replace(/ /g, "").split("data=")[0] + " url " + "reject-dict"
      }else if(cnti.indexOf("URL-REGEX")!=-1 || cnti.indexOf(" header")!=-1 || cnti.replace(/ /g,"").indexOf("hostname=")!=-1){
        cnti=SGMD2QX(cnti, ignoredEcho, position)[0] || ""
      }else if (cnti.indexOf(" url ")!=-1 && cnti.indexOf(" simple-response ")==-1 && cnti.indexOf(" url = ")==-1){ // 2023-03-09 去掉 quan类型的 simple- response
        cnti = cnti.replace("^http","http") // 去掉 ^ 以去重
        cnti= cnti.split(" ")[1] == "url" ? cnti : ""
      } else if (cnti.indexOf(" url-and-header ")!=-1 ){ // url-and-header : ^https:xxx.com header-content url-and-header type-rule content
        cnti= cnti //cnti.split(" ")[2] == "url-and-header" ? cnti : ""
      } else if (filterRule) {
        if (Pmix==1) { cnti = Rule_Policy(cnti, ignoredEcho, position) }
        else { ignoredEcho.push({ rule: originalRewrite, position, reason: "重写资源混合分流需要 Quantumult X build 844 或更新版本" }); cnti = "" }
      } else {
        cnti=""
      }
      if (noteParts.note) {
        for (var n = failureCount; n < ignoredEcho.length; n++) { ignoredEcho[n].rule = originalRewrite }
      }
      if (!cnti && ignoredEcho.length == failureCount && (/^\[(?:rule|url rewrite|body rewrite|map local|script)\]$/.test(section) || /\sdata-type\s*=|^http-(?:request|response)(?:\s|$)/i.test(noteParts.body))) {
        ignoredEcho.push({ rule: originalRewrite, position, reason: "未识别到此条目的可靠 Quantumult X 转换语法" })
      }
      if (/\surl(?:-and-header)?\s+jsonjq-(?:request|response)-body\s/i.test(cnti) && version < 845) {
        ignoredEcho.push({ rule: originalRewrite, position, reason: "jsonjq 需要 Quantumult X build 845 或更新版本" })
        continue
      }
      if (cnti!="" && cnti.trim()[0]!="[" && cnti.indexOf("RULE-SET")==-1 && !/cronexp\=|type\=cron/.test(cnti.replace(/ /g,""))) { //&& !RuleK.some(RuleCheck)
        if (!(/\;$/.test(cnti))) { // 某些特殊情形 let url = xxx;
        // 原生/转换后的 echo-response 也排除内联 JSON、HTML、远程 URL 和空文件名，保留本地文件引用。
        var echo = cnti.match(/\surl(?:-and-header)?\s+echo-response\s+\S[\s\S]*?\s+echo-response(?:\s+([\s\S]*))?$/i)
        var echoBody = echo ? (echo[1] || "").trim().replace(/^(['"])([\s\S]*)\1$/, "$2") : ""
        if (echo && (!echoBody || /^(?:\{[\s\S]*\}|\[[\s\S]*\]|<[\s\S]*>)$|^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(echoBody))) {
          var echoReason = !echoBody ? "echo-response 缺少本地正文文件名" : /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(echoBody) ? "echo-response 需要本机 Data 目录中的正文文件，不能直接引用 URL/URI" : "echo-response 不接受内联正文，需要本机 Data 目录中的正文文件"
          ignoredEcho.push({ rule: originalRewrite, position, reason: echoReason })
          continue
        }
        cnt0.push(RuleNoteJoin(noteParts.note, RewritePatternQuoteFix(cnti))) // 说明仅在正文通过检查后回附
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
    try {
        const tools = Tools();
        const load = new Function("$", script + "\n;return rename;");
        const names = load(tools.rename)(tools.getNodeInfo(servers));
        if (Array.isArray(names) && names.length === servers.length &&
            Array.from(names).every(name => typeof name === "string" && !/[\r\n\x00-\x1f\x7f\u0085\u2028\u2029]/.test(name))) {
            return servers.map((row, i) => row.replace(/(,\s*tag=).*$/, (_, field) => field + names[i]));
        }
        nodeIssues.push("脚本重命名失败" + noticeSeparator + "srename 需为每个节点返回一个名称。");
    } catch (err) {
        nodeIssues.push("脚本重命名失败，请检查 srename 参数。");
    }
    return servers;
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
function Surge2QX(conf, sources, rawLine) {
  var rows = conf.split("\n")
  var nodes = []
  for (var index = 0; index < rows.length; index++) {
    var row = rows[index]
    var isHy2 = HY2LineKind(row) == "surge"
    var isLoon = IsLoonNode(row)
    if (!isHy2 && !isLoon && !isSurge(row)) continue
    var source = {format: isLoon ? "Loon" : "Surge", raw: rawLine ?? row.replace(/\r$/, "")}
    if (isHy2) {
      var hy2 = HY2Convert("surge", row, source)
      if (hy2) {
        nodes.push(hy2)
        if (sources) sources.push(source)
      }
      continue
    }
    var protocol = row.split("=")[1].split(",")[0].trim()
    var node = ""
    var skippedBefore = PNS
    try {
      if (isLoon) node = Loon2QX(row, source)
      else if (protocol == "trojan") node = Strojan2QX(row)
      else if (protocol == "http" || protocol == "https") node = Shttp2QX(row)
      else if (protocol == "vmess") node = SVmess2QX(row)
      else if (protocol == "ss") node = SSS2QX(row)
      else if (protocol == "socks5" || protocol == "socks5-tls") node = SS52QX(row)
      else if (protocol == "custom") node = SCT2QX(row)
      else if (protocol == "anytls") {
        if (!(version > 913)) {
          NodeSkip("anytls", "需要 Quantumult X build 914+", true, source)
          continue
        }
        node = SATS2QX(row)
      } else {
        NodeSkip(protocol, unsupportedProtocolMessage, true, source)
        continue
      }
      if (!node) {
        if (PNS == skippedBefore) NodeSkip(protocol, "无法读取节点字段", false, source)
        continue
      }
      if (Pudp0 != 0) node = XUDP(node, Pudp0)
      if (Ptfo0 != 0) node = XTFO(node, Ptfo0)
      if (row.indexOf("test-url") != -1) {
        var checkurl = ", server_check_url" + row.split("test-url")[1].split(",")[0]
        node = node.replace(/\,(\s)*tag/, checkurl + ", tag")
      }
      nodes.push(node)
      if (sources) sources.push(source)
    } catch (err) {
      NodeSkip(protocol, err.nodeReason || "无法读取节点字段", !!err.nodeReason, source)
    }
  }
  return nodes
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
    var pverify = TLSCertParam(Pcert0, TLSFromProxyLine(cnt));
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
  var match = /^(?!\s*[#;\/\[])[^=\n]+=\s*([a-z][\w-]*)\s*,/.exec(content)
  return !!match && ["http", "https", "ss", "trojan", "vmess", "custom", "socks5", "socks5-tls", "anytls", "wireguard", "tuic"].includes(match[1])
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
  var pverify = TLSCertParam(Pcert0, TLSFromProxyLine(cnt));
  var phost = cnt.indexOf("sni")!=-1? "tls-host="+cnt.split("sni")[1].split(",")[0].split("=")[1]:""
  var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
  var nserver = "trojan= " + [ipport, pwd, ptls, ptfo, ptls13, phost,pverify, tag].filter(Boolean).join(", ");
  return nserver
}

// surge中 anytls类型转换
function SATS2QX(content) {
  try {
    var cnt = content;
    var tag = "tag=" + cnt.split("=")[0].trim();
    var ipport = cnt.split(",")[1].trim() + ":" + cnt.split(",")[2].trim();
    var pwd = "password=" + cnt.split("password")[1].split(",")[0].split("=")[1].trim();
    var ptls = "over-tls=true";
    //var ptfo = paraCheck(cnt, "tfo") == "true" ? "fast-open=true" : "fast-open=false";
    var pverify = TLSCertParam(Pcert0, TLSFromProxyLine(cnt));
    var phost = cnt.indexOf("sni")!=-1? "tls-host="+cnt.split("sni")[1].split(",")[0].split("=")[1]:""
    pudp = Pudp0 == -1 ? "udp-relay=false" : "udp-relay=true" // 默认开启
    var nserver = "anytls= " + [ipport, pwd, ptls, pverify, phost,pudp, tag].filter(Boolean).join(", ");
    return nserver
  } catch (error) {
    return ""
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
    var pverify = TLSCertParam(Pcert0, TLSFromProxyLine(cnt));
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
    var pverify = TLSCertParam(Pcert0, TLSFromProxyLine(cnt));
    var ptls13 = paraCheck(cnt, "tls13") == "true" ? "tls13=true" : "tls13=false";
    ptls = ptls + ", " + pverify + ", " + ptls13
  }
  var nserver = puname != "" ? "socks5= " + [ipport, puname, pwd, ptls, ptfo, tag].join(", ") : "socks5= " + [ipport, ptls, ptfo, tag].join(", ");
  return nserver
}

function IsLoonNode(row) {
  return /^(?![#;\/\[])[^=\r\n]+=\s*(?:ShadowsocksR?|Trojan|VLESS|AnyTLS)\s*,/.test(row.trim())
}

function Loon2QX(cnt, source) {
  var type = cnt.split("=")[1].split(",")[0].trim()
  var node = ""
  if (type == "Shadowsocks") { //ss 类型
      node = LoonSS2QX(cnt)
  } else if (type == "ShadowsocksR") { //ssr 类型
      node = LoonSSR2QX(cnt)
  } else if (type == "Trojan") { // trojan 类型
      node = LoonTJ2QX(cnt)
  } else if (type == "VLESS") { // vless 类型
    node = LoonVL2QX(cnt, source)
  } else if (type == "AnyTLS") {
    node = version > 913 ? LoonTLS2QX(cnt, source) : NodeSkip("anytls", "需要 Quantumult X build 914+", true, source)
  }
  return node
}

// Loon Trojan 转换修复说明 ⟦2026-08-11 14:25:35 +08⟧
// Loon 的 Trojan 密码位于第 4 个逗号字段，不能复用 Surge 的 password= 取值逻辑。
function LoonTJ2QX(cnt) {
  var tag = "tag=" + cnt.split("=")[0].trim();
  var ipport = [cnt.split(",")[1].trim(), cnt.split(",")[2].trim()].join(":");
  var pwd = "password=" + cnt.split(",")[3].trim().replace(/^\"|\"$/g, "");
  var phost = cnt.indexOf("sni=") != -1 ? "tls-host=" + cnt.split("sni=")[1].split(",")[0].trim() : "";
  var pverify = TLSCertParam(Pcert0, TLSFromProxyLine(cnt));
  var pudp = paraCheck(cnt, "udp") == "true" ? "udp-relay=true" : "udp-relay=false";
  return "trojan=" + [ipport, pwd, "over-tls=true", pverify, phost, pudp, tag].filter(Boolean).join(", ");
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

// Loon VLESS 的位置字段与可选传输字段分别解析。
function LoonVL2QX(line, source) {
  var parts = line.split(",")
  var endpoint = NodeHost(parts[1].trim()) + ":" + NodePort(parts[2].trim())
  var auth = parts[3].trim().replace(/^"(.*)"$/, "$1")
  if (!LegacyNodeValue(auth)) NodeInvalid("VLESS 认证字段缺失或无效")
  var fields = NodeFields(parts.slice(4).join(","), true)
  var transport = fields.transport || "tcp"
  var tls = NodeBool(fields["over-tls"], false)
  if (!["tcp", "http", "ws"].includes(transport)) return NodeTransportSkip("vless", transport, source)
  if (transport == "http" && tls) return NodeSkip("vless", "无法等价保留 HTTP 传输的 TLS", true, source)
  var obfs = transport == "ws" ? tls ? "wss" : "ws" : transport == "http" ? "http" : tls ? "over-tls" : ""
  var host = fields.host || fields["tls-name"] || fields.sni
  var verification = tls && (fields["skip-cert-verify"] !== undefined || TLSCertDomainValue(Pcert0))
    ? TLSCertParam(Pcert0, TLSFromSkipVerify(fields["skip-cert-verify"])) : ""
  return "vless=" + [
    endpoint, "method=none", "password=" + auth, obfs ? "obfs=" + obfs : "",
    host ? "obfs-host=" + host : "", fields.path ? "obfs-uri=" + fields.path : "", verification,
    fields.flow ? "vless-flow=" + fields.flow : "",
    fields["public-key"] ? "reality-base64-pubkey=" + fields["public-key"] : "",
    fields["short-id"] !== undefined ? "reality-hex-shortid=" + fields["short-id"] : "",
    "tag=" + parts[0].split("=")[0].trim()
  ].filter(Boolean).join(", ")
}

// loon anytls
//loon-tls = AnyTLS,1.1.1.1,443,"jdjdhd",sni=abc.com,skip-cert-verify=true,udp=true,block-quic=false
function LoonTLS2QX(content, source) {
  var fields = /^[^,]+,\s*([^,]+),\s*([^,]+),\s*(?:"([^"]*)"|([^,"]*))\s*(?=,|$)/.exec(content)
  if (!fields) return NodeSkip("anytls", "无法读取 Loon 节点字段", false, source)
  var auth = fields[3] === undefined ? fields[4].trim() : fields[3]
  if (!NodeSafeValue(auth)) return NodeSkip("anytls", "认证密码缺失或无法安全表示", false, source)
  var options = content.slice(fields[0].length)
  var sni = /,\s*sni\s*=\s*([^,]+)/.exec(options)
  var verify = TLSFromProxyLine(options)
  var tag = "tag=" + content.split("=")[0].trim()
  var endpoint = fields[1].trim() + ":" + fields[2].trim()
  var udp = Pudp0 == -1 ? "udp-relay=false" : "udp-relay=true"
  return "anytls= " + [
    endpoint, "password=" + auth, "over-tls=true", TLSCertParam(Pcert0, verify),
    sni ? "tls-host=" + sni[1].trim() : "", udp, tag
  ].filter(Boolean).join(", ")
}

////////////////////

/*
YAMLFix 修复说明 ⟦2026-07-02 10:23:41 HKT⟧
----------------------------------------------------------
仅改动 resource-parser-r.js。
修复 inline YAML map 中引号内逗号被拆坏的问题：
  - 不再删除 value 引号后全局 replace(/,/g, "\n   ")
  - 改为只拆顶层逗号，保留 "VM, WS"、"pa,ss" 以及嵌套 {path:..., headers:{...}}
----------------------------------------------------------
*/
function YAMLFix(cnt){
  function splitInlineYamlMapItems(str) {
    var parts = [];
    var buf = "";
    var quote = "";
    var escaped = false;
    var depth = 0;
    var leftBracketToken = "yaml@bug𝟙";
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (quote) {
        buf += ch;
        if (quote == "\"" && ch == "\\" && !escaped) {
          escaped = true;
          continue;
        }
        if (quote == "'" && ch == "'" && str[i + 1] == "'") {
          buf += str[++i];
          continue;
        }
        if (ch == quote && !escaped) {
          quote = "";
        }
        escaped = false;
      } else if (str.slice(i, i + leftBracketToken.length) == leftBracketToken) {
        depth++;
        buf += leftBracketToken;
        i += leftBracketToken.length - 1;
      } else if (ch == "\"" || ch == "'") {
        quote = ch;
        buf += ch;
      } else if (ch == "{" || ch == "[") {
        depth++;
        buf += ch;
      } else if (ch == "}" || ch == "]") {
        depth--;
        buf += ch;
      } else if (ch == "," && depth == 0) {
        if (buf.trim() != "") {
          parts.push(buf.trim());
        }
        buf = "";
      } else {
        buf += ch;
      }
    }
    if (buf.trim() != "") {
      parts.push(buf.trim());
    }
    return parts;
  }

  function expandInlineYamlMapLine(line) {
    var match = line.match(/^(\s*)-\s*(\{[\s\S]*\})\s*(?:#.*)?$/);
    if (!match) {
      return line;
    }
    var indent = match[1];
    var body = match[2].trim().slice(1, -1);
    var parts = splitInlineYamlMapItems(body);
    if (parts.length == 0) {
      return line;
    }
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      out.push((i == 0 ? indent + "- " : indent + "  ") + parts[i]);
    }
    return out.join("\n");
  }

  cnt = cnt.replace(/\[/g,"yaml@bug𝟙").replace(/\\r/g,"").replace(/\*/g,"yaml@bug𝟚")
  //2022-08-08 增加 .replace(/\*/g,"🌟@bug2") 以解决名字以 * 开始时引起的部分问题
  if (cnt.indexOf("{") != -1 && /\{\s*\"*(name|type|server)/.test(cnt)){ // - { } 类型 yaml
    cnt =  cleanYamlSpaces(cnt) // 2026-02-06 部分空格解析错误
    cnt = cnt.replace(/(^|\n)- /g, "$1  - ").replace(/    - /g,"  - ")
    //2022-04-11 remove tls|skip from replace(/, (Host|host|path|mux)/g,",   $1")
    cnt = cnt.split("\n").map(expandInlineYamlMapLine).join("\n").replace(/, short-id\"{0,1}/gi,", short-id")
  }
  cnt = cnt.replace(/\n\s*\-\s*\n.*name/g,"\n  - name").replace(/\$|\`/g,"").split("proxy-providers:")[0].split("proxy-groups:")[0].replace(/\"(name|type|server|port|cipher|password|uuid|alterId|udp)(\"*)/g,"$1")
  // 缩进修正
  // old 2023-03-23  👇修正部分类型 
  // cnt = cnt.replace(/\n\s{2}([a-zA-Z]+.*\:)/g,"\n    $1").replace(/\n(\-.*)/g,"\n  $1")
  //new  2026-01-08 
  cnt = /\n\-\s[a-zA-Z]/.test(cnt)? cnt.replace(/\n(.*(\:|\-))/g,"\n  $1"):cnt.replace(/\n\s{2}([a-zA-Z]+.*\:)/g,"\n    $1").replace(/\n(\-.*)/g,"\n  $1")
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
  // 1. 结构修复：解决你的 "...right"]" 缺少 "}" 的问题
  // 逻辑：如果发现 冒号+值+"]" 的组合，说明少了一个 "}"，把它变成 "}]"
  // (这里兼容了值带引号或不带引号的情况)
  s = s.replace(/(:\s*(?:".*?"|[^,}\]]+?))\s*]/g, '$1}]');
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


function ValidateClashNode(node, source) {
  var type = node.type
  try {
    node.server = NodeHost(node.server)
    NodePort(node.port)
  } catch (err) {
    return NodeSkip(type, err.nodeReason, false, source)
  }
  if ((type == "vmess" || type == "vless") && !LegacyNodeValue(node.uuid)) {
    return NodeSkip(type, "UUID 缺失或无效", false, source)
  }
  if (["ss", "ssr", "trojan", "anytls"].includes(type) && !LegacyNodeValue(node.password)) {
    return NodeSkip(type, "认证密码缺失或无效", false, source)
  }
  if ((type == "ss" || type == "ssr") && !LegacyNodeValue(node.cipher)) {
    return NodeSkip(type, "加密方式缺失或无效", false, source)
  }
  if (type == "ssr" && (!LegacyNodeValue(node.protocol) || !LegacyNodeValue(node.obfs))) {
    return NodeSkip(type, "SSR 协议或混淆方式缺失或无效", false, source)
  }

  if (type == "ss") {
    var plugin = node.plugin
    var options = node["plugin-opts"]
    if (plugin || options) {
      var modes = !plugin || /^(?:obfs|simple-obfs|obfs-local)$/.test(plugin) ? ["http", "tls"] : []
      if (!plugin || plugin == "v2ray-plugin") modes.push("websocket")
      if (!options || !modes.includes(options.mode)) {
        return NodeSkip("ss", "无法等价转换 Clash SS 的插件", true, source)
      }
    }
  }

  if (node.tls !== undefined) node.tls = NodeBool(node.tls)
  if (type == "vmess" || type == "trojan" || type == "vless") {
    var network = node.network || "tcp"
    var supported = type == "vmess" ? ["tcp", "ws", "http"] : ["tcp", "ws"]
    if (!supported.includes(network)) return NodeTransportSkip(type, network, source)
    if (network == "http" && node.tls) {
      return NodeSkip(type, "无法等价保留 HTTP 传输的 TLS", true, source)
    }
    var wsOptions = node["ws-opts"]
    if (network == "ws" && wsOptions && NodeBool(wsOptions["v2ray-http-upgrade"], false)) {
      return NodeTransportSkip(type, "httpupgrade", source)
    }
  }
  return true
}

// Clash parser
function Clash2QX(cnt, sourceText = cnt, sources = []) {
  const yaml = new YAML()
  var original = ExtendedClashOriginal(cnt)
  var bb
  //if (Pdbg==1) { $notify(" Before YAML Parse", "content", cnt)}
  // 如果本身为json则无需解析
  if (Array.isArray(original) && original.length && original.every(node => node && ExtendedClashType(node.type))) {
    bb = original
  } else {
    try {
      aa = JCheck(cnt)==0 ? JSON.stringify(yaml.parse(reorderYamlByNesting(YAMLFix(cnt)))).replace(/yaml@bug𝟙/g,"[").replace(/冒号/gmi,":").replace(/yaml@bug𝟚/g,"*") : cnt
      for (var i=0;i<10;i++) {
        aa = aa.replace(new RegExp(patn[4][i], "gmi"),patn[0][i])
      }
      bb = JSON.parse(aa).proxies
    } catch (err) {
      if (!Array.isArray(original) || !original.some(node => node && ExtendedClashType(node.type))) throw err
      bb = original
    }
  }
  if (!Array.isArray(bb) && Array.isArray(original) && original.some(node => node && ExtendedClashType(node.type))) bb = original
  if (!Array.isArray(bb)) throw new Error("Clash proxies must be a list")
  var originalAligned = Array.isArray(original) && original.length == bb.length &&
    original.every((node, index) => node && bb[index] && node.type == bb[index].type)
  //console.log(bb)
  var nl = bb.length
  var records = ClashSourceRecords(sourceText, sourceText != cnt)
  var exact = records.length == nl
  var nodelist=[]
  for (var i = 0; i < nl; i++) {
    var typecc = ""
    var raw = exact ? records[i] : JSON.stringify(originalAligned ? original[i] : bb[i])
    var source = {format: "Clash", raw, fields: !exact}
    try {
      var node = bb[i]
      typecc = node && node.type
      if (typeof typecc == "string" && /^mieru$/i.test(typecc)) {
        node = originalAligned || !MieruSupported
          ? MieruConvert("clash", originalAligned ? original[i] : node, source)
          : NodeSkip("mieru", "无法安全读取 Clash 原始字段", false, source)
        if (node) {
          nodelist.push(node)
          sources.push(source)
        }
        continue
      }
      if (HY2Type(typecc)) {
        node = originalAligned || !HY2Supported
          ? HY2Convert("clash", originalAligned ? original[i] : node, source)
          : NodeSkip("hysteria2", "无法安全读取 Clash 原始字段", false, source)
        if (node) {
          nodelist.push(node)
          sources.push(source)
        }
        continue
      }
      if (["ss", "ssr", "vmess", "trojan", "http", "socks5", "vless", "anytls"].includes(typecc) &&
          !ValidateClashNode(node, source)) continue
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
      } else if (typecc == "anytls") {
        if (!(version > 913)) {
          NodeSkip("anytls", "需要 Quantumult X build 914+", true, source)
          continue
        }
        node = CTLS2QX(node)
      } else {
        NodeSkip(typecc, typecc ? unsupportedProtocolMessage : "缺少 Clash 节点类型", !!typecc, source)
        continue
      }
      if (!node) continue
      node = Pudp0 != 0 ? XUDP(node, Pudp0) : node
      node = Ptfo0 != 0 ? XTFO(node, Ptfo0) : node
      node = node.replace(/^([^,]*)\s+/g, (match, endpoint) => endpoint.replace(/\s+/g, ""))
      nodelist.push(node)
      sources.push(source)
    } catch (err) {
      NodeSkip(typecc, err.nodeReason || "无法读取 Clash 节点字段", !!err.nodeReason, source)
    }
  }
  return nodelist.join("\n")
}

/*
Clash YAML name Unicode 修复说明 ⟦2026-07-06 18:50:58 +08⟧
----------------------------------------------------------
仅改动 resource-parser-r.js。
修复 Clash YAML server name 中双层转义 Unicode 未还原的问题：
  - "\\U0001F534"、"\U0001F534" 均会还原为对应 emoji/字符
  - 新增解码限定在 Clash 节点 name -> QuanX tag，不扩大 YAML 全局字段处理范围
----------------------------------------------------------
*/
function ClashNameFix(name) {
  var text = typeof name == "undefined" || name === null ? "" : String(name);
  function safeCodePoint(fallback, hex) {
    var code = parseInt(hex, 16);
    if (!isFinite(code) || code < 0 || code > 0x10FFFF) {
      return fallback;
    }
    return String.fromCodePoint(code);
  }
  return text
    .replace(/\\\\U([0-9A-Fa-f]{8})/g, function(match, hex) {
      return safeCodePoint(match, hex);
    })
    .replace(/\\U([0-9A-Fa-f]{8})/g, function(match, hex) {
      return safeCodePoint(match, hex);
    })
    .replace(/\\\\u\{([0-9A-Fa-f]+)\}/g, function(match, hex) {
      return safeCodePoint(match, hex);
    })
    .replace(/\\u\{([0-9A-Fa-f]+)\}/g, function(match, hex) {
      return safeCodePoint(match, hex);
    })
    .replace(/\\\\u([0-9A-Fa-f]{4})/g, function(match, hex) {
      return String.fromCharCode(parseInt(hex, 16));
    })
    .replace(/\\u([0-9A-Fa-f]{4})/g, function(match, hex) {
      return String.fromCharCode(parseInt(hex, 16));
    });
}

//Clash ss type server
function CSS2QX(cnt) {
  tag = "tag="+ClashNameFix(cnt.name)
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  mtd = "method="+ cnt.cipher
  udp = cnt.udp ? "udp-relay=true" : "udp-relay=false"
  uot = cnt["udp-over-tcp"] ?  "udp-over-tcp=true" : "udp-over-tcp=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  obfs = cnt["plugin-opts"] ? "obfs=" + cnt["plugin-opts"].mode : ""
  ohost = cnt["plugin-opts"] && cnt["plugin-opts"].host ? "obfs-host=" + cnt["plugin-opts"].host : ""
  ouri = ""
  cert = ""
  if (obfs.indexOf("websocket") != -1) {
      obfs = NodeBool(cnt["plugin-opts"].tls, false) ? "obfs=wss" : "obfs=ws"
      ohost = cnt["plugin-opts"].host? "obfs-host=" + cnt["plugin-opts"].host:""
      ouri = cnt["plugin-opts"].path? "obfs-uri=" + cnt["plugin-opts"].path: ""
    if (obfs == "obfs=wss") { // tls verification
      cert = TLSCertParam(Pcert0, TLSFromSkipVerify(cnt["plugin-opts"]["skip-cert-verify"] ?? cnt["skip-cert-verify"]))}
  }
  node = "shadowsocks="+[ipt, pwd, mtd, udp, uot, tfo, obfs, ohost, ouri, cert, tag].filter(Boolean).join(", ")
  return node
}

//Clash ssr type server
function CSSR2QX(cnt) {
  tag = "tag="+ClashNameFix(cnt.name)
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
  tag = "tag="+ClashNameFix(cnt.name)
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
  const phost = getValue(()=>cnt["ws-opts"]["headers"]["Host"]) 
  ohost = cnt["ws-headers"] && cnt["ws-headers"]["Host"] ? "obfs-host=" + cnt["ws-headers"]["Host"] : ""
  ohost = phost ? "obfs-host="+phost : ohost
  //ohost= cnt["ws-opts"]? "obfs-host=" + cnt["ws-opts"]["headers"]["Host"] : ohost
  ohost = cnt["servername"]? "obfs-host=" + cnt["servername"] : ohost
  ouri = cnt["ws-path"]? "obfs-uri="+cnt["ws-path"] : ""
  if (cnt["ws-opts"] && cnt["ws-opts"].path) ouri = "obfs-uri=" + cnt["ws-opts"].path
  cert = cnt.tls ? TLSCertParam(Pcert0, TLSFromSkipVerify(cnt["skip-cert-verify"])) : ""
  caead = cnt["alterId"] && cnt["alterId"]!=0? "aead=false" : "" // aead 选项
  //caead = cnt["alterId"] == 0? "aead=true" : caead // aead 选项
  //caead=""
  //$notify(cert)
  node = "vmess="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, ouri, cert, caead, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}


//Clash Trojan
function CT2QX(cnt) {
  tag = "tag="+ClashNameFix(cnt.name)
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  otls = "over-tls=true"
  opath=""
  ohost=""
  cert = TLSCertParam(Pcert0, TLSFromSkipVerify(cnt["skip-cert-verify"]))
  tls13 = PTls13 == 1 ? "tls13=true" : "tls13=false"
  udp = cnt.udp ? "udp-relay=false" : "udp-relay=false"
  tfo = cnt.tfo ? "fast-open=true" : "fast-open=false"
  if (cnt.network=="ws") { //wss类型
    otls = "obfs=wss"
    //$notify("trojan","WS",JSON.stringify(cnt))
    if (cnt["ws-opts"]){
    opath = cnt["ws-opts"]["path"]? "obfs-uri="+cnt["ws-opts"]["path"] : ""
    const wsHost = getValue(() => cnt["ws-opts"]["headers"]["Host"])
    ohost = wsHost ? "obfs-host=" + wsHost : ""
    }
    //$notify("trojan","WS",opath+":"+ohost)
  }
  node = "trojan="+[ipt, pwd, otls, opath, ohost, cert, tls13, udp, tfo, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}

// Clash Anytls 2026-04-15

function CTLS2QX(cnt) {
  tag = "tag="+ClashNameFix(cnt.name)
  ipt = cnt.server+":"+cnt.port
  pwd = "password=" + cnt.password
  otls = "over-tls=true"
  opath=""
  ohost = cnt.sni ? "tls-host=" + cnt.sni : ""
  cert = TLSCertParam(Pcert0, TLSFromSkipVerify(cnt["skip-cert-verify"]))
  pudp = Pudp0 == -1 ? "udp-relay=false" : "udp-relay=true" // 默认开启
  node = "anytls="+[ipt, pwd, otls, ohost, pudp, cert, tag].filter(Boolean).join(", ")
  //console.log(node)
  return node
}

// Clash http
function CH2QX(cnt){
    tag = "tag="+ClashNameFix(cnt.name)
    ipt = cnt.server+":"+cnt.port
    uname = cnt.username ? "username=" + cnt.username : ""
    pwd = cnt.password && typeof(cnt.password) == "string" ? "password=" + cnt.password : ""
    tls = cnt.tls ? "over-tls=true" : ""
    cert = cnt.tls ? TLSCertParam(Pcert0, TLSFromSkipVerify(cnt["skip-cert-verify"])) : ""
    node = "http="+[ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(", ")
    //console.log(node)
    return node
}

// Clash socks5
function CS52QX(cnt){
    tag = "tag="+ClashNameFix(cnt.name)
    ipt = cnt.server+":"+cnt.port
    uname = cnt.username ? "username=" + cnt.username : ""
    pwd = cnt.password && typeof(cnt.password) == "string" ? "password=" + cnt.password : ""
    tls = cnt.tls ? "over-tls=true" : ""
    cert = cnt.tls ? TLSCertParam(Pcert0, TLSFromSkipVerify(cnt["skip-cert-verify"])) : ""
    node = "socks5="+[ipt, uname, pwd, tls, cert, tag].filter(Boolean).join(", ")
    //console.log(node)
    return node
}

// clash vless type ,2026-01-07
function CVL2QX(cnt){
  tag = "tag="+ClashNameFix(cnt.name).replace(/(\"|\')/gi,"")
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
  const phost = getValue(() => cnt["ws-opts"]["headers"]["Host"])
  ohost = cnt["ws-headers"] && cnt["ws-headers"]["Host"] ? "obfs-host=" + cnt["ws-headers"]["Host"] : ""
  ohost = phost ? "obfs-host="+phost : ohost
  //ohost= cnt["ws-opts"]? "obfs-host=" + cnt["ws-opts"]["headers"]["Host"] : ohost
  ohost = cnt["servername"]? "obfs-host=" + cnt["servername"] : ohost
  ohost=ohost.toLowerCase()

  const ppath = getValue(()=>cnt["ws-opts"]["path"]) 
  puri = ppath ? "obfs-uri="+ppath : ""

  cert = cnt.tls ? TLSCertParam(Pcert0, TLSFromSkipVerify(cnt["skip-cert-verify"])) : ""
  //$notify(cert)
  node = "vless="+[ipt, pwd, mtd, udp, tfo, obfs, ohost, puri, vfl, pbk, sid, cert, tag].filter(Boolean).join(", ")
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
    this.decode = function (a, literal) {
        var decoded = _decode(
            String(a).replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
        return literal ? decoded : decoded.replace(/&gt;/g, ">").replace(/&lt;/g, "<");
    };
}


/*
YAML parser for Javascript
Author: Diogo Costa

This program is released under the MIT License as follows:

Copyright (c) 2011 Diogo Costa (costa.h4evr@gmail.com)

*/

/*
YAML parser 修复说明 ⟦2026-06-30 18:29:46 HKT⟧
----------------------------------------------------------
仅改动 function YAML() 本体，原文件 resource-parser.js 未修改。
修复重点：
1. 移除 Date.parse 自动转换，避免 http/1.1、HK:01、2026-06-30 等普通字段被误转 Date。
2. 支持单字符 key、quoted key、key:value 无空格写法、空值、顶层数组。
3. 重写注释处理，仅将行首或空白后的 # 视为注释，保留 pa#ss、URL fragment 等值。
4. 改善 flow map/flow array 解析，按引号与括号层级拆分逗号，支持引号内逗号和冒号。
5. 增加基础 anchor/alias/merge(<<) 支持，并在缩进异常时记录 errors，避免 undefined.children 崩溃。
----------------------------------------------------------
*/
function YAML() {
        var self = this;
        var errors = [];
        var reference_blocks = {};
        var processing_time = 0;
        var lines = [];
        var cursor = 0;

        this.errors = errors;
        this.processing_time = processing_time;

        function clone(obj) {
                if (obj === null || typeof obj !== "object") {
                        return obj;
                }
                try {
                        return JSON.parse(JSON.stringify(obj));
                } catch (err) {
                        return obj;
                }
        }

        function isObject(obj) {
                return obj !== null && typeof obj === "object" && !Array.isArray(obj);
        }

        function mergeInto(target, source) {
                if (!isObject(target) || !isObject(source)) {
                        return target;
                }
                for (var key in source) {
                        if (typeof target[key] == "undefined") {
                                target[key] = clone(source[key]);
                        }
                }
                return target;
        }

        function countIndent(line) {
                var match = String(line).match(/^\s*/);
                return match ? match[0].length : 0;
        }

        function trimRight(str) {
                return String(str).replace(/\s+$/, "");
        }

        function stripComments(line) {
                var quote = "";
                var escaped = false;
                var result = "";
                for (var i = 0; i < line.length; i++) {
                        var ch = line[i];
                        if (quote) {
                                result += ch;
                                if (quote == "\"" && ch == "\\" && !escaped) {
                                        escaped = true;
                                        continue;
                                }
                                if (quote == "'" && ch == "'" && line[i + 1] == "'") {
                                        result += line[++i];
                                        continue;
                                }
                                if (ch == quote && !escaped) {
                                        quote = "";
                                }
                                escaped = false;
                                continue;
                        }
                        if (ch == "\"" || ch == "'") {
                                quote = ch;
                                result += ch;
                        } else if (ch == "#" && (i == 0 || /\s/.test(line[i - 1]))) {
                                return trimRight(result);
                        } else {
                                result += ch;
                        }
                }
                return trimRight(result);
        }

        function preProcess(src) {
                return String(src)
                        .replace(/\r/g, "")
                        .split("\n")
                        .map(stripComments)
                        .filter(function(line) {
                                var trimmed = line.trim();
                                return trimmed != "" && trimmed != "---" && trimmed != "...";
                        });
        }

        function splitTopLevel(str, delimiter) {
                var result = [];
                var buf = "";
                var quote = "";
                var escaped = false;
                var depth = 0;
                for (var i = 0; i < str.length; i++) {
                        var ch = str[i];
                        if (quote) {
                                buf += ch;
                                if (quote == "\"" && ch == "\\" && !escaped) {
                                        escaped = true;
                                        continue;
                                }
                                if (quote == "'" && ch == "'" && str[i + 1] == "'") {
                                        buf += str[++i];
                                        continue;
                                }
                                if (ch == quote && !escaped) {
                                        quote = "";
                                }
                                escaped = false;
                                continue;
                        }
                        if (ch == "\"" || ch == "'") {
                                quote = ch;
                                buf += ch;
                        } else if (ch == "[" || ch == "{") {
                                depth++;
                                buf += ch;
                        } else if (ch == "]" || ch == "}") {
                                depth--;
                                buf += ch;
                        } else if (ch == delimiter && depth == 0) {
                                result.push(buf.trim());
                                buf = "";
                        } else {
                                buf += ch;
                        }
                }
                if (buf.trim() != "" || str.trim() == "") {
                        result.push(buf.trim());
                }
                return result;
        }

        function findTopLevelColon(str) {
                var quote = "";
                var escaped = false;
                var depth = 0;
                for (var i = 0; i < str.length; i++) {
                        var ch = str[i];
                        if (quote) {
                                if (quote == "\"" && ch == "\\" && !escaped) {
                                        escaped = true;
                                        continue;
                                }
                                if (quote == "'" && ch == "'" && str[i + 1] == "'") {
                                        i++;
                                        continue;
                                }
                                if (ch == quote && !escaped) {
                                        quote = "";
                                }
                                escaped = false;
                                continue;
                        }
                        if (ch == "\"" || ch == "'") {
                                quote = ch;
                        } else if (ch == "[" || ch == "{") {
                                depth++;
                        } else if (ch == "]" || ch == "}") {
                                depth--;
                        } else if (ch == ":" && depth == 0) {
                                return i;
                        }
                }
                return -1;
        }

        function unescapeDoubleQuoted(str) {
                return str
                        .replace(/\\u([0-9A-Fa-f]{4})/g, function(match, hex) {
                                return String.fromCharCode(parseInt(hex, 16));
                        })
                        .replace(/\\x([0-9A-Fa-f]{2})/g, function(match, hex) {
                                return String.fromCharCode(parseInt(hex, 16));
                        })
                        .replace(/\\(["\\\/bfnrt])/g, function(match, ch) {
                                return {
                                        "\"": "\"",
                                        "\\": "\\",
                                        "/": "/",
                                        "b": "\b",
                                        "f": "\f",
                                        "n": "\n",
                                        "r": "\r",
                                        "t": "\t"
                                }[ch];
                        });
        }

        function parseKey(raw) {
                var key = String(raw).trim();
                if (/^".*"$/.test(key)) {
                        return unescapeDoubleQuoted(key.slice(1, -1));
                }
                if (/^'.*'$/.test(key)) {
                        return key.slice(1, -1).replace(/''/g, "'");
                }
                return key;
        }

        function parseKeyValue(str) {
                var idx = findTopLevelColon(str);
                if (idx <= 0) {
                        return null;
                }
                return {
                        key: parseKey(str.slice(0, idx)),
                        value: str.slice(idx + 1).trim()
                };
        }

        function parseAnchor(value) {
                var match = String(value).match(/^&([^\s]+)\s*(.*)$/);
                if (!match) {
                        return null;
                }
                return {
                        name: match[1],
                        value: match[2].trim()
                };
        }

        function processAlias(value) {
                var name = String(value).slice(1).trim();
                if (typeof reference_blocks[name] == "undefined") {
                        errors.push("Reference '" + name + "' not found");
                        return {};
                }
                return clone(reference_blocks[name]);
        }

        function parseFlowArray(value) {
                var inner = value.slice(1, -1).trim();
                if (inner == "") {
                        return [];
                }
                return splitTopLevel(inner, ",").map(processValue);
        }

        function parseFlowMap(value) {
                var inner = value.slice(1, -1).trim();
                var obj = {};
                if (inner == "") {
                        return obj;
                }
                var parts = splitTopLevel(inner, ",");
                for (var i = 0; i < parts.length; i++) {
                        var item = parseKeyValue(parts[i]);
                        if (!item) {
                                continue;
                        }
                        var parsed = processValue(item.value);
                        if (item.key == "<<") {
                                if (Array.isArray(parsed)) {
                                        for (var j = 0; j < parsed.length; j++) {
                                                mergeInto(obj, parsed[j]);
                                        }
                                } else {
                                        mergeInto(obj, parsed);
                                }
                        } else {
                                obj[item.key] = parsed;
                        }
                }
                return obj;
        }

        function processValue(val) {
                val = typeof val == "undefined" || val === null ? "" : String(val).trim();
                if (val == "") {
                        return null;
                }
                if (val[0] == "*") {
                        return processAlias(val);
                }
                if (/^".*"$/.test(val)) {
                        return unescapeDoubleQuoted(val.slice(1, -1));
                }
                if (/^'.*'$/.test(val)) {
                        return val.slice(1, -1).replace(/''/g, "'");
                }
                if (/^\[[\s\S]*\]$/.test(val)) {
                        return parseFlowArray(val);
                }
                if (/^\{[\s\S]*\}$/.test(val)) {
                        return parseFlowMap(val);
                }
                if (val == "true") {
                        return true;
                }
                if (val == "false") {
                        return false;
                }
                if (val == "null" || val == "~") {
                        return null;
                }
                if (val == ".NaN") {
                        return Number.NaN;
                }
                if (val == ".inf" || val == "+.inf") {
                        return Number.POSITIVE_INFINITY;
                }
                if (val == "-.inf") {
                        return Number.NEGATIVE_INFINITY;
                }
                if (/^[+-]?\d+$/.test(val)) {
                        return parseInt(val, 10);
                }
                if (/^[+-]?(?:\d+\.\d*|\d*\.\d+)(?:e[+-]?\d+)?$/i.test(val)) {
                        return parseFloat(val);
                }
                return val;
        }

        function parseTextBlock(indent, folded) {
                var collected = [];
                while (cursor < lines.length) {
                        var line = lines[cursor];
                        var lineIndent = countIndent(line);
                        if (lineIndent < indent) {
                                break;
                        }
                        collected.push(line.slice(Math.min(indent, line.length)));
                        cursor++;
                }
                return folded ? collected.join(" ").replace(/\s+/g, " ").trim() : collected.join("\n");
        }

        function parseNestedValue(parentIndent, value) {
                if (value == "|" || value == ">") {
                        if (cursor < lines.length && countIndent(lines[cursor]) > parentIndent) {
                                return parseTextBlock(countIndent(lines[cursor]), value == ">");
                        }
                        return "";
                }
                if (value == "") {
                        if (cursor < lines.length && countIndent(lines[cursor]) > parentIndent) {
                                return parseBlock(countIndent(lines[cursor]));
                        }
                        return null;
                }
                return processValue(value);
        }

        function parseMap(indent) {
                var obj = {};
                while (cursor < lines.length) {
                        var line = lines[cursor];
                        var lineIndent = countIndent(line);
                        var trimmed = line.trim();
                        if (lineIndent < indent) {
                                break;
                        }
                        if (lineIndent > indent) {
                                errors.push("Invalid indentation at line " + (cursor + 1) + ": " + line);
                                cursor++;
                                continue;
                        }
                        if (/^-\s*/.test(trimmed)) {
                                break;
                        }
                        var pair = parseKeyValue(trimmed);
                        if (!pair) {
                                errors.push("Invalid map item at line " + (cursor + 1) + ": " + line);
                                cursor++;
                                continue;
                        }
                        cursor++;
                        var anchor = parseAnchor(pair.value);
                        var anchorName = anchor ? anchor.name : "";
                        var value = anchor ? anchor.value : pair.value;
                        var parsed = parseNestedValue(lineIndent, value);
                        if (anchorName) {
                                reference_blocks[anchorName] = clone(parsed);
                        }
                        if (pair.key == "<<") {
                                if (Array.isArray(parsed)) {
                                        for (var i = 0; i < parsed.length; i++) {
                                                mergeInto(obj, parsed[i]);
                                        }
                                } else {
                                        mergeInto(obj, parsed);
                                }
                        } else {
                                obj[pair.key] = parsed;
                        }
                }
                return obj;
        }

        function parseSeq(indent) {
                var arr = [];
                while (cursor < lines.length) {
                        var line = lines[cursor];
                        var lineIndent = countIndent(line);
                        var trimmed = line.trim();
                        if (lineIndent < indent) {
                                break;
                        }
                        if (lineIndent > indent) {
                                errors.push("Invalid indentation at line " + (cursor + 1) + ": " + line);
                                cursor++;
                                continue;
                        }
                        if (!/^-/.test(trimmed)) {
                                break;
                        }
                        var itemText = trimmed.replace(/^-\s*/, "");
                        cursor++;
                        var anchor = parseAnchor(itemText);
                        var anchorName = anchor ? anchor.name : "";
                        itemText = anchor ? anchor.value : itemText;
                        var item;
                        var pair = parseKeyValue(itemText);
                        if (itemText == "") {
                                item = cursor < lines.length && countIndent(lines[cursor]) > lineIndent ? parseBlock(countIndent(lines[cursor])) : null;
                        } else if (pair && !/^[a-z][a-z0-9+.-]*:\/\//i.test(itemText)) {
                                item = {};
                                item[pair.key] = parseNestedValue(lineIndent, pair.value);
                                if (cursor < lines.length && countIndent(lines[cursor]) > lineIndent) {
                                        var next = parseBlock(countIndent(lines[cursor]));
                                        if (isObject(next)) {
                                                mergeInto(next, item);
                                                item = next;
                                        }
                                }
                        } else {
                                item = processValue(itemText);
                                if (cursor < lines.length && countIndent(lines[cursor]) > lineIndent && item === null) {
                                        item = parseBlock(countIndent(lines[cursor]));
                                }
                        }
                        if (anchorName) {
                                reference_blocks[anchorName] = clone(item);
                        }
                        arr.push(item);
                }
                return arr;
        }

        function parseBlock(indent) {
                if (cursor >= lines.length) {
                        return {};
                }
                var lineIndent = countIndent(lines[cursor]);
                if (lineIndent < indent) {
                        return {};
                }
                if (/^-\s*/.test(lines[cursor].trim())) {
                        return parseSeq(lineIndent);
                }
                return parseMap(lineIndent);
        }

        this.parse = function eval0(str) {
                errors = [];
                reference_blocks = {};
                processing_time = (new Date()).getTime();
                lines = preProcess(str);
                cursor = 0;
                var result = lines.length == 0 ? {} : parseBlock(countIndent(lines[0]));
                processing_time = (new Date()).getTime() - processing_time;
                self.errors = errors;
                self.processing_time = processing_time;
                return result;
        }
}


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
            names: servers.map(s => (s.match(/,\s*tag=(.*)$/) || ["", ""])[1]),
            types: servers.map(s => {
                const type = s.slice(0, s.indexOf("=")).trim().toLowerCase();
                return Object.prototype.hasOwnProperty.call(nodeTypeStyles, type) ? type : "unknown";
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

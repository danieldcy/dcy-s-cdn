console.log("\n %c WenYu插件 v2.0.0 Powered by 闻语博客 | https://www.zpblogs.cn", "color:#fff;background: #878b99;padding:5px;border-radius: 10px;");
//判断是否pc端，pc端为true
function IsPC(){var userAgentInfo=navigator.userAgent;var Agents=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];var flag=true;for(var v=0;v<Agents.length;v++){if(userAgentInfo.indexOf(Agents[v])>0){flag=false;break}}return flag}
//判断上午或者下午
function getTimeState() { var text = ""; var hours = new Date().getHours(); if (hours >= 0 && hours <= 10) { text = "早上好，永远年轻，永远热泪盈眶！" } else if (hours > 10 && hours <= 14) { text = "中午好，睡会儿午觉吧！" } else if (hours > 14 && hours <= 18) { text = "下午好，是时候打个盹了！" } else if (hours > 18 && hours <= 24) { text = "晚上好，注意早点休息！" } return text }
//判断是否是外链
function isOutlink(url) { var isLinkOut = url.indexOf('http'); if (isLinkOut > -1) { var self_origin = window.location.origin; if (url.indexOf(self_origin) == -1) { return true } } return false }
//跳转安全链接页面
function links(url) { if (url == "") { return true } if (isOutlink(url)) { window.open("https://zpblogs.gitee.io/wenyuribrary/assets/link/?url=" + url) } else { location.href = url } }

//获取cookie
function getCookieByName(key){
    //没有cookie信息返回空
    if(!document.cookie) return "";
    var cArr = document.cookie.split("; ");
    for(var i = 0; i < cArr.length; i++){
        if(cArr[i].split("=")[0] === key){
            return decodeURIComponent(cArr[i].split("=")[1]).trim();
        }
    }
    return "";
}

//设置一个cookie
function setCookie(key,value,date,path){
    //没有传递有效期
    //，欸有传递路径
    //传递了路径，没有传递有效期
    if(!!date && !(date instanceof Date)){
        path = date;
        date = undefined;
    }
    document.cookie = key + "=" + value + ";expires=" + date + ";path=" + path;
}

//删除cookie封装
function removeCookie(key,path){
    document.cookie = key+ "='expires=" + new Date(0) + ";path=" + path;
}

$(".gl").click(function(){
    if($(".token").attr("checked")){
        var date = new Date();
        date.setDate(date.getDate()+10);
        //保存一个用户身份信息
        setCookie("token",new Date().getTime(),date,"/1918dom/xiangmu");
    }
})


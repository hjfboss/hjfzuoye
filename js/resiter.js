/* 表单验证 */
var uname = document.getElementById("uname");
var pwd = document.getElementById("pwd");
var spwd = document.getElementById("spwd");
var yh = false;
var mi = false;
var zmi = false;
/* 用户名验证 */

var ft1 = document.getElementsByClassName("f_t1")[0];
var ft2 = document.getElementsByClassName("f_t2")[0];
var ft3 = document.getElementsByClassName("f_t3")[0];

uname.onfocus = function(){
    ft1.style.display = "block";
    ft2.style.display = "none";
    ft3.style.display = "none";
    uname.value = "";
}
uname.onblur = function(){
    ft1.style.display = "none";
    var str = uname.value;
    var nReg = /^\w{2,20}$/;
    if(nReg.test(str)){
        ft3.style.display = "block";
        yh = true;
    }else{
        ft2.style.display = "block";
        yh = false;
    }
}

//密码验证
var pwd = document.getElementById("pwd");
var fc1 = document.getElementsByClassName("f_c1")[0];
var fc2 = document.getElementsByClassName("f_c2")[0];
var fc3 = document.getElementsByClassName("f_c3")[0];

pwd.onfocus = function(){
    fc2.style.display = "block";
    fc1.style.display = "none";
    fc3.style.display = "none";
    pwd.value = "";
}
pwd.onblur = function(){
    fc2.style.display = "none";
    var str = pwd.value;
    var pReg = /^[0-9a-zA-Z\S]{6,20}$/;
    if(pReg.test(str)){
        fc1.style.display = "block";
        mi = true;
    }else{
        fc3.style.display = "block";
        mi = false;
    }
}

//再一次验证密码
var spwd = document.getElementById("spwd");
var fb1 = document.getElementsByClassName("f_b1")[0];
var fb2 = document.getElementsByClassName("f_b2")[0];
var fb3 = document.getElementsByClassName("f_b3")[0];

spwd.onfocus = function(){
    fb3.style.display = "block";
    fb1.style.display = "none";
    fb2.style.display = "none";
    spwd.value = "";
}
spwd.onblur = function(){
    fb3.style.display = "none";
    var str = spwd.value;
    if(str == pwd.value){
        fb1.style.display = "block";
        zmi = true;
    }else{
        fb2.style.display = "block";
        zmi = false;
    }
}

//监听
var jt = true;
$("#uname").blur(function(){
    $.ajax({
        url:"php/weiyi.php",
        type:"post",
        data:{
            uname:$("#uname").val()
        },
        success:function(res){
           if(res == "1"){
               jt = true;
                alert("用户名已存在");
            }else{
                jt = false;
                alert("可以注册")
            }  
        }
    })   
})

//注册
$("#sub").click(function(){
    if(yh && mi && zmi && !jt){
        $.ajax({
            url:"php/resiter.php",
            type:"post",
            data:{
                uname:$("#uname").val(),
                upwd:$("#pwd").val()
            },
            success:function(res){
                console.log(res)
               if(res == "1"){
                    alert("恭喜你，注册成功");
                    location.href="login.html";
                }else{
                    alert("请重新注册");
                }  
            }
        })   
    }else{
        alert("必须按要求填写");
    }
})


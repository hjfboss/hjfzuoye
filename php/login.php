<?php 
    include("publick.php");
 /*    $uname = $_POST["uname"];
    $pwd = $_POST["pwd"];

    $sql = "select uname,upwd from user where uname='$uname'";

    $result = getConnect($sql);

    $arr = mysqli_fetch_array($result);
    if($arr){
        if($arr["upwd"] === $pwd){
            setCookie("username",$arr["uname"],null,"zuoye");
            echo "<script>alert('登录成功');location.href='../index.html';</script>";
        }else{
            echo "<script>alert('密码有误');location.href='../login.html';</script>";
        }
    }else{
        echo "<script>alert('用户名有误');location.href='../login.html';</script>";
    } */


    //自动登陆
    if(empty($_POST["uname"])){
        $token = $_COOKIE["token"];
        /* echo $token; */
        $tokenlog = "select uname from user where token='$token'";

        $tokenresult = getConnect($tokenlog);
        $tArr = mysqli_fetch_array($tokenresult);
        if($tArr){
            setCookie("username",$tArr["uname"],null,"/zuoye");
            echo "<script>location.href='./index.html'</script>";
        }else{
            setCookie("token","",null,"/1918dom/index.html");
            echo "<script>location.href='../login.html';</script>";
        }
    }else{
        $uname = $_POST["uname"];
        $pwd = $_POST["pwd"];
        $sql = "select uname,upwd from user where uname='$uname'";
        $result = getConnect($sql);
        $arr = mysqli_fetch_array($result);
       if($arr){
            if($arr["upwd"] === $pwd){
                setCookie("username",$arr["uname"],null,"/zuoye");
                if(!empty($_COOKIE["token"])){//token存在 ，选中了下次自动登录
                    //将tiken的cookie信息保存到原来的用户下
                    setCookie("username",$arr["uname"],time()+10*24*3600,"/zuoye");
					$token = "update user set token=".$_COOKIE["token"]." where uname='".$arr["uname"]."'";
					getConnect($token);
				}
                echo "1";
            }else{
                echo "2";
            }
        }else{
            echo "3";
        }
     }


?>
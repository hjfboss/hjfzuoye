<?php 
    include("publick.php");
    $uname = $_REQUEST["uname"];
    $pwd = $_REQUEST["upwd"];
    $sql = "INSERT INTO `user`(uname,upwd) VALUES ('$uname','$pwd')";
    $result = getConnect($sql);
    if($result){
		//插入成功 注册成功
		echo 1;
	}else{
		//插入失败：注册失败
		echo 0;
	}
?>
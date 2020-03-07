<?php 
    include("publick.php");
    $uname = $_REQUEST["uname"];
    $sql = "select uname from user where uname='$uname'";
    $result = getConnect($sql);
    $arr = mysqli_fetch_array($result);
	if($arr){
		//该用户存在
		echo 1;//1表示存在
	}else{
		//用户名不存在
		echo 0;//表示 不存在
	}


?>
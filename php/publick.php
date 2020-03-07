<?php 
    header("Content-Type:text/html;charset=utf-8");
    function getConnect($sql){
        $db = mysqli_connect("localhost:3307","root","root");
        mysqli_select_db($db,"zuoye1");
        mysqli_query($db,"set names utf8");
        $result = mysqli_query($db,$sql);
        return $result;
    }



?>
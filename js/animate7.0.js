function animate(obj,param,callback,speedTime = 20){
	//callback是接收了一个回调函数。这个回调函数需要在属性到达目标值时执行
	//callback = function(){console.log("执行了");}
	//callback();
	//callback有值，但又不是函数
	if(!!callback && !(callback instanceof Function)){
		//将时间赋值给speedTime
		speedTime = callback;
		//将callback置为undefined
		callback = undefined;
	}
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;
		for(var attr in param){
			//zIndex属性不需要动画，直接赋值就可以 了
			if(attr === "zIndex"){
				obj.style[attr] = param[attr];
			}else{
				var current = 0;
				if(attr === "opacity"){
					current = getStyle(obj,attr) * 100;
				}else{
					current = parseInt(getStyle(obj,attr));
				}
				var speed = (param[attr] - current)/10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				//console.log(speed);
				//判断是否所有的属性都到达了目标 值
				if(param[attr] != current){//最少有一个没有到达目标值
					flag = false;//flag为false表示最少有一个没有到达目标值
					//没有到达目标值继续赋值
					if(attr == "opacity"){
						obj.style[attr] = (current + speed)/100;
					}else{
						obj.style[attr] = current + speed + "px";
					}
				}
			}
		}
		//上面的for in循环没有去执行，flag保持为true时，说明这一次的运动过程所有的属性都到达了目标值
		if(flag){//
			clearInterval(obj.timer);
			//到达目标值，开启链式
			if(!!callback){
				callback();
			}
		}
	},speedTime);
}



//兼容ie8实现获取浏览器渲染的一元素样式值。
function getStyle(obj,attr){
	if(!!window.getComputedStyle){//现代浏览器
		return window.getComputedStyle(obj)[attr];
	}
	//ie8
	return obj.currentStyle[attr];
}
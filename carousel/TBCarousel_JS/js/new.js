window.onload = function(){
	var circle = document.getElementsByClassName("circle")[0];
	var arrow = circle.getElementsByClassName("arrow");
	var ul = circle.getElementsByTagName("ul")[0];
	var ol = circle.getElementsByTagName("ol")[0];
	var ulli = ul.children;
	var olli = ol.children;

	var newLi = ulli[0].cloneNode(true);
	ul.appendChild(newLi);

	var key = 0;
	var square = 0;
	var timer = null;
	timer = setInterval(autoPlay,5000);

	circle.onmouseover = function(){
		arrow[0].style.display = arrow[1].style.display = "block";
		clearInterval(timer);
	}
	circle.onmouseout = function(){
		arrow[0].style.display = arrow[1].style.display = "none";
		timer = setInterval(autoPlay,5000);
	}
	arrow[0].onclick = function(){
		key--;
		square--;
		if(key<0){
			key = 4;
			ul.style.left = -5*circle.offsetWidth+"px";
		}
		animate(ul,-key*circle.offsetWidth);
		square = square<0?olli.length-1:square;
		for(var j=0; j<olli.length; j++){
			olli[j].style.backgroundColor = "#b7b7b7";
		}
		olli[square].style.backgroundColor = "#ff4400";
	}
	arrow[1].onclick = function(){
		autoPlay();
	}
	for(var i=0; i<olli.length; i++){
		olli[i].index = i;
		olli[i].onclick = function(){
			for(var j=0; j<olli.length; j++){
				olli[i].style.backgroundColor = "#b7b7b7";
			}
			this.style.backgroundColor = "#ff4400";
			key = square = this.index;
			animate(ul,-key*(circle.offsetWidth));
		}
	}

	function animate(ele,target){
		clearInterval(ele.timer);
		var speed = target > ele.offsetLeft ? 30:-30;
		ele.timer = setInterval(function(){
			var result = target - ele.offsetLeft;
			ele.style.left = ele.offsetLeft + speed + "px";
			if(Math.abs(result)<Math.abs(speed)){
				ele.style.left = target + "px";
				clearInterval(ele.timer);
			}
		},5)
	}
	function autoPlay(){
		key++;
		square++;
		if(key>olli.length){
			key = 1;
			ul.style.left = 0;
		}
		animate(ul,-key*circle.offsetWidth);
		square = square>olli.length-1?0:square;
		for(var i=0; i<olli.length; i++){
			olli[i].style.backgroundColor = "#b7b7b7";
		}
		olli[square].style.backgroundColor = "#ff4400";
	}

}
window.onload = function(){
	var circle = document.getElementsByClassName("circle")[0];
	var arrow = circle.getElementsByClassName("arrow");
	var ul = circle.getElementsByTagName("ul")[0];
	var ulli = ul.children;
	var ol = circle.getElementsByTagName("ol")[0];
	var olli = ol.children;

	var newLi = ulli[0].cloneNode(true);
	ul.appendChild(newLi);
	
	circle.onmouseout = function(){
		arrow[0].style.display = "none";
		arrow[1].style.display = "none";
		timer =  setInterval(autoPlay,5000);
	}
	circle.onmouseover = function(){
		arrow[0].style.display = "block";
		arrow[1].style.display = "block";
		clearInterval(timer);
	}

	for(var i=0; i<olli.length; i++){
		olli[i].index = i;
		olli[i].onclick = function(){
			for(var j=0; j<olli.length; j++){
				olli[j].style.backgroundColor = "#b7b7b7";
			}
			this.style.backgroundColor = "#ff4400";
			animate(ul,-this.index*(circle.offsetWidth));
			key = square = this.index;
		}
	}

	var key = 0;
	var square = 0;
	var timer = null;
	timer = setInterval(autoPlay,5000);

	function autoPlay(){
		key++;
		square++;
		if(key>olli.length){
			key = 1;
			ul.style.left = 0;
		}
		animate(ul,-key*circle.offsetWidth);
		square = square>olli.length-1?0:square;  
		for(var j=0;j<olli.length;j++){
			olli[j].style.backgroundColor = "#b7b7b7";
		}
		olli[square].style.backgroundColor = "#ff4400";
	}

    arrow[0].onclick = function(){
        key--;
        square--;
        if(key<0){
            key=4;
            ul.style.left = -5*ul.children[0].offsetWidth + "px";
        }
        animate(ul,-key*circle.offsetWidth);

        square = square<0?olli.length-1:square;
        for(var j=0;j<olli.length;j++){
			olli[j].style.backgroundColor = "#b7b7b7";
        }
		olli[square].style.backgroundColor = "#ff4400";
    }

    arrow[1].onclick = function () {
        autoPlay();
    }
	/* 图片移动的函数 */
	function animate(ele,target){
		clearInterval(ele.timer);
		var speed = target>ele.offsetLeft?3:-3;
		ele.timer = setInterval(function(){
			var val = target - ele.offsetLeft;
			ele.style.left = ele.offsetLeft + speed + "px";
			if(Math.abs(val)<Math.abs(speed)){
				ele.style.left = target+"px";
				clearInterval(ele.timer);
			}
		}, 50)
	}
}
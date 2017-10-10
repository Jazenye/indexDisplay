/**
 * jsonp 接口参数： 
 * http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4
 */

 /**
  * 1. 获取数据
  * 2. 把数据变为DOM， 通过瀑布流的布局展示在页面上
  * 3. 当页面滚动到底部的时候 返回第一步(AJAX)
  * 底部标签： div.load
  */


var curPage = 1;  // 当前页数
var perPageCount = 10;  // 每页的的数据
var colSumHeight = [];  // 计算li的高度
var nodeWidth = $('.item').outerWidth(true);
var colNum = parseInt($('#picture-ct').width() / nodeWidth);  // 容器宽度除以图片宽度 得到 列数
for(let i=0; i< colNum; i++){
    colSumHeight[i] = 0;  // init
}

var isDataArrive = true;

function getData(callback){
    $.ajax({
        url: 'http://platform.sina.com.cn/slide/album_tech',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        data: {
            app_key: '1271687855',
            num: perPageCount,
            page: curPage
        } 
    }).done(function(ret){
        if(ret && ret.status && ret.status.code === '0'){
            callback(ret.data); // 如果数据没有问题 就生成节点并摆放
            curPage++;
        }else{
            console.log('ERROR: get data error!');
        }
    })
}

// 该函数用来拼装节点内容
function getNode(item){
	var tpl = ''
		tpl += '<li class="item">';
		tpl += '<a href="' + item.url + '" class="link"><img src="' + item.img_url + '" alt=""></a>';
		tpl += '<h4 class="header">' + item.short_name + '</h4>';
		tpl += '<p class="desp">' + item.short_intro + '</p>';
		tpl += '</li>';
	
	return $(tpl);
}

function start(){
    getData(function(newsList){
        // console.log(newsList)
        isDataArrive = true;
        $.each(newsList, function(idx, news){
            var $node = getNode(news);
            $node.find('img').on("load", function(){ // 图片加载完成后加到页面上
                $('#picture-ct').append($node);
                // console.log($node, "loaded...");
                waterfallPlace($node);  // 放置节点
            }) 
        })
    })
    isDataArrive = false;
}


function waterfallPlace($node){  
    // 得到每列的最小值
    var minSumHeight = Math.min.apply(null, colSumHeight); 
    var idx = colSumHeight.indexOf(minSumHeight); 

    $node.css({
        left: nodeWidth*idx,
        top: minSumHeight,
        opacity: 1
    });
 
    colSumHeight[idx] += $node.outerHeight(true);
    $('#picture-ct').height(Math.max.apply(null, colSumHeight));
    // 找到数组里面的最大值，赋值给这个容器 因为子容器是绝对定位 否则撑不开 
}


function isVisible($ele){
    var scrollHeight = $(window).scrollTop();
    var winHeight = $(window).height();
    var top = $ele.offset().top;
    // console.log(scrollHeight, winHeight, top);
    return (top < winHeight + scrollHeight) ? true : false;
}

start()

$(window).on("scroll", function(){
    if(!isDataArrive) return
    if(isVisible($('#load'))){ 
        start();
    }
})
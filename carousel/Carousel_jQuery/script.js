var $ct = $(".ct");
var $imgCt = $(".img-list");
var $left = $(".left");
var $right = $(".right");
var $slideBar = $(".slideBar");
var $slideLi = $slideBar.find("li");

var imgCount = $imgCt.find("li").length;
var imgWidth = $imgCt.find("li").eq(0).width();
$imgCt.css({
    width: imgWidth * (imgCount + 2),
    left: -imgWidth
});

$imgCt.append($imgCt.find("li").eq(0).clone());
$imgCt.prepend($imgCt.find("li").eq(3).clone());

var index = 0;

$slideBar.on("click", "li", function () {
    var curIdx = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    if (curIdx > index)
        playNext(curIdx - index);
    else if (curIdx < index)
        playPre(index - curIdx);
})

var timer = setInterval(function () {
    playNext(1);
}, 1500)

$left.on("click", function (e) {
    e.preventDefault();
    playPre(1);
})
$right.on("click", function (e) {
    e.preventDefault();
    playNext(1);
})

$ct.on("mouseenter", function () {
    clearInterval(timer);
    $right.show();
    $left.show();
})
$ct.on("mouseleave", function () {
    clearInterval(timer);
    timer = setInterval(function () {
        playNext(1);
    }, 1500);
    $right.hide();
    $left.hide();
})

function playPre(len) {
    index -= len;
    if (index < 0) {
        $imgCt.animate({
            left: 0
        }, "fast", function () {
            $imgCt.css({
                left: -imgCount * imgWidth
            })
            index = imgCount - 1;
        })
    } else {
        $imgCt.animate({
            left: -(index + 1) * imgWidth
        }, "fast")
    }
    $slideLi.eq(index).addClass("active").siblings().removeClass("active");
}

function playNext(len) {
    index += len;
    if (index == imgCount) {
        $imgCt.animate({
            left: -(imgCount + 1) * imgWidth
        }, "fast", function () {
            index = 0;
            $imgCt.css({
                left: -imgWidth
            });
            $slideLi.eq(index).addClass("active").siblings().removeClass("active");
        });
    } else {
        $imgCt.animate({
            left: -(index + 1) * imgWidth
        }, "fast")
    }
    $slideLi.eq(index).addClass("active").siblings().removeClass("active");
}
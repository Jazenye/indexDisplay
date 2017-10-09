function Exposure($target, callback) {
    this.$target = $target;
    this.callback = callback;
    this.bind();
    this.check();
}

Exposure.prototype.bind = function() {
    var _this = this;
    $(window).on('scroll', function() {
        _this.check()
    })
}

Exposure.prototype.check = function() {
    var _this = this;
    if (this.isShow(this.$target)) {
        this.callback(_this.$target)
    }
}

Exposure.prototype.isShow = function() {
    var windowHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        offsetTop = this.$target.offset().top,
        nodeHeight = this.$target.height();
    if(offsetTop<scrollTop + windowHeight && offsetTop > scrollTop ){
        return true
    } else {
        return false
    }
}

function showImg($img) {

    var imgUrl = $img.attr('data-src');
    $img.attr('src', imgUrl);
}

$('.container img').each(function(idx, img) {
    new Exposure($(img), function($img) {
        showImg($img)
    })
})

var Lazy = (function() {
    return {
        init: function($targets) {
            $targets.each(function(idx, target){
                new Exposure($(target), callback)
            })
        }
    }
})()
function Carousel($ct) {
    this.$ct = $ct;
    this.init();

}

Carousel.prototype.init = function () {

    var $imgBox = this.$imgBox = this.$ct.find('.imgBox'),
        imgLi = this.imgLi = this.$ct.find('.imgBox>li'),
        btnNext = this.btnNext = this.$ct.find('.next-arrow'),
        btnPre = this.btnPre = this.$ct.find('.pre-arrow'),
        pageIndex = this.pageIndex = 0;

    this.sliderLi = $('.slider>li');
    $imgBox.append(imgLi.first().clone());
    $imgBox.prepend(imgLi.last().clone());
    $imgBox.width((imgLi.length + 2) * imgLi.width());
    $imgBox.css({
        left: -imgLi.width()
    });

    this.bindClick(pageIndex);
    this.slideClick();
}

Carousel.prototype.bindClick = function () {
    this.isAnimate = false;
    var _this = this;
    this.btnNext.on('click', function () {
        _this.playNext(1);
    });

    this.btnPre.on('click', function () {
        _this.playPre(1);
    });
}

Carousel.prototype.playNext = function (len) {
    if (this.isAnimate) {
        return
    }
    this.isAnimate = true;
    var _this = this;
    this.$imgBox.animate({
        //-=在原来的基础上去减小
        left: '-=' + this.imgLi.width() * len

    }, function () {
        _this.pageIndex += len;

        if (_this.pageIndex == _this.imgLi.length) {
            _this.pageIndex = 0;
            _this.$imgBox.css({
                left: -_this.imgLi.width()
            })
        }
        _this.setSlider();
        _this.isAnimate = false;
    });
}

Carousel.prototype.playPre = function (len) {
    var _this = this;
    if (this.isAnimate) {
        return
    }
    this.isAnimate = true;
    this.$imgBox.animate({
        //-=在原来的基础上去减小
        left: '+=' + this.imgLi.width() * len
    }, function () {
        _this.pageIndex -= len;

        if (_this.pageIndex < 0) {
            _this.pageIndex = _this.imgLi.length - 1;
            _this.$imgBox.css({
                left: -_this.imgLi.width() * _this.imgLi.length
            })
        }
        _this.setSlider();
        _this.isAnimate = false;
    });
}

Carousel.prototype.slideClick = function () {
    var _this = this;

    this.sliderLi.click(function () {
        var index = $(this).index();
        if (index > _this.pageIndex) {
            _this.playNext(index - _this.pageIndex);
        } else if (index < _this.pageIndex) {
            _this.playPre(_this.pageIndex - index);
        }
    });
}

Carousel.prototype.setSlider = function () {
    this.sliderLi.removeClass('active').eq(this.pageIndex).addClass('active');
}

var carousel1 = new Carousel($('.carousel').eq(0));
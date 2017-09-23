function Tab(ct) {
    this.ct = ct;
    this.init();
    this.bind();
}
Tab.prototype.init = function () {
    this.tabLis = this.ct.querySelectorAll('.tab-header>li');
    this.tabPanels = this.ct.querySelectorAll('.tab-container>li');

}
Tab.prototype.bind = function () {
    let _this = this;
    this.tabLis.forEach(function (tabli) {
        tabli.onclick = function (e) {
            let target = e.target;
            let index = [].indexOf.call(_this.tabLis, target);

            // 点击的标签 类名变为active
            _this.tabLis.forEach(function (li) {
                li.classList.remove('active');
            })
            target.classList.add('active');

            // 对应的内容变成 active
            _this.tabPanels.forEach(function (panel) {
                panel.classList.remove('active');
            })
            _this.tabPanels[index].classList.add('active');
        }
    })
}

let tab0 = new Tab(document.querySelectorAll('.tab')[0])
let tab1 = new Tab(document.querySelectorAll('.tab')[1])
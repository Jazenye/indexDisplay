/**
 * 迭代器模式： 提供一种方法顺序访问一个聚合对象中各个元素，而又不需要暴露该方法中的内部表示。
 */

// array的迭代器
forEach = function (ary, fn) {
    length = ary.length;
    for (var i = 0; i < length; i++) {
        var c = ary[i];
        if (fn.call(c, i, c) === false) {
            return false;
        }
    }
}
forEach([1, 2, 3], function (i, n) {
    alert(i);
})

// object的迭代器
forEach = function (obj, fn) {
    for (var i in obj) {
        var c = obj[i];
        if (fn.call(c, i, c) === false) {
            return false;
        }
    }
}

forEach({
    "a": 1,
    "b": 2
}, function (i, n) {
    alert(i);
})
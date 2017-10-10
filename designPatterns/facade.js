/**
 * 外观模式： 提供一个高层接口，这个接口使得客户端或子系统更加方便调用。
 *  可以说是衔接几个子接口，封装成一个。
 */

 // 常用的外观模式例子： 同时阻止事件默认行为和冒泡
 var stopEvent = function(e){
     e.stopPropagation();
     e.preventDefault();
 }
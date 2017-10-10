/**
 * 策略模式：定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。
 */

// 比较常见的一个例子就是jQuery里面的animate方法：
// 第三个参数便是一种对策略模式的封装
$( div ).animate( {"left: 200px"}, 1000, 'linear' );  
$( div ).animate( {"left: 200px"}, 1000, 'cubic' );  
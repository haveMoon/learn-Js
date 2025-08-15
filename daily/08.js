/**
 *      函数
 * 函数声明，即函数定义
 * 按值传递
 * 对于对象和数组，本质上传的是地址
 * 
 * 函数表达式：可以是匿名的，也可以是命名的
 * 将函数作为参数传递给另一个函数时，函数表达式很方便
 * 当一个函数是一个对象的属性时，称之为方法
 * 
 * 作用域：函数声明的作用域是它外围的一个大括号，即声明它的函数
 * 或者，如果它是在顶层声明的，则为整个程序
 * 函数要调用，必须在声明的作用域里
 * 函数声明可以被提升：意味着调用可以在声明之前
 * 
 * 函数本身就是对象，因此这些对象也有方法（Function对象）
 */

function myforEach(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        fun(arr[i]);
    }
}

const wr = function (a) {
    console.log(a);
}

let arr = [1, 2, 33, 4, 9];
myforEach(arr, wr);

/**
 * 函数提升仅适用于函数声明，而不适用于函数表达式
 */
//console.log(a(10));//报错
//const a = function (n) { return n };

/**
 *      函数参数
 * 函数的实际参数会被保存在一个类似数组的 arguments 对象中。
 * arguments 变量只是“类数组”，而不是数组。它与数组类似，有索引编号和 length 属性。
 * 尽管如此，它并不具备 Array 对象的所有数组操作方法。
 * 
 * 默认参数
 * 
 * 剩余参数：许将不确定数量的参数表示为数组。
 */

function add(a, b) {
    console.log(arguments);
    console.log(arguments[0]);
}

add(1, 2);//输出：[Arguments] { '0': 1, '1': 2 };1

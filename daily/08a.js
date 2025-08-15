/**
 *      函数式编程 functional programming
 * 范式都是关于如何处理状态的，而函数式编程没有状态
 * 函数式编程语言的一些主要特征包括：
 * 纯函数：纯函数是指在相同的输入下总是返回相同的输出——即没有状态，
 *      并且不会产生副作用（如修改全局变量或输入参数）。
 * 不可变性：在函数式编程中，数据通常是不可变的。
 *      这意味着一旦数据被创建，就不能被修改。任何对数据的修改
 *      都会生成新的数据结构。
 * 函数作为一等公民：函数在函数式编程中被视为一等公民，这意味着它
 *      们可以作为参数传递给其他函数，也可以从其他函数返回。
 * 递归：函数式编程语言通常支持递归来替代循环，因为递归是处理
 *       不可变数据结构的一种有效方式。
 * 高阶函数：函数式编程支持高阶函数，即接受函数作为参数或返回函数作为结果的函数。
 * 
 * 常见的函数式编程语言包括 Haskell、Erlang、Scala、Clojure 和
 *  Lisp 等。函数式编程的优点包括代码更简洁、便于调试、易于并行处理等，但也有一些学习曲线和性能上的挑战。
 */

receipts = [1, 3, 5, 5, 10, , 11];
/**
 * curring柯里化
 * userId像一个隐形的参数，被绑定在这个函数里面
 * 柯里化的过程：实际上就是返回一个函数，这个函数是当前函数的下一个步骤
 *      而不是一次进行整个操作，上一步的状态会绑定到下一步
 *      就像管道一样，是下一个流程，下一截管道；
 * 
 * 在JS中，可以使用bind实现柯里化
 * function userIdEquals(userId, receipt) 
 * {
 *     return receipt === userId;
 * }
 * .....
 * const predicate = userIdEquals.bind(null, 1);
 */
/**
 * 另一种方法：构造匿名函数，即lambda表达式
 * 不要前面的UserIdEquals，直接使用箭头函数
 * const userId = 1;
 * const filtered = filter(receipts, (receipt) => receipt === userId)
 * 
 */
function userIdEquals(userId) {
    return function (receipt) {
        return receipt === userId;
    }
}
function processReceipt(receipts, predicate, index = 0) {
    if (index < receipts.length) {
        const filtered = processReceipt(receipts, predicate, index + 1);

        const receipt = receipts[index];
        if (predicate(receipt)) {
            return [receipt].concat(filtered);
        }

        return filtered;
    }
    return [];
}


const predicate = userIdEquals(1);
const filtered = processReceipt(receipts, predicate);
console.log(filtered);



/**
 *      闭包 closure:携带状态的函数
 * 闭包是指一个表达式（通常是函数）可以拥有独立变量以及绑定了这些变量的环境
 * 简单来桌，闭包就是函数和对其周围状态（词法环境）的引用捆绑在一起形成的实体。
 * 闭包使得函数可以“携带环境”，即使环境不复存在的时候
 * 
 * 嵌套函数是一个闭包，这就意味着嵌套函数“继承”容器函数的参数和
 * 变量 
 * 
 * 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数
 *      却不能访问内部函数的局部变量。
 * 
 * 由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，
 *      外部函数中定义的变量和函数的生存周期将比内部函数纸吸管的持续时间要长
 * 
 * 当内部函数以某一种方式被任何一个外部函数之外的任何作用域访问时，就会创建闭包。
 * */

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
//counter连环境也一起打包了
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

//内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数
function outside(x) {
    const inside = function (y) {
        return x + y;
    }
    return inside;
}
const out = outside(1);
console.log(out(5));

console.log(outside(2)(5));

/**
 *       内部函数需要保存所有可见作用域来形成闭包
 * 一个闭包必须保存它可见作用域中的所有参数和变量
 * 因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包
 * 只有当返回的inside没有再被引用时，才会释放内存
 * 
 *      多层嵌套函数与作用域链
 * A包含B，B包含C，B、C都形成了闭包
 * 闭包可以包含多个作用域；它们递归地包含了所有包含它的函数作用域。这个称之为作用域链。
 * 
 */

function A(a) {
    function B(b) {
        function C(c) {
            console.log(a + b + c);
        }
        C(2);
    }
    B(3);
}
A(1);

/**
 *       命名冲突
 * 当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。
 * 更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先
 * 级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域
 */

const x = 8;
function w() {
    const x = 1;
    return function y(x) {
        //命名冲突发生在这里，这里的作用域链是y->w->全局作用域
        //因此y的x优先于w的x,优先于全局的x
        console.log(x);
    }
}
w()(5);//5

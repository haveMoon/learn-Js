/**
 *      表达式与运算符
 */

/**
 *      二元运算符
 * 赋值运算符
 * 逻辑与赋值 a &&= b 等同于 a && (a = b) 
 * 逻辑或赋值 a ||= b 等同于 a || (a = b) 
 * 逻辑空赋值 a ??= b 等同于 a ?? (a = b) 
 * 
 * 比较运算符
 * 严格相等运算符 ===
 * 严格不相等运算符 !==
 * 
 * 指数运算符：2 ** 3 结果为 8
 */

//逻辑与赋值：实际上是短路运算的结果
//短路机制：若x表达式运算结果为false,则不会执行语句(x = y),x值不变
//若x表达式运算结果为true,则执行语句(x = y),x值变为y
let x = 0, y = 10;
console.log(x &&= y);//x is 0
x = 7;
x && (x = y)
console.log(x);//10

//逻辑或赋值
x = 0, y = 10;
console.log(x ||= y);//x is 10
x = 7;
x || (x = y);
console.log(x);// x is 7

//逻辑空赋值: 若x为null或undefined(0不算),则执行语句(x = y),x值变为y,否则不执行
x = 0, y = 10;
console.log(x ??= y);//x is 0
x = null;
console.log(x ??= y);//x is 10

/**
 *       一元运算符
 * delete
 * typeof
 * void 表明一个运算没有返回值
 * in 用于判断一个属性是否存在于对象中
 * instanceof 用于判断一个对象是否是指定类型，返回布尔值
 */

/**
 *       解构语法
 * 数组解构与对象解构
 */
//数组解构
let foo = ["one", "two", "three"];

// 不使用解构
let f = foo[0];
let s = foo[1];
let t = foo[2];

// 使用解构
let [one, two, three] = foo;

/* let { name, age } = { name: 'Alice', age: 25 };
console.log(name); // 输出: Alice
console.log(age); // 输出: 25 */

//报错fullname： undefined
// let { fullname, age } = { name: 'Alice', age: 25 };
// console.log(fullname); // 输出: undefined
// console.log(age); // 输出: 25

let { name: fullname, age } = { name: 'Alice', age: 25 };
console.log(fullname); // 输出: Alice
console.log(age); // 输出: 25


/**
 *       表达式
 * 每一个合法的表达式都能计算成某个值
 * 有两种类型的表达式：有副作用的（比如赋值）和单纯计算求值的。
 * 
 * this
 * new
 * super
 */
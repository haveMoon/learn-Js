/**
 * 语句分为顺序语句 分支语句 循环语句
 * 
 * 块语句
 * 条件语句
 * 
 * 假值：即下面这些值求职为false
 * false null undefined 0 NaN 空字符串""
 * 所有其他值，包括所有对象，作为条件语句时会被求值为true 
 * 
 * */

{
    var z = 1;
}

if (z === 1) {
    console.log("z is 1");
}
else if (z === 2) {
    console.log("z is 2");
}
else {
    console.log("z is not 1 or 2");
}

//不要混淆原始布尔值 true 和 false 与 Boolean 对象的真和假！
const b = new Boolean(false);
if (b) {
    console.log("b求值为真");
}
else {
    console.log("b求值为假");
}

if (b === true) {
    console.log("b === true 求值为真");
} else {
    console.log("b === true 求值为假");
}

/**
 *      switch语句
 */
let fruitType = 'banana';
switch (fruitType) {
    case "apple":
        console.log(`你喜欢${fruitType}` + "啊噗噜派！");
        break;
    case 'pineapple':
        console.log(`I have a pen, I have a ${fruitType}!`);
        break;
    default:
        console.log(`没有你说的${fruitType}`);
}

/**
 *       异常处理语句
 * JS可以抛出任何对象，并非需要特定的ERROR等对象
 * 但还是建议抛出专门为这个目的创建的异常类型：ECMAScript异常，DOMException
 * 
 * throw语句：可以抛出任意表达式：
 * throw 1; throw "error"; throw true;
 * throw{
 *     toString(){return "custom error message";}
 * }
 * 
 * try-catch语句
 * try 块执行成功——但如果它没有执行成功，那么你希望将控制转移到 catch 块。
 * 如果 try 块中的语句（或者在 try 块中调用的函数里）抛出了异常，
 * 那么控制立马转移到 catch 块。如果 try 块没有抛出异常，catch 块就会被跳过。
 *
 * 在catch块，可以使用console.error()打印错误
 * 
 * finally块
 * 无论是否有异常发生，都会执行finally块中的语句。
 * 你可以用 finally 块来令你的脚本在异常发生时优雅地退出。
 * 举个例子，你可能需要释放脚本绑定的资源。
 * finally块会覆盖返回值
 * 
 * 一个try块，至少徐亚存在一个catch或finally
 */
function getMonthName(mo) {
    mo--;
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (monthNames[mo]) {
        return monthNames[mo];
    }
    else {
        //throw "无效月份！";
        throw new Error("无效月份！");
    }
}

let month;
try {
    month = getMonthName(0);
}
catch (e) {
    console.error(e);
    month = "无效";
}
finally {
    console.log(month);
}

//如果 finally 块返回一个值，该值会是整个 try…catch…finally 
// 流程的返回值，不管在 try 和 catch 块中的 return 语句返回了什么：
function f() {
    try {
        console.log(0);
        //如果这里有return语句的话，return语句挂起，此时不执行后面的try块语句
        //来到finally块，若finally块有return语句，则覆盖try块和catch块的返回值
        //return "zero";
        throw "bogus";
        console.log(0.5); //不会执行
    }
    // catch (e) {
    //     console.log(1);
    //     //return语句会挂起直到finally块结束
    //     return "one";
    //     console.log(2); //不会执行
    // }
    finally {
        console.log(3);
        //return语句会覆盖try块和catch块的返回值
        return "two";
        console.log(4); //不会执行
    }
    console.log(5); //不会执行
}
console.log(f()); // two
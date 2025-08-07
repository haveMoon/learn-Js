/**
 *       输出
 * document.write('向文件输出');
 * 以上说的文件上，正是HTML页面，在HTML页面上打印
 * 使用node运行： node 04.js
 * 
 * console.log('向控制台输出');
 * alert('弹出提示框');和浏览器相关
 */

/**
 *       输入
 * 使用浏览器的对话框进行输入：
 * prompt("请输入：")
 */

/**
 *      声明变量
 * 初始化：let var不必初始化，常量const 必须初始化
 * 变量作用域：let const属于块级作用域，var则属于函数作用域，在块中，被认为是全局
*/
const a = 2;
function t() {
    var x = 10;
    //此时在外面不能访问到x
}

{
    var y = 20;
    let z = 30;
    //此时在外面可以访问到与，不能访问到z
}
console.log(y + '\n');

//解构语法
let x = [1, 2];

/**
 *      变量提升
 * var声明的变量声明语句会被提升到当前作用域的最前面，但初始化语句不会被提升。
 * 函数声明则是全部被提升——可以在该函数的作用于中任何地方安全地调用函数
 */

//全局变量

/**
 *      常量
 * const声明的常量不能重新赋值，但是可以被修改，const必须初始化。
 */

//字面量
[1, 2, 3];
//浮点数字面量
console.log(.1e-1);
/**
 *      对象字面量
 * 属性：对象属性名字可以是任意字符串，包括空串。
 * 如果对象属性名字不是合法的 JavaScript 标识符或数字，它必须用引号包裹
 * 访问：属性的名字不合法，那么便不能用点（.）访问属性值。
 * 而是通过方括号表示法（[]）来访问。
 * */
const obj = {
    name: '第一',
    num: 10,
    1: 'hhh',
    ' ': '不合法',
    '[a,b]': '不合法',
    $a: '合法？'
};
console.log(obj.$a);
//console.log(obj[$a]);
console.log(obj[' ']);

/**
 *      增强的对象字面量
 * 属性简写：如果对象的属性名和变量名相同，可以使用简写形式
 * 方法简写：在定义对象的方法时，不再需要使用function关键字;方法与属性之间使用,隔开
 * 计算属性名：可以使用表达式作为属性名,对象中表达式用[]包裹,这使得我们可以动态定义对象的属性
 */
const name = 'Alice';
const age = 25;
const key = 'dyKey';
const value = 'dyValue';
const person = {
    name,
    age,
    sayHi() {
        console.log('Hello!');
    },
    [1 + 2]: '三流心理咨询师',
    [key]: value
};
console.log(person);

/**
 *       增强对象字面量
 * 继承属性：使用__proto__属性可以设置对象的原型
 * 简洁原型定义：使用Object.create方法定义对象原型
 */
const base = { name: 'base' };
const derived =
{
    __proto__: base,
    age: 25
};
console.log(derived.name);

const dp = Object.create(base,
    {
        age: {
            value: 25,
            writable: true,
            fixed: true
        }
    }
)
console.log(dp);
console.log(dp.name + ' ' + dp.age);

/**
 *      字符串字面量
 * 符串字面量是由一对双引号（"）或单引号（'）括起来的零个或多个字符。字符串被限定在同种引号之间（也即，必须是成对单引号或成对双引号）
 * 可以在字符串字面量上使用String对象的所有方法
 * JavaScript 会自动将字符串字面量转换为一个临时字符串对象，调用该方法，然后废弃掉那个临时的字符串对象
 * 
 * 模板字面量：模板字面量由一对反引号（`）（重音符）包围，而不是双引号或单引号。
 * 带模板的标签：
 * 
 */

console.log(`在JavaScript中，"\\n"是换行符`);
console.log('在在JavaScript中，"\\n"是换行符');
//console.log("在在JavaScript中，"\n"是换行符") 报错
console.log("在JavaScript中，\\n是换行符");

console.log(
    `今日：
第一天,
     第二天`
);

/**
 *       带标签的模板字面量
 * 
 */
{
    //下面这个函数中，strings是一个数组，包含了模板字面量中的所有字符串的部分，
    //每个占位符(${expression})前后的字符串会被分别作为一个元素放入数组中
    //举例：Hello, my name is ${name} and I am ${age} years old.中
    // strings为["Hello, my name is ", " and I am ", " years old."]
    //...values:使用了剩余语法的参数，它是一个数组，包含了模板字面量中所有${expression}的值
    //values为["Alice", 25]
    function highlight(strings, ...values) {
        let result = '';
        strings.forEach((string, index) => {
            result += string;
            if (index < values.length) {
                result += `<strong> ${values[index]} </strong>`;
            }
        });
        return result;
    }

    const name = 'Alice';
    const age = 25;
    const message = highlight`Hello, my name is ${name} and I am ${age} years old.`;

    console.log(message);
    // 输出: Hello, my name is <strong>Alice</strong> and I am <strong>25</strong> years old.
}
/**
 *      对象 object
 * JS的一种数据类型，引用数据类型
 * 可以理解为一组无序的键值对，而数组是有序的数据类型
 * 
 * 对象是由属性和方法组成的
 * 属性是依附于对象的变量
 * 属性名是字符串，可以包裹''也可以不包
 */

//对象使用：声明 {}是对象字面量
let person = {
    uname: 'Lily',
    age: 25,
    gender: 'female',
    "special-attr": 'no',

    getName() {
        return this.uname;
    },//方法也不要忘记 ，

    say: function () {
        console.log("Hi, my name is " + this.uname);

    }
}
//查询对象属性
console.log(person.uname); // Lily
person.age = 26; // 修改对象属性
console.log(person.age); // 26
person.statue = 'alive'; // 添加对象属性
delete person.age; // 删除对象属性，不建议
console.log(person["special-attr"]);//访问对象属性的另一种方式
console.log(person['uname']);

//调用对象方法
person.say(); // Hi, my name is Lily
console.log(person.getName()); // Lily

/**
 *      遍历对象
 * 对象属性是无序的，不能像数组那样通过下标访问，只能通过属性名访问
 */
//for let k in arr 遍历数组，k是索引，但是是字符串类型的数
for (let p in person) {
    console.log(p);//属性名 拿到'uname'字符串
    console.log(person[p]);
}

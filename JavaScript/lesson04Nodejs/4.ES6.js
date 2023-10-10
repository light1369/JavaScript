//ES6指语法规范

const { log } = require("console");


/**
 *  传统变量使用var
    ES6后使用let,const解决：
        1.var变量穿透的问题，
        2.和常量修改的问题
**/

for (var i = 0; i < 3; i++) {
    console.log(i);
}
//这里造成变量穿透
console.log(i);

const PI = Math.PI;//常量命名大写
// PI = 12;//Assignment to constant variable.
console.log(PI);

//实际开发生产中，如果是小程序，uniapp或者一些脚手架中，可以大胆使用let和const
//但是如果是web开发，建议使用var,因为在一些低版本的浏览器中还不支持let和const






//默认参数和箭头函数
var sum = function (a = 12, b = 3) {
    return a + b;
}
// console.log(sum(6));

//箭头函数- 改进 1 ,(去掉function)
var sum = (a = 12, b = 3) => {
    return a + b;
}
//箭头函数- 改进 2 ,
//(如果逻辑代码仅有return可以直接省去，如果有逻辑体就不能省去)
var sum = (a = 12, b = 3) => a + b;
var sum = (a = 12, b = 3) => {
    num = a + b;
    return num;
}

//如果参数只有一个（）可以省去
//使用案例
var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map((obj) => obj * 2);
console.log(newArr);
// 改
var newArr = arr.map(obj => obj * 2);







//-----------------对象

let info1 = {
    title: "标题",
    link: "www.baidu.com",
    go: function () {
        console.log("传统写法");
    }
};
console.log(info1);

//ES6简写
//因为对象是key:value存在
//1：如果key和变量名一致，可以只定义一次即可
//2：如果value是一个函数，可以把`:function`去掉，只剩下（）即可
let title = "标题";
let link = 'www.baidu.com';
let info2 = {
    title,
    link,
    go() {
        console.log("ES6对象简写");
    }
};
console.log(info2);






//------------------对象解构  
let info3 = {
    title3: "标题",
    link3: "www.baidu.com",
    go3: function () {
        console.log("传统写法");
    }
};

//通过.的方式
console.log(info3.title);
console.log(info3.link);
//通过[]的方式
console.log(info3["title"]);
console.log(info3["link"]);
info1.go3();

//ES6对象解构-其实就是快速获取属性和方法的方式
var { title3, link3, go3 } = info3;
console.log(title3, link3);
// go3();
//还原代码
// var title3 = info3.title3;
// var link3 = info3.link3;


//对象传播操作符...
let person = {
    name: "张三",
    address: "齐齐哈尔",
    link3: "www.baidu.com",
    go3: function () {
        console.log("动作");
    }
};

//解构出来,传播操作符可自行命名，other以对象的形式返回未解构的其他属性
var { name, address, ...other } = person;
console.log(name);
console.log(address);
console.log(other); 



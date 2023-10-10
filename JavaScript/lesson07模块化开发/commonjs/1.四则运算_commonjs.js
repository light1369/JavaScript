//commonjs模块化开发
//工具类
const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

const di = (a, b) => a / b;

// 将上述方法导出给其他地方使用
// module.exports={
//     sum:sum,
//     sub:sub,
//     mul:mul,
//     di:di
// }

module.exports = {
    sum,
    sub,
    mul,
    di
}

//在JavaScript/lesson07commonjs/导入测试.js中引用
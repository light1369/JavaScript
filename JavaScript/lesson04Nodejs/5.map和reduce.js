//要对数组中每个元素*2
let arr = [1, 2, 3, 34, 5, 6];
//传统方式
let newarr = [];
for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i] * 2);
}
console.log(newarr);

//map
var newarr2 = arr.map(e => e * 2);
console.log(newarr2);


//案列
let users1 = [{ name: "张三", age: 12 }, { name: "李四", age: 14 }, { name: "王五", age: 11 }]
console.log(users1);
var users2 = users1.map(e => {
    e.age = e.age + 1
    return e;
});
console.log(users2);





//reduce
let nums = [1, 2, 3, 3,4, 5, 6];
var sum = nums.reduce((a, b)=>{
    return a + b;
})
console.log(sum);//得到24
// export function getList() {
//     //真实业务中，异步获取数据
//     console.log("获取数据列表");
// }

// export function save() {
//     //真实业务中，异步获取数据
//     console.log("保存数据");
// }

//新写法
export default {
    getList() {
        console.log("获取数据列表");
    },
    save() {
        console.log("保存数据");
    }
}
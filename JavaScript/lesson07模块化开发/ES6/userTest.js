import { getList, save } from "./userApi.js"
 
getList()
save()

//默认不支持es6语法，

// 新写法
import user from "./userApi.js"
user.getList()
user.save()
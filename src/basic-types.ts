// TypeScript 基本类型案例及应用场景

// 数字类型：用于计数、价格、分数等
let num: number = 42;
let price: number = 99.9; // 商品价格
let score: number = 88;   // 学生成绩

// 字符串类型：用于姓名、描述、消息等
let str: string = "Hello, TypeScript!";
let username: string = "张三"; // 用户名
let desc: string = "一段描述信息";

// 布尔类型：用于状态、开关、条件判断
let isActive: boolean = true; // 用户是否激活
let isLogin: boolean = false; // 是否登录

// 数组类型：用于存储一组同类型数据，如列表、集合
let arr: number[] = [1, 2, 3]; // 数字列表
let names: string[] = ["A", "B", "C"]; // 姓名列表

// 元组类型：用于表达固定结构的数据，如坐标、键值对
let tuple: [string, number] = ["age", 18]; // 键值对
let point: [number, number] = [100, 200];   // 坐标点

// 枚举类型：用于状态、类型、选项等有限集合
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green; // 颜色选择
enum Status {
  Success = 200,
  Fail = 500
}
let resStatus: Status = Status.Success; // 接口返回状态

// any 类型：用于接收不确定类型的数据（不推荐常用）
let notSure: any = 4;
notSure = "可能是字符串";
notSure = true;

// void 类型：用于无返回值的函数，如日志、通知
function logMessage(msg: string): void {
  console.log(msg);
}
logMessage("记录一条日志");

// null 和 undefined：用于变量初始化、可选值
let n: null = null;
let u: undefined = undefined;
let optional: string | undefined = undefined; // 可选属性

console.log("数字:", num, price, score);
console.log("字符串:", str, username, desc);
console.log("布尔:", isActive, isLogin);
console.log("数组:", arr, names);
console.log("元组:", tuple, point);
console.log("枚举:", c, resStatus);
console.log("any:", notSure);
console.log("void: 日志已输出");
console.log("null/undefined:", n, u, optional);
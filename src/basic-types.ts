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
console.log('枚举类型 Color', Color, Color.Red); // 0

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

// unknown 类型：用于接收不确定类型的数据（更安全的 any）
let value: unknown = 123;
value = "hello";
// 不能直接进行操作，需类型判断或断言
if (typeof value === "string") {
  console.log("unknown 字符串：", value);
}
value = false;
// 或者使用类型断言
console.log('unknown as类型断言', (value as boolean) === false);

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

// ================== 类型总结 ==================
/**
 * TypeScript 基本类型总结：
 * 1. number：用于各种数值运算、计数、金额等。
 * 2. string：用于文本、描述、标识等。
 * 3. boolean：用于状态、条件、开关等。
 * 4. array：用于同类型数据集合。
 * 5. tuple：用于结构固定的数据，如坐标、键值对。
 * 6. enum：用于有限选项、状态、类型。
 * 7. any：用于不确定类型（慎用）。
 * 8. unknown：用于不确定类型（更安全，需类型判断或断言后使用）。
 * 9. void：用于无返回值函数。
 * 10. null/undefined：用于变量初始化、可选值。
 */

// ================== 面试常见问题及解析 ==================
/**
 * Q1: TypeScript 和 JavaScript 的区别是什么？
 * A1: TypeScript 是 JavaScript 的超集，增加了类型系统和编译时检查，能提前发现错误，提高代码可维护性。
 *
 * Q2: any 和 unknown 有什么区别？
 * A2: any 跳过所有类型检查，unknown 只能赋值给自身或 any，使用前需类型断言或类型判断，更安全。
 *     应用示例：
 *     let value: unknown = "abc";
 *     // 不能直接用 value.length，需判断：
 *     if (typeof value === "string") {
 *       console.log(value.length);
 *     }
 *     // 或类型断言：
 *     console.log((value as string).length);
 *
 * Q3: null 和 undefined 有什么区别？
 * A3: undefined 表示变量未赋值，null 表示变量已赋值但值为空。strictNullChecks 下两者区分更严格。
 *
 * Q4: interface 和 type 有什么区别？
 * A4: interface 主要用于对象结构定义，可继承和合并；type 可定义任意类型（基本、联合、交叉等），更灵活。
 *
 * Q5: 枚举 enum 的应用场景？
 * A5: 用于状态、类型、选项等有限集合，便于代码可读性和维护。
 *
 * Q6: void 类型的作用？
 * A6: 用于无返回值的函数，常见于日志、事件处理等。
 * 
 * Q7: 如何理解“超集”？还有哪些类似的词？
 * A7: “超集”指包含了另一个集合的全部内容，并在此基础上扩展了新内容。TypeScript 是 JavaScript 的超集，包含 JS 所有语法和功能，并增加了类型系统等特性。
 *     类似词有：
 *     - 子集（subset）：某集合的所有元素都属于另一个集合，如 ES5 是 ES6 的子集。
 *     - 扩展（extension）：在原有基础上增加新功能，如 TypeScript 是对 JavaScript 的扩展。
 *     - 兼容（compatible）：新系统能兼容旧系统内容，如向后兼容（backward compatible）。
 *     - 衍生（derivative）：由某基础发展出的新事物，如 Flow 是 JS 的类型衍生工具。
 */
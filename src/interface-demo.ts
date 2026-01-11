
// TypeScript 接口案例与高级用法

// 1. 基础接口
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}
const student: Person = {
  name: "小明",
  age: 20,
  sayHello() {
    console.log(`你好，我是${this.name}，今年${this.age}岁。`);
  }
};
student.sayHello();

// 2. 可选属性、只读属性
interface User {
  readonly id: number;
  username: string;
  email?: string; // 可选属性
}
const u: User = { id: 1, username: 'admin' };

// 3. 索引签名（动态属性名）
interface StringMap {
  [key: string]: string;
}
const dict: StringMap = { a: 'A', b: 'B' };

// 4. 函数类型接口
interface Add {
  (a: number, b: number): number;
  count?:number
}
const add: Add = (x, y) => x + y;
type AddType = (a: number, b:number) =>number
const sum:AddType = (m,n) => m + n;
// 5. 接口继承
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
const pet: Dog = { name: '旺财', breed: '哈士奇' };

// 6. 混合类型接口（可调用对象）
interface Counter {
  (): number;
  count: number;
}
function createCounter(): Counter {
  let c = function () {
    return ++c.count;
  } as Counter;
  c.count = 0;
  return c;
}
const c1 = createCounter();
c1();
c1();
console.log('Counter:', c1.count);

// 7. 接口与类实现
interface Logger {
  log(msg: string): void;
}
class ConsoleLogger implements Logger {
  log(msg: string): void {
    console.log('日志:', msg);
  }
}
const logger: Logger = new ConsoleLogger();
logger.log('Hello Interface!');

// 8. 真实项目：接口定义API响应、配置、表单、组件props等
interface ApiResponse<T> {
  code: number;
  data: T;
  msg: string;
}
const res: ApiResponse<{ list: string[] }> = {
  code: 0,
  data: { list: ['a', 'b'] },
  msg: 'ok'
};

// 9. 真实项目：表单数据接口
interface LoginForm {
  username: string;
  password: string;
  remember?: boolean;
}
function login(form: LoginForm) {
  // ...提交表单
}
login({ username: 'admin', password: '123456' });

// 10. 真实项目：组件props接口
interface ButtonProps {
  text: string;
  onClick: () => void;
}
function Button(props: ButtonProps) {
  // ...渲染按钮
}

// ================== 面试常见问题及答案 ==================
/**
 * Q1: interface 和 type 有什么区别？
 *   A1: interface 主要用于对象结构定义，可继承和合并；type 可定义任意类型（基本、联合、交叉等），更灵活。
 *
 * Q2: 接口能否定义可选属性、只读属性、索引签名？
 *   A2: 可以，分别用 ?、readonly、[key: string]: 类型。
 *
 * Q3: 接口能否继承多个接口？
 *   A3: 可以，用 extends A, B。
 *
 * Q4: 类如何实现接口？
 *   A4: 用 implements 关键字，强制类实现接口声明的所有属性和方法。
 *
 * Q5: 接口在真实项目中的应用场景？
 *   A5: API 响应、配置对象、表单数据、组件 props、工具库参数等。
 *
 * Q6: 函数类型接口怎么用？
 *   A6: 用 interface 声明函数参数和返回值类型，常用于回调、工具函数。
 */

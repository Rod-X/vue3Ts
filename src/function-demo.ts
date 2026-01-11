
// TypeScript 函数案例与高级用法

// 1. 普通函数
function add(a: number, b: number): number {
  return a + b;
}

// 2. 可选参数
function greet(name: string, message?: string): string {
  return message ? `${message}, ${name}` : `Hello, ${name}`;
}

// 3. 默认参数
function pow(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}

// 4. 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

// 5. 函数类型别名
type MathOp = (a: number, b: number) => number;
const multiply: MathOp = (x, y) => x * y;

// 6. 函数重载
function format(input: number): string;
function format(input: string): string;
function format(input: number | string): string {
  if (typeof input === 'number') {
    return `数字：${input}`;
  }
  return `字符串：${input}`;
}

// 7. this 类型与箭头函数
const counter = {
  count: 0,
  inc(): void {
    this.count++;
  },
  incAsync(): void {
    setTimeout(() => {
      this.count++; // 箭头函数绑定外部 this
    }, 100);
  }
};

// 8. 可调用对象（函数对象混合类型）
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

// 9. 泛型函数
function identity<T>(arg: T): T {
  return arg;
}
const str = identity<string>('abc');
const num = identity(123); // 类型自动推断

// 10. 泛型约束
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}
getLength('hello');
getLength([1, 2, 3]);

// 11. 函数作为参数和返回值（高阶函数）
function operate(a: number, b: number, fn: MathOp): number {
  return fn(a, b);
}
operate(2, 3, multiply);

// 12. never 类型（抛异常/死循环）
function throwError(msg: string): never {
  throw new Error(msg);
}

// 13. 函数默认 this 类型
function show(this: { name: string }) {
  console.log(this.name);
}
show.call({ name: 'TS' });

// 14. 解构赋值与类型注解
function printUser({ name, age }: { name: string; age: number }) {
  console.log(name, age);
}
printUser({ name: '张三', age: 18 });

// 15. 实际项目：回调、事件、工具函数
type Callback = (err: Error | null, data?: any) => void;
function fetchData(cb: Callback) {
  setTimeout(() => cb(null, { result: 1 }), 100);
}
fetchData((err, data) => {
  if (!err) console.log('数据:', data);
});

// ================== 面试常见问题及答案 ==================
/**
 * Q1: TypeScript 函数和 JS 函数有何区别？
 *   A1: TS 函数有类型注解、可选/默认/剩余参数、函数重载、泛型、this 类型等，能在编译期检查类型。
 *
 * Q2: 如何定义函数类型？
 *   A2: 可用类型别名、接口、内联类型等方式定义参数和返回值类型。
 *
 * Q3: 什么是函数重载？
 *   A3: 同名函数根据参数类型/数量不同有多种声明，实际实现需兼容所有声明。
 *
 * Q4: 箭头函数和普通函数的 this 有什么区别？
 *   A4: 箭头函数不会绑定自己的 this，取决于外部作用域；普通函数的 this 由调用方式决定。
 *
 * Q5: 泛型函数的应用场景？
 *   A5: 需要复用、类型灵活但受约束的场景，如工具函数、集合操作等。
 *
 * Q6: never 类型在函数中的作用？
 *   A6: 表示函数永远不会有返回值，如抛异常、死循环。
 *
 * Q7: 如何让函数参数可选？
 *   A7: 在参数名后加 ?，如 fn(a: number, b?: string)
 *
 * Q8: 如何让函数参数有默认值？
 *   A8: 直接赋值，如 fn(a: number, b: string = 'x')
 *
 * Q9: 如何定义高阶函数？
 *   A9: 参数或返回值为函数的函数。
 *
 * Q10: 实际项目中函数的常见用法？
 *   A10: 事件回调、异步处理、工具库、数据处理、业务逻辑封装等。
 */

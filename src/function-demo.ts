// TypeScript 函数案例
// 普通函数
function add(a: number, b: number): number {
  return a + b;
}
// 可选参数
function greet(name: string, message?: string): string {
  return message ? `${message}, ${name}` : `Hello, ${name}`;
}
// 默认参数
function pow(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}
// 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

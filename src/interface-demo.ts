// TypeScript 接口案例
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

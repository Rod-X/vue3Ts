
/**
 * TypeScript 类常用案例与关键字说明
 * 面试常见问题补充
 */

// 1. 基础类定义与继承
class Animal {
  // 公有属性
  name: string;
  // 受保护属性（只能在类及子类中访问）
  protected age: number;
  // 私有属性（只能在类内部访问）
  private id: number;

  // 构造函数
  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  // 公有方法
  move(distance: number = 0): void {
    console.log(`${this.name} 移动了 ${distance} 米。`);
  }

  // 受保护方法
  protected getAge(): number {
    return this.age;
  }

  // 私有方法
  private getId(): number {
    return this.id;
  }
}

// 2. 继承与 super 关键字
class Dog extends Animal {
  breed: string;
  constructor(name: string, age: number, id: number, breed: string) {
    super(name, age, id); // 调用父类构造函数
    this.breed = breed;
  }
  bark(): void {
    console.log('汪汪！');
  }
  showInfo(): void {
    // 访问受保护属性和方法
    console.log(`名字: ${this.name}, 年龄: ${this.getAge()}, 品种: ${this.breed}`);
  }
}

const dog = new Dog('小黑', 3, 1001, '哈士奇');
dog.bark();
dog.move(10);
dog.showInfo();

// 3. 抽象类与抽象方法（面试高频）
abstract class Shape {
  abstract getArea(): number; // 抽象方法，子类必须实现
  printArea(): void {
    console.log('面积为:', this.getArea());
  }
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea(): number {
    return this.width * this.height;
  }
}
const rect = new Rectangle(5, 8);
rect.printArea();

// 4. 静态属性与方法
class MathUtil {
  static PI = 3.14159;
  static getCircleArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}
console.log('圆面积:', MathUtil.getCircleArea(2));

// 5. 只读属性 readonly
class User {
  readonly id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
const user = new User(1, '张三');
// user.id = 2; // 编译报错，只读属性不可修改

// 6. 类实现接口
interface Logger {
  log(message: string): void;
}
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log('日志:', message);
  }
}
const logger: Logger = new ConsoleLogger();
logger.log('Hello TypeScript!');

// 7. 工厂模式（真实项目常用）
class Car {
  constructor(public brand: string) {}
  drive(): void {
    console.log(`${this.brand} 行驶中...`);
  }
}
class CarFactory {
  static createCar(brand: string): Car {
    return new Car(brand);
  }
}
const car = CarFactory.createCar('特斯拉');
car.drive();

// 8. 单例模式（真实项目常用）
class Singleton {
  private static instance: Singleton;
  private constructor() {}
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log('单例:', s1 === s2); // true

/**
 * 面试常见问题：
 * 1. TypeScript 类与 ES6 类的区别？（类型系统、访问修饰符、接口实现等）
 * 2. 访问修饰符 public/protected/private 区别？
 * 3. 抽象类和接口的区别？
 * 4. 如何实现单例模式？
 * 5. super 关键字作用？
 * 6. static、readonly 用法？
 * 7. 类如何实现接口？
 * 8. 工厂模式、单例模式在项目中的应用场景？
 * 9. TypeScript 如何支持多态？（父类引用指向子类对象）
 * 10. 如何用类实现依赖注入？
 */

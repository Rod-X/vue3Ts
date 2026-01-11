
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
/**
 * abstract 关键字说明：
 * 1. 用于定义抽象类和抽象方法。
 * 2. 抽象类不能被实例化，只能被继承。
 * 3. 抽象方法没有方法体，必须在子类中实现。
 * 4. 抽象类可以包含普通方法和属性。
 * 5. 常用于设计规范、模板模式、强制子类实现某些方法。
 *
 * 面试高频问法：
 * - abstract 和 interface 区别？
 *   抽象类可包含实现代码和状态，接口只定义结构；类只能继承一个抽象类，但可实现多个接口。
 * - 抽象类能否有构造函数？
 *   可以，有构造函数用于子类调用。
 * - 抽象类能否包含普通方法和属性？
 *   可以。
 */
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
/**
 * interface 关键字说明：
 * 1. 用于定义对象、类、函数的结构类型。
 * 2. 只描述结构，不包含实现。
 * 3. 类可以 implements 一个或多个接口，强制实现接口中声明的方法和属性。
 * 4. 接口可继承（extends）其他接口，支持多继承。
 * 5. 常用于面向接口编程、解耦、规范约束。
 *
 * 面试高频问法：
 * - interface 和 type 区别？
 *   interface 主要用于结构定义和继承，type 更灵活可定义联合、交叉类型等。
 * - 类能否实现多个接口？
 *   可以，用 implements A, B。
 * - 接口能否继承多个接口？
 *   可以，用 extends A, B。
 * - 接口能否定义可选属性、只读属性、函数类型？
 *   可以。
 */
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
 * 面试常见问题及答案：
 * Q1: TypeScript 类与 ES6 类的区别？
 *   A1: TypeScript 增加了类型系统、访问修饰符（public/protected/private）、抽象类、接口实现等，能在编译阶段发现错误。
 *
 * Q2: 访问修饰符 public/protected/private 区别？
 *   A2: public：公开，任何地方都能访问。
 *       protected：受保护，只能在类及其子类中访问。
 *       private：私有，只能在类内部访问。
 *
 * Q3: 抽象类和接口的区别？
 *   A3: 抽象类可包含实现代码和状态，接口只定义结构。
 *       类只能继承一个抽象类，但可实现多个接口。
 *       抽象类可有构造函数和普通方法，接口不能。
 *
 * Q4: 如何实现单例模式？
 *   A4: 构造函数私有化，类中提供静态 getInstance 方法，内部维护唯一实例。
 *
 * Q5: super 关键字作用？
 *   A5: 在子类中调用父类的构造函数或方法。
 *
 * Q6: static、readonly 用法？
 *   A6: static：静态属性/方法，属于类本身，不属于实例。
 *       readonly：只读属性，只能在声明或构造函数中赋值，不能修改。
 *
 * Q7: 类如何实现接口？
 *   A7: 用 implements 关键字，强制类实现接口声明的所有属性和方法。
 *
 * Q8: 工厂模式、单例模式在项目中的应用场景？
 *   A8: 工厂模式：用于对象创建逻辑复杂、需解耦时，如组件工厂、服务工厂。
 *       单例模式：全局只需一个实例，如全局配置、日志管理、数据库连接池。
 *
 * Q9: TypeScript 如何支持多态？
 *   A9: 父类引用指向子类对象，调用方法时会执行子类的实现（方法重写）。
 *
 * Q10: 如何用类实现依赖注入？
 *   A10: 通过构造函数参数传递依赖对象，或用属性注入，便于解耦和测试。
 */

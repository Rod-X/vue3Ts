// TypeScript 类案例
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number = 0) {
    console.log(`${this.name} 移动了 ${distance} 米。`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('汪汪！');
  }
}

const dog = new Dog('小黑');
dog.bark();
dog.move(10);

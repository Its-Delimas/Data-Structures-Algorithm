// basic syntax
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): void {
    console.log(` Hello, I'm ${this.name}`);
  }
}

const person = new Person("Spencer", 20);

console.log(person.name);
person.greet();

// Access specifier
class car {
  public model: string; //Accessible everywhere
  constructor(model: string) {
    this.model = model;
  }
}

class BankAccount {
  private balance: number = 0; //Only accessible inside the class

  deposit(amount: number): void {
    this.balance += amount;
  }
}
const account = new BankAccount();
account.deposit(100); // account.balance; ❌ Error

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says woof!`);
  }
}

// Getters and Setters
class BankAccount_2 {
  private balance = 0;
  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
}

// Inheritance
class WildAnimal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log("Some sound");
  }
}
class Bambi extends WildAnimal {
  speak(): void {
    console.log("Woof!");
  }
}

const dog = new Bambi("Bambi");
dog.speak();

// Abstarct class
abstract class Shape {
  abstract area(): number;
}
class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

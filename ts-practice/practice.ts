let count = 0;
count += 1;

const message: string = 'hello World';
const done: boolean = true;

const numbers: number[] = [1, 2, 3, 4];
const messages: string[] = ['hello', 'world'];

messages.push('1');

function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 3);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: 'Name',
  age: 20,
};

const expert: Developer = {
  name: 'expert',
  skills: ['typescript', 'javascript', 'react'],
};

const people: Person[] = [person, expert];

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

function wrap<T>(a: T) {
  return {
    a,
  };
}

const merged = merge({ foo: 1 }, { bar: 3 });
const wrapped = wrap('New String');

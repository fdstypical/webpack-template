const myFunc = (name: string, num: number): object => {
  return {
    name,
    num,
  };
};

const a: number = 10;
const b: string = "Hello";

console.log(a, b, myFunc("Andrey", 18));

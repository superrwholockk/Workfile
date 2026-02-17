// function add(num1, num2) {
//     return num1 + num2;
// }
//
// function subtract(num1, num2) {
//     return num1 - num2
// }
//
// function multiply(num1, num2) {
//     return num1 * num2
// }
//
// function divide(num1, num2) {
//     return num1 / num2
// }
//
// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }
//
// console.log(calculator(10, 5, multiply));
// console.log(calculator(10, 5, subtract));
// console.log(calculator(10, 5, add));
// console.log(calculator(10, 5, divide));

function HouseKeeper (name, age, yearsofexperience, cleaningreperatori) {
    this.name = name;
    this.age = age;
    this.yearsofexperience = yearsofexperience;
    this.cleaningreperatori = cleaningreperatori;
}

HouseKeeper1 = new HouseKeeper("nina", 30, 4, ["bathroom", "livingroom"]);
HouseKeeper2 = new HouseKeeper("ana", 25, 2, ["garden", "livingroom"]);
console.log(HouseKeeper2.age);
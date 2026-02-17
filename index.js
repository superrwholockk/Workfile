// // "Character Counter": შექმენით textarea და პატარა ტექსტი "0/50". წერისას ციფრი უნდა იზრდებოდეს.
// //  თუ 50 სიმბოლოს გადააჭარბებს, ტექსტი გაწითლდეს.
//
// let text=document.querySelector('#textArea');
//
// text.addEventListener('input', function()  {
//     if(text.value.length > 50){
//         text.classList.add('red');
//     }else{
//         text.classList.remove('red');
//     }
// })

// // "Simple To-Do": ფორმაში ტექსტის შეყვანისას და Submit-ზე დაჭერისას, ტექსტი დაემატოს
// //  <ul> სიაში როგორც ახალი <li>.
//
// let form = document.querySelector("#todoForm");
// let input = document.querySelector("#todoInput");
// let toDoList = document.querySelector("#todoList");
//
// form.addEventListener("submit", function(e){
//     e.preventDefault();
//     if (input.value !== "") {
//         let li = document.createElement("li");
//         toDoList.appendChild(li);
//         li.textContent = input.value;
//         input.value = "";
//         console.log(toDoList);
//     }
// })

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

// function HouseKeeper (name, age, yearsofexperience, cleaningreperatori) {
//     this.name = name;
//     this.age = age;
//     this.yearsofexperience = yearsofexperience;
//     this.cleaningreperator = cleaningreperator;
// }
//
// HouseKeeper1 = new HouseKeeper("nina", 30, 4, ["bathroom", "livingroom"]);
// HouseKeeper2 = new HouseKeeper("ana", 25, 2, ["garden", "livingroom"]);
// console.log(HouseKeeper2.age);
//OLD WAY OF DOING IT ........here Person is a constructor function 
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// Person.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// const faculty11 = new Person("Junaid", "Ali", 32, "brown");
// console.log(faculty1.fullName());




// NEW WAY OF DOING IT.......here Person is a class and it has its instance objects
// class Person {
//     constructor(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//     }
//     fullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }


// const faculty1 = new Person("Junaid", "Ali", 32, "brown");
// console.log(faculty1.fullName());


// function Account(ownerName, initialBalance) {
//     this.owner = ownerName;
//     this.balance = initialBalance || 0;
// }

// Account.prototype.deposit = function(amount) {
//     this.balance += amount;
//     console.log(`${this.owner} deposited $${amount}. New balance is $${this.balance}`);
// }

// Account.prototype.withdraw = function(amount) {
//     if(amount <= this.balance) {
//         // this.balance = this.balance - amount;
//         this.balance -= amount
//         console.log((`${this.owner} withdrew $${amount}. New balance is $${this.balance}`));
//     } else {
//         console.log("Insifficient funds!");
//     }
// }

// let johnAccount = new Account("John", 100);
// let saraAccount = new Account("Sara", 175);
// let junaidAccount = new Account("Junaid", 50);
// johnAccount.deposit(50);
// saraAccount.deposit(100);
// junaidAccount.deposit(25);
// junaidAccount.withdraw(100);
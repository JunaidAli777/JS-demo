const mySym = Symbol("key1");

const JsUser = {
    name: "Junaid",
    "full name": "Junaid Ali", //NOT RECOMMENDED
    age: 32,
    location: "India",
    email: "junaid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"],
    [mySym]: "this is my symbol",
    greetingUser: function() {
        console.log("Hello user")
    },
    printemail: function() {
        console.log(`The email of the user is ${this.email}`); 
    }
}
// JsUser.greetingUser() //METHODS, basically when you make a function as a property of an object
// JsUser.printemail()
// JsUser.greeting = function() {
//     console.log('Hello JS user');
// }

// JsUser.greetingTwo = function() {
//     console.log(`Hello JS user, ${this.name}`);
    
// }

// console.log(JsUser);
// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); not a recommended way to do it


// JsUser.email = "junaid@google.com"
// console.log(JsUser.email);

// Object.freeze(JsUser); way to freeze your objects
// JsUser.email = "junaid@google.com"
// console.log(JsUser.email);



// JsUser.greeting();
// JsUser.greetingTwo();

// const fbUser = new Object()
// console.log(fbUser);


const fbUser = {};
fbUser.id = "321ghj453";
fbUser.name = "Junaid";
fbUser.isLoggedIn = false;
// console.log(fbUser);
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// console.log(Object.entries(fbUser));


// const xUser = {
//     email: "user@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Junaid",
//             lastname: "Ali"
//         }
//     }
// }

// console.log(xUser.fullname.userfullname.firstname);
// console.log(xUser.fullname?.userfullname.firstname);

// const obj1 = { 1: 'a', 2: 'b'};
// const obj2 = {3: 'c', 4: 'd'};
// const obj3 = { obj1, obj2}; will create an object of objects

// const obj3 = Object.assign(target, source);
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// const obj3 = { ...obj1, ...obj2}; spread operator will spread the key value pairs through the object
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "junaid@gmail.com",
        username: "junaid"
    },
    {
        id: 2,
        email: "sam@gmail.com",
        username: "sam"
    },
    {
        id: 3,
        email: "raj@gmail.com",
        username: "raj"
    },
]

// console.log(users[0].id);
// console.log(users[1].email);
// users[2].id = 4;
// console.log(users[2]);

//de-structuring

// const course = {
//     coursename: 'FSD',
//     price: 99,
//     courseTrainer: "Junaid"
// }

// // const trainer = course.courseTrainer; one way of doing it

// const {courseTrainer: trainer1} = course;
// console.log(trainer1);





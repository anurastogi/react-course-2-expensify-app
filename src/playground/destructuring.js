
//Array Destr.
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state='New York'] = address;

// console.log(`You are in ${city} ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50','$2.75'];

const [itemName,,cost] = item;

console.log(`A medium ${itemName} costs ${cost}.`)

//Object destructuring
// const person = {
//     name : 'Anu',
//     age : 38,
//     location: {
//         city : 'Mumbai',
//         temp : 92
//     }
// };
// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp:temperature} = person.location;
// console.log(`It is ${temperature} in ${city}.`)

// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday',
//     publisher : {
//         name : 'Penguin'
//     }
// }

// const {name:publisherName='Self-Published'} = book.publisher;

// console.log(publisherName);
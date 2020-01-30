// Check to see if react works =>
// console.log('Hello? Does this work?');
// console.log('Live reload really works');

// See what functions work in REACT apps and see new ECMA QoL improvements
// #1 Accept arguments instead of using global variables.
// function greet({
//     name, 
//     address
// }) {
//     // const {name} = whom;
//     // #2 Always return a value!
//     return `Hello, ${name}! You're from ${address}!`;
// }

// const person = {
//     name: 'Greta',
//     address: 'Alpha Centauri',
//     occupation: 'Hero'
// };

// function fromEarth(somebody) {
//     // add an address property whose value is Earth
//     const modifiedSomebody = {
//         address: 'Earth', // this allows the address to be overwritten if it exists already in the object (works like css)
//         ...somebody, // object spread syntax
//         // take all the key value pairs from the original and sprinkle them right here
//         // address: somebody.address || 'Earth', // This one uses the guard operator to not overwrite stuff if it exists
//         age: 'infinity'
//     };
//     // This is used because you don't want to modify a global variable
//     // Instead, you are copying the somebody object using ..., and then creating a new one that isn't saved anywhere
//     // This is much safer and will avoid bugs
//     // somebody.address = 'Earth';
//     // then return that object
//     return modifiedSomebody;
// }

// const person2 = {
//     name: 'Travis'
// }

// console.log(greet(fromEarth(person)));
// console.log(greet(person2));

// See array spread
// const persons = [`Alice`, `Bob`, `Cthulu`];

// const modifiedPersons = [`Daria`, ...persons, "Daria"];

// const modifiedPersonsSet = new Set(modifiedPersons);
// const personsObjs = [
//     {name: "Alice", address: "Earth"},
//     {name: "Bob", address: "Atlanta"},
//     {name: "Cthulu", address: "Pacific"},
// ];

// const noPacifics = personsObjs.filter(({address}) => address !== "Pacific");
// // console.log(noPacifics);
// console.log(noPacifics.map(greet));
// console.log(modifiedPersonsSet);
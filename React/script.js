function sum(num1,num2,...milad){
    console.log(num1,num2,milad);
}
sum(10,20,30,40)
// spread Operators
// let array1= [1,2,3]
// let array2 = [10,20,30,40]
// let array3= [...array1, ...array2]
// console.log(array3);
let object1= {
    prop: 'value1'
}
let object2 = {prop2: 'value2'}
let object3= {...object1, ...object2}
console.log(object3);
// Array destructuring
 let array = ['fatima' , 23 , true , {id:5} , 'rahimi']
 let [item1 , item2, item3 , item4, item5 , item6] = array;
 console.log(item1 , item2, item3 , item4, item5 , item6);
 // Object destructuring
 let user = {
    Firstname : 'fatiam',
    id: 5,
    lastName: 'rahimi',
    age:25
 }
 let {Firstname:Esm , id , lastName , age}= user
 console.log(Esm , id , lastName , age);
//  forEach Method
let numbers = [1,2,3,4,5,6,7,8,9,10,11]
// numbers.forEach(function(number){
//     console.log(number);
// })
numbers.forEach(number => console.log(number));
function sum(num1,num2,...milad){
    console.log(num1,num2,milad);
}
sum(10,20,30,40)
// spread Operators
let array1= [1,2,3]
let array2 = [10,20,30,40]
let array3= [...array1, ...array2]
console.log(array3);
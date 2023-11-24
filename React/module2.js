let products =[
    {id: 1, name: 'John', price:1_500_000},
    {id: 2, name: 'React', price:2_500_000},
    {id: 3, name: 'Bootstrap', price:500_000}
]
let names = products.name;
console.log(names);
let totalPrice = products.reduce(function Shop (prev , current){
    return prev + current;
})

totalPrice.Shop(products["id: 1"], products["id: 2"])

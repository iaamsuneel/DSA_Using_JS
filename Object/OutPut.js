/* const obj = [
    {
        id: 11,
        product_id: 5,
        quantity: 1,
        price: 450,
        userId: 2,
        title: "Tablet",
    },
    {
        id: 11,
        product_id: 5,
        quantity: 1,
        price: 450,
        userId: 2,
        title: "new",
    },
];
let res = obj.some((item) => item.includes("Tablets"));
console.log("----->", res); */
function moveToZeroEnd(arr){
   for(let i=0;i<arr.length;i++){
    while(arr[i]==0){
        console.log("first",i)
    }
   }

}
console.log(moveToZeroEnd([3,0,0,5,0,6,0,9]))


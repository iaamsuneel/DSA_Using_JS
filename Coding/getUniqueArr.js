/* I/P [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
O/P [{name: "sai"},{name:"Nang"}{name: "111111"} */
function getUniqueArr(arr) {
    const uniqueArr = [];
    const isCheck = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isCheck.includes(arr[i].name)) {
            isCheck.push(arr[i].name);
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
const arr = [
    { name: "sai" },
    { name: "Nang" },
    { name: "sai" },
    { name: "Nang" },
    { name: "111111" },
];
console.log(getUniqueArr(arr));

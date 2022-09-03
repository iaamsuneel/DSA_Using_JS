// remove duplicate values
function duplicatesVal(arr){
    arr.filter((item,index)=>
        index !==arr.indexOf(item),
        console.log("index !==arr.indexOf(item)",index !==arr.indexOf(item)),
        console.log("index", index),
        console.log("arr.indexOf(item)",arr.indexOf(item))
    
    )
   // console.log(duplicates)
}

duplicatesVal([1, 2, 3, 2, 4, 5, 5, 6])
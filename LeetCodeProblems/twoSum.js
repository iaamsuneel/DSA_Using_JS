var twoSum = function (numbers, target) {
    // using loop 
    /*  const res=[]
     for(let i=0;i<numbers.length;i++){
         for( let j=i+1;j<numbers.length;j++){
             if(numbers[i]+numbers[j]===target)
                 res.push(i+1,j+1)
         }
     }
     return res */  // error TLE TC-o(n2)
    let p1 = 0
    let p2 = numbers.length - 1
    while (numbers[p1] + numbers[p2] !== target) {
        if (numbers[p1] + numbers[p2] > target) {
            p2--
        } else {
            p1++
        }
    }
    return [p1 + 1, p2 + 1]
};
console.log("twoSum", twoSum([2, 7, 11, 15], 9)); //  [ 1, 2 ]



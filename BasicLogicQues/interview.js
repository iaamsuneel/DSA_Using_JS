function rev(str){
    const newArr=[]
    for(let i=0;i<str.length;i++){
       var res=str[i].toString().split('').reverse().join('')
      // console.log("rr",res)
       // console.log("ff",res);
        newArr.push(res)
    }
return newArr.reverse()
}
console.log(rev([1, 2, 3, 4, "random", 6, 7, 8, "js", "interview"]))
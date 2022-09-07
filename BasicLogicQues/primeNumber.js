// for Check prime number or not
function prime(num) {
    var count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count = count + 1
        }
    }
    if (count < 1) {
        console.log("prime")
    }
    else {
        console.log(" not prime")
    }
}
prime(101);
// for check if prime number then print else print next prime number
function nextPrime(num){
	for(i=2;i<num;i++){
        if(num%i===0){
           // console.log(++num)
            return nextPrime(++num)
        }
    }
    return num 
}
nextPrime(8) // output-: 11
var number=154
var revNum=0
while(number>0){
   var remainder= number%10
   revNum= revNum*10+ remainder
   number=parseInt(number/10)
   console.log(remainder);
}
console.log(revNum);


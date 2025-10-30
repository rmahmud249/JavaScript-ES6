//Default Parameter===============
function sum(num1=0,num2=0){
 const total=num1+num2;
 console.log(total);
}
// sum(20,30);

//multiply=========================
function multiply(num1=1,num2=1){
    const multi=num1*num2;
    console.log(multi)
}
multiply(10,20)

//==================================
function fullName(first,second=''){
    const name=first + '' + second;
    console.log(name);
}
fullName('Rasel Mahmud')

//===================================
function sum2(num1,num2){
    const result = num1 +num2;
    // const  output='sum of ' + num1 + ' and ' + num2 + ' is equal to '+ result;
    //Dynamic value 
    const output =`sum of ${num1} and ${num2} is equal to ${result}`;
    console.log(output);
}
sum2(10,20);


const price =100;
const  discountPrice=`Discount 20% Price is :  ${price*0.8}`;
console.log(discountPrice);

//=========Arrow Function


















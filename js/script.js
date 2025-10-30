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


//==========Function Expression========
const addtions=function(num1, num2){
    return num1+num2;
}
const  additonR=addtions(10,30);
console.log(additonR);

//=========Arrow Function==============

const add=(num1,num2)=>num1+num2
const addResult=add(10,20);
console.log(addResult);


//=========Arrow Function==============
const getTax=(amount,taxRate)=>amount*taxRate/100;


//===========================
const numbers=[10,20,30,40];
console.log(numbers);
console.log(...numbers);


const max=Math.max(10,20,50,40,500,900,1000);
console.log(max);

const product={
    name : 'Shirt',
    price : 100 ,
    quantity : 7
    }
const discountProduct=product.price*20/100;
console.log(discountProduct);



//============================
const employee={
    name :'Rasel Mahmud',
    designation: 'Student',
    salary :2000,
    expreance:3
}
const keys=Object.keys(employee);
const values = Object.values(employee);
console.log(keys);
console.log(values);




//=====================================
const student={
    name :'Rasel Mahmud',
    designation: 'Student',
    salary :2000,
    expreance:3,
    age: 22
}
for(const key in student){
    const values = student[key];
    console.log(key,values);
}

//=======================================
const ky=Object.keys(student);
for(const kyei of ky){
    const valuei=student[kyei];
    console.log(valuei);
}




















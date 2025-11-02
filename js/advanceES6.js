const tax=500;
let eta=5

 const  student={
    name:'Rasel Mahmud',
    marks:20
 }

 const friends=['Rasel','Rahim','Farhan'];

function add(num1,num2=0){
    const result=num1+num2;
    console.log(result);

}
add(10,20);

const dynamicText=`My Tax : ${tax} and marks : ${student.marks} has friends ${friends[0]}`;
console.log(dynamicText);

//====Arrow Functions====================
const add2=(num1,num2)=>num1+num2

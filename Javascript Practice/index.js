

let students =['Jam', 'Martins', 1, 'programmer']
let [x, y, p] = students
console.log(x, y, p);

let greetings = 'Hellow World'
arr=[...greetings]
console.log(arr);

let number =[0, 1,2,3,4,5,6,7,8,9,10]
for( let index=0; index < number.length; index++){
let n= number[index];
if(n%2===0){
    console.log(n + ' is an even number');

    }
}


function jam() {
    alert('Hellow world')
}
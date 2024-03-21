
const myBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const lookup = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];
  
const toRomanNumeral = num =>
    lookup.reduce((acc, [k, v]) => {
    acc += k.repeat(Math.floor(num / v));
    num = num % v;
    return acc;
    }, '');


myBtn.addEventListener("click", () =>{
    const inputVal = document.getElementById("number").value;
    console.log(inputVal);

    output.innerHTML= '';

    if(inputVal == ''){
        errorTxt('Please enter a valid number');
    } else if(inputVal < 1){
        errorTxt('Please enter a number greater than or equal to 1');
    } else if(inputVal > 3999){
        errorTxt('Please enter a number less than or equal to 3999');
    } else{
        displayResult(inputVal);
    }
});


function errorTxt(text){
    output.innerHTML= text;
    output.classList.remove('hidden');
    output.classList.remove('output');
    output.classList.add('alert');
}

function displayResult(input){
    output.innerHTML= toRomanNumeral(input);
    output.classList.remove('hidden');
    output.classList.remove('alert');
    output.classList.add('output');
}

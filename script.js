/* -----------Event Listener call the function after the click--------- */
function calculate(){    
    const firstNumber = document.getElementById("firstNumber").value
    const secondNumber = document.getElementById("secondNumber").value;    
    const operator = document.getElementById("operator").value;
    
    /* ---- Check the input number if it is empty or not---- */
    if(firstNumber!="" && secondNumber!="" && isNaN(firstNumber)==false &&  isNaN(secondNumber)==false){
        let number1 = Number(firstNumber);
        let number2 = Number(secondNumber);
        let total = null;
        
        /* Exceptional Handling */
        try {
            
            /* Check the opertor (SWITCH STATMENT START) */
            switch(operator) {
                case '+':
                    total = add(number1, number2);
                    answer(total);
                    break;
    
                case '-':
                    total = subtract(number1, number2);
                    answer(total);
                    break;
    
                case '*':
                    total = multiply(number1, number2);
                    answer(total);
                    break;
    
                case '/':
                    if (number2 != 0) {
                        total = divide(number1, number2);
                    } else {
                        alert("Cannot divide by zero!");
                    }
                    break;
    
                default:
                    alert("Invalid Operator");
            }
            /* SWITCH STATMENT END */
            
        }
        catch(e){
            console.log(e);
        }


    }
    else{
        alert(`Invalid Input`);
    }
}

/*-------- All Functions --------*/

function add(number1, number2){
  return number1 + number2;  
}
function subtract(number1, number2){
  return number1 - number2;  
}
function multiply(number1, number2){
  return number1 * number2;  
}
function divide(number1, number2){
  return number1 / number2;  
}

/*  It gives the output  */
function answer(total){
    document.getElementById("answer").innerHTML = `Answer is ${total}`;
}


/*  --------- Button Event ------- */
const button = document.querySelector('button');
button.addEventListener('click', calculate);


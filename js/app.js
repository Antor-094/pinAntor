
function getPin(){
    const pin = generatePin();
    const pinString = pin+"";
    if(pinString.length===4){
         
        return pinString;
    }else{
        return getPin()
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    
    const pin = getPin();
   
   const displayPinField = document.getElementById('display-pin');
   displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number==='C'){
            typedNumberField.value = '';
        }else if(number === '<'){
           const antor = previousTypedNumber.split('');
           antor.pop();
           const antor2 = antor.join('')
           typedNumberField.value=antor2;
        }
    }else{
        
       
       const newTypedNumber = previousTypedNumber + number;

       typedNumberField.value = newTypedNumber;

    }
})

document.getElementById('submit-btn1').addEventListener('click',function(){
    
    const pinField = document.getElementById('display-pin');
    const pinNumber = pinField.value;

    const pinTypedNumber = document.getElementById('typed-numbers')
    const typedNumbers = pinTypedNumber.value;
    const pinSuccessMessage = document.getElementById('positive-reply');
    const pinFailureMessage = document.getElementById('negative-reply');

    if(pinNumber===typedNumbers){
        
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }else{
        
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
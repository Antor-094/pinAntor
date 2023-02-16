


function getPin(){
    const pin = pinGenerate();
    const pinString = pin+'';
    if(pinString.length===4){
          return pinString;
    }else{
        return getPin();
    }
}
function pinGenerate(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('pin-n').addEventListener('click',function(){
    
    const pin = getPin();
   
    document.getElementById('pin-show').value = pin;
})
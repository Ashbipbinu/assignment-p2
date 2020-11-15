let phone=document.getElementById("phone");
let error= document.getElementById("error");

function phoneValidate(){
    reg=/^([0-9]{3})([\-." "])?([0-9]{3})([\-." "])?([0-9]{4})$/
   
    if(reg.test(phone.value)){
        error.innerHTML="Valid Phone Number";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid Phone Number";
        error.style.color="red";
        return false;
    
    }

}
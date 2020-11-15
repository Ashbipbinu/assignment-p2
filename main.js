let email=document.getElementById("email");
let label = document.getElementById("label");
function validate(){
    reg=/^([A_Za-z0-9]+)@([A-Za-z0-9]+).([A-Za-z]{2,3})$/
    if(reg.test(email.value)){
        label.innerHTML="Valid";
        label.style.color="green"
        return true;
    }
    else{
        label.innerHTML="Invalid E-mail";
        label.style.color="red";
        return false;
    }
}

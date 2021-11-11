const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//show error
function error(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
//show success
function success(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';

}
//email validation
function validate(input){const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(re.test(input.value.trim())){
    success(input);
}else{
    error(input,'Email not valid');
}

}
//check
function check(array){
    array.forEach(function(input){
        if(input.value.trim()===''){
            error(input,`${firstCap(input)} is required`);
        }else{
            success(input);
        }
    });

}
//length
function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${firstCap(input)} must be at least ${min} characters`);
    }else if(input.value.length>max){
        error(input,`${firstCap(input)} must be no longer than ${max} characters`);  
    }else{
        success(input);
    }
};
//check passwords
function match(pass1,pass2){
    if(pass1.value!==pass2.value){
        error(pass2,'Given password does not match the above');
    }
}
//capitalise first letter
function firstCap(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
//event listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    check([username,email,password,password2]);
    checkLength(username,3,20);
    checkLength(password,6,20);
    validate(email);
    match(password,password2);
   
});

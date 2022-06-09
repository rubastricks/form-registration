const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2'); 
const biEyeBtn = document.getElementById('bi-eye');
const otherBtn = document.getElementById('bi-eye2');
let isPass = true;
let z = true;



//Show input error message 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Email check 
function checkEmail(input) {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  if(re.test(input.value.trim())) {
      showSuccess(input);

  } else{
      showError(input, 'Email is not valid');
  }
}; 


//Check required fields 
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });  
    }

    //Check Length 
    function checkLength(input, min, max) {
        if(input.value.length < min) {
            showError(
                input,
                `${getFieldName(input)} must be at least ${min} characters`
            );
        }else if (input.value.length > max) {
            showError(
                input, 
                `${getFieldName(input)} must be less than ${max} characters`
            );
        } else{
            showSuccess(input);
        }
    }; 

    // Check Password 

    function checkPasswordMatch(input1, input2){
        if(input1.value !== input2.value ) {
            showError(input2, 'Password do not match')

        }
    }

    //Get Field Name 
    function getFieldName(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }


//Event Listeners 
form.addEventListener('submit', function(e){
    e.preventDefault();

   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 10);
   checkLength(password, 4, 30);
   checkEmail(email); 
   checkPasswordMatch(password, password2);
}); 



biEyeBtn.addEventListener('click', toggleEye)

function toggleEye(){
    
    if(isPass) {
        password.setAttribute("type", "text");
        biEyeBtn.classList.remove('fa-eye');
        biEyeBtn.classList.add('fa-eye-slash');
        isPass = false;
    }
    else{
        password.setAttribute("type", "password");
        biEyeBtn.classList.remove('fa-eye-slash');
        biEyeBtn.classList.add('fa-eye');
        isPass = true;
    }
}; 

otherBtn.addEventListener('click', newToggleEye) 
function newToggleEye() {

    if(z) {
        password2.setAttribute("type", "text");
        otherBtn.classList.remove('fa-eye');
        otherBtn.classList.add('fa-eye-slash');
        z = false;
    }
    else{
        password2.setAttribute("type", "password");
        otherBtn.classList.remove('fa-eye-slash');
        otherBtn.classList.add('fa-eye');
       z = true;
    }
} 



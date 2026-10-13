let signUpBtn = document.querySelector('.subtn');
let signInBtn = document.querySelector('.sibtn');
let passwordField = document.querySelector('.pfield');
let title = document.querySelector('.sutitle');
let underline = document.querySelector('.und');

signInBtn.addEventListener('click',()=>{
  passwordField.style.maxHeight = '0';
  title.innerHTML = 'Sign In';
  signUpBtn.classList.add('dis');
  signInBtn.classList.remove('dis');
});
signUpBtn.addEventListener('click',()=>{
  passwordField.style.maxHeight = '60';
  title.innerHTML = 'Sign Up';
  signUpBtn.classList.remove('dis');
  signInBtn.classList.add('dis');
});
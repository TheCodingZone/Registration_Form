const form=document.querySelector('#form');
const nameInput =document.querySelector('#email');
const inputpassword=document.querySelector('#password');
const user=document.querySelector('.user');
const msg=document.querySelector('.msg');

form.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
   
    if(nameInput.value==='' || inputpassword.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please Enter Details';
    }
    else{
        console.log('success');

        const li=document.createElement('li');

        li.appendChild(document.createTextNode(
            `${nameInput}:${inputpassword}`
        ))

        user.appendChild(li);
        nameInput.value='';
        inputpassword.value='';
    }
}
let burger = document.getElementById('burger');
let overlay = document.getElementById('overlay')
let type = document.querySelectorAll('.type')

function showNav() {
    burger.style.width = "0"
    overlay.style.height = "60vh"
}

function closeNav() {
    burger.style.width = "50px"
    overlay.style.height = "0"
}

let i = 0
function showHeading() {
    if (i < 5) {
        type[i].style.height = "40px";
        type[i].style.width = "90%";
        i++;
        setTimeout(showHeading, 2000)
    }
    else{
        i=0;
        type.forEach(element=>{
            element.style.height="0"
            element.style.width="0"
        })
        setTimeout(showHeading,1000)
    }
}

if(document.getElementById('home')!=null){
    showHeading()
}

sigupForm=`    <form action="#" class="form">
<input type="text" required placeholder="Enter the desired username" name="username">
<input type="email" required placeholder="Enter the Email" name="email">
<input type="password" required placeholder="Enter a password" name="password">
<input type="password" required placeholder="Enter the desired username" name="password">
<button class="btn">Signup !</button>
</form>`
loginForm=`<form action="#" class="form">
<input type="text" required placeholder="Enter the desired username" name="username">
<input type="password" required placeholder="Enter a password" name="password">
<button class="btn">Login !</button>
</form>`

function showSignup(){
    document.getElementById('form-1').classList.add('selected-form')
    document.getElementById('form-2').classList.remove('selected-form')
    document.getElementById('form').innerHTML=sigupForm
}

function showLogin(){
    document.getElementById('form-1').classList.remove('selected-form')
    document.getElementById('form-2').classList.add('selected-form')
    document.getElementById('form').innerHTML=loginForm
}
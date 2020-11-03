window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('nav-bg',window.scrollY>0)
})


function showLogin(){
    if(signin.classList.contains('d-none')){
        signin.classList.remove('d-none')
        signup.classList.add('d-none')
    }
    else{
        signin.classList.add('d-none')
        signup.classList.remove('d-none')
    }
}
function showSignup(){
    if(signup.classList.contains('d-none')){
        signup.classList.remove('d-none')
        signin.classList.add('d-none')
    }
    else{
        signup.classList.add('d-none')
        signin.classList.remove('d-none')
    }
}

document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.navlist').classList.toggle('showNav')
})
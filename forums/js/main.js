let overlay=document.getElementById('overlay');
let burger= document.getElementById('burger')
let imageFluid=document.getElementById('image-fluid');

function showNav(){
    overlay.style.opacity="0.8";
    overlay.style.height="100vh";
    burger.style.opacity="0"
}

function closenav(){
    overlay.style.opacity="0";
    overlay.style.height="0";
    burger.style.opacity="1"
}
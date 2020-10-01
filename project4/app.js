function showNav() {
    document.getElementById('overlay').style.height = "120px"
    document.getElementById('overlay').style.width = "200px"
    document.querySelectorAll('.h-nav')[0].style.height = "140px"
    document.getElementById('overlay').style.color = "white"
    document.getElementById('burger').style.width = "0"
    document.getElementById('burger').style.height = "0"
    document.getElementById('burger').style.opacity = "0"
    document.getElementById('burger').style.transform = "rotate(360deg)"
}
function closeNav() {
    document.getElementById('overlay').style.height = "0px"
    document.getElementById('overlay').style.width = "0px"
    document.querySelectorAll('.h-nav')[0].style.height = "72px"
    document.getElementById('overlay').style.color = "white"
    document.getElementById('burger').style.width = "40px"
    document.getElementById('burger').style.height = "40px"
    document.getElementById('burger').style.opacity = "1"
    document.getElementById('burger').style.transform = "rotate(-360deg)"
}

function showLogin(){       
    document.getElementById('login-overlay').style.width="100%"
    document.getElementById('login-overlay').style.height="100%"
    document.getElementById('login-overlay').style.opacity="0.9"
}
function closeLogin(){
    
    document.getElementById('login-overlay').style.width="0%"
    document.getElementById('login-overlay').style.height="0%"
    document.getElementById('login-overlay').style.opacity="0.0"
}





let qualification=["Web Developer??","App Developer??","Game developer??","Competative Coder ??","Answer is :","....Web Edu..."];
let k=0;
let j=0;
function after(){
   if(k<qualification.length){
        if(j<qualification[k].length){
            document.getElementById('root').innerHTML+=qualification[k][j];
            j++;
            setTimeout(after,300);
        }
        else{
            k++;
            j=0;
            document.getElementById('root').innerHTML=``
            setTimeout(after,300)
        }
   }
   else{
       k=0;
       j=0;
       document.getElementById('root').innerHTML=``;
       setTimeout(after,300)
   }
}

after()


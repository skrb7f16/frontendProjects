const home= document.getElementById('home')
const about= document.getElementById('about')
const contact= document.getElementById('contact')
const write= document.getElementById('write')

function homeShow(){
    home.style.width="100%"
    about.style.width="0"
    contact.style.width="0"
    write.style.width="0"
    home.style.opacity="1"
    about.style.opacity="0"
    contact.style.opacity="0"
    write.style.opacity="0"
    home.style.overflow="visible"
    about.style.overflow="hidden"
    contact.style.overflow="hidden"
    write.style.overflow="hidden"
    document.getElementById('homeBtn').classList.add('active')
    document.getElementById('aboutBtn').classList.remove('active')
    document.getElementById('contactBtn').classList.remove('active')
    document.getElementById('writeBtn').classList.remove('active')
}

function aboutShow(){
    home.style.width="0"
    about.style.width="100%"
    contact.style.width="0"
    write.style.width="0"
    home.style.opacity="0"
    about.style.opacity="1"
    contact.style.opacity="0"
    write.style.opacity="0"
    home.style.overflow="hidden"
    about.style.overflow="visible"
    contact.style.overflow="hidden"
    write.style.overflow="hidden"
    document.getElementById('homeBtn').classList.remove('active')
    document.getElementById('aboutBtn').classList.add('active')
    document.getElementById('contactBtn').classList.remove('active')
    document.getElementById('writeBtn').classList.remove('active')
}
function contactShow(){
    home.style.width="0"
    about.style.width="0"
    contact.style.width="100%"
    write.style.width="0"
    home.style.opacity="0"
    about.style.opacity="0"
    contact.style.opacity="1"
    write.style.opacity="0"
    home.style.overflow="hidden"
    about.style.overflow="hidden"
    contact.style.overflow="visible"
    write.style.overflow="hidden"
    document.getElementById('homeBtn').classList.remove('active')
    document.getElementById('aboutBtn').classList.remove('active')
    document.getElementById('contactBtn').classList.add('active')
    document.getElementById('writeBtn').classList.remove('active')
}
function writeShow(){
    home.style.width="0"
    about.style.width="0"
    contact.style.width="0"
    write.style.width="100%"
    home.style.opacity="0"
    about.style.opacity="0"
    contact.style.opacity="0"
    write.style.opacity="1"
    home.style.overflow="hidden"
    about.style.overflow="hidden"
    contact.style.overflow="hidden"
    write.style.overflow="visible"
    document.getElementById('homeBtn').classList.remove('active')
    document.getElementById('aboutBtn').classList.remove('active')
    document.getElementById('contactBtn').classList.remove('active')
    document.getElementById('writeBtn').classList.add('active')
}



function ullu(){
    prompt('Ullu bnanya bada maja aaya heheheh. chlo apna nam bta do')
}
let btn = document.getElementById('payBtn');
console.log(btn)

btn.addEventListener('click', function(e){
    e.preventDefault();
    name=document.getElementById('name').value;
    console.log(name);
})
const navlist=document.getElementById('navlist');
const toggle=document.getElementById('toggle');
const btn=document.getElementById('btn');

toggle.addEventListener('click',()=>{
    navlist.classList.toggle('active');
   btn.classList.toggle('active');


})


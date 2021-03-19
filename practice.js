var execute = ()=>{
    document.getElementById('nav').classList.toggle("differ")
    document.getElementById('link').classList.toggle("differ")
}
function namely(){
   var ajinkya = document.getElementById('new');
   var num = 7;
    
   var cdown = setInterval(() => {
    
      ajinkya.innerHTML = "my name will appear in "  +num;
      num--;
   },1000
)
    setTimeout(() =>{
        clearInterval(cdown,9000);
        ajinkya.innerHTML='Ajinkya Ghadge';
        ajinkya.style.fontSize = '30px'
    },9000
    )
    
}



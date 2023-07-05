
var btnLgpd = document.querySelector('#btnLgpd'); 
var lgpd = document.querySelector('.lgpd');
//console.log(btnLgpd);

sessionStorage.setItem('fechouLgpd','nao');

//Verificar SE o usuario já fechou o lgpd. se sim deixar a div escondida
if(localStorage.getItem('fechouLgpd') == 'sim'){
    lgpd.style.visibility='hidden';
}


btnLgpd.addEventListener('click',function(){
    //console.log('clicou');

    lgpd.style.visibility='hidden'; //esconde o elemento lgpd
    
    //sessionStorage.setItem('fechouLgpd','sim'); //guardando em sessao a informação de que o usuario fechou
    
    localStorage.setItem('fechouLgpd','sim'); //guarda no historico do navegador 
})
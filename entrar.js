function menuShow(){
    var items = document.querySelector('.link-container')
    var bars = document.querySelector('.burger-container')
    if(items.style.display == 'block'){
        items.style.display = 'none'
        bars.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }else{
        bars.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        items.style.display = 'block'
    }
}

function logar(){
    var email = document.getElementById('email')
    var senha = document.getElementById('senha')
    var btn = document.getElementById('btn')
    var er1 = document.getElementById('erro1')
    var er2 = document.getElementById('erro2')
    if(email.value.length == 0 || email.value < btn){
     er1.style.display = 'block'
    }else{

    }
    if(senha.value.length == 0 || senha.value < btn){
        er2.style.display = 'block'
    }else{
        Swal.fire({
            width: '50%',
            icon: 'info',
            title: 'Essa função só funciona no site oficial...',
            text: 'Vá ao site oficial para entrar',
            footer: '<a href="https://www.netflix.com/br/login">Ir ao site da netflix</a>'
          })
    }
}

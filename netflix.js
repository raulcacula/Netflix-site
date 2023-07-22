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




var respo = document.getElementById('respo-frase')
var respo2 = document.getElementById('respo-frase2')
var solid = document.querySelector('.perguntas-frase i')
function liberar(){
if(respo.style.display == 'block' && respo2.style.display == 'block'){
     respo.style.display = 'none'
     respo2.style.display = 'none'
     solid.innerHTML = '  <i class="fa-solid fa-plus"></i>'
}else{
    respo.style.display = 'block'
    respo2.style.display = 'block'
    solid.innerHTML = '<i class="fa-solid fa-x"></i>'
}
}


function verificar(){
    var txt = document.getElementById('txt')
    var btn = document.getElementById('#btn')
    var enq = document.querySelector('.enquete')
    if(txt.value.length == 0 || txt.value > btn){
        Swal.fire({
            position: 'top',
            title: 'Nenhum filme ou serie digitado.',
            icon:'warning',
            fontfamily: 'poppins',
            width: '60%',
            background: 'red'
        })
    }else{
        Swal.fire({
            position: 'top',
            title: 'Agradeço pela sua Avaliação',
            icon: 'success',
            width: '60%',
            showConfirmButton: false,
            timer: 1500
        })
        enq.innerHTML = 'Obrigado pela avalização'
        enq.style.color = 'red'
    }


  /*  else if(txt.length == value){
        form.classList.remove('remover')
    }*/
}



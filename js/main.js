$(document).ready(function(){

    $('body').scrollspy({ target: '#cabecalho', offset:10 }); 

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(00) 00000-00000'
    });

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            mensagem:{
                required:true
            }
        },
        messages:{
            nome:'Por favor insira o seu nome!'
        },

        submitHandler: function (form){
            console.log(form);
        },

        invalidHandler: function (evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert (`Existem ${camposIncorretos} campos incorretos!`);
            };
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const modal = new bootstrap.Modal('#modal');
    setTimeout(function(){
        modal.show();
    }, 3000);
})
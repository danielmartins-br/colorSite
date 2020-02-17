const controlaCor = document.querySelector('.cores');
const tipoCores = document.querySelectorAll('.cor');


for(let c of tipoCores)
{
    c.addEventListener('click', function(){
        const idCor = c.getAttribute('id');

        if(idCor == "verde")
        {
            document.body.style.backgroundColor = 'green';
        }

        if(idCor == "vermelho")
        {
            document.body.style.backgroundColor = 'red';
        }
        
        if(idCor == "marrom")
        {
            document.body.style.backgroundColor = '#654321';
        }

        if(idCor == "azul")
        {
            document.body.style.backgroundColor = 'blue';
        }

        if(idCor == "amarelo")
        {
            document.body.style.backgroundColor = '#eead2d';
        }

        if(idCor == "roxo")
        {
            document.body.style.backgroundColor = 'purple';
        }
        
    })
}
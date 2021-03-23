'use setricts'
/*
document.querySelector('.mensaje').textContent


console.log(document.querySelector('.mensaje').textContent);

document.querySelector('.mensaje').textContent = '🎉 Numero Correcto!!!' 
console.log(document.querySelector('.mensaje').textContent = '🎉 Numero Correcto!!!' );

document.querySelector('.numero').textContent = 15
document.querySelector('.score').textContent = 13

document.querySelector('.adivina').value = 23


console.log(document.querySelector('.adivina').value );

document.querySelector('.mensaje').textContent = '🎉 Numero Correcto!!!'*/

let numeroSecreto = Math.trunc(Math.random()*20) + 1

let score = 20

let highscore = 0

console.log(numeroSecreto );

const mostrarMensaje = function(mensaje){
    document.querySelector('.mensaje').textContent = mensaje
}

document.querySelector('.check').addEventListener('click', function(){
    let adivina = Number(document.querySelector('.adivina').value)
    console.log(adivina ,typeof adivina);
        
    if (!adivina) {
        // document.querySelector('.mensaje').textContent = '🛑 No ingreso un numero'

        mostrarMensaje('🛑 No ingreso un numero')
    } else if (adivina === numeroSecreto){
        // document.querySelector('.mensaje').textContent = '🎉 Numero Correcto!!! 🏋️‍♂️'
        mostrarMensaje('🎉 Numero Correcto!!! 🏋️‍♂️')
        document.querySelector('body').style.backgroundColor = '#60B347' // no ponemos .body porque NO es una Clase; es un zona 
        document.querySelector('.numero').style.fontSize = '5rem'
        document.querySelector('.numero').style.width = '30rem'
        document.querySelector('.numero').textContent = numeroSecreto // ponemos .numero porque es una CLASE
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore 
        }
    
    } else if (adivina !== numeroSecreto) {
        if (score > 1) {
            // document.querySelector('.mensaje').textContent = adivina > numeroSecreto ? '⤴ demasiado alto!!!!' : '⤵ demasiado bajo!!!';
            mostrarMensaje(adivina > numeroSecreto ? '⤴ demasiado alto!!!!' : '⤵ demasiado bajo!!!')
            score--;
            document.querySelector('.score').textContent = score
        }else{
            // document.querySelector('.mensaje').textContent = '💥perdiste el juego!!!! 😝'
            mostrarMensaje('💥perdiste el juego!!!! 😝')
            document.querySelector('.score').textContent = 0
        }
        
    }
    
    
    /*
    else if (adivina > numeroSecreto) {
        if (score <= 1) {
            document.querySelector('.mensaje').textContent = '💥perdiste el juego!!!! 😝'
            document.querySelector('.score').textContent = 0
        } else {
            document.querySelector('.mensaje').textContent = '⤴ demasiado alto!!!!' 
        score = score - 1 // score-- (es igual)
        document.querySelector('.score').textContent = score 
        }
             
    }else if (adivina < numeroSecreto) {
        if (score <= 1) {
            document.querySelector('.mensaje').textContent = '💥perdiste el juego!!!! 😝'
        } else{
        document.querySelector('.mensaje').textContent = '⤵ demasiado bajo!!!'
        score--
        document.querySelector('.score').textContent = score 
        } 
    }*/
     
   
})


document.querySelector('.reiniciar').addEventListener('click', function(){
    document.querySelector('.score').textContent = 20
    numeroSecreto = Math.trunc(Math.random()*20) + 1
    document.querySelector('.numero').textContent = '¿?'
    // document.querySelector('.mensaje').textContent = 'comienza a adivinar...'
    mostrarMensaje('comienza a adivinar... 🤔')
    document.querySelector('.adivina').value = ''
    document.querySelector('body').style.backgroundColor = '#222222'
    document.querySelector('.numero').style.fontSize = '3rem'
    score = 20
    

})




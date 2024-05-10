const yourName = document.getElementById('userName')
const yourMail = document.getElementById('userMail')
const yourMesage = document.getElementById('userMessage')
const sendbtn = document.getElementById('btn')

/* guardar en localstorage */
function onSubmit(event) {
    event.preventDefault()
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log('esto es el bucle', `${key}: ${localStorage.getItem(key)}`);
    }
    //const result = yourName.value //mostrar valor 
    const result = []
    localStorage.setItem('Data' , result) 
    console.log(result);
}
sendbtn.addEventListener('click' , onSubmit)


/* escribir datos */
/* localStorage.setItem('yourName', 'Maria')
localStorage.yourMail = 'Gmail'
localStorage.yourMesage = 'HolaQuetal'
 */

/* leer datos */
/* 
const name = localStorage.getItem('yourName')
const mail = localStorage.yourMail
const message = localStorage.yourMesage


for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
} */






/* 

function onSubmit(event) {
    event.preventDefault()
   
    console.log('hola')
   }
    */
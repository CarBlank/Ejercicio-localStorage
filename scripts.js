const yourName = document.getElementById('userName')
const yourMail = document.getElementById('userMail')
const yourMesage = document.getElementById('userMessage')
const sendbtn = document.getElementById('btn')
const form = document.querySelector('form')

const userInfo = document.getElementById('content')

/* guardar en localstorage */
/* function onSubmit(event) {
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

 */

function onSubmit(event) {
    event.preventDefault() 
    /* otra forma de escribirlo
    const resultName = yourName.value 
    const resultMail = yourMail.value 
 */
  /*  va dentro de stringify
        const userData = {
        yourName: yourName.value,
        yourMail: yourMail.value,

    }
 */
/*   otra forma de escribirlo:  
    localStorage.setItem('userData' , JSON.stringify(userData))  */
  /*   
    if (yourName.value === '' || yourMail === '') {

    }

 */
    saveDataStorage()
    const userFromStorage = JSON.parse(localStorage.getItem('userData'))
    
    userInfo.innerHTML = `<p> Hola  ${userFromStorage.yourName} tu  correo es ${userFromStorage.yourMail}</p>`
    console.log(userFromStorage);
}


function saveDataStorage() {
    localStorage.setItem(
        'userData' , 
        JSON.stringify({
            yourName: yourName.value,
            yourMail: yourMail.value,
        }
    )) 

}

form.addEventListener('submit' , onSubmit)









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
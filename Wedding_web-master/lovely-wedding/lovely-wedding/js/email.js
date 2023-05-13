// email script
function sendMail(){
    var params = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        guest:document.getElementById('guest').value,
        events:document.getElementById('events').value,
        message:document.getElementById('message').value
    }   
const serviceID = "service_zhwrfar"
const templateID = "template_onf3h9g"

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById('name').value =""
        document.getElementById('email').value =""
        document.getElementById('guest').value =""
        document.getElementById('events').value =""
        document.getElementById('message').value =""
        console.log(res)
        alert('Your message sent successfully')
    }
)
.catch(err=>console.log(err))
}
window.prompt('yes')
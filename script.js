
const validation = () =>
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email")
    var message = document.getElementsByClassName("message")[0]
    var valid = re.test(String(email.value).toLowerCase())
    if(email.value === "" || email.value === null || (!valid)){
        message.innerHTML = " please enter a valid email address"
    }
    else{
        message.innerHTML = "";
        email.value="";
    }
}
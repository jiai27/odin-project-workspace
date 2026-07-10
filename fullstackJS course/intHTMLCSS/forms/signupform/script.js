const password = document.querySelector("#password")
const confPass = document.querySelector("#confirmpassword")

function checkPasswords(){
    if (password.value !== confPass.value){
        return false
    }
    else{
        return true
    }
}


const submit = document.querySelector("button")
submit.addEventListener('click', (event) => {
    let valid = checkPasswords()
    if (valid == true){
        console.log("valid, continue to next page")
    }
    else{
        console.log("invalid, passwords do not match")
    }
})
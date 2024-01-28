const login=()=> {
    if(username.value==""||pass.value==""){
        alert("Please fill the details completely")
    }else{
        user=username.value
        localStorage.setItem("username",user)
        window.location="dash2.html"
        alert("Login Successfull")
    }
}
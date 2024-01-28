if(localStorage.getItem('username'))
{
    usern.innerHTML=localStorage.getItem('username')
}else{
    alert("Please Login!!!")
    window.location="login.html"
}

const logout=()=>{
    localStorage.removeItem('username')
    window.location="index.html"

}
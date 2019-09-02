function validator(){
    name=document.getElementById("uname").value
    pword=document.getElementById("pword").value
    console.log(name);
    console.log(pword)
    if(name==='Prashil' && pword==='1234'){
        alert("Welcome"+name);
    }
    else{
        alert("Invalid Credentials");
    }
}
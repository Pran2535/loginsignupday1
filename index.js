function validate() {
    var email = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (email === "pranav@gmail.com" && password === "222") {
        alert("Login success");
    }
    else{
        alert("login failed");
    }
}

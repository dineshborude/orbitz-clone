
function signin(e) {
    e.preventDefault();
    let myform = document.getElementById("myform");

    let email = myform.email.value;

    let password = myform.password.value;
    console.log(email, password);

    let all_users = JSON.parse(localStorage.getItem("users"))

    all_users.forEach(function (user) {
        if (email === user.email && password === user.password) {
            alert("loged in succesfully")
            window.location.href = "home_page.html"

        } else if (email.length == 0 || password.length == 0) {
            alert("Enter yor email and Password")
        }

        else if (email !== user.email || password !== user.password) {
            alert("User Not found")
        }


    })
}
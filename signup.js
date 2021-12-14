
function signup(e) {
    e.preventDefault();
    let myform = document.getElementById("myform");

    let name = myform.name.value;

    let email = myform.email.value;

    let password = myform.password.value;
    console.log(name, email, password);

    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]))
    }

    let user = {
        name,
        email,
        password
    }
    let arr = JSON.parse(localStorage.getItem("users"));

    if (user.password.length > 8 && user.password.length < 30) {
        arr.push(user);
        localStorage.setItem("users", JSON.stringify(arr))
        window.location.href ="home_page.html"

        alert('Your account has been Created')

    } else {
        let signup = document.getElementById("signup_container")

        let para = document.createElement("p");
        para.textContent = "Your password must be at least 8 characters";

        para.setAttribute("class", "red-color")

        signup.append(para)

    }
}
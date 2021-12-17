var btn = document.getElementById("stays")

btn.addEventListener("click", stays)



function stays() {

    let info = document.createElement("div");
    info.setAttribute("id", "info");

    console.log(info);

    let search_container = document.getElementById("search_container");

    // console.log(info);
    search_container.append(info)

    let inpt_field = document.createElement("div");

    info.append(inpt_field)

    inpt_field.setAttribute("id", "forms");
    console.log(inpt_field);

    var fill = document.createElement("form");

    fill.setAttribute("id", "fill")



    inpt_field.append(fill)

    let cities = ["Going to", "Mumabai", "pune", "Hydrabad"]

    // for (let i = 0; i < 4; i++) {
    //     //   let inpt = document.createElement("div");
    // if (i == 0) {
    var inpt = document.createElement("div")
    let y = document.createElement("select");
    y.setAttribute("id", "cities");
    y.setAttribute("class", "inpt_item")
    y.setAttribute("placeholder", "Going to")
    let el = 0;
    cities.forEach(function city_name() {

        let city = document.createElement("option");
        city.setAttribute("value", cities[el]);
        city.innerHTML = cities[el]
        y.append(city)
        el++;
        inpt.append(y)

    })
    // inpt_field.append(inpt)
    fill.append(inpt)

    // }
    // else if (i == 1 || i == 2) {
    var inpt = document.createElement("div")
    let a = document.createElement("INPUT");
    a.setAttribute("type", "date");
    a.setAttribute("class", "inpt_item");
    a.setAttribute("id", "check_in");
    inpt.append(a)
    // inpt_field.append(inpt);
    fill.append(inpt)

    var inpt = document.createElement("div")
    let b = document.createElement("INPUT");
    b.setAttribute("type", "date");
    b.setAttribute("class", "inpt_item")
    b.setAttribute("id", "check_out")
    inpt.append(b)
    // inpt_field.append(inpt)
    fill.append(inpt)


    var inpt = document.createElement("div");
    let z = document.createElement("INPUT");
    z.setAttribute("type", "number")
    z.setAttribute("class", "inpt_item")
    z.setAttribute("placeholder", "Travelers");
    z.setAttribute("id", "Travelers")
    inpt.append(z);
    // inpt_field.append(inpt)
    fill.append(inpt)

    //     }
    // }
    let btn_div = document.createElement("div");
    let search_btn = document.createElement("button");
    search_btn.textContent = "Search"
    btn_div.setAttribute("id", "search_btn")
    btn_div.append(search_btn)
    info.append(btn_div)
    search_btn.addEventListener("mouseenter", color_faint)

    search_btn.addEventListener("mouseleave", color_dark);

    search_btn.addEventListener("click", function () {
        validate(event)
    })

    function color_faint() {
        search_btn.style.backgroundColor = "#e97199"
    }
    function color_dark() {
        search_btn.style.backgroundColor = "#df346d"
    }
    btn.removeEventListener("click", stays);

}

function validate(e) {
    e.preventDefault()
    var city = document.getElementById("cities").value;
    // console.log(city);
    var check_in = document.getElementById("check_in").value;
    // console.log(check_in);
    var check_out = document.getElementById("check_out").value;
    // console.log(check_out);

    var Travelers = document.getElementById("Travelers").value;

    let traval_details = {
        city,
        check_in,
        check_out,
        Travelers
    }
    if (traval_details.city == "Mumabai") {
        window.location.href = "mumbai.html"

    }
    if (localStorage.getItem(traval_details) == null) {
        localStorage.setItem("traval_details", JSON.stringify(traval_details))
    };




    if (city == "" || check_in == "" || check_out == "" ||
        Travelers == "") {
        alert("To continue, Please fill the details")
    }

}

function get_app() {

    let phone = document.getElementById("phone").value;
    if (phone.length == 10) {
        alert("We’ve sent you a text message with a link to download the app.")
    } else {
        alert("Please enter a valid phone number.")
    }

}

// var Mumabai_hotals = [
//     {
//         name: "Taj Mahal Tower, Mumbai",
//         price: 12,
//         img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4e/e6/b1/photo6jpg.jpg?w=900&h=-1&s=1",

//     },
//     {
//         name: "Taj Mahal Palace, Mumbai",
//         price: 12,
//         img: "https://th.bing.com/th/id/OIP.tYv2-wS9BJZWs16rGPQvrwHaE7?w=271&h=181&c=7&r=0&o=5&pid=1.7",

//     },
//     {
//         name: "Planet Plaza, Mumbai",
//         price: 12,
//         img: "https://th.bing.com/th/id/OIP.tYv2-wS9BJZWs16rGPQvrwHaE7?w=271&h=181&c=7&r=0&o=5&pid=1.7"
//     },
//     {
//         name: "Hotel Sea Princes, Mumbai",
//         price: 12,
//         img: "https://th.bing.com/th/id/OIP.9rpxVYymX2kShVumZQlwawHaE8?w=240&h=180&c=7&r=0&o=5&pid=1.7"
//     },
//     {
//         name: "Planet Plaza, Mumbai",
//         price: 12,
//         img: "https://th.bing.com/th/id/OIP.9rpxVYymX2kShVumZQlwawHaE8?w=240&h=180&c=7&r=0&o=5&pid=1.7",

//     },

// ]
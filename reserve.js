


JSON.parse(localStorage.getItem("reserve_mumbai"))
var reserved_hotel = (JSON.parse(localStorage.getItem("reserve_mumbai")));



let room_images = [
    reserved_hotel.img,
    "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/103556733.jpg?k=0f462025ae978fc3fbe623a99df33355a48bc5457bcb153605e2a2335f4185fa&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/103702964.jpg?k=c4e73cd1cbff13755b72ba8e36ba235f93691c5f4b6dbd9a8c52e3223b7026e2&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/18178036.jpg?k=b7b74bc0dbd3149f920b8253dd084ed4bf0cafdc60f937005c7aee657cba07f0&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/18181072.jpg?k=7c70d8c51210844612f431d600a4fa54b2c19f37ada4d4d67ba688327caea74e&o="
]




let main_container = document.getElementById("main_container");

let img_container = document.getElementById("img_container")




//    here el refers to each image source
room_images.forEach(function (el) {
    var image_box = document.createElement("div");

    image_box.setAttribute("class", "image_box");

    var img = document.createElement("img");

    img.src = el;

    img_container.append(image_box);

    image_box.append(img)

})

function show_prices() {
    let rooms_prices = document.querySelectorAll(".flex_items");
    i = 0;
    j = 1;
    rooms_prices.forEach(function (el) {
        let img = document.createElement("img");
        img.src = reserved_hotel.rooms[i].img;

        let name = document.createElement("h3");
        name.textContent = reserved_hotel.rooms[i].room;
        let p = document.createElement("h1");
        p.setAttribute("class", "price")
        p.textContent = "$" + reserved_hotel.rooms[i].price;
        let final_price = reserved_hotel.rooms[i].price;




        let reserve = document.createElement("button")

        reserve.textContent = "Reserve"

        console.log(payment);

        reserve.setAttribute("id", "reserve_btn")


        reserve.onclick = function () {
            payment(img.src, reserved_hotel.name, name.textContent, final_price);
            window.location.href = "payment.html"

        }
        console.log(final_price);

        el.append(img)
        el.append(name)
        el.append(p)
        el.append(reserve)
        i++;
        j++
    })

}

show_prices();

if (localStorage.getItem("reserved rooms") == null) {
    localStorage.setItem("reserved rooms", JSON.stringify([]))
}


function payment(img, HN, name, final_price) {
    let reserved_room = {
        img,
        HN,
        name,
        final_price
    }

    var arr = JSON.parse(localStorage.getItem("reserved rooms"))
    arr.push(reserved_room)

    localStorage.setItem("reserved rooms", JSON.stringify(arr))
    console.log(arr + "arr");



}

// console.log(arr);
console.log(reserved_hotel);









// here info_cont refers to the information related to hotel

let info_cont = document.getElementById("info_cont")


let hotel_name = document.getElementById("hotel_nav");

hotel_name.textContent = reserved_hotel.name;



function get_app() {

    let phone = document.getElementById("phone").value;
    if (phone.length == 10) {
        alert("We’ve sent you a text message with a link to download the app.")
    } else {
        alert("Please enter a valid phone number.")
    }

}








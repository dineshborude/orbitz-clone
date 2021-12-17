var traval_details = JSON.parse(localStorage.getItem("traval_details"));
console.log(traval_details);

function showTravelDetails() {

    let search_container = document.getElementById("search_container");

    let inpt_field = document.createElement("div");

    search_container.append(inpt_field)



    inpt_field.setAttribute("id", "forms");
    // console.log(inpt_field);

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
    // y.value = traval_details.city
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

}

showTravelDetails()

var main_container = document.getElementById("main_container");

var sort_items = document.getElementById("sort")



let sort_LH = document.querySelector(".sort_LH")


let sort_LH_btn = document.querySelector(".sort_LH > button")

sort_LH_btn.addEventListener("click", Sort_LH)


var hotel_info = document.createElement("div");

hotel_info.setAttribute("class", "main_items");

main_container.append(sort_items, hotel_info)




var Mumabai_hotals = [
    {
        name: "Taj Mahal Tower, Mumbai",
        price: 142,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4e/e6/b1/photo6jpg.jpg?w=900&h=-1&s=1",

        rooms: [
            {
                room: "Superior Room City View",
                price: 142,
                img: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/103556733.jpg?k=0f462025ae978fc3fbe623a99df33355a48bc5457bcb153605e2a2335f4185fa&o="
            },
            {
                room: "Deluxe Room City View",
                price: 162,
                img: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/103702964.jpg?k=c4e73cd1cbff13755b72ba8e36ba235f93691c5f4b6dbd9a8c52e3223b7026e2&o="
            },
            {
                room: "Superior Room Sea View",
                price: 172,
                img: "https://www.cfmedia.vfmleonardo.com/imageRepo/1/0/27/642/15/Luxury_Grand_Room_04_P.jpg"
            }
        ]


    },
    {
        name: "Taj Mahal Palace, Mumbai",
        price: 257,
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/103703163.jpg?k=5fcab84a62924d761b339b4992a4861451cf063cd1a6c8c5588bf01c8e2ca38c&o=",


        rooms: [{
            room: "Luxury Room (Windowless)",
            price: 257,
            img: "https://th.bing.com/th/id/OIP.ZTG2RMfNtkM-nP81qUnmoAHaE8?pid=ImgDet&w=1024&h=683&rs=1"
        },
        { room: "Luxury Grande Room City View",
         price: 297,
         img : "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/103556553.jpg?k=d8fd97e7840f385f515e91b56ccec7984fd7f0eff11c2f3f8f2be391ce4d330c&o="
        },
        { room: "Luxury Grande Room Sea View"
        , price: 331,
        img : "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/101721831.jpg?k=a674c8cef1268ab7e6c52f6f1fc06efb41acb55e0ebb9e55039b9d570475a0a8&o="
     }
        ]

    },
    {
        name: "The Oberoi Mumbai",
        price: 186,
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/28758994.jpg?k=9dd281994955b080c56dce021966e9c0fa0934bf2cda70d54fb0fe2591cece7d&o=",

        rooms: [{ room: "Luxury Room",
         price: 186 ,
         img: "https://img2.cgtrader.com/items/1983961/b4032d72de/modern-luxury-hotel-double-bed-room-design-3d-model-max.jpg"
        },
        { room: "Premier Room, Bay View", 
        price: 213,
        img : "https://th.bing.com/th/id/OIP.pJxl8J-SXBx4UxuchTcAuAHaEo?pid=ImgDet&w=1000&h=625&rs=1"
     },
        { room: "Premier Room, Ocean View", 
        price: 260 ,
        img : "https://wallpapercave.com/wp/wp6957360.jpg"
    }
        ]
    },
    {
        name: "Hotel Sea Princes, Mumbai",
        price: 81,
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/3a/0f/bb/hotel-sea-princess.jpg?w=900&h=-1&s=1",
        rooms: [{ room: "Deluxe Room", price: 81,
        img : "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/39635997.jpg?k=a25a29e901a364aaf82872fb374a762b32f6ef07ac04bf09a26cf124e888a073&o="
     },
        { room: "Luxury Room", price: 94 ,
        img : "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/39635982.jpg?k=b5bf56a2215e6829ab591acea7b3ff142e6957521b8db8779bb0b8d3d774285b&o="
    },
        { room: "Suite", price: 202,
        img : "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/141337816.jpg?k=1fd6f025c91f40a367b9ebd7c5042db49d0719e6019ae33f5f5f87dcabc43a76&o="
     }
        ]
    },
    {
        name: "Planet Plaza, Mumbai",
        price: 19,
        img: "https://th.bing.com/th/id/OIP.9rpxVYymX2kShVumZQlwawHaE8?w=240&h=180&c=7&r=0&o=5&pid=1.7",
        rooms: [{ room: "Executive Room, 1 King Bed", price: 19,
        img : "https://www.wheretraveler.com/sites/default/files/styles/promoted_image_social_large/public/shutterstock_200178473.jpg?itok=sM4qRjCe"
     },
        { room: "Deluxe Room, 1 King Bed", price: 30 ,
        img : "https://7desainminimalis.com/wp-content/uploads/2014/07/Color-Combination-To-Make-Hotel-Bedroom.jpeg"
    },
        { room: "Suite", price: 202,
        img : "https://mydecorative.com/wp-content/uploads/2013/06/Luxury-Deluxe-Room-Hospitality-Interior-Design-of-The-Westbury-Hotel-Mayfair-London.jpg"
     }
        ]

    },
    {
        name: "Waterstones Hotel",
        price: 58,
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/289864991.jpg?k=f04a98226ed3537319aff3b8c631d53139dfeef790fe2353f0cc77dfccbdeb9b&o=",
        rooms: [{
            room: "Boutique Double",
            price: 58,
            img: "https://th.bing.com/th/id/OIP.qLVYj_t-HU2Yyx3v_wFgLwHaE6?w=292&h=193&c=7&r=0&o=5&pid=1.7"
        },
        {
            room: "Deluxe Room, 1 King Bed",
            price: 70,
            img: "https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2014/05/shutterstock_142837315.jpg"
        },
        {
            room: "Suite, 1 King Bed",
            price: 117,
            img : "https://www.sandpiperbeacon.com/images/rooms/17/hotel-room-4-kitchen-doubles/hotel-room-4-kitchen-doubles-2.jpg"
        }
        ]

    },
    {
        name: "The Orchid- Ecotel Mumbai ",
        price: 58,
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/248811852.jpg?k=83284bebe53d38adc34cf5ef2b849cdd0f74da353a30720239311d109f6b8bda&o=",
        rooms: [{ room: "Deluxe Room", price: 61,
        img : "https://chrisogrady.com/wp-content/uploads/Interior-Photography-astro-lighting-warehouse-hotel-singapore-bed-with-curtain.jpg"
     },
        { room: "Executive Room", price: 88,
        img : "https://th.bing.com/th/id/R.706ed6176e8ef6194ccd7a05d9c8e3fe?rik=AQ3j4RbowEqaDw&riu=http%3a%2f%2fdtlon6z3v1kfl.cloudfront.net%2fwp-content%2fuploads%2f2017%2f08%2f17100234%2fmessy-hotel-room0416.jpg&ehk=hcr3V3mBbDoTSiuhKUl%2bivltxaJmGjUyxxYrSMjZtaY%3d&risl=&pid=ImgRaw&r=0"
     },
        { room: "Premier Room", price: 108,
        img : "https://www.rd.com/wp-content/uploads/sites/2/2016/01/05-13-things-your-hotel-desk-clerk-wont-tell-you-hotel-room.jpg"
     }
        ]

    },
    {
        name: "JW Marriott Mumbai",
        price: 142,
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/249592334.jpg?k=9c969e327d84e83a24e05fbd35c4d4b4cac2bf1b0ceb0fd02fe2bc6bc27a2c6c&o=",
        rooms: [
            {
                room: "Room, 1 King Bed, Non Smoking",
                price: 111,
                img: "https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/108/800/835/1858_Deluxe_Suite_Bedroom_The_OberoiMumbai_P.jpg"
            },
            {
                room: "Room, 2 Twin Beds, Non Smoking, Partial Sea View",
                price: 117,
                img: "https://th.bing.com/th/id/OIP.JdU1efEc9kT--DBrJyc-ygHaE7?pid=ImgDet&rs=1"
            },
            {
                room: "Room, 1 King Bed, Non Smoking, Partial Sea View",
                price: 117,
                img: "https://www.worldwidetravelguide.co.uk/wp-content/uploads/2015/09/pic3.jpg"
            }
        ]


    },
    {
        name: "Basera Hotel",
        price: 135,
        img: "https://th.bing.com/th/id/OIP.yQYETtNwR28w_CIYJcm9NgHaE8?w=235&h=180&c=7&r=0&o=5&pid=1.7",
        rooms: [
            {
                room: "Basic Double Room, 1 Double Bed",
                price: 111,
                img: "https://th.bing.com/th/id/OIP.JdU1efEc9kT--DBrJyc-ygHaE7?pid=ImgDet&rs=1"
            },
            {
                room: "Basic Triple Room, Multiple Beds",
                price: 202,
                img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            },
            {
                room: "Room, 1 King Bed, Non Smoking, Partial Sea View",
                price: 117,
                img: "https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2018/09/main/gettyimages-200187606-001.jpg?itok=0yO4L_I5&1537821991"
            }
        ]

    },


]

// here in forEach el refer to each hotel
function show_hotels(h) {
    hotel_info.innerHTML = null

    h.forEach(function (el) {

        // destination is a block for hotel details
        var destination = document.querySelector("#main_container div:nth-child(2)");

        destination.setAttribute("id", "destination")

        // cart is for a tag to go to next hotel booking page
        var book = document.createElement("div");

       

        destination.append(book);


        let hotel = document.createElement("div");
        hotel.setAttribute("class", "hotels")
        // hotel.addEventListener("click", avi)
        // hotel.onclick = function () {
        //     avi(el)
        // }
        // console.log(hotel);
        destination.append(hotel)


        var img = document.createElement("img");
        img.src = el.img;
        let img_div = document.createElement("div");
        img_div.append(img)

        let details_div = document.createElement("div");
        details_div.setAttribute("class", "flex_container")

        let left = document.createElement("div");
        left.setAttribute("class", "flex_item")

        let right = document.createElement("div");
        right.setAttribute("class", "flex_item")

        let anchor = document.createElement("a");
        anchor.onclick = function (){
            avi(el)
        }

        anchor.setAttribute("href","reserve.html")

        var name = document.createElement("h3");
        name.textContent = el.name

        let mumbai = document.createElement("p");
        mumbai.textContent = "Mumbai";
        mumbai.setAttribute("class", "grey_color")
        // mumbai.setAttribute("class", "space")

        let refundable = document.createElement("p");
        refundable.textContent = "Fully Refundable";
        refundable.setAttribute("class", "green_color")
        refundable.setAttribute("class", "top_space")

        let reserve_now = document.createElement("p");

        reserve_now.textContent = "Reserve now,pay later"
        reserve_now.setAttribute("class", "green_color")

        let emph = document.createElement("p");
        emph.setAttribute("class", "imphasise")
        // console.log(emph);
        emph.textContent = "4.8/5"

        let reviews = document.createElement("p");
        reviews.setAttribute("class", "position_abs")
        reviews.textContent = "Exellent" + "(" + el.price * 2 + "reviews" + ")";

        let price_div = document.createElement("div")
        price_div.setAttribute("id", "price_div")

        let lower_price = document.createElement("div");
        lower_price.setAttribute("class", "lower_price");
        lower_price.textContent = "lower price available"
        price_div.append(lower_price)


        let mrp = document.createElement("div");
        mrp.textContent = "$" + (el.price + 20);
        mrp.setAttribute("class", "mrp");

        let amount = document.createElement("h2");
        amount.setAttribute("class", "discount_price")
        amount.setAttribute("id", "price")
        amount.textContent = "$" + el.price;

        let per_night = document.createElement("p");
        per_night.setAttribute("class", "per_night");
        per_night.textContent = "per night"

        price_div.append(amount);
        price_div.append(mrp);
        price_div.append(per_night);

        left.append(anchor)
        anchor.append(name)
        // left.append(name)
        left.append(mumbai)
        left.append(refundable)
        left.append(reserve_now)
        left.append(emph)
        left.append(reviews)

        right.append(price_div)



        details_div.append(left);
        details_div.append(right);
        console.log(details_div);

        hotel.append(img_div, details_div)
        book.append(hotel)
        // console.log(destination);

    })

}
show_hotels(Mumabai_hotals)

function Sort_LH() {
    arr = Mumabai_hotals.sort(function (a, b) {

        return a.price - b.price
    })
    show_hotels(arr)
}


function avi(el) {
    let reserve_mumbai = el;
    if (el.name == "Taj Mahal Tower, Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "Taj Mahal Palace, Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "Planet Plaza, Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "Hotel Sea Princes, Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "The Oberoi Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "Planet Plaza, Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "Waterstones Hotel") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "The Orchid- Ecotel Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "JW Marriott Mumbai") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
    else if (el.name == "Basera Hotel") {
        if (localStorage.getItem(reserve_mumbai) == null) {
            localStorage.setItem("reserve_mumbai", JSON.stringify(el))
        };
    }
}


    function avi() {
        alert("payment succesfull")
        var card_holder = document.getElementById("card_holder").value;
        var card_number = +document.getElementById("card_number").value;

        console.log(typeof (card_number));

    }

    var users = JSON.parse(localStorage.getItem("users"));
    console.log(users);


    function email() {


        var e = users[users.length - 1].email;

        var email = document.getElementById("email");
        email.textContent = e;



    }
    email()

    var reserved_rooms = JSON.parse(localStorage.getItem("reserved rooms"));

    let traval_details = JSON.parse(localStorage.getItem("traval_details"));




    function payment_info() {

        // getting Image
        let last_reseved = reserved_rooms[reserved_rooms.length - 1]

        let img_div = document.getElementById("img_div");

        let img = document.createElement("img");

        img.src = last_reseved.img;

        img_div.append(img);

        // getting hotel name
        let booking_details = document.getElementById("booking_details")

        let hotel_name = document.createElement("h4");

        hotel_name.textContent = last_reseved.HN;

        booking_details.append(hotel_name);

        // getting hotel room

        let room_name = document.createElement("p");

        room_name.textContent = "Room :" + last_reseved.name

        booking_details.append(room_name)

        // getting travel details
        let check_in = document.createElement("p");

        check_in.textContent = "Check in: " + traval_details.check_in

        booking_details.append(check_in);

        let check_out = document.createElement("p");

        check_out.textContent = "check_out: " + traval_details.check_out

        booking_details.append(check_out)

        var arr1 = traval_details.check_in.split("-").map(Number);

        var arr2 = traval_details.check_out.split("-").map(Number);



        // getting hotel nights using check_in and check_out


        let hotel_nights = document.createElement("p");

        let days = stay(arr1, arr2, hotel_nights);




        hotel_nights.textContent = days + "-night stay"

        booking_details.append(hotel_nights);

        let price_details = document.createElement("h4");

        price_details.textContent = "Price details";

        booking_details.append(price_details);


        // here calculating hotel rent

        let calculation = document.createElement("p");

        calculation.textContent = "1room" + " " + "x" + " " + days + " " + "nights" + "=" + "$" + (days * last_reseved.final_price);

        hotel_fee = (days * last_reseved.final_price)







        if (hotel_nights.textContent != "") {
            booking_details.append(calculation);
        }


        // booking_details.append(hotel_fee);


        // here calculating taxes 

        let taxes = document.createElement("p");

        taxes.textContent = "Taxes and fees" + "  " + "$" + Math.floor((days * last_reseved.final_price) * 10 / 100);

        hotel_taxes = Math.floor((days * last_reseved.final_price) * 10 / 100);


        booking_details.append(taxes);


        // here calculating total


        let total = hotel_fee + hotel_taxes;

        let total_price = document.createElement("h4");

        total_price.textContent = "Total" + " " + "=" + " " + "$" + total;

        booking_details.append(total_price);
        console.log(total);



        let pay_button = document.getElementById("pay_button");

        pay_button.onclick = function () {
            bookedRoom(total,
                total_price,
                img.src,
                hotel_name.textContent,
                room_name.textContent,
                check_in.textContent,
                check_out.textContent,
                hotel_nights.textContent

            )
        }





    }

    function stay(arr1, arr2, p) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[1] == arr2[1]) {
                return arr2[2] - arr1[2]
            } else {
                return p.textContent = ""
            }
        }
    }

    payment_info()

    if (localStorage.getItem("bookedRooms") == null) {
        localStorage.setItem("bookedRooms", JSON.stringify([]))
    }

    let bookedRooms = JSON.parse(localStorage.getItem("bookedRooms"));
    console.log(bookedRooms);

    function bookedRoom(t, text, img,
        hotel_name,
        room_name,
        check_in,
        check_out,
        night_stauys
    ) {
        let card_num = document.getElementById("card_number").value;;

        let coupon_code = document.getElementById("coupon").value;



        if (card_num.length != 16) {
            alert("Please enter a valid card number.")
        } else if (card_num.length == 16 && coupon_code != "masai30") {

            var obj = {
                img,
                hotel_name,
                room_name,
                check_in,
                check_out,
                night_stauys,
                t

            }
            setTimeout(function () { window.location.href = "booked.html" }, 3000);


            bookedRooms.push(obj)

            localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms))

            console.log(JSON.parse(localStorage.getItem("bookedRooms")));

        }
        else {
            if (card_num.length == 16 && coupon_code == "masai30") {

                text.innerHTML = null;
                t = Math.floor(t - (t * (10 / 100)));
                console.log(t);
                text.innerHTML = "Total" + " " + "=" + " " + "$" + t;

                var final_amount = t


                var obj = {
                    img,
                    hotel_name,
                    room_name,
                    check_in,
                    check_out,
                    night_stauys,
                    final_amount

                }
                // console.log(obj);

                setTimeout(function () { window.location.href = "booked.html" }, 3000);
                bookedRooms.push(obj)

                localStorage.setItem("bookedRooms", JSON.stringify(bookedRooms))

                console.log(JSON.parse(localStorage.getItem("bookedRooms")));
            }
        }


    }

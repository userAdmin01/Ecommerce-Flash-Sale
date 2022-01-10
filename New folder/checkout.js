//const cartprice ;
// let red = document.querySelector('redeem')
// let input = document.querySelector('redeemCode')


// document.getElementById("redeem").addEventListener('click', () => {
//     const redeemcode = document.getElementById("redeemCode").value;

//     console.log(redeemcode);
//     if (sessionStorage.getItem("coupanCode") == null) {
//         if (redeemcode == "SALE2021" || redeemcode == "CHRISTMASDEAL21" || redeemcode == "NEWYEARSTEAL") {
//             sessionStorage.setItem("coupanCode", JSON.stringify(redeemcode));
//             alert("Congragulations you have won 5% discount!!");
//             yesorno = true;

//         }
//         else { alert("CoupanCode is Incorrect") }
//         sessionStorage.setItem("coupanCode", JSON.stringify(redeemCode));

//     }
//     else {

//         let codes = JSON.parse(sessionStorage.getItem('coupanCode'));
//         for (let x = 0; x < codes.length; x++) {
//             if (codes[x] == redeemcode) {
//                 alert("Code is already used")
//             }
//             else if (redeemcode == "SALE2021" || redeemcode == "CHRISTMASDEAL21" || redeemcode == "NEWYEARSTEAL") {
//                 alert("Congragulations you have won 5% discount!!");
//                 var newcode = document.getElementById("redeemCode").textContent;
//                 var oldcode = JSON.parse(sessionStorage.getItem('coupanCode'));
//                 oldcode.push(newcode)
//                 //console.log(newcode);
//                 yesorno = true;

//             }
//             else {
//                 alert("CoupanCode is Incorrect")
//             }

//         }

//     }
//     let profileinfo = {
//         name: document.getElementById("shippingName").value,
//         email: document.getElementById("shippingEmail").value,
//         mobile: document.getElementById("shippingPhone").value,
//         address: document.getElementById("shippingAddress").value
//     }
//     sessionStorage.setItem('profileinfo', JSON.stringify(profileinfo));

// });


// window.addEventListener('load', loadProfile());
// function loadProfile() {

//     let name = sessionStorage.getItem('profileinfo') ? JSON.parse(sessionStorage.getItem('profileinfo')) : [];
//     //console.log(name.name);

//     document.getElementById("shippingName").value = name.name;
//     document.getElementById("shippingEmail").value = name.email;
//     document.getElementById("shippingPhone").value = name.mobile;
//     document.getElementById("shippingAddress").value = name.address;
// }









// ------------------------------------------------my reference---------------------------------------------------------------
let yesorno = false;
let redeemCoupon = document.querySelector("#redeemCode")
let redeemBtn = document.querySelector("#redeem")
let totalAmount

function onlinecheck(that) {
    if (that.value == "onlinePay") {
        document.getElementById("ifyes").style.display = "block";
    }
    else {
        document.getElementById("ifyes").style.display = "none";
    }
}
console.log(yesorno);


let cartPrice = localStorage.getItem("totalPrice");
//console.log(cartprice);
document.getElementById("totalPrice").textContent = cartPrice;

//const cartprice=document.getElementById("totalPrice").textContent;
//console.log(cartprice);


function calculate() {
    //const cartPrice=document.getElementById("totalPrice");
    //console.log(parseFloat(cartprice));
    let tax = 0.05 * parseInt(cartPrice);
    let taxRounded = tax.toFixed(2)
    // console.log(tax)
    let code = 0;

    document.getElementById("tax").textContent = taxRounded
    const ship = 10;
    document.getElementById("shipping").textContent = ship;
    if (yesorno == false) {
        code = 0;
    }
    else {
        code = 0.05 * parseFloat(cartPrice);
    }
    document.getElementById("couponCode").textContent = code;
    totalAmount = parseFloat(cartPrice) + parseFloat(taxRounded) + parseFloat(ship) - parseFloat(code);
    document.getElementById("amount").textContent = totalAmount;

}

calculate();

redeemBtn.addEventListener("click",(e) => {
    e.preventDefault()
    if(redeemCoupon.value === "SALE2021" || redeemCoupon.value === "CHRISTMASDEAL21" || redeemCoupon.value === "NEWYEARSTEAL" ){
        totalAmount -= 500
        document.getElementById("couponCode").textContent = 500
        document.getElementById("amount").textContent = totalAmount;
        // redeemBtn.setAttribute("style", "cursor: not-allowed")
    }else if(redeemCoupon.value ===""){
        alert("No coupon code applied")
    }else{
        alert("Sorry! This coupon is invalid")
    }
})



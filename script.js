const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

function profilePage() {
    history.pushState({}, "", "/profile");
    const p = document.getElementById("profile");
    p.innerHTML = "Profile Page"
    console.log(1)
    history.forward()
}

function wishlistPage() {
    history.pushState({}, "", "/wishlist")
    const w = document.getElementById("wishlist");
    w.innerHTML = "Wishlist Page"
    console.log(2)
    history.forward()
}

function bagPage(){
    history.pushState({}, "", "/bag");
    const b = document.getElementById("bag");
    b.innerHTML = " My Bag Page"
    history.back()
    console.log(3)
}

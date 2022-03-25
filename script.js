const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

function profilePage() {
    window.history.pushState({}, "", "vertu/profile");
    const p = document.getElementById("profile");
    p.innerHTML = "Profile Page"
    console.log(1)
}

function wishlistPage() {
    history.pushState({}, "", "vertu/wishlist")
    const w = document.getElementById("wishlist");
    w.innerHTML = "Wishlist Page"
    console.log(2)
}

function bagPage(){
    history.pushState({}, "", "vertu/bag");
    const b = document.getElementById("bag");
    b.innerHTML = " My Bag Page"
    console.log(3)
}

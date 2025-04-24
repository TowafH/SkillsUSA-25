const button = document.querySelector("#circle1");
const button2 = document.querySelector("#circle2");

button2.addEventListener("click", function() {
    secondCircleClick();
});
button.addEventListener("click", function() {
    firstCircleClick();
});

function secondCircleClick() {
    document.querySelector("#sinners").style.left = "0";
    document.querySelector("#jurrasic").style.left = "200%";
    document.querySelector("#circle2").style.backgroundColor = "black";
    document.querySelector("#circle1").style.backgroundColor = "transparent";
    document.querySelector("#circle3").style.backgroundColor = "transparent";
}

function firstCircleClick() {
    document.querySelector("#jurrasic").style.left = "0";
    document.querySelector("#sinners").style.left = "200%";
    document.querySelector("#circle2").style.backgroundColor = "transparent";
    document.querySelector("#circle1").style.backgroundColor = "black";
    document.querySelector("#circle3").style.backgroundColor = "transparent";
}
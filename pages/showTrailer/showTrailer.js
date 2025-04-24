const button = document.querySelector("#circle1");
const button2 = document.querySelector("#circle2");
const button3 = document.querySelector("#circle3");
const button4 = document.querySelector("#circle4");

button2.addEventListener("click", function() {
    secondCircleClick();
});
button.addEventListener("click", function() {
    firstCircleClick();
});
button3.addEventListener("click", function() {
    thirdCircleClick();
});
button4.addEventListener("click", function() {
    fourthCircleClick();
});

function secondCircleClick() {
    document.querySelector("#sinners").style.left = "0";
    document.querySelector("#jurrasic").style.left = "200%";
    document.querySelector("#thunder").style.left = "200%";
    document.querySelector("#fantastic").style.left = "200%";
    document.querySelector("#circle2").style.backgroundColor = "black";
    document.querySelector("#circle1").style.backgroundColor = "transparent";
    document.querySelector("#circle3").style.backgroundColor = "transparent";
    document.querySelector("#circle4").style.backgroundColor = "transparent";
}

function firstCircleClick() {
    document.querySelector("#jurrasic").style.left = "0";
    document.querySelector("#sinners").style.left = "200%";
    document.querySelector("#thunder").style.left = "200%";
    document.querySelector("#fantastic").style.left = "200%";
    document.querySelector("#circle2").style.backgroundColor = "transparent";
    document.querySelector("#circle1").style.backgroundColor = "black";
    document.querySelector("#circle3").style.backgroundColor = "transparent";
    document.querySelector("#circle4").style.backgroundColor = "transparent";
}

function thirdCircleClick() {
    document.querySelector("#jurrasic").style.left = "200%";
    document.querySelector("#sinners").style.left = "200%";
    document.querySelector("#thunder").style.left = "0";
    document.querySelector("#fantastic").style.left = "200%";
    document.querySelector("#circle2").style.backgroundColor = "transparent";
    document.querySelector("#circle1").style.backgroundColor = "transparent";
    document.querySelector("#circle3").style.backgroundColor = "black";
    document.querySelector("#circle4").style.backgroundColor = "transparent";
}

function fourthCircleClick() {
    document.querySelector("#jurrasic").style.left = "200%";
    document.querySelector("#sinners").style.left = "200%";
    document.querySelector("#thunder").style.left = "200%";
    document.querySelector("#fantastic").style.left = "0";
    document.querySelector("#circle2").style.backgroundColor = "transparent";
    document.querySelector("#circle1").style.backgroundColor = "transparent";
    document.querySelector("#circle3").style.backgroundColor = "transparent";
    document.querySelector("#circle4").style.backgroundColor = "black";
}
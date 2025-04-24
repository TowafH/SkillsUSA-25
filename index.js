
const button = document.querySelector("#circle1");
const button2 = document.querySelector("#circle2");
const button3 = document.querySelector("#circle3");


button2.addEventListener("click", function() {
    secondCircleClick();
});
button.addEventListener("click", function() {
    firstCircleClick();
});
button3.addEventListener("click", function() {
    thirdCircleClick();
});


function secondCircleClick() {
    document.querySelector("#butterfly").style.right = "-100%";
    document.querySelector("#tree").style.right = "-100%";
    document.querySelector("#grass").style.right = "0";
    document.querySelector("#circle2").style.backgroundColor = "black";
    document.querySelector("#circle1").style.backgroundColor = "transparent";
    document.querySelector("#circle3").style.backgroundColor = "transparent";
}

function firstCircleClick() {
    document.querySelector("#butterfly").style.right = "0";
    document.querySelector("#tree").style.right = "-100%";
    document.querySelector("#grass").style.right = "-100%";
    document.querySelector("#circle2").style.backgroundColor = "transparent";
    document.querySelector("#circle1").style.backgroundColor = "black";
    document.querySelector("#circle3").style.backgroundColor = "transparent";
}

function thirdCircleClick() {
    document.querySelector("#butterfly").style.right = "-100%";
    document.querySelector("#tree").style.right = "0";
    document.querySelector("#grass").style.right = "-100%";
    document.querySelector("#circle2").style.backgroundColor = "transparent";
    document.querySelector("#circle1").style.backgroundColor = "transparent";
    document.querySelector("#circle3").style.backgroundColor = "black";
}
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const number = document.getElementById("number");

let count = 0;

increment.onclick = function(){
    count++;
    number.textContent = count;
}
decrement.onclick = function(){
    count--;
    number.textContent = count;
}

const MainImg = document.getElementById("MainImg");

const shoe1 = document.getElementById("shoe1");
const shoe2 = document.getElementById("shoe2");
const shoe3 = document.getElementById("shoe3");
const shoe4 = document.getElementById("shoe4");

const shoes1 = document.getElementById("shoes1");
const shoes2 = document.getElementById("shoes2");
const shoes3 = document.getElementById("shoes3");
const shoes4 = document.getElementById("shoes4");


shoe1.onclick = function(){
    MainImg.style.display = "none";
    shoes2.style.display="none";
    shoes3.style.display="none";
    shoes4.style.display="none";
    shoes1.style.display = "flex";
}
shoe2.onclick = function(){
    shoes1.style.display = "none";
    shoes2.style.display = "flex";
}
shoe3.onclick = function(){
    shoes2.style.display = "none";
    shoes3.style.display = "flex";
}
shoe4.onclick = function(){
    shoes3.style.display = "none";
    shoes4.style.display = "flex";
}
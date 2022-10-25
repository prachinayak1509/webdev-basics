var fruits=["mango","pear","apple","banana"];
function loadFruits(){
    document.getElementById("fruits").innerHTML=fruits;
}
function myFunc(){
    var fruit = prompt("what is your fav fruit");
    fruits[fruits.length]=fruit;
    document.getElementById("fruits").innerHTML=fruits;

}
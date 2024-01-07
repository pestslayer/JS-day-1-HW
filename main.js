// Exercise #1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["max",'HAS', "PuRple", "dog"];

function findNames(str, names) {
    for (let i = 0; i < names.length; i++){
        if(str.toLowerCase().includes(names[i].toLowerCase())){
            console.log("matched " + names[i]);
            return;
        } 
    }
    console.log("No Matches");
}

findNames(dog_string, dog_names);




// Exercise 2:
function replaceOdd(arr) {
    for (let i = 0; i < arr.length; i+= 2) {
        arr.splice(i, 1, "even index");
    }
}
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger" ];


replaceOdd(arr);

console.log(arr);


document.addEventListener("DOMContentLoaded", function () {
    // Get the dotlottie-player element
    const lottiePlayer = document.getElementById("lottie");

    // Add a click event listener to the dotlottie-player element.
    lottiePlayer.addEventListener("click", function () {
        // Display "5/5!!!!" when the Lottie animation is clicked.
        alert("Coding is fun to learn!!! I love 5/5 By the way!!!! ");
    });
});
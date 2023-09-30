

// 3 colors for usage of string: 
// 1. red; game/urgent, 
// 2. black; log of some sort, 
// 3. green; positive.
textArray = [
    "I can't put my finger on it",
    "Idle hands are the devil's tools",
    "The road to hell is paved with good intentions",
    "I came, I saw, I conquered",
    "Don't throw out the baby with the bath water",
    "That's too rich for my blood",
    "You're twisting my rubber arm",
    "Take a picture, it'll last longer",
    "Winner, winner, chicken dinner",
    "Don't break your arm patting your back",
    "Stop reading yesterdays newsclippings",
    "He kicked the bucket", 
    "Try my hand at it",
    "If it's yellow; let it mellow, if it's brown; flush it down"
];


// GPT
function changeTextColor() {
    const randomIndex = Math.floor(Math.random() * textArray.length);

    const textElement = document.getElementById("cchange");
    textElement.style.color = Math.random() < 0.5 ? "green" : "red";


    // OTHER FOR MORE BLACK
    // if (Math.random() < 0.3) {
    //     textElement.style.color = "green";
    // } else if (Math.random() < 0.6) {
    //     textElement.style.color = "red";
    // } else {
    //     textElement.style.color = "black";
    //     document.write("Sender:") + document.getElementById("sender");
    // }

    textElement.textContent = textArray[randomIndex];
}

changeTextColor();
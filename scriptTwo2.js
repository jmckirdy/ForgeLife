// GAME-CHEAT - adjust score higher for testing and building
let score = 0;

let waterCost = 5;
let water = 0;

let woodCost = 15;
let wood = 0;

let firepitCost = 50;
let firepit = 0;

let fishCost = 500;
let fish = 0;

let clayCost = 5000;
let clay = 0;


let scorepersecond = 0;


// Make a PowerRelic that buys X at firePit :70 units, 
// let buildingsList = [buyWater(), buyWood(), buyFirepit(), buyClay()];
// let powerRelic = true;

// if (powerRelic == true) {
//     buyClay(10);
//     console.log(powerRelic);
// }

// the waterCost =, line is a setting where u tweak the number based on how hard u want the building.


Elementlist = [
document.getElementById("score").innerHTML = score,
document.getElementById("water").innerHTML = water,
document.getElementById("watercost").innerHTML = waterCost,

document.getElementById("score").innerHTML = score,
document.getElementById("wood").innerHTML = wood,
document.getElementById("woodcost").innerHTML = woodCost,

document.getElementById("score").innerHTML = score,
document.getElementById("firepit").innerHTML = firepit,
document.getElementById("firepitcost").innerHTML = firepitCost,

document.getElementById("score").innerHTML = score,
document.getElementById("fish").innerHTML = fish,
document.getElementById("fishcost").innerHTML = fishCost,

document.getElementById("score").innerHTML = score,
document.getElementById("clay").innerHTML = clay,
document.getElementById("claycost").innerHTML = clayCost
];

function grabElement() {
    for (let i = 0; i < 15; i++) {
        document.getElementById(i).innerHTML = score;
    }
}

function buyWater() {
    if (score >= waterCost) {
        score = score - waterCost;
        water++;
        waterCost = Math.round(waterCost * 1.15);

        updateScorePerSecond();
    }
}

function buyWood() {
    if (score >= woodCost) {
        score = score - woodCost;
        wood++;
        woodCost = Math.round(woodCost * 1.15);

        updateScorePerSecond();
    }
}

function buyFirepit() {
    if (score >= firepitCost) {
        score = score - firepitCost;
        firepit++;
        firepitCost = Math.round(firepitCost * 1.15);

        updateScorePerSecond();
    }
}

function buyFish() {
    if (score >= fishCost) {
        score = score - fishCost;
        fish++;
        fishCost = Math.round(fishCost * 1.15);

        updateScorePerSecond();
    }
}

function buyClay() {
    if (score >= clayCost) {
        score = score - clayCost;
        clay++;
        clayCost = Math.round(clayCost * 1.15);

        updateScorePerSecond();
    }
}

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

// When u create add(Fish, Clay, etc) function, u must check addToScore(), updateScoreP(), setInterval functions too.
function updateScorePerSecond() {
    scorepersecond = water + wood * 5 + firepit * 50 + fish * 250 + clay * 500;
    document.getElementById("scorepersecond").innerHTML = scorepersecond;
    return scorepersecond;
}

setInterval(function() {
    score = score + water;
    score = score + wood * 5;
    score = score + firepit * 50;

    score = score + fish * 250;
    score = score + clay * 500;

    document.getElementById("score").innerHTML = score;
    document.title = "$" + score + "--ForgeLife";
}, 1000);  // runs 1x per second





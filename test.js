// // initialize; test; increment
// let names = ['Tanjiro', 'Nezuko', 'Inosuke', 'Flame Hashira', 'Chichi', 'Goku', 'Pikalo', ''];


// // What will i value be?
// for ( let i = 0; i < 15; i++ ) {
//     if ( names[i] == '' ) {
//         let i = 0;
//         console.log(i);
//     } else {
//         console.log(names[i]);
//         console.log(i);
//     }
// }

// // BETTER

// for (let i = 0; i<3; i++) {
//     for (let i = 0 ; i < names.length ; i ++) {
//         console.log(names[i]);
//     }
// }


// 1. for loop
// 2. for in loop
// 3. for of loop

// // DATA
// let supernatural = {
//     "actors": ['Jared Palelie', 'Jenson Acles', 'Mark Sheppard', 
//     'Misha Torwel'],
//     "characters": ['Sam', 'Dean', 'Crowley', 'Castiel'], 
//     "seasons":12
// };

// for ( prop in supernatural ) {
//     console.log(prop, typeof supernatural[prop],
//         Array.isArray(supernatural[prop]));
// }

// for (const prop in supernatural) {
//     if (Array.isArray(supernatural[prop])) {
//         console.log(prop, supernatural.actors[prop]);
//     }
// }

// for (const iterator of supernatural.actors) {
//     console.log( iterator);
// }

// test = document.getElementById("containerJS")

// document.write(test);



/* 
-DESIGN AND STRUCTURE UR CODE FIRST.

-TESTING 
u must write automated testing or unit testing. 
write testing code b4 writing the program.

-WRITE DOCUMENTIONS. as u write code scrape the comments. or use docstrings, readme.

-automating: during setting up of the virtual env. , directory structure how u 
styled it. (naming) . automate everything u can. 

-Spend the time to write cleaner code. that takes extra effort to pick a 
faster/higher quality way.

-where are the "ah-ha" moments? increase them.

-u may do/learn useless stuff

-




*/ 

let playerObj = document.getElementById("player");

document.write(playerObj);

let num = 2;

if (num < 2) {
    "eat shit"
};

// let random = Math.random();

// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5")
//     console.log(random);
// } else {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5")
// }


// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("I HATE MONDAYS")
// } else if (dayOfWeek === 'saturday') {
//     console.log("I LOVE SATURDAYS")
// } else if (dayOfWeek === 'friday') {
//     console.log("GOOD")
// } else {
//     console.log("Umm..")
// };

// const age = 8;

// if (age < 5) {
//     console.log("YOU ARE BABY")
// } else if (age < 10) {
//     console.log("YOU ARE CHILD")
// } else if (age < 65) {
//     console.log("YOU ARE ADULT")
// } else {
//     console.log("YOU ARE SENIOR")
// }

// const password = prompt("please enter a new password");

//Password must be 6+ characters
// if (password.length >= 6) {
//     //Password cannot include space
//     if (password.indexOf(' ') === -1) {
//         console.log("Good job")
//     } else {
//         console.log("Password cannot contain spaces")
//     }
// } else {
//     console.log("PASSWORD TOO SHORT. Must be 6+ characters")
// }

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD")
// } else {
//     console.log("INCORRECT FORMAT FOR PASSWORD")
// }

// const day = 6;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j += 1
// }

// 고차함수
function callTwice(func) {
    func();
    func();
}

function rolldie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rolldie)

const person = {
    first: 'Lee',
    last: 'Chung Hyun',
    fullName() {
        return `$(this.first) $(this.last)`
    }
}

person.first;
person.last;
person.fullName();

function yell(mag) {
    try {
        console.log(mas.toUpperCase().repeat(2))
    } catch (e) {
        console.log("Please pass a string next time")
    }
}
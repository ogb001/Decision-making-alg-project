// function determineTicketPrice() {
//     let age = prompt("Please enter your age:");
//     age = Number(age);

//     if (isNaN(age) || age < 0) {
//         document.getElementById("result").innerText = "Invalid age entered.";
//         return;
//     }

//     let price;
//     if (age <= 12) {
//         price = 10;
//     } else if (age >= 13 && age <= 17) {
//         price = 15;
//     } else {
//         price = 20;
//     }

    // document.getElementById("result").innerText = `The price of the movie ticket is $${price}.`;
// }

function getClothingAdvice() {
    let temperature = prompt("Please enter the current temperature (in Celsius):");
    temperature = Number(temperature);

    if (isNaN(temperature)) {
        document.getElementById("advice").innerText = "Invalid temperature entered.";
        return;
    }

    let raining = prompt("Is it raining? (yes/no):").toLowerCase();

    if (raining !== 'yes' && raining !== 'no') {
        document.getElementById("advice").innerText = "Invalid input for raining.";
        return;
    }

    let advice;

    if (temperature >= 25) {
        advice = "It's hot outside. Wear light clothing such as a t-shirt and shorts.";
    } else if (temperature >= 15) {
        advice = "It's warm outside. Wear a light jacket or sweater.";
    } else if (temperature >= 5) {
        advice = "It's cool outside. Wear a jacket and long pants.";
    } else {
        advice = "It's cold outside. Wear a heavy coat, gloves, and a hat.";
    }

    if (raining === 'yes') {
        advice += " Don't forget to take an umbrella or wear a raincoat.";
    }

    document.getElementById("advice").innerText = advice;
}


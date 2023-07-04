const fizzBuzzContainer = document.getElementById("fizz_buzz_container");






// Main algorithm

for (i = 1; i <= 100; i++) {

    const div = `<div>${i}</div>`;
    const divFizz = `<div>Fizz</div>`;
    const divBuzz = `<div>Buzz</div>`;
    const divFizzBuzz = `<div>FizzBuzz</div>`;

    if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");
        fizzBuzzContainer.innerHTML += 

    } else if (i % 3 === 0) {

        console.log("Fizz");

    } else if (i % 5 === 0) {

        console.log("Buzz");

    } else {

        console.log(i);

    }
    
}
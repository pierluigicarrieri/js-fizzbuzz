// Variable for squares container in html

const fizzBuzzContainer = document.querySelector(".col-10");

// Main algorithm

for (i = 1; i <= 100; i++) {

/* Next 4 variables to define which square to create 
according to the ""for" cycle iterations below */

    const divBasic = `<div class="square basic">${i}</div>`;
    const divFizz = `<div class="square fizz">Fizz</div>`;
    const divBuzz = `<div class="square buzz">Buzz</div>`;
    const divFizzBuzz = `<div class="square fizz_buzz">FizzBuzz</div>`;

    if (i % 3 === 0 && i % 5 === 0) {

        fizzBuzzContainer.innerHTML += divFizzBuzz;

    } else if (i % 3 === 0) {

        fizzBuzzContainer.innerHTML += divFizz;

    } else if (i % 5 === 0) {

        fizzBuzzContainer.innerHTML += divBuzz;

    } else {

        fizzBuzzContainer.innerHTML += divBasic;

    }
    
}
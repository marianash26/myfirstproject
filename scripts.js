document.addEventListener("DOMContentLoaded", () => {
    // Tu código original
    const pi = 3.141592;
    var radius = Number(prompt("Type the radius: "));
    var volume = (4 / 3) * pi * Math.pow(radius, 3);
    alert("The volume of the sphere is: " + volume);

    var number = Number(prompt("Type the number:"));
    if (number < 0) {
        alert("This number is negative");
    } else if (number > 0) {
        alert("This number is positive");
    } else {
        alert("This number is zero");
    }

    var limit = Number(prompt("Enter a limit for the multiplication table of 3:"));

    console.log("Using for loop:");
    for (let i = 0; i <= limit; i++) {
        console.log("3 x " + i + " = " + (3 * i));
    }

    console.log("Using while loop:");
    let i = 0;
    while (i <= limit) {
        console.log("3 x " + i + " = " + (3 * i));
        i++;
    }

    // Código adicional para conectar HTML
    const visitBtn = document.querySelector(".buttons button:first-child");
    if (visitBtn) {
        visitBtn.addEventListener("click", () => {
            alert("Redirecting to the database...");
        });
    }

    const sendBtn = document.querySelector(".subscription-section button");
    const emailInput = document.querySelector(".subscription-section input[type='email']");

    if (sendBtn && emailInput) {
        sendBtn.addEventListener("click", () => {
            const email = emailInput.value.trim();
            if (email === "") {
                alert("Please enter your email.");
            } else if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
            } else {
                alert(`Thank you! You'll receive updates at ${email}`);
                emailInput.value = "";
            }
        });
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const secretNumber = Math.floor(Math.random() * 101);
    const guessBtn = document.getElementById("guessButton");
    const guessInput = document.getElementById("guessInput");
    const guessResult = document.getElementById("guessResult");

    if (guessBtn && guessInput && guessResult) {
        guessBtn.addEventListener("click", () => {
            const guess = Number(guessInput.value);

            if (isNaN(guess) || guess < 0 || guess > 100) {
                guessResult.textContent = "Please enter a number between 0 and 100.";
                guessResult.style.color = "red";
            } else if (guess === secretNumber) {
                guessResult.textContent = "You did it! 🎉 That's the number!";
                guessResult.style.color = "green";
            } else {
                guessResult.textContent = "Oh no! It's not the number 😢";
                guessResult.style.color = "orange";
            }
        });
    }
});

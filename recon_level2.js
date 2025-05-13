document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');
    const answer4 = document.querySelector('input[name="q4"]:checked');
    const result = document.getElementById("result");

    if (!answer1 || !answer2 || !answer3 || !answer4) {
        result.textContent = "Please select an answer for all questions!";
        result.style.color = "orange";
        return;
    }

    let score = 0;

    // Check answer for question 1
    if (answer1.value === "b") {
        score++;
    }
    // Check answer for question 2
    if (answer2.value === "b") {
        score++;
    }
    // Check answer for question 3
    if (answer3.value === "b") {
        score++;
    }
    // Check answer for question 4
    if (answer4.value === "a") {
        score++;
    }

    if (score === 4) {
        result.textContent =
            "✅ Perfect! You've answered all questions correctly!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = `❌ You got ${score} out of 4 questions right. Try again!`;
        result.style.color = "red";
    }
});

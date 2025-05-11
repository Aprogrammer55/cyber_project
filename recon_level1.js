document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const answer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById("result");

    if (!answer) {
        result.textContent = "Please select an answer!";
        result.style.color = "orange";
        return;
    }

    if (answer.value === "b") {
        result.textContent = "✅ Correct! That's passive reconnaissance.";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Incorrect. Try again!";
        result.style.color = "red";
    }
});

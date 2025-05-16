document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const correctAnswers = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "c",
        q6: "b",
    };

    let score = 0;
    let total = 6;

    for (let q in correctAnswers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === correctAnswers[q]) {
            score++;
        }
    }

    const result = document.getElementById("result");

    if (score === total) {
        result.textContent = `🎉 Perfect! You got all ${total} right!`;
        result.style.color = "lightgreen";
    } else {
        result.textContent = `✅ You got ${score} out of ${total} correct. Review and try again!`;
        result.style.color = "orange";
    }
});

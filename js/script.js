document.addEventListener("DOMContentLoaded", () => {
    const mainText = document.getElementById("main-text");
    const subText = document.getElementById("sub-text");
    const buttons = document.getElementById("button-container");
    const greatText = document.getElementById("great-text");
    const quizSection = document.getElementById("quiz-section");
    const answerButtons = document.querySelectorAll(".answer-button");

    setTimeout(() => {
        mainText.style.display = "none";
        subText.style.display = "block";
    }, 3000);

    setTimeout(() => {
        buttons.style.display = "block";
    }, 5000);

    document.querySelectorAll(".quiz-button").forEach(button => {
        button.addEventListener("click", () => {
            document.body.style.transition = "background-color 1s ease";
            document.body.style.backgroundColor = "red";
            subText.style.display = "none";
            buttons.style.display = "none";
            greatText.style.display = "block";
            setTimeout(() => {
                greatText.style.display = "none";
                quizSection.style.display = "block";
            }, 2000);
        });
    });

    answerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.body.style.backgroundColor = "green";
        });
    });
});

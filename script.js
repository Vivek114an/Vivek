// Question Data (Modify this with your own questions)
const questions = [
    {
        question: "What is 5 + 3?",
        options: ["6", "7", "8", "9"],
    },
    {
        question: "What is 12 - 4?",
        options: ["7", "8", "9", "10"],
    },
    {
        question: "What is 3 x 3?",
        options: ["6", "7", "8", "9"],
    },
    // Add more questions as needed
];

// Initialize form
const questionContainer = document.getElementById("questionContainer");
const mockForm = document.getElementById("mockForm");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const attemptedEl = document.getElementById("attempted");
const unattemptedEl = document.getElementById("unattempted");
const incorrectEl = document.getElementById("incorrect");

// Render Questions
questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    q.options.forEach((option, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${index}`;
        input.value = option;
        label.appendChild(input);
        label.append(option);
        optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    questionContainer.appendChild(questionDiv);
});

// Handle Submission
submitBtn.addEventListener("click", () => {
    let attempted = 0;
    let unattempted = 0;
    let incorrect = 0;

    questions.forEach((_, index) => {
        const selectedOption = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selectedOption) {
            attempted++;
        } else {
            unattempted++;
        }
    });

    attemptedEl.textContent = `Attempted: ${attempted}`;
    unattemptedEl.textContent = `Unattempted: ${unattempted}`;
    incorrectEl.textContent = `Incorrect answers are based on your check in the book.`;

    result.classList.remove("hidden");
});
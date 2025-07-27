# Simple Quiz App

A clean and simple web-based quiz application built with HTML, CSS, and vanilla JavaScript. This project provides a straightforward way to present multiple-choice questions to users and display their scores at the end.

## 📸 Demo
**Click Here:** https://rouniyarkomal.github.io/quiz-app/
The user interface is designed to be simple and intuitive. A question is presented with four possible answers. After submitting an answer, the next question is loaded automatically. At the end, the total score is displayed.


## ✨ Features

-   **Dynamic Content:** Questions are easily managed and loaded from a JavaScript array.
-   **Multiple-Choice Questions:** Classic single-answer multiple-choice format.
-   **Score Tracking:** Calculates and keeps track of the user's score.
-   **Results Display:** Shows the final score upon completion of the quiz.
-   **Responsive Design:** A clean layout that works on different screen sizes.
-   **Restart Quiz:** Users can easily reload the page to take the quiz again.

## 🛠️ Technologies Used

-   **HTML:** For the basic structure and content of the quiz.
-   **CSS:** For styling the user interface.
-   **JavaScript:** For the quiz logic, including loading questions, handling user input, and calculating the score.


## 🔧 Customization

You can easily customize the quiz by modifying the `quizData` array in the `script.js` file. Each question is an object within the array.

To add, remove, or change questions, edit this section in `script.js`:

```javascript
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    // Add more question objects here...
];
```

-   **`question`**: The question text (string).
-   **`a`, `b`, `c`, `d`**: The answer options (strings).
-   **`correct`**: The key (`'a'`, `'b'`, `'c'`, or `'d'`) corresponding to the correct answer.

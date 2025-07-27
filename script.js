// Function to fetch questions and start the quiz
function startQuiz() {
    const category = document.getElementById('categorySelect').value;
    const difficulty = document.getElementById('difficultySelect').value;
    const apiUrl = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;

    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = "Loading questions...";  // Show loading text

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayQuiz(data.results);
        })
        .catch(error => {
            quizContainer.innerHTML = `<p class="loadingError">Error Loading Question! Please Try Again☹️</p>`;
            console.error('Error:', error);
        });
}

// Function to display the quiz questions and answers
function displayQuiz(questions) {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = ""; // Clear any existing content

    let questionIndex = 0;
    let score = 0;

    // Function to load a question
    function loadQuestion() {
        if (questionIndex >= questions.length) {
            quizContainer.innerHTML = `<p class="finalScore">Quiz finished! Your score is ${score}/${questions.length}</p>`;
            return;
        }

        const questionObj = questions[questionIndex];

        // Displaying the Question
        const displayQuestion = document.getElementById('question');
        quizContainer.innerHTML = `<p class="question">${questionObj.question}</p>`;

        // Selecting and Displaying the options randomly
        const answers = [...questionObj.incorrect_answers, questionObj.correct_answer].sort(() => Math.random() - 0.5);

        answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.addEventListener('click', () => checkAnswer(answer, questionObj.correct_answer));
            quizContainer.appendChild(button);
        });
    }

    // Function to check the answer
    function checkAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            score++;
        }
        questionIndex++;
        loadQuestion();
    }

    loadQuestion(); // Start with the first question
}

// Event listener for the "Start Quiz" button
document.getElementById('startQuizBtn').addEventListener('click', startQuiz);

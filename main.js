const bladeeQuestions = [
    { question: "Bladee's real name is Benjamin Reichwald.", answer: true },
    { question: "Bladee is a member of the Drain Gang collective.", answer: true },
    { question: "Bladee's debut mixtape is titled 'Eversince'.", answer: true },
    { question: "Bladee was born in Stockholm, Sweden.", answer: true },
    { question: "Bladee's primary music genre is country.", answer: false },
    { question: "Bladee is known for his unique and autotuned vocal style.", answer: true },
    { question: "Bladee's collaborative project with Ecco2k is called 'Trash Island'.", answer: false },
    { question: "Bladee has a background in classical music.", answer: true },
    { question: "Bladee has a clothing brand called 'G'LOSS'.", answer: true },
    { question: "Bladee's album 'Red Light' was released in 2018.", answer: true },
    { question: "Bladee has collaborated with artists like Yung Lean and Thaiboy Digital.", answer: true },
    { question: "Bladee's music is often associated with the genre known as cloud rap.", answer: true },
    { question: "Bladee is also known by the alias 'Bladeecity'.", answer: true },
    { question: "Bladee's father is a famous Swedish actor.", answer: false },
    { question: "Bladee has a degree in computer science.", answer: false },
    { question: "Bladee's official debut studio album is titled '333'.", answer: false },
    { question: "Bladee has a project called 'Gluee' released in 2011.", answer: false },
    { question: "Bladee has a song titled 'Carwash' featuring Ecco2k.", answer: true },
    { question: "Bladee's collaboration with Yung Lean is known as 'Whitearmor'.", answer: false },
    { question: "Bladee is fluent in multiple languages, including Mandarin.", answer: false }
];

const quizContainer = document.getElementById('quiz-container');

function displayQuestions() {
    bladeeQuestions.forEach((questionObj, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('questionbox');

        const questionText = document.createElement('div');
        questionText.classList.add('bladeeqs');
        questionText.textContent = questionObj.question;

        const truefalsebtns = document.createElement('div');
        truefalsebtns.classList.add('truefalse');

        const truebtn = document.createElement('button');
        truebtn.classList.add('btn');
        truebtn.textContent = 'True';
        truebtn.addEventListener('click', function () {
            checkAnswer(questionObj, true);
        });

        const falsebtn = document.createElement('button');
        falsebtn.classList.add('btn');
        falsebtn.textContent = 'False';
        falsebtn.addEventListener('click', function () {
            checkAnswer(questionObj, false);
        });

        truefalsebtns.appendChild(truebtn);
        truefalsebtns.appendChild(falsebtn);

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(truefalsebtns);

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(questionObj, userAnswer) {
    const resultElement = document.createElement('p');
    resultElement.classList.add('result');

    if (userAnswer === questionObj.answer) {
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Incorrect. The correct answer is ' + (questionObj.answer ? 'True' : 'False');
    }

    quizContainer.appendChild(resultElement);
}


displayQuestions();

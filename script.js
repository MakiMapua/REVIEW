const quizData = [
    {
        question: "Which of the following thermodynamic cycles is the most efficient?",
        a: "Brayton",
        b: "Rankine",
        c: "Otto",
        d: "Carnot",
        correct: "d"
    },
    {
        question: "This process occurs when a fluid flowing in a line suddenly encounters a restriction in the flow passage.",
        a: "Throttling Process",
        b: "Isochoric Process",
        c: "Isopiestic Process",
        d: "Hyperbolic Process",
        correct: "a"
    },
    {
        question: "Avogadro’s number is the number of molecules in a gram-mole. This constant is _____.",
        a: "6.05222 x 10^23",
        b: "6.20522 x 10^23",
        c: "6.02252 x 10^23",
        d: "6.50222 x 10^23",
        correct: "c"
    },
    {
        question: "What is the pressure obtained from a barometer?",
        a: "Absolute pressure",
        b: "Gage pressure",
        c: "Vacuum pressure",
        d: "Atmospheric pressure",
        correct: "d"
    },
    {
        question: "At 101.325 kPa, the boiling point of water is 100°C. If the pressure is decreased, the boiling temperature will ______?",
        a: "Increase",
        b: "Decrease",
        c: "Remain the same",
        d: "Drop to zero",
        correct: "b"
    },
    {
        question: "It is the unavailability of a system or substance’s energy to do work.",
        a: "Potential Energy",
        b: "Latent Energy",
        c: "Entropy",
        d: "Enthalpy",
        correct: "c"
    },
    {
        question: "When a first system is in thermal equilibrium with a second system and also separately in thermal equilibrium with a third system, then second and third body will also be in thermal equilibrium with each other.",
        a: "Zeroth law of thermodynamics",
        b: "First law of thermodynamics",
        c: "Second law of thermodynamics",
        d: "Third law of thermodynamics",
        correct: "a"
    },
    {
        question: "Which of the following is not the universal gas constant?",
        a: "0.287 kJ/kmol-K",
        b: "8.314 kJ/kmol-K",
        c: "0.0821 atm-L/mol-K",
        d: "1545 ft-lb/lbmol-R",
        correct: "a"
    },
    {
        question: "For fluid flow, the enthalpy is the sum of internal energy and ______.",
        a: "Pressure",
        b: "Volume",
        c: "Flow work",
        d: "Entropy",
        correct: "c"
    },
    {
        question: "In an Otto engine, the heat is added during the process of:",
        a: "Isobaric",
        b: "Isochoric",
        c: "Isothermal",
        d: "Isentropic",
        correct: "b"
    },
    {
        question: "Which of the following is not an absolute pressure?",
        a: "33.9 ft. H2O",
        b: "29.92 in. Hg",
        c: "760 torr",
        d: "None",
        correct: "d"
    },
    {
        question: "What is true about the polytropic exponent n for a perfect gas undergoing an isobaric process?",
        a: "n > 0",
        b: "n < 0",
        c: "n = ∞",
        d: "n = 0",
        correct: "c"
    },
    {
        question: "What should be the temperature of both water and steam whenever they are present together?",
        a: "100°C",
        b: "Boiling point of water @ 101.325 Kpa",
        c: "Superheated temperature of steam",
        d: "Saturation temperature for the existing pressure",
        correct: "d"
    },
    {
        question: "What is the composition of air by volume?",
        a: "21% O2 & 79% N2",
        b: "21% N2 & 79% O2",
        c: "23.1% O2 & 76.9% N2",
        d: "23% O2 & 77% N2",
        correct: "a"
    },
    {
        question: "What is the area under the curve of a temperature-entropy diagram?",
        a: "Heat absorbed",
        b: "Heat rejected",
        c: "A & B",
        d: "Work net",
        correct: "c"
    },
    {
        question: "It is a substance whose temperature is lower than the saturation temperature corresponding to the given pressure.",
        a: "Saturated substance",
        b: "Superheated substance",
        c: "Subcooled substance",
        d: "Compressed substance",
        correct: "c"
    },
    {
        question: "If 1 m³ is equal to 1000 liters, what is the equivalent value in ft³?",
        a: "3.7853",
        b: "7.4810",
        c: "10.7649",
        d: "35.3417",
        correct: "d"
    },
    {
        question: "When the expansion or compression of gas takes place without transfer of heat to or from the gas, the process is called?",
        a: "Reversible",
        b: "Adiabatic",
        c: "Isometric",
        d: "Polytropic",
        correct: "b"
    },
    {
        question: "Otto cycle consists of ______ processes.",
        a: "2 Isometric & Isentropic",
        b: "2 Isothermal & Isentropic",
        c: "2 Isobaric & Isentropic",
        d: "2 Hyperbolic & Isopiestic",
        correct: "a"
    },
    {
        question: "A thermodynamic process whose deviation from equilibrium is infinitesimal at all times is called ____ process.",
        a: "Reversible",
        b: "Cyclic",
        c: "Quasi-static",
        d: "Irreversible",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

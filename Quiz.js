const quizData = [
{question:"How old is Abia State",
a: '15',
b: '17',
c: '20',
d: '32',
correct: 'd'
},

{question: "Where is prevailing copmuter located in Umuahia",
a: "Ojike Street",
b: "Warri Street",
c: "Ohafia Street",
d: "Niger Road",
correct: 'c'
},

{question: "What year was Java Script Invented",
a: '1999',
b: '1991',
c: '1995',
d: '2002',
correct: 'c'
},

{question: "Who is the Governor of Abia State",
a: "T.A Orji",
b: "Okezie Ikpeazu",
c: "Orji-Uzo Kalu",
d: "Alex Otti",
correct: 'd'
},

{question: "What is the meaning of CSS",
a: 'Complete Style Sheet',
b: "Cascading Style Sheet",
c: "Compacting Style Sheet",
d: "None of the Above",
correct: 'b'
},
]

// create a variable
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const QuestionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let CurrentQuiz = 0;
let score = 0;

LoadQuiz();
function LoadQuiz(){
    deselectAnswers();
    const CurrentQuizData = quizData [CurrentQuiz];
    
    QuestionEl.innerText = CurrentQuizData.question;
    a_text.innerText= CurrentQuizData.a;
    b_text.innerText= CurrentQuizData.b;
    c_text.innerText= CurrentQuizData.c;
    d_text.innerText= CurrentQuizData.d;

  
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");
  let answer = undefined;

  answerEls.forEach(answerEls => {
    // ckeck for .value first with console.log(answer.checked)
    if (answerEls.checked){
      answer = answerEls.id;
    }
  });

  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEls) => {
    answerEls.checked = false;
  })
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[CurrentQuiz].correct) {
        score++;
      }
      CurrentQuiz++;
      if (CurrentQuiz < quizData.length) {
        LoadQuiz();
      }else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2>
              
              <button onclick="Location.reload()">Reload</button>
          `
      }
    }
  });
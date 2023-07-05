
let questions = [
  {
    id: 1,
    question: "What does HTML stands for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyperlinks Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Choose the correct HTML tag for largest heading?",
    answer: "&lt;h1&gt;",
    options: [
      "&lt;h1&gt;",
      "&lt;h2&gt;",
      "&lt;h5&gt;",
      "&lt;h6&gt;"
    ]
  },
  {
    id: 3,
    question: "Choose the correct HTML tag for inserting line break?",
    answer: "&lt;br&gt;",
    options: [
      "&lt;lb&gt;",
      "&lt;break&gt;",
      "&lt;br&gt;",
      "&lt;linebreak&gt;"
    ]
  },
  {
    id: 4,
    question: "What does CSS stands for?",
    answer: "Cascading Style Sheet",
    options: [
      "Computer Style Sheet",
      "Colorfull Style Sheet",
      "Cascading Style Sheet",
      "Creative Style Sheet"
    ]
  },
  {
    id: 5,
    question: "A page designed in HTML is called ______.",
    answer: "Web Page",
    options: [
      "Application",
      "Cover Page",
      "Front-end",
      "Web Page"
    ]
  }
];

let question_count = 0;
let Points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    Points += 10;
    sessionStorage.setItem("Points", Points);
  }
  console.log(Points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

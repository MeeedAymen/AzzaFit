const questions = document.querySelectorAll(".question");
var barMenu = document.querySelector(".bar-menu");
var closebtn = document.querySelector(".close");
var ul = document.querySelector("ul");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector(".answer");
    if (answer.style.display == "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
barMenu.addEventListener("click", (e) => {
  ul.style.left = 0;
});
closebtn.addEventListener("click", (e) => {
  ul.style.left = "-300px";
});


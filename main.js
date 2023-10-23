const h1 = document.getElementsByTagName("h1")[0];
const p = document.getElementsByTagName("p")[0];
const lbtn = document.getElementById("light");
const generatedNumber = Math.round(Math.random() * 25) * 2; // easy ;)

const array = [
  {
    display: "Hi there!",
    duration: 3,
  },
  {
    display: "Let's play a game.",
    duration: 6,
  },
  {
    display: "Think of a number.",
    duration: 5,
    prg: "(Use calculator if your number is too big.)",
    size: 25,
  },
  {
    display: "Multiply the number by 2",
    prg: "",
    duration: 5,
  },
  {
    display: "Now, add this number: " + generatedNumber,
    duration: 6,
  },
  {
    display: "Divide the number by 2",
    duration: 10,
  },
  {
    display: "Lastly, subtract the number you thought first from the result you got from division.",
    duration: 2,
    size: 20
  },
  {
    display: "Well, the result is...",
    duration: 3,
  },
  {
    display: generatedNumber * 0.5 + "!!",
    duration: 3,
  },
  {
    display: "Is it correct?",
    prg: "Of course it is, if not, you did it wrong my man ;)",
    duration: 3,
  },
  {
    display: "Wanna play again?",
    prg: "Reload the page!",
    duration: 3,
  },
];

const blink = function (_text, _text2 = "") {
  h1.style.opacity = 0;
  p.style.opacity = 0;
  h1.addEventListener("transitionend", function () {
    h1.textContent = _text;
    p.textContent = _text2;
    p.style.opacity = 1;
    h1.style.opacity = 1;
  });
};

const init = function () {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (i !== 0) element.duration = element.duration + array[i - 1].duration;

    setTimeout(function () {
      h1.style.fontSize = element.size + "px";

      blink(element.display, element.prg);
    }, element.duration * 1000);
  }
};

lbtn.onclick = function () {
  lbtn.classList.toggle("white");
  document.body.classList.toggle("white");
};

init();

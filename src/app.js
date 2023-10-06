window.onload = () => {
  document.querySelector("#excuse").innerHTML = theExcuse;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"
];

let theExcuse = `${getElement(who)} ${getElement(action)} ${getElement(what)} ${getElement(when)}`;

function getElement(array) {
  return array[Math.floor(Math.random() * array.length)]; 
}
window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excusegenerator();
};

//Served Array
let excusegenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [ "before the class", "right on time", "when I finished", "during my lunch", "while I was praying" ];

  // let quien = Math.floor(Math.random() * who.length);
  let quien = getRandomElement(who);
  let accion = getRandomElement(action);
  let que = getRandomElement(what);
  let cuando = getRandomElement(when);

  return (
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]
  );
};

let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
  location.reload();
});

//Function to loop ramdon word
function getRandomElement(ArrayCalcular) {
  console.log("getRandomElement");
  return Math.floor(Math.random() * ArrayCalcular.length);
}

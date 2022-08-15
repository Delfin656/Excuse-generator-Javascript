/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const h1 = document.querySelector("#excuse");

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function excuseGenerator(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  h1.innerHTML =
    excuseGenerator(who) +
    " " +
    excuseGenerator(what) +
    " " +
    excuseGenerator(when);
};

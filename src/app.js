/* eslint-disable */
import "bootstrap";
import "./style.css";

const suits = [
  ["♦", "diamond"],
  ["♥", "heart"],
  ["♠", "spade"],
  ["♣", "club"]
];

const cardValue = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generateRandomCard() {
  //write your code here
  const suitIndex = Math.floor(Math.random() * suits.length);
  const randomSuitImage = suits[suitIndex][0];
  const randomSuitClass = suits[suitIndex][1];
  const randomCardValueIndex = Math.floor(Math.random() * cardValue.length);
  const displayCardValue = cardValue[randomCardValueIndex];

  const topLeftSuitDivElement = document.querySelector(".top-left-suit");
  const bottomRightSuitDivElement = document.querySelector(
    ".bottom-right-suit"
  );
  const cardValueDivElement = document.querySelector(".cardValue");

  if (topLeftSuitDivElement == null) {
    console.log("no top left suit element found");
    return;
  }
  if (bottomRightSuitDivElement == null) {
    console.log("no bottom right suit element found");
    return;
  }

  if (cardValueDivElement == null) {
    console.log("no cardValue element found");
    return;
  }
  if (randomSuitClass == "diamond" || randomSuitClass == "heart") {
    cardValueDivElement.classList.remove("blackNumber");
    cardValueDivElement.classList.add("redNumber");
    topLeftSuitDivElement.classList.remove("club");
    topLeftSuitDivElement.classList.remove("spade");
    bottomRightSuitDivElement.classList.remove("club");
    bottomRightSuitDivElement.classList.remove("spade");
  }
  if (randomSuitClass == "diamond") {
    topLeftSuitDivElement.classList.add("diamond");
    topLeftSuitDivElement.classList.remove("heart");
    bottomRightSuitDivElement.classList.remove("heart");
    bottomRightSuitDivElement.classList.add("diamond");
  }
  if (randomSuitClass == "heart") {
    topLeftSuitDivElement.classList.remove("diamond");
    topLeftSuitDivElement.classList.add("heart");
    bottomRightSuitDivElement.classList.remove("diamond");
    bottomRightSuitDivElement.classList.add("heart");
  }
  if (randomSuitClass == "spade" || randomSuitClass == "club") {
    cardValueDivElement.classList.remove("redNumber");
    cardValueDivElement.classList.add("blackNumber");
    bottomRightSuitDivElement.classList.remove("heart");
    bottomRightSuitDivElement.classList.remove("diamond");
    topLeftSuitDivElement.classList.remove("heart");
    topLeftSuitDivElement.classList.remove("diamond");
  }
  if (randomSuitClass == "club") {
    topLeftSuitDivElement.classList.add("club");
    topLeftSuitDivElement.classList.remove("spade");
    bottomRightSuitDivElement.classList.add("club");
    bottomRightSuitDivElement.classList.remove("spade");
  }
  if (randomSuitClass == "spade") {
    topLeftSuitDivElement.classList.add("spade");
    topLeftSuitDivElement.classList.remove("club");
    bottomRightSuitDivElement.classList.add("spade");
    bottomRightSuitDivElement.classList.remove("club");
  }
  console.log(randomSuitClass);

  cardValueDivElement.innerText = displayCardValue;
  bottomRightSuitDivElement.innerText = randomSuitImage;
  bottomRightSuitDivElement.classList.add(randomSuitClass);
  topLeftSuitDivElement.innerText = randomSuitImage;
  topLeftSuitDivElement.classList.add(randomSuitClass);
}
let RandomCardButton = document.querySelector("#randomCardBtn");
RandomCardButton.addEventListener("click", generateRandomCard);
window.onload = generateRandomCard();
window.onload = timedGeneration;

function timedGeneration() {
  setTimeout(() => {
    generateRandomCard();
    timedGeneration();
  }, 5000);
}
let inputHeightValue;
let card = document.querySelector(".card");

let heightTag = document.querySelector(".cardHeightInput");

const onchange = e => {
  let inputHeight = e.target.value;
  card.style.height = inputHeight + "px";
};
heightTag.addEventListener("change", onchange);

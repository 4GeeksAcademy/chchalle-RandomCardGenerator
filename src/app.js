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

window.onload = function() {
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
    cardValueDivElement.classList.add("redNumber");
  }
  console.log(randomSuitClass);

  cardValueDivElement.innerText = displayCardValue;
  bottomRightSuitDivElement.innerText = randomSuitImage;
  bottomRightSuitDivElement.classList.add(randomSuitClass);
  topLeftSuitDivElement.innerText = randomSuitImage;
  topLeftSuitDivElement.classList.add(randomSuitClass);
};

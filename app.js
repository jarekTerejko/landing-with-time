const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");
const hero = document.querySelector(".hero");
const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.remove();
}, 3100);

// time
const displayTime = () => {
  // old version with AM PM

  // const now = new Date();

  // let hour = now.getHours();
  // const min = now.getMinutes();
  // const sec = now.getSeconds();

  // const amOrPm = hour >= 12 ? "PM" : "AM";

  // hour = hour % 12 || 12;

  // time.innerHTML = `${hour}<span>:</span>${fixTime(min)}<span>:</span>${fixTime(
  //   sec
  // )} ${amOrPm}`;

  // new version
  const now = new Date();

  const currentTime = now.toLocaleTimeString();
  console.log(currentTime);
  time.innerHTML = `<span>${currentTime}</span>`;
};

// old version with AM PM
// const fixTime = n => {
//   return (parseInt(n, 10) < 10 ? "0" : "") + n;
// };

setBgAndGreeting = () => {
  // const now = new Date("2019-06-13 19:22:13"); // testing

  const now = new Date();
  const hour = now.getHours();
  if (hour < 4) {
    hero.style.backgroundImage = "url(./img/night.jpg)";
    greeting.textContent = "Witaj bardzo późną porą...";
  } else if (hour < 8) {
    hero.style.backgroundImage = "url(./img/morning.jpg)";
    greeting.textContent = "Witaj o wczesnym poranku.";
  } else if (hour < 12) {
    hero.style.backgroundImage = "url(./img/latemorning.jpg)";
    greeting.textContent = "Dzień dobry.";
  } else if (hour < 13) {
    hero.style.backgroundImage = "url(./img/noon.jpg)";
    greeting.textContent = "Witaj w południe.";
  } else if (hour < 18) {
    hero.style.backgroundImage = "url(./img/afternoon.jpg)";
    greeting.textContent = "Witaj po południu";
  } else {
    hero.style.backgroundImage = "url(./img/evening.jpg)";
    greeting.textContent = "Dobry wieczor";
  }
};

// get Name
getUserName = () => {
  if (!localStorage.getItem("userName")) {
    name.textContent = "Wpisz swoje imię";
  } else {
    name.textContent = localStorage.getItem("userName");
  }
};

setUserName = e => {
  if (e.type === "keypress") {
    console.log(e);
    if (e.code === "Enter") {
      console.log(e);
      localStorage.setItem("userName", e.target.innerText);
      name.blur();
    }
  } else {
    console.log(e);
    localStorage.setItem("userName", e.target.innerText);
  }
};

getUserFocus = () => {
  if (!localStorage.getItem("userFocus")) {
    focus.textContent = "Wpisz swój cel";
  } else {
    focus.textContent = localStorage.getItem("userFocus");
  }
};

setFocus = e => {
  if (e.type === "keypress") {
    console.log(e);
    if (e.code === "Enter") {
      console.log(e);
      localStorage.setItem("userFocus", e.target.innerText);
      focus.blur();
    }
  } else {
    console.log(e);
    localStorage.setItem("userFocus", e.target.innerText);
  }
};

name.addEventListener("keypress", setUserName);
name.addEventListener("blur", setUserName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

setInterval(displayTime, 1000);
setBgAndGreeting();
getUserName();
getUserFocus();

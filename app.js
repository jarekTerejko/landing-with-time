const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");
const hero = document.querySelector(".hero");
const loader = document.querySelector(".loader");
console.log(loader);

setTimeout(() => {
  loader.remove();
}, 1500);

// time
const displayTime = () => {
  const now = new Date();

  let hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const amOrPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${fixTime(min)}<span>:</span>${fixTime(
    sec
  )} ${amOrPm}`;
};

setBgAndGreeting = () => {
  const now = new Date();
  //   const now = new Date("2019-06-13 20:22:13"); testing
  let hour = now.getHours();
  if (hour < 12) {
    hero.style.backgroundImage = "url(./img/morning.jpg)";
    greeting.textContent = "good morning";
  } else if (hour < 18) {
    hero.style.backgroundImage = "url(./img/afternoon.jpg)";
    greeting.textContent = "good afternoon";
  } else {
    hero.style.backgroundImage = "url(./img/evening.jpg)";
    greeting.textContent = "good evening";
  }
};

const fixTime = n => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

// get Name
getUserName = () => {
  if (!localStorage.getItem("userName")) {
    name.textContent = "Enter Your Name";
  } else {
    name.textContent = localStorage.getItem("userName");
  }
};

setName = e => {
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
    focus.textContent = "Enter Your Focus";
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

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

setInterval(displayTime, 1000);
setBgAndGreeting();
getUserName();
getUserFocus();

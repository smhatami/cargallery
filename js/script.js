//
window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

// sticky navbar
function fixedNav() {
  let navbar = document.getElementById("navBar");
  navbar.classList.add("fixed-nav");
}
function onFixedNav() {
  let navbar = document.getElementById("navBar");
  navbar.classList.remove("fixed-nav");
}

document.onscroll = function (e) {
  if (document.documentElement.scrollTop >= 570) {
    fixedNav();
  } else {
    onFixedNav();
  }
};

// car filter

let germanCar = document.getElementsByClassName("german-car");
let americanCar = document.getElementsByClassName("american-car");
let americanCarArr = []

function allInventory() {
  Array.from(americanCar).forEach(function (element) {
    element.classList.remove("d-none")
  });
  Array.from(germanCar).forEach(function (element) {
    element.classList.remove("d-none")
  });
}

function americanInventory() {
  allInventory()
  Array.from(germanCar).forEach(function (element) {
    element.classList.add("d-none")
  });
}
function germanInventory() {
  allInventory()
  Array.from(americanCar).forEach(function (element) {
    element.classList.add("d-none")
  });
}

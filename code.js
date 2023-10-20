function _f(id) {
  return document.getElementById(id);
}

_f("show").onclick = toogleShowContent;

function toogleShowContent() {
let div = _f("maindiv");
let show = _f("show");

if (div.className == "cls") {
  div.className = "";
  show.innerHTML = "Show more...";
} else {
  div.className = "cls";
  show.innerHTML = "Show less...";
}
}



function _f1(id) {
  return document.getElementById(id);
}



// Attach the click event listener to the "shaw" element
_f1("shaw").onclick = toggleShawContent;

function toggleShawContent() {
  let div = _f1("maindiv-workshop");
  let shaw = _f1("shaw");

  if (div.className === "cls1") {
    div.className = "";
    shaw.innerHTML = "Show more...";
  } else {
    div.className = "cls1";
    shaw.innerHTML = "Show less...";
  }
}



function _f2(id) {
  return document.getElementById(id);
}

function toggleShiwContent() {
  let div = _f2("maindiv-grants");
  let shiw = _f2("shiw");

  if (div.className === "cls2") {
    div.className = "";
    shiw.innerHTML = "Show more...";
  } else {
    div.className = "cls2";
    shiw.innerHTML = "Show less...";
  }
}

// Attach the click event listener to the "shaw" element
_f2("shiw").onclick = toggleShiwContent;




function _f3(id) {
  return document.getElementById(id);
}

function toggleShewContent() {
  let div = _f3("maindiv-research");
  let shew = _f3("shew");

  if (div.className === "cls3") {
    div.className = "";
    shew.innerHTML = "Show more...";
  } else {
    div.className = "cls3";
    shew.innerHTML = "Show less...";
  }
}

// Attach the click event listener to the "shaw" element
_f3("shew").onclick = toggleShewContent;

function handleOpen() {
  const newNav = document.getElementById("new-nav");
  const openButton = document.getElementById("openButton");
  openButton.addEventListener("click", () => {
    newNav.classList.add("active"),
      newNav.classList.remove("inactive"),
      console.log("opened");
  });
}

function handleClose() {
  const newNav = document.getElementById("new-nav");
  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", () => {
    newNav.classList.remove("active"),
      newNav.classList.add("inactive"),
      console.log("closed");
  });
}

function handlepubOpen() {
  const pubNewNav = document.getElementById("pub-new-nav");
  const pubopenButton = document.getElementById("pubopenButton");
  pubopenButton.addEventListener("click", () => {
    pubNewNav.classList.add("active"),
      pubNewNav.classList.remove("inactive"),
      console.log("pub opened");
  });
}

function handlepubClose() {
  const pubNewNav = document.getElementById("pub-new-nav");
  const pubcloseButton = document.getElementById("pubcloseButton");
  pubcloseButton.addEventListener("click", () => {
    pubNewNav.classList.remove("active"),
      pubNewNav.classList.add("inactive"),
      console.log("pub closed");
  });
}





function _f(id) {
  return document.getElementById(id);
}

let div = _f("maindiv");
let show = _f("show");

show.onclick = function () {
  if (div.className == "cls") {
    div.className = "";
    show.innerHTML = "Show more...";
  } else {
    div.className = "cls";
    show.innerHTML = "Show less...";
  }
};

function _f1(id) {
  return document.getElementById(id);
}

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

// Attach the click event listener to the "shaw" element
_f1("shaw").onclick = toggleShawContent;

function _f1(id) {
  return document.getElementById(id);
}

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

// Attach the click event listener to the "shaw" element
_f1("shaw").onclick = toggleShawContent;

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
_f1("shiw").onclick = toggleShiwContent;

function _f3(id) {
  return document.getElementById(id);
}

function toggleShewContent() {
  let div = _f2("maindiv-research");
  let shew = _f2("shew");

  if (div.className === "cls3") {
    div.className = "";
    shew.innerHTML = "Show more...";
  } else {
    div.className = "cls3";
    shew.innerHTML = "Show less...";
  }
}

// Attach the click event listener to the "shaw" element
_f1("shew").onclick = toggleShewContent;









function handleOpen() {
    const miniNav = document.getElementById("mini-nav");
    const openButton = document.getElementById("openButton");
    openButton.addEventListener("click", () => {
        miniNav.classList.add("active"), miniNav.classList.remove("inactive"), console.log("opened");
      });
}

function handleClose() {
    const miniNav = document.getElementById("mini-nav");
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", () => {
        miniNav.classList.remove("active"), miniNav.classList.add("inactive"), console.log("closed");
      });
  
}



document.addEventListener('DOMContentLoaded', function() {
  
const images = [
  'url("/Images/cover.jpg")',
  'url("/gradimage.jpg")',
  // Add more image URLs as needed
];

let currentImageIndex = 0;
const slideshowContainer = document.getElementById('background-slideshow');

function createSlide(imageUrl) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.style.backgroundImage = imageUrl;
  return slide;
}

function nextImage() {
  const currentSlide = slideshowContainer.querySelector('.slide.active');
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextSlide = createSlide(images[nextImageIndex]);
  
  slideshowContainer.appendChild(nextSlide);
  
  setTimeout(() => {
    nextSlide.classList.add('active');
    if (currentSlide) {
      currentSlide.classList.remove('active');
    }
  }, 50);

  setTimeout(() => {
    if (currentSlide) {
      slideshowContainer.removeChild(currentSlide);
    }
  }, 1000);

  currentImageIndex = nextImageIndex;
}

// Initialize the slideshow
slideshowContainer.appendChild(createSlide(images[currentImageIndex]));
slideshowContainer.firstChild.classList.add('active');

// Change image every 7 seconds
setInterval(nextImage, 7000);



  const playButton = document.getElementById('playButton');
  const videoThumbnail = document.getElementById('videoThumbnail');
  const overlay = document.querySelector('.overlay');
  
  playButton.addEventListener('click', function(e) {
    e.preventDefault(); // This line is crucial
    
    // Replace this with your actual YouTube video ID
    const videoId = '3wncVnh9a8M';
    
    // Create YouTube iframe
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');
    
    // Replace thumbnail and overlay with iframe
    videoThumbnail.innerHTML = '';
    videoThumbnail.appendChild(iframe);
    overlay.style.display = 'none';
  });
});

function _f(id) {
  return document.getElementById(id);
}


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

_f("show").onclick = toogleShowContent;





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


function _f4(id) {
  return document.getElementById(id);
}

function toggleShelContent() {
  let div = _f4("maindiv-projects");
  let shel = _f4("shel");

  if (div.className === "cls4") {
    div.className = "";
    shel.innerHTML = "Show more...";
  } else {
    div.className = "cls4";
    shel.innerHTML = "Show less...";
  }
}

// Attach the click event listener to the "shaw" element
_f4("shel").onclick = toggleShelContent;




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

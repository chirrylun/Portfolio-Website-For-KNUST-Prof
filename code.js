function _f(id) {
    return document.getElementById(id);
}

let div = _f('maindiv');
let show = _f('show');

show.onclick = function() {
    if (div.className == 'cls') {
        div.className = '';
        show.innerHTML = 'Show more...'
    } else {
        div.className = 'cls'
        show.innerHTML = 'Show less...'
    }

}

function _f1(id) {
    return document.getElementById(id)
}

function toggleShawContent() {
    let div = _f1('maindiv-workshop');
    let shaw = _f1('shaw');

    if (div.className === 'cls1') {
        div.className = '';
        shaw.innerHTML = 'Show more...'
    } else {
        div.className = 'cls1';
        shaw.innerHTML = 'Show less...'
    }
}

// Attach the click event listener to the "shaw" element
_f1('shaw').onclick = toggleShawContent;

function _f1(id) {
    return document.getElementById(id)
}

function toggleShawContent() {
    let div = _f1('maindiv-workshop');
    let shaw = _f1('shaw');

    if (div.className === 'cls1') {
        div.className = '';
        shaw.innerHTML = 'Show more...'
    } else {
        div.className = 'cls1';
        shaw.innerHTML = 'Show less...'
    }
}

// Attach the click event listener to the "shaw" element
_f1('shaw').onclick = toggleShawContent;

function _f2(id) {
    return document.getElementById(id)
}

function toggleShiwContent() {
    let div = _f2('maindiv-research');
    let shiw = _f2('shiw');

    if (div.className === 'cls2') {
        div.className = '';
        shiw.innerHTML = 'Show more...'
    } else {
        div.className = 'cls2';
        shiw.innerHTML = 'Show less...'
    }
}

// Attach the click event listener to the "shaw" element
_f1('shiw').onclick = toggleShiwContent;
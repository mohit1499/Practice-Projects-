const time = document.getElementById('time'),
    greeting = document.getElementById('greetung'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime() {
    var today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const ampm = today >= 12 ? 'PM' : 'AM';

    //12 hours format
    hour = hour % 12 || 12;

    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}  ${ampm}`;
    setTimeout(showTime, 1000);
}
function addZero(n) {
    return ((n < 10 ? '0' : '') + n);
}

function setbg() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //document.body.style.backgroundImage="url('evening.jpg')";
        document.body.style.backgroundColor = "yellow";

    }
    else if (hour < 18) {
        // document.body.style.backgroundImage="url('\evening.jpg')";
        document.body.style.backgroundColor = "red";

        //document.body.style.backgroundPosition="center";
        document.body.style.backgroundSize="1280px 720px";
        document.body.style.color = 'white';
    }
    else {
        document.body.style.backgroundImage="url('night.jpg')";
        document.body.style.backgroundSize="1280px 720px";
        //document.body.style.backgroundColor = "green";
        document.body.style.color = 'white';
    }
}

function getName() {
    document.getElementById('name').style.color = "black";
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }
    else {
        name.textContent = localStorage.getItem('name');

    }
}

function getFocus() {
    document.getElementById('focus').style.color = "Black";
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}
//e is event parameter which represent keypressor blur in this case
function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText);
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText);
    }
}
// blur event is opposite to focus which fires when we get out of target field
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
setbg();
getName();
getFocus();
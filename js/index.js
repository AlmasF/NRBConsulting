const aside = document.getElementById("aside");
const success = document.getElementById("success");

function openAside() {
    aside.classList.add('active');
    console.dir(aside);
}

function closeAside() {
    aside.classList.remove('active');
}

function showSuccess() {
    success.classList.add('active');
}

function closeSuccess() {
    success.classList.remove('active');
}
// Click
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Confirmed!");
});

// Hover
const hover = document.getElementById("hoverBtn");
hover.addEventListener("mouseover", () => {
    hover.style.backgroundColor = "lightgreen";
});

// Keypress
const key = document.getElementById("keypressField");
key.addEventListener("keypress", (e) => {
    console.log(`You typed: ${e.key}`);
});

// Double-click
const click=document.getElementById("clickBtn");
click.addEventListener("dblclick", () => {
    alert("Secret double-click unlocked!");
});

// Slideshow
let current = 0;
const slides = document.querySelectorAll(".slide");
document.getElementById("nextSlide").addEventListener("click", () => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length; // Ensure it loops back to the first slide
    slides[current].classList.add("active");
});
slides[0].classList.add("active");

// Tabs
const tabs = document.querySelectorAll(".tabBtn");
const contents = document.querySelectorAll(".tabContent");
tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        contents.forEach(c => c.classList.remove("active"));
        document.getElementById(`tab${btn.dataset.tab}`).classList.add("active");
    });
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let message = "";

    if (!email.includes("@") || password.length < 8) {
        message = "Please enter a valid email and a password with at least 8 characters.";
    } else {
        message = "Form submitted successfully!";
    }

    document.getElementById("formMsg").textContent = message;
});
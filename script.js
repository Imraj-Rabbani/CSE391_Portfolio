const element_1 = document.querySelector(".nav_portion_1")

element_1.addEventListener("click",()=>{
    window.scrollBy({
        top:875,
        left:0,
        behavior:"smooth",
    })
})

const element_2 = document.querySelector(".nav_portion_2")
element_2.addEventListener("click",()=>{
    window.scrollBy({
        top:3200,
        left:0,
        behavior:"smooth",
    })
})

const pageURL = window.location.href;
const lastModified = document.lastModified;

const footerInfo = document.getElementById("page-info");
footerInfo.innerHTML = `📍 Page location: <span>${pageURL}</span><br>🕒 Last modified: <span>${lastModified}</span>`;

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
body.classList.add('light-mode');
themeToggle.textContent = '🌙 Dark Mode';
}

themeToggle.addEventListener('click', () => {
body.classList.toggle('light-mode');

if (body.classList.contains('light-mode')) {
    themeToggle.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
} else {
    themeToggle.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
}
});

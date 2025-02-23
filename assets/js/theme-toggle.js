// Toggle dark mode with button click
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

if (localStorage.getItem('nightMode') === 'enabled') {
    body.classList.add('dark');
    toggleBtn.textContent = '🌞'; // Işık moduna geçiş simgesi
} else {
    toggleBtn.textContent = '🌙'; // Gece moduna geçiş simgesi
}

// Butona tıklanınca gece modu açma/kapama
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Gece modu durumu localStorage'a kaydedilecek
    if (body.classList.contains('dark')) {
        localStorage.setItem('nightMode', 'enabled');
        toggleBtn.textContent = '🌞'; // Işık moduna geçiş simgesi
    } else {
        localStorage.setItem('nightMode', 'disabled');
        toggleBtn.textContent = '🌙'; // Gece moduna geçiş simgesi
    }
});

const fullscreenBtn = document.querySelector('.fullscreen-btn');
const codeBox = document.querySelector('.code-box');

// Tam ekran işlevi
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        // Tam ekran başlatma
        if (codeBox.requestFullscreen) {
            codeBox.requestFullscreen();
        } else if (codeBox.webkitRequestFullscreen) { // Safari için
            codeBox.webkitRequestFullscreen();
        } else if (codeBox.mozRequestFullScreen) { // Firefox için
            codeBox.mozRequestFullScreen();
        } else if (codeBox.msRequestFullscreen) { // IE/Edge için
            codeBox.msRequestFullscreen();
        }
        fullscreenBtn.textContent = "↙"; // Tam ekran simgesi
    } else {
        // Tam ekrandan çıkma
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari için
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox için
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { // IE/Edge için
            document.msExitFullscreen();
        }
        fullscreenBtn.textContent = "↗"; // Tam ekran açma simgesi
    }
});



// ESC tuşu ile tam ekran modundan çıkma
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox için
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Safari ve Chrome için
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge için
            document.msExitFullscreen();
        }
        fullscreenBtn.textContent = "↗️"; // Tam ekran açma simgesi
    }
});




// Scroll event to move the copy button when scrolling the code box
document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.querySelector('.copy-btn');
    const codeBox = document.querySelector('.code-box');
    
    // Move the copy button as the code box scrolls
    codeBox.addEventListener('scroll', function () {
        const scrollTop = codeBox.scrollTop;
        copyButton.style.top = `${10 + scrollTop}px`; // Adjusting the position based on scroll
    });

    // Copy code to clipboard when the copy button is clicked
    copyButton.addEventListener('click', function () {
        const code = document.querySelector('.code-box pre code');
        const text = code.textContent;
        
        // Copy the text content of the code block
        navigator.clipboard.writeText(text).then(function() {
            alert('Code copied to clipboard!');
        }).catch(function(err) {
            console.error('Error copying text: ', err);
            alert('Failed to copy text!');
        });
    });
});

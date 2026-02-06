// Skill animation on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight) {
            bar.style.width = bar.dataset.width;
        }
    });
});

// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});

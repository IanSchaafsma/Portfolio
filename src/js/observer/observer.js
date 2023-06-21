const cards = document.querySelectorAll(".projects__project");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("projects__project--visible", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
    })
}, {
    threshold: 0.2,
    rootMargin: "-50px",
}
) 

cards.forEach(card => {
    observer.observe(card);
})
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    function toggleAccordion() {
        this.classList.toggle("active");
        const accordionContent = this.nextElementSibling;
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    }

    accordionItems.forEach(item => {
        item.querySelector(".accordion-header").addEventListener("click", toggleAccordion);
    });
});
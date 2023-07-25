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

const canvas = document.querySelector('#confetti');

let jsConfetti = new JSConfetti();

document.addEventListener("DOMContentLoaded", function() {
    jsConfetti.addConfetti({
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
          ],
          
    }).then(() => jsConfetti.addConfetti())
  });



  const showModalBtn = document.getElementById('showModalBtn');
  const showCleaningModal = document.getElementById('showCleaningModal');
  
const bottomModal = document.getElementById('bottomModal');
const cleaningModal = document.getElementById('cleaningModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closecleaningModalBtn =document.getElementById('closecleaningModalBtn')

showModalBtn.addEventListener('click', () => {
bottomModal.style.display = 'block';
document.body.style.overflow = 'hidden';
home-modal.classList.add('fade-in');

});

showCleaningModal.addEventListener('click', () => {
  cleaningModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
home-modal.classList.add('fade-in');
});

closeModalBtn.addEventListener('click', () => {
bottomModal.style.display = 'none';
document.body.style.overflow = 'auto'; 
})
closecleaningModalBtn.addEventListener('click', () => {
  cleaningModal.style.display = 'none';
document.body.style.overflow = 'auto'; 
})


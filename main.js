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

const jsConfetti = new JSConfetti();
document.addEventListener("DOMContentLoaded", function() {
    jsConfetti.addConfetti({
        confettiColors: [
            '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
          ],
          
    }).then(() => jsConfetti.addConfetti())
  });

const showModalBtn = document.getElementById('showModalBtn');
const bottomModal = document.getElementById('bottomModal');
const closeModalBtn = document.getElementById('closeModalBtn');

showModalBtn.addEventListener('click', () => {
    console.log('clicked')
//   bottomModal.style.display = 'block';
});
 
closeModalBtn.addEventListener('click', () => {
    console.log('button clicked')
  bottomModal.style.display = 'none';
});




function show() {
  alert('Button is clicked!');
}

const myButton = document.getElementById('myButton');

// Define the onclick function
function onClickFunction() {
    alert('Button clicked!');
}

// Attach the onclick function to the button
myButton.onclick = onClickFunction;
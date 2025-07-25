
const container = document.querySelector('.container'); 
const signUpBtn= document.querySelector('.green-bg button');   

signUpBtn.addEventListener('click', () => {
    container.classList.toggle('change');

});

function typeWriter( elementId, delay = 100) {
  let i = 0;
  const targetElement = document.getElementById(elementId);

  // Clear the content of the target element before starting
  targetElement.innerHTML = ''; 

  function type() {
    if (i < text.length) {
      targetElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    }
  }
    type();
}



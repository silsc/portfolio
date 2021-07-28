const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
const body = document.body;

menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('change');
      // if (navbar.classList.contains('change')) {
      //   body.classList.add('hidden');
      // } else {
      //   body.classList.add('show');
      // }
    })

const circleText = document.querySelector('.circle-text');
const lightCircleText = document.querySelector('.light-circle-text');

circleText.innerHTML = circleText.textContent.replace(/\S/g,"<span class='hell'>$&</span>");
lightCircleText.innerHTML = lightCircleText.textContent.replace(/\S/g,"<span class='hell'>$&</span>");

const element = document.querySelectorAll('.hell');
for(let i = 0; i < element.length; i++){
  element[i].style.transform = `rotate(${i+(i*19)}deg)`;
}



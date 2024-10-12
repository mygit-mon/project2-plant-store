// Toggle Login and Register
function toggleAuthentic() {
  const authenticDisplay = document.querySelector('.login-register-container');

  authenticDisplay.classList.toggle('hidden');
}

// Active Navbar
function activeNavbar(event) {
  const navbars = document.querySelectorAll('.main-menu li a');

  navbars.forEach((navbar) => {
    navbar.classList.remove('active');
  });

  event.currentTarget.classList.add('active');
}

// Slider
const sliderImages = document.querySelectorAll('.slider');

function activeClassSlider(e) {
  sliderImages.forEach((sliderImage) => {
    sliderImage.classList.remove('active');
  });

  e.currentTarget.classList.add('active');
}

sliderImages.forEach((sliderImage) => {
  sliderImage.addEventListener('click', activeClassSlider);
});

// Displaye Category Title
function displayTitleImage(title, event) {
  const titleContainer = document.querySelector('.plant-category');
  const target = event.currentTarget;

  titleContainer.classList.remove('active');

  if (target.classList.contains(`${title}`)) {
    titleContainer.classList.add('active');
    titleContainer.innerHTML = `${title}`;
  }
}

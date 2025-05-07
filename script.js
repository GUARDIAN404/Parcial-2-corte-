const themes = [
  'theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5', 'theme-6',
  'theme-7', 'theme-8', 'theme-9', 'theme-10', 'theme-11', 'theme-12'
];

document.getElementById("toggleColor").addEventListener("click", () => {

  themes.forEach(theme => document.body.classList.remove(theme));


  const random = Math.floor(Math.random() * themes.length);
  const selectedTheme = themes[random];


  document.body.classList.add(selectedTheme);
});


const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {

  navbar.querySelector('ul').classList.toggle('show');
  
  hamburger.classList.toggle('active');
});

const MainPageButton = document.querySelector('#MainButton');
const AboutPageButton = document.querySelector('#AboutButton');
const ProjectsButton = document.querySelector('#ProjectsButton');
const ContactButton = document.querySelector('#ContactButton');
const MainPage = document.querySelector('.Main');
const AboutPage = document.querySelector('.AboutMe');
const ProjectsPage = document.querySelector('.Projects');
const ContactPage = document.querySelector('.Contact');
const DarkModeButton = document.querySelector('#DarkMode');
const LightModeButton = document.querySelector('#LightMode');
const body = document.querySelector('body')
console.log(LightModeButton);
DarkModeButton.onclick = () => {
    body.classList.replace('light','dark');
    DarkModeButton.classList.add('hidden');
    LightModeButton.classList.remove('hidden')
}; 

LightModeButton.onclick = () => {
    body.classList.replace('dark','light');
    DarkModeButton.classList.remove('hidden');
    LightModeButton.classList.add('hidden')
};


MainPageButton.onclick = () => {
     MainPage.classList.add('active');
     AboutPage.classList.remove('active');
     ProjectsPage.classList.remove('active');
     ContactPage.classList.remove('active');
};
AboutPageButton.onclick = () => {
    MainPage.classList.remove('active');
    AboutPage.classList.add('active');
    ProjectsPage.classList.remove('active');
    ContactPage.classList.remove('active');
};
ProjectsButton.onclick = () => {
    MainPage.classList.remove('active');
    AboutPage.classList.remove('active');
    ProjectsPage.classList.add('active');
    ContactPage.classList.remove('active');
};
ContactButton.onclick = () => {
    MainPage.classList.remove('active');
    AboutPage.classList.remove('active');
    ProjectsPage.classList.remove('active');
    ContactPage.classList.add('active');
};

new Swiper('.cardWrapper', {
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
     
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
   
  });


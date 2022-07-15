window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
const container = document.getElementById("root");
const home = document.getElementById("home");

const PROJECTS = {
    wordle : {
        score : [],
        liveUrl : 'https://wordle-clone-jonnier.netlify.app/',
        githubUrl : 'https://github.com/jonniermartinez/wordle',
        img : '../img/words.jpg',
    },
}

const PATHS = {
    home : {
        name : "home",
        content : `
        <header class="header__information">
<div class="header__circles">
  <div class="circle__one"></div>
  <div class="circle__one circle__one--purple"></div>
</div>
<div class="text-header">
  <div class="header__img-container">
  <img src="./src/img/jonnier.jpg" alt="Jonnier Martinez">
  </div>
  <div class="header__title-container">
    <h1>Hello, I'm <span>Jonnier Martinez</span> & I'm a frontend developer.</h1>
  </div>
</div>
<div class="nav__buttoms">
  <a class="button primary-button">
  <p> Contact me </p>
  </a>
  <a class="button secundary--button"><p>View my Projects</p></a> 
</div>
</header> 

<section class="proyects">
<h2 class="proyects__title">My favorites Projects.</h2> 
<div class="cards__proyects">
 <div class="proyect__card"> 
   <a class="card__image-link" href="https://wordle-clone-jonnier.netlify.app/"  target="_blank">
     <img class="card__img" src="./src/img/words.jpg" alt="wordle">
   </a>
   <div class="card__information">
     <h3 class="card__title">Wordle Clone</h3>
     <a class="informaion__github-link" href="https://github.com/jonniermartinez/wordle" target="_blank">
       <svg class="github__logo" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
     </a>
   </div>
 </div>  
 <div class="proyect__card">
   <a class="card__image-link" href="https://rick-project-jonnier.netlify.app/" target="_blank">
     <img class="card__img" src="./src/img/Rick.jpg" alt="Rick and Morty">
   </a>
   <div class="card__information">
     <h3 class="card__title">Rick And Morty</h3>
     <a class="informaion__github-link" href="https://github.com/jonniermartinez/Rick" target="_blank">
       <svg class="github__logo" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
         <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
     </a>
   </div>
 </div>
 <div class="proyect__card">
   <a class="card__image-link" href="https://twitter-clone-jonnier.netlify.app/" target="_blank">
     <img class="card__img" src="./src/img/twiteer.jpg" alt="Rwitter">
   </a>
   <div class="card__information">
     <h3 class="card__title">Twitter Clone</h3>
     <a class="informaion__github-link" href="https://github.com/jonniermartinez/twitter-clone" target="_blank">
       <svg class="github__logo" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
         <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
     </a>
   </div>
 </div>
</div>
<a class="button primary-button"><p> See the all Projects </p></a> 
</section> 
        `
    },
    projects : {
        name : "home",
        content : `
<section class="proyects">
<h2 class="proyects__title">My favorites Projects.</h2> 
<div class="cards__proyects">
 <div class="proyect__card"> 
   <a class="card__image-link" href="https://wordle-clone-jonnier.netlify.app/"  target="_blank">
     <img class="card__img" src="./src/img/words.jpg" alt="wordle">
   </a>
   <div class="card__information">
     <h3 class="card__title">Wordle Clone</h3>
     <a class="informaion__github-link" href="https://github.com/jonniermartinez/wordle" target="_blank">
       <svg class="github__logo" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
     </a>
   </div>
 </div>  
 <div class="proyect__card">
   <a class="card__image-link" href="https://rick-project-jonnier.netlify.app/" target="_blank">
     <img class="card__img" src="./src/img/Rick.jpg" alt="Rick and Morty">
   </a>
   <div class="card__information">
     <h3 class="card__title">Rick And Morty</h3>
     <a class="informaion__github-link" href="https://github.com/jonniermartinez/Rick" target="_blank">
       <svg class="github__logo" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
         <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
     </a>
   </div>
 </div>
 <div class="proyect__card">
   <a class="card__image-link" href="https://twitter-clone-jonnier.netlify.app/" target="_blank">
     <img class="card__img" src="./src/img/twiteer.jpg" alt="Rwitter">
   </a>
   <div class="card__information">
     <h3 class="card__title">Twitter Clone</h3>
     <a class="informaion__github-link" href="https://github.com/jonniermartinez/twitter-clone" target="_blank">
       <svg class="github__logo" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
         <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
       </svg>
     </a>
   </div>
 </div>
</div>
<a class="button primary-button"><p> See the all Projects </p></a> 
</section> 
        `
    },
    contact : {
    name: "contact",
    content:` <h1>I am A about contact</h1>`
}
}

function navigator() {
    if (location.hash.startsWith('#home')){
        container.innerHTML = PATHS.home.content 
    }else if (location.hash.startsWith('#projects')) {
        container.innerHTML = PATHS.projects.content 
    }else if (location.hash.startsWith('#contact')) {
        container.innerHTML = PATHS.contact.content 
    }else{
        container.innerHTML = PATHS.home.content 
    }
}


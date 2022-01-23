AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Exploratory Data Analysis",
    cardImage: "assets/images/project-page/Etapas-del-analisis-de-datos.png",
    description: "Analisis exploratorio de datos sobre MAL.",
    tagimg: "assets/images/project-page/python.svg",
    Previewlink: "",
    Githublink: "https://github.com/JuanManiglia/Exploratory_Data_Analysis",
  },
  {
    title: "Machine Learning Project",
    cardImage: "assets/images/project-page/Machine-Learning-01.jpg",
    description: "Proyecto de ML (GANs, Sistema de recomendacion, Predictor de Score) MAL.",
    tagimg: "assets/images/project-page/python.svg",
    Previewlink: "",
    Githublink: "https://github.com/JuanManiglia/Machine_Learning_Project",
  },
  {
    title: "S&P 500",
    cardImage: "assets/images/project-page/sp500.jpg",
    description: "Analisis Exploratorio de Datos sobre el S&P500",
    tagimg: "assets/images/project-page/python.svg",
    Previewlink: "",
    Githublink: "https://github.com/JuanManiglia/S-P500",
  },
  {
    title: "SisRec",
    cardImage: "assets/images/project-page/sysrec.jpg",
    description: "Sistema de recomendación de Películas.",
    tagimg: "assets/images/project-page/python.svg",
    Previewlink: "",
    Githublink: "https://github.com/JuanManiglia/ReSys_Movies",
  },
  {
    title: "Recipe Ingredient Parser",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg: "assets/images/project-page/python.svg",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Bitcoin",
    cardImage: "assets/images/project-page/bitcoin1.jpg",
    description: "TimeSeries predictor de Bitcoin.",
    tagimg: "assets/images/project-page/python.svg",
    Previewlink: "",
    Githublink: "https://github.com/JuanManiglia/Bitcoin",
  },
  {
    title: "ML Mario",
    cardImage: "assets/images/project-page/mario.png",
    description: "ML de Mario por refuerzo.",
    tagimg: "assets/images/project-page/python.svg",
    Previewlink: "",
    Githublink: "https://github.com/JuanManiglia/Mario_ML",
  },
  // {
  //   title: "Personal Book Library",
  //   cardImage: "assets/images/project-page/book.png",
  //   description: "Personal book library app built using JavaScript.",
  //   tagimg: "assets/images/project-page/python.svg",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Minesweeper Game",
  //   cardImage: "assets/images/project-page/minesweeper.jpg",
  //   description:
  //     "Minesweeper Game built using python Object Oriented Programming.",
  //   tagimg: "assets/images/project-page/python.svg",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Battery Life Calculator",
  //   cardImage: "assets/images/project-page/battery.png",
  //   description: "Built battery life calculator using Python.",
  //   tagimg: "assets/images/project-page/python.svg",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Movie Recommendation System",
  //   cardImage: "assets/images/project-page/movie-recommendation.jpeg",
  //   description: "Built using Tensorflow.",
  //   tagimg: "assets/images/project-page/python.svg",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "Music Recommendation Engine",
  //   cardImage: "assets/images/project-page/music.jpg",
  //   description: "Built using Python.",
  //   tagimg: "assets/images/project-page/python.svg",
  //   Previewlink: "",
  //   Githublink: "",
  // },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
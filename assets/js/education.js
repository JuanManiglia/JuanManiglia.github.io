AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "I am Data Scientist",
    cardImage: "assets/images/education-page/datasc.png",
    moocLink: "https://api.badgr.io/public/assertions/8bLUrJhgSMyWKF-I7xOosQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    cardImage: "assets/images/education-page/eda.png",
    moocLink: "https://api.badgr.io/public/assertions/CzJV6Kp6SbCV1t1TepAJ-A?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/ml.png",
    moocLink: "https://api.badgr.io/public/assertions/oYT8cQGQR6-_KWr0VOANCQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Python Fundamentals",
    cardImage: "assets/images/education-page/python.png",
    moocLink: "https://api.badgr.io/public/assertions/N4-Vzm1iSw2OBcwXVatcmA?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Data Analyst",
    cardImage: "assets/images/education-page/data_ana.png",
    moocLink: "https://api.badgr.io/public/assertions/DdXRakN0Q5GrXC8iNNGLsQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Deep Learning",
    cardImage: "assets/images/education-page/deep.png",
    moocLink: "https://api.badgr.io/public/assertions/W8PFdyotRSC95rZmYcR2Ag?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Machine Learning Engineer",
    cardImage: "assets/images/education-page/enginee.png",
    moocLink: "https://api.badgr.io/public/assertions/TeA-uJkiQ2q3Hzib0xIb3Q?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "NLP",
    cardImage: "assets/images/education-page/nlp.png",
    moocLink: "https://api.badgr.io/public/assertions/UZnYyzKbQfGWRtrCDUWc4Q?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "TensorFlow & Keras",
    cardImage: "assets/images/education-page/tensor.png",
    moocLink: "https://api.badgr.io/public/assertions/0er2sNKkSFWAmgSEsvyvhQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Time Series Analysis",
    cardImage: "assets/images/education-page/time.png",
    moocLink: "https://api.badgr.io/public/assertions/WsPl5iilQJeyusXv2SNLhA?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Data Wrangling",
    cardImage: "assets/images/education-page/war.png",
    moocLink: "https://api.badgr.io/public/assertions/07W2cTOZSQ6blC1674AOkw?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Data Visualization",
    cardImage: "assets/images/education-page/visu.png",
    moocLink: "https://api.badgr.io/public/assertions/0R4Qz9dgRNmlT9SDZl1cHg?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "MLOps",
    cardImage: "assets/images/education-page/mlop.png",
    moocLink: "https://api.badgr.io/public/assertions/aPD7R759S8SC2duhFKt4Tw?identity__email=jamr1989%40gmail.com",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "I am Data Scientist",
    image: "assets/images/education-page/datasc.png",
    description: "https://api.badgr.io/public/assertions/8bLUrJhgSMyWKF-I7xOosQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    image: "assets/images/education-page/eda.png",
    description: "https://api.badgr.io/public/assertions/CzJV6Kp6SbCV1t1TepAJ-A?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Machine Learning",
    image: "assets/images/education-page/ml.png",
    description: "https://api.badgr.io/public/assertions/oYT8cQGQR6-_KWr0VOANCQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Python Fundamentals",
    image: "assets/images/education-page/python.png",
    description: "https://api.badgr.io/public/assertions/N4-Vzm1iSw2OBcwXVatcmA?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Data Analyst",
    image: "assets/images/education-page/data_ana.png",
    description: "https://api.badgr.io/public/assertions/DdXRakN0Q5GrXC8iNNGLsQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Deep Learning",
    image: "assets/images/education-page/deep.png",
    description: "https://api.badgr.io/public/assertions/W8PFdyotRSC95rZmYcR2Ag?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Machine Learning Engineer",
    image: "assets/images/education-page/enginee.png",
    description: "https://api.badgr.io/public/assertions/TeA-uJkiQ2q3Hzib0xIb3Q?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "NLP",
    image: "assets/images/education-page/nlp.png",
    description: "https://api.badgr.io/public/assertions/UZnYyzKbQfGWRtrCDUWc4Q?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "TensorFlow & Keras",
    image: "assets/images/education-page/tensor.png",
    description: "https://api.badgr.io/public/assertions/0er2sNKkSFWAmgSEsvyvhQ?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Time Series Analysis",
    image: "assets/images/education-page/time.png",
    description: "https://api.badgr.io/public/assertions/WsPl5iilQJeyusXv2SNLhA?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Data Wrangling",
    image: "assets/images/education-page/war.png",
    description: "https://api.badgr.io/public/assertions/07W2cTOZSQ6blC1674AOkw?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "Data Visualization",
    image: "assets/images/education-page/visu.png",
    description: "https://api.badgr.io/public/assertions/0R4Qz9dgRNmlT9SDZl1cHg?identity__email=jamr1989%40gmail.com",
  },
  {
    title: "MLOps",
    image: "assets/images/education-page/mlop.png",
    description: "https://api.badgr.io/public/assertions/aPD7R759S8SC2duhFKt4Tw?identity__email=jamr1989%40gmail.com",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});
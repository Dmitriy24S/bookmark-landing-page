// Navigation Menu
const navMenuContainer = document.querySelector(".nav-menu");
const navButton = document.querySelector(".navigation-menu-toggle");

navButton.addEventListener("click", () => {
  navMenuContainer.classList.toggle("show");
  document.body.classList.toggle("lock-scroll");
});

// Tab Menu
// grab tab menu buttons
const tabHeaderContainer = document.querySelector(".features-tab-header");
const tabMenuButtons = tabHeaderContainer.querySelectorAll("button");
// grab tab menu articles
const featuresTabTextContainer = document.querySelector(".features-tab-text");
const tabTextArticles = featuresTabTextContainer.querySelectorAll("article");

tabMenuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // clear previous active button
    tabMenuButtons.forEach((button) => button.classList.remove("active-tab"));
    // clear previous active article
    tabTextArticles.forEach((article) => {
      article.classList.remove("active-tab");
    });
    // add style to clicked tab
    button.classList.add("active-tab");
    // grab value of selected tab
    const dataValue = e.target.dataset.id;
    // find artcile
    const selectedTab = document.querySelector(`.${dataValue}`);
    // add style to show selected article
    selectedTab.classList.add("active-tab");
  });
});

// FAQ
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  // grab each question title
  const questionTitle = question.querySelector(".question-title");
  // on question title click add active style to show question answer
  questionTitle.addEventListener("click", () => {
    question.classList.toggle("active");
  });
});

// Form input check
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = e.target[0].value;
  validateEmail(inputValue);
});

function validateEmail(inputValue) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
    // if input passes test: remove error style
    return form.classList.remove("error-input");
  }
  // if input does not pass test: add error style
  form.classList.add("error-input");
}

// slide in bg shape
const featuresSection = document.querySelector(".features-tab-container");

const contentFadeOptions = {
  rootMargin: "700px 0px -600px 0px",
};

const contentObserver = new IntersectionObserver(function (entries, contentObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
    }
  });
}, contentFadeOptions);

contentObserver.observe(featuresSection);

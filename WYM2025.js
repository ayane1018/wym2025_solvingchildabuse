document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.getElementById("back");

  if (backButton) {
    backButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("us");
  const target = document.querySelector(".about-us");

  if (button && target) {
    button.addEventListener("click", function () {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start" //
      });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("activity");
  const target = document.querySelector(".activity");

  if (btn && target) {
    btn.addEventListener("click", function () {
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("abuse");
  const target = document.querySelector(".childabuse");

  if (btn && target) {
    btn.addEventListener("click", function () {
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
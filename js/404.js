document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.getElementById("homeBtn");
  
    homeButton.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Thanks for visiting. Redirecting you home!");
      setTimeout(() => {
        window.location.href = this.href;
      }, 500);
    });
  });
  

  const menu = document.querySelector(".menu");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");

  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // auto close on menu click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      navbar.classList.remove("active");
    });
  });



  /*dynamic footer*/
  

  const btn = document.getElementById("backToTop");
  const year = document.getElementById("year");


  year.textContent = new Date().getFullYear();
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });



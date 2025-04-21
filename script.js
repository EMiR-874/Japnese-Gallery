function toggleMenu() {
  const menuIcon = document.getElementById("toggle_menu_icon");
  menuIcon.classList.toggle("clicked");

  document.querySelector(".menu_contact_info").classList.toggle("hidden-contact");
  document.querySelector(".body_main_content").classList.toggle("body_content_hidden");
}

document.getElementById("toggle_menu_icon").addEventListener("click", toggleMenu);
document.getElementById("toggle_menu_text").addEventListener("click", toggleMenu);

document.querySelector(".logo_positioner").addEventListener("click", function () {
  window.location.href = "../index.html";
});

//SCROLL
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".a_one, .a_two, .a_three, .a_four, .a_five, .a_six");
  const textDivs = document.querySelectorAll(".m_c_text_wrapper");

  const sectionMap = {
    a_one: ".tjf1",
    a_two: ".tja1",
    a_three: ".tjn1",
    a_four: ".tjf2",
    a_five: ".tja2",
    a_six: ".tjn2",
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          textDivs.forEach((div) => (div.style.display = "none"));

          let activeClass = sectionMap[entry.target.classList[1]];
          if (activeClass) {
            document.querySelector(activeClass).style.display = "block";
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
});

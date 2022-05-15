document.addEventListener('DOMContentLoaded', function(){
  let header = document.getElementById("primary-header");
  let sticky = header.offsetTop;

  myFunction();
  window.onscroll = function() {myFunction()};
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("header-scroled");
    } else {
      header.classList.remove("header-scroled");
    }
  }

  let dropdown = document.getElementsByClassName("nav-toggle")[0];

  dropdown.addEventListener("click", () => {
      let dropdownContent = dropdown.nextSibling.nextSibling;
      if (!dropdownContent.classList.contains("show")) {
          dropdownContent.classList.add("show");
      } else {
          dropdownContent.classList.remove("show");
      }
  });
});
document.addEventListener('DOMContentLoaded', function() {

  const TRANSICTION_TIME = 6000;
  
  const slidesEl = document.querySelector(".slider-container");

  let curIndex = 0,
      lastIndex = 0,
      timeout;

  function setNextPrevSlide(prevIndex, curIndex, nextIndex) {
    //Remove the class to the current slide
    slidesEl.children[prevIndex].classList.remove("prev-slide");
    slidesEl.children[curIndex].classList.remove("active-slide");

    // btnDotsEL.children[curIndex].classList.remove("active-dot");

    //Assigned the class to the next slide
    slidesEl.children[curIndex].classList.add("prev-slide");
    slidesEl.children[nextIndex].classList.add("active-slide");
    // btnDotsEL.children[nextIndex].classList.add("active-dot");
    
  }

  //Auto Slide
  function autoSlide() {
    const activeSlide = document.querySelector(".active-slide");
    curIndex = [...slidesEl.children].indexOf(activeSlide);
    lastIndex = slidesEl.children.length - 1;

    let nextIndex = curIndex === lastIndex ? 0 : curIndex + 1;
    let prevIndex = curIndex === 0 ? lastIndex : curIndex - 1;

    setNextPrevSlide(prevIndex, curIndex, nextIndex);

    timeout = setTimeout(autoSlide, TRANSICTION_TIME);
  }

  //Invoke auto slide
  slidesEl.children[lastIndex].classList.add("prev-slide");
  slidesEl.children[0].classList.add("active-slide");
  setTimeout(autoSlide, TRANSICTION_TIME);

  function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(autoSlide, TRANSICTION_TIME);
  }


});
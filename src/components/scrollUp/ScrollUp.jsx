import React from "react";
import "./ScrollUp.css";

function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    if (scrollup && this.scrollY >= 960) {
      scrollup.classList.add("show-scrollup");
    } else if (scrollup) {
      scrollup.classList.remove("show-scrollup");
    }
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon show-scrollup "></i>
    </a>
  );
}

export default ScrollUp;

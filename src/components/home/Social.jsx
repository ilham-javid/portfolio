import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/ilham-javid/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.youtube.com/channel/UC0J7tcgtqIHTJVA96pkY_CQ"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-youtube"></i>
      </a>

      <a
        href="https://github.com/ilham-javid"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;

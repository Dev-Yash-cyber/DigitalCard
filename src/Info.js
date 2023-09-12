import React from "react";
import myImage from "./Yash.png";
import "./info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImage} alt="Yash Barot" className="--info-image" />
      <h1>Yash Barot</h1>
      <h2>Frontend Developer</h2>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:byash140@gmail.com">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com/in/yash-barot-8b2b49229/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}

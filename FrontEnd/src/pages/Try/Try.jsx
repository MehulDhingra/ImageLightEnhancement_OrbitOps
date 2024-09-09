import React, { useEffect, useState } from "react";
import "./Try.css";
import stars from "../../assets/stars.jpg";
import scroll from "../../Image/scroll.jpg";
import clouds from "../../assets/clouds.png";
import moon3d from "../../Image/moon3d.jpg";

function Try() {
  const [isButton, setIsButton] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMoonClick = () => {
      if (isButton) {
        window.location.href = "/upload";
      }
    };

    const moonElement = document.querySelector(".moon");
    moonElement.addEventListener("click", handleMoonClick);

    const slideImages = document.querySelectorAll(".slide-left, .slide-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    slideImages.forEach((img) => observer.observe(img));

    return () => {
      moonElement.removeEventListener("click", handleMoonClick);
      slideImages.forEach((img) => observer.unobserve(img));
    };
  }, [isButton]);

  return (
    <>
      <div className="main">
        <div className="stars">
          <img src={stars} alt="stars" />
        </div>

        {/* Heading below the navbar */}
        <div className="text-container">
          <b>
              <br>
              </br>
            <p className="heading" style={{ fontFamily: "inherit"}}>
              Low Light Image Enhancements of PSRs
            </p>
          </b>
        </div>

        <div className="page_1">
          <div className="cloud">
            <img src={clouds} alt="clouds" />
            <img src={clouds} alt="clouds" />
          </div>
          <button className={`moon ${isButton ? "moon-button" : ""}`}>
            {/* <img src={moon3d} alt="moon" style={{ height: '50vh' }} /> */}
          </button>

          <button
            onClick={() => scrollToSection("page_2")}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "10px 10px",
              backgroundColor: "Transparent",
              color: "white",
              border: "none",
              borderRadius: "545px",
              cursor: "pointer",
              zIndex: "5",
            }}
          >
            {/* <img
              src={scroll}
              alt="Scroll to Section"
              style={{ width: "50px", height: "50px" }}
            /> */}
          </button>
        </div>

        <div id="page_2" className="page_2">
          <div className="text-container">
            {/* <p className="heading">Page 2 Content</p> */}
            <p className="heading"></p>
          </div>
          <button
            onClick={() => scrollToSection("page_3")}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "10px 10px",
              backgroundColor: "Transparent",
              color: "white",
              border: "none",
              borderRadius: "545px",
              cursor: "pointer",
              zIndex: "5",
            }}
          >
          
          </button>
        </div>

        <div id="page_3" className="page_3">
          <div className="text-container">
           {/* <p className="heading">Page 2 Content</p> */}
           <p className="heading"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Try;

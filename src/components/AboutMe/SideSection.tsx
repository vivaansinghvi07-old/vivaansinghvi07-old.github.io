import "./SideSection.css";
import { useState } from "react";

export default function SideSection() {
  // setup reloading when the window width changes
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  $(window).on("resize", () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  });

  const langListPop = (
    <>
      <div
        className="SideSection-langlist-toggler"
        onClick={() => {
          const button = $(".SideSection-langlist-button");
          const langs = $(".SideSection-langlist-fixed");
          button.toggleClass("open");
          langs.toggleClass("show");
        }}
      >
        Toggle Languages
        <img
          className="SideSection-langlist-button"
          src="/images/dropdown.png"
        />
      </div>
      <img
        className="SideSection-langlist-fixed"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivaansinghvi07&layout=compact&langs_count=20&size_weight=0.30&count_weight=0.5&exclude_repo=ap-statistics-website"
      />
    </>
  );

  return (
    <>
      <div className="SideSection">
        <div className="SideSection-picture-wrapper">
          <img className="SideSection-picture" src="/images/me.png" />
        </div>
        <a
          href="/assets/resume.pdf"
          target="_blank"
          className="SideSection-download"
        >
          <strong>View Resume</strong>
        </a>
        <div className="SideSection-link-container">
          <a href="https://github.com/vivaansinghvi07/" target="_blank">
            <img src="/images/github.png" className="SideSection-link" />
          </a>
          <a href="https://replit.com/@VIVAANSINGHVI" target="_blank">
            <img
              src="/images/replit.png"
              style={{ filter: "grayscale(100%) brightness(0%)" }}
              className="SideSection-link"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vivaan-singhvi-02525027a"
            target="_blank"
          >
            <img src="/images/linkedin.png" className="SideSection-link" />
          </a>
          <a
            href="https://stackoverflow.com/users/21107707/vs07"
            target="_blank"
          >
            <img src="/images/so.png" className="SideSection-link" />
          </a>
        </div>
        {!(dimensions.height > 950 || dimensions.width < 1200) && langListPop}
        <p className="SideSection-story">
          My name is Vivaan Singhvi. I am 16 years old (assuming this is
          updated), and am passionate about computer science and math. I love
          creating personal projects such as this one, listening to music, and
          spending time with the people close to me.
        </p>
        {(dimensions.height > 950 || dimensions.width < 1200) && (
          <img
            className="SideSection-langlist"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivaansinghvi07&layout=compact&langs_count=20&size_weight=0.30&count_weight=0.5&exclude_repo=ap-statistics-website"
          />
        )}
      </div>
    </>
  );
}

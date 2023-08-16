import { useState } from "react";
import "./AboutMe.css";
import ListSection from "./AboutMe/ListSection";

export default function AboutMe() {
  // setup reloading when the window width changes
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  };

  const sideSection = (
    <>
      <div className="AboutMe-SideSection">
        <div className="AboutMe-SideSection-picture">
          <img style={{ width: "auto", height: "100%" }} src="/images/me.png" />
        </div>
        <div>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            className="AboutMe-SideSection-download"
          >
            <strong>View Resume</strong>
          </a>
        </div>
        <div className="AboutMe-SideSection-link-container">
          <a href="https://github.com/vivaansinghvi07/" target="_blank">
            <img
              src="/images/github.png"
              className="AboutMe-SideSection-link"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vivaan-singhvi-02525027a"
            target="_blank"
          >
            <img
              src="/images/linkedin.png"
              className="AboutMe-SideSection-link"
            />
          </a>
        </div>
        <p className="AboutMe-SideSection-story">
          My name is Vivaan Singhvi. I am 16 years old (assuming this is
          updated), and am passionate about computer science and math. I love
          creating personal projects such as this one, listening to music, and
          spending time with the people close to me.
        </p>
        <img
          className="AboutMe-SideSection-langlist"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivaansinghvi07&layout=compact&langs_count=20&size_weight=0.30&count_weight=0.5&exclude_repo=ap-statistics-website"
        />
      </div>
    </>
  );

  const listSectionData = (
    <>
      <ListSection title="Awards" />
      <ListSection title="Affiliations" />
    </>
  );

  if (windowWidth < 1200) {
    return (
      <>
        <div style={{ marginTop: "75px" }}>
          {sideSection}
          {listSectionData}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="AboutMe-SideSection-fixed">{sideSection}</div>
        <div className="AboutMe-rest">{listSectionData}</div>
      </>
    );
  }
}

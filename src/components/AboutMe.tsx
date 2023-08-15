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
        <div className="AboutMe-SideSection-MyPicture">

        </div>
        <img
          className="AboutMe-SideSection-LangList"
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

  if (windowWidth < 1024) {
    return (
      <>
        <div style={{marginTop: "75px"}} />
        {sideSection}
        {listSectionData}
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

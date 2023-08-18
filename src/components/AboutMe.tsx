import "./AboutMe.css";
import { useState } from "react";
import SideSection from "./AboutMe/SideSection";
import ListSection from "./AboutMe/ListSection";

export default function AboutMe() {
  // setup reloading when the window width changes
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  const listSectionData = new Array<JSX.Element>();
  for (let title of [
    "Awards",
    "Affiliations",
    "Education and Experience",
    "Hobbies",
  ]) {
    listSectionData.push(
      <ListSection
        title={title}
        id={String(listSectionData.length)}
        animateWait={listSectionData.length * 750}
      />
    );
  }

  if (windowWidth < 1200) {
    return (
      <>
        <div style={{ marginTop: "80px" }}>
          <SideSection />
          {listSectionData}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="AboutMe-rest">{listSectionData}</div>
        <div className="AboutMe-SideSection-fixed">
          <SideSection />
        </div>
      </>
    );
  }
}

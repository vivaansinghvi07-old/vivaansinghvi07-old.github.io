import "./Background.css";
import { useEffect, useState } from "react";

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Cloud() {
  return (
    <>
      <img
        className="Background-cloud"
        src={`/assets/images/clouds/cloud${randInt(0, 12)}.png`}
        style={{
          top: `${randInt(-10, 90)}vh`,
          opacity: `${randInt(50, 100)}%`,
          animation: `${randInt(15, 30)}s ltr-slide forwards linear`,
        }}
      />
    </>
  );
}

export default function Background() {
  const [cloudListOne, updateCloudListOne] = useState([<Cloud />]);
  const [cloudListTwo, updateCloudListTwo] = useState(new Array<JSX.Element>());
  const [onListOne, setOnListOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (onListOne) {
        updateCloudListOne([...cloudListOne, <Cloud />]);
        if (cloudListOne.length === 10) {
          updateCloudListTwo(new Array<JSX.Element>());
          setOnListOne(false);
        }
      } else {
        updateCloudListTwo([...cloudListTwo, <Cloud />]);
        if (cloudListTwo.length === 10) {
          updateCloudListOne(new Array<JSX.Element>());
          setOnListOne(true);
        }
      }
    }, randInt(3000, 5000));

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="Background">
        {cloudListOne}
        {cloudListTwo}
      </div>
    </>
  );
}

import "./Section.css";
import $ from "jquery";
import { awards, affiliations } from "./MyData";

type SectionProps = {
  title: string;
};

type SingleEventProps = {
  title: string;
  desc: string;
  date: string;
  id: string;
};

function SingleEvent(props: SingleEventProps) {
  return (
    <>
      <div className="Section-SingleEvent">
        <img
          className="Section-SingleEvent-dropdown"
          id={props.id}
          src="/images/dropdown.png"
          onClick={() => {
            $(`.Section-SingleEvent-dropdown#${props.id}`).toggleClass("down");
            $(`.Section-SingleEvent-extrainfo#${props.id}`).toggleClass("hide");
          }}
        />
        {props.title}
        <div className="Section-SingleEvent-extrainfo hide" id={props.id}>
          <strong>{props.date}:</strong>
          &ensp;
          {props.desc}
        </div>
      </div>
    </>
  );
}

export default function Section(props: SectionProps) {
  const data = new Array<JSX.Element>();
  const emojis = ["🏆", "🥇", "🥈", "🥉"];

  switch (props.title) {
    case "Awards":
      for (let award of awards) {
        let emojiTitle = `${emojis[award.place]} ${award.title}`;
        data.push(
          <SingleEvent
            id={`award${data.length}`}
            title={emojiTitle}
            desc={award.desc}
            date={award.date}
          />
        );
      }
      break;
    case "Affiliations":
      for (let aff of affiliations) {
        data.push(
          <SingleEvent
            id={`aff${data.length}`}
            title={aff.title}
            desc={aff.desc}
            date={aff.date}
          />
        );
      }
      break;
  }

  return (
    <>
      <div className="Section">
        <h1 className="Section-header">{props.title}</h1>
        {data}
      </div>
    </>
  );
}

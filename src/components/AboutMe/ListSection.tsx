import $ from "jquery";
import "./ListSection.css";
import { awards, affiliations } from "./MyData";

type ListSectionProps = {
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
      <div className="ListSection-SingleEvent">
        <img
          className="ListSection-SingleEvent-dropdown"
          id={props.id}
          src="/images/dropdown.png"
          onClick={() => {
            $(`.ListSection-SingleEvent-dropdown#${props.id}`).toggleClass(
              "down"
            );
            $(`.ListSection-SingleEvent-extrainfo#${props.id}`).toggleClass(
              "hide"
            );
          }}
        />
        {props.title}
        <div className="ListSection-SingleEvent-extrainfo hide" id={props.id}>
          <strong>{props.date}:</strong>
          &ensp;
          {props.desc}
        </div>
      </div>
    </>
  );
}

export default function ListSection(props: ListSectionProps) {
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
      <div className="ListSection">
        <h1 className="ListSection-header">{props.title}</h1>
        {data}
      </div>
    </>
  );
}

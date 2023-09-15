import $ from "jquery";
import "./ListSection.css";
import {
  awards,
  affiliations,
  educationAndExperience,
  hobbies,
} from "./MyData";
import { useEffect } from "react";

type ListSectionProps = {
  title: string;
  animateWait: number;
  id: string;
};

type SingleEventProps = {
  title: string;
  desc: string;
  date: string;
  id: string;
};

function SingleEvent(props: SingleEventProps) {
  const innerDesc = `${
    props.date ? `<strong>${props.date}:</strong>&ensp;` : ""
  }${props.desc}`;

  return (
    <>
      <div
        className="ListSection-SingleEvent"
      >
        <img
          className="ListSection-SingleEvent-dropdown"
          id={props.id}
          src="/assets/images/dropdown.png"
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
        <div
          className="ListSection-SingleEvent-extrainfo hide"
          id={props.id}
          dangerouslySetInnerHTML={{ __html: innerDesc }}
        />
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
    case "Education and Experience":
      for (let exp of educationAndExperience) {
        data.push(
          <SingleEvent
            id={`exp${data.length}`}
            title={exp.title}
            desc={exp.desc}
            date={exp.date}
          />
        );
      }
      break;
    case "Hobbies":
      for (let hob of hobbies) {
        data.push(
          <SingleEvent
            id={`hob${data.length}`}
            title={hob.title}
            desc={hob.desc}
            date={""}
          />
        );
      }
  }

  useEffect(() => {
    setTimeout(() => {
      $(`.ListSection#${props.id}`).removeClass("before");
    }, props.animateWait);
  }, []);

  return (
    <>
      <div className="ListSection before" id={props.id}>
        <h1 className="ListSection-header">{props.title}</h1>
        {data}
      </div>
    </>
  );
}

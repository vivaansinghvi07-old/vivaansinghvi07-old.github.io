import React from "react";
import "./Card.css";

type CardProps = {
  title: string;
  imgPath: string;
  desc: string;
  website: string;
  repo: string;
  tags: Array<string>;
  tagColor: string;
};

export default function Card(props: CardProps): JSX.Element {

  // produce image for website, if applicable
  let website;
  if (props.website) {
    website = (
      <>
        <a href={props.website} target="_blank" className="Card-link-website">
          <img
            src="/images/website.png"
            className="Card-link-image"
            alt="Website"
          ></img>
        </a>
      </>
    );
  } else {
    website = <></>;
  }
  
  return (
    <>
      <div className="Card">
        <div className="Card-image-container">
          <img
            className="Card-image"
            src={props.imgPath}
            alt={`${props.title} example image`}
          />
        </div>
        <div className="Card-header">{props.title}</div>
        <p className="Card-desc" dangerouslySetInnerHTML={ { __html: props.desc} }/>
        {website}
        <a href={props.repo} target="_blank" className="Card-link-repo">
          <img
            src="/images/github.png"
            className="Card-link-image"
            alt="GitHub"
          ></img>
        </a>
        <div className="Card-tags" style={ { width: props.website ? '60%' : '70%'} }>
          {props.tags.map((item, index) => (
            <div
              key={index}
              className="Card-tag-item"
              style={{ boxShadow: `1px 2px 3px ${props.tagColor}` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import "./Card.css";
import $ from "jquery";
import { useEffect } from "react";
import { useSharedTags } from "../../hooks/Projects/useSharedTags";

type CardProps = {
  title: string;
  imgPath: string;
  desc: string;
  website: string;
  repo: string;
  repoSite: string;
  tags: Array<string>;
  tagColor: string;
  date: string;
  animateWait: number;
};

function Tag(props: { tag: string; tagColor: string }) {
  const { tags, setTags } = useSharedTags();

  return (
    <>
      <div
        key={props.tag}
        className="Card-tag-item"
        style={{ boxShadow: `1px 2px 3px ${props.tagColor}` }}
        onClick={() => {
          if (!tags.includes(props.tag)) {
            const tagsCopy = [...tags];
            tagsCopy.push(props.tag);
            setTags(tagsCopy);
          }
        }}
      >
        {props.tag}
      </div>
    </>
  );
}

export default function Card(props: CardProps): JSX.Element {
  // adjust all the font sizes for clean resizing
  function fitTexts() {
    const em = $(".Card").width()! / 23.125;
    $(".Card-desc").css("font-size", 1 * em);
    $(".Card-header").css("font-size", 2 * em);
    $(".Card-tags").css("font-size", 1 * em);
    $(".Card-tag-item").css("font-size", 0.8 * em);
    if (props.date) {
      $(".Card-date").css("font-size", 1 * em);
    }
  }

  // scale font sizes depending on device
  useEffect(fitTexts, []);
  $(window).on("resize", fitTexts);

  // do animation
  useEffect(() => {
    setTimeout(() => {
      $(`.Card#${props.repo}`).removeClass("before");
    }, props.animateWait);
  }, []);

  return (
    <>
      <div className="Card before" id={props.repo}>
        <div className="Card-image-container">
          <img
            className="Card-image"
            src={props.imgPath}
            alt={`${props.title} example image`}
          />
        </div>
        {props.date && <div className="Card-date">{props.date}</div>}
        <div className="Card-header">{props.title}</div>
        <div
          className="Card-desc"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        />
        <div className="Card-footer-container">
          <div
            className="Card-tags"
            style={{ width: props.website ? "60%" : "70%" }}
          >
            {props.tags.map((item) => (
              <Tag tag={item} key={item} tagColor={props.tagColor} />
            ))}
          </div>
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              className="Card-link-website"
            >
              <img
                src="/images/website.png"
                className="Card-link-image"
                alt="Website"
              ></img>
            </a>
          )}
          <a href={props.repoSite} target="_blank" className="Card-link-repo">
            <img
              src="/images/github.png"
              className="Card-link-image"
              alt="GitHub"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}

import "./Card.css";
import { useSharedTags } from "../../hooks/Projects/useSharedTags";

type CardProps = {
  title: string;
  imgPath: string;
  desc: string;
  website: string;
  repo: string;
  tags: Array<string>;
  tagColor: string;
};

function Tag(props: { tag: string; tagColor: string }) {
  const { tags, setTags } = useSharedTags();

  function addTag() {
    if (!tags.includes(props.tag)) {
      const tagsCopy = [...tags];
      tagsCopy.push(props.tag);
      setTags(tagsCopy);
    }
  }

  return (
    <>
      <div
        key={props.tag}
        className="Card-tag-item"
        style={{ boxShadow: `1px 2px 3px ${props.tagColor}` }}
        onClick={addTag}
      >
        {props.tag}
      </div>
    </>
  );
}

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

  const tags = props.tags.map((item) => (
    <Tag tag={item} tagColor={props.tagColor} />
  ));

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
        <p
          className="Card-desc"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        />
        <div className="Card-footer-container">
          <div
            className="Card-tags"
            style={{ width: props.website ? "60%" : "70%" }}
          >
            {tags}
          </div>
          {website}
          <a href={props.repo} target="_blank" className="Card-link-repo">
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

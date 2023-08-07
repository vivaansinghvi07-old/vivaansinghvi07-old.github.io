import { useSharedTags } from "../../hooks/Projects/useSharedTags";
import { useState } from "react";
import { Input } from "reactstrap";
import "./TagSearch.css";

function Tag(props: { tag: string }) {
  const { tags, setTags } = useSharedTags();

  function removeSelf() {
    const tagsCopy: Array<string> = [...tags];
    tagsCopy.splice(tags.indexOf(props.tag), 1);
    setTags(tagsCopy);
  }

  return (
    <>
      <div className="TagSearch-tag" onClick={removeSelf}>
        {props.tag}
      </div>
    </>
  );
}

export default function TagSearch() {
  const { tags, setTags } = useSharedTags();
  const [input, setInput] = useState("");
  const [keyReleased, setKeyReleased] = useState(true);
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  let tagElements = new Array<JSX.Element>();
  for (let tag of tags) {
    tagElements.push(<Tag tag={tag} />);
  }

  // check if user enters the input field
  function onFocus() {
    if (input) {
      setShowAutoComplete(true);
    }
  }

  // handle the main input
  function onKeyDown(event: any) {
    const { key } = event;
    setKeyReleased(false);
    if (
      [" ", ",", "Tab", "Enter", "Return"].includes(key) &&
      input &&
      keyReleased
    ) {
      event.preventDefault();
      setInput("");
      if (!tags.includes(input)) {
        setTags([...tags, input]);
      }
    } else if (key === "Backspace" && !input && keyReleased) {
      event.preventDefault();
      const tagsCopy = [...tags];
      const tag: string | undefined = tagsCopy.pop();
      setTags(tagsCopy);
      setInput(tag === undefined ? "" : tag);
    }
  }

  return (
    <>
      <p className="TagSearch-info">
        Enter tags below, seperated by a comma, space, tab, or enter. You can
        also click on the tags in the cards to add the to the filter. To delete
        tags, use backspace in the input or simply click on the tags.
      </p>
      <div className="TagSearch">
        {tagElements}
        <div className="TagSearch-input-container">
          <Input
            className="TagSearch-input"
            onChange={(event) => {
              setInput(event.target.value.trim());
            }}
            onKeyUp={() => {
              setKeyReleased(true);
            }}
            onKeyDown={onKeyDown}
            onfocus={onFocus}
            onBlur={() => {
              setShowAutoComplete(false);
            }}
            value={input}
            placeholder="Add tag here..."
          />
          {/* Add the search bar thing */}
        </div>
      </div>
    </>
  );
}

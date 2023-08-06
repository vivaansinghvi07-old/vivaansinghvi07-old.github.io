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

  let tagElements = new Array<JSX.Element>();
  for (let tag of tags) {
    tagElements.push(<Tag tag={tag} />);
  }

  // handle input changing
  function onChange(event: any) {
    setInput(event.target.value.trim());
  }

  // handle the key going up
  function onKeyUp() {
    setKeyReleased(true);
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
      <div className="TagSearch">
        {tagElements}
        <Input
          className="TagSearch-input"
          onChange={onChange}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          value={input}
          placeholder="Add tag here..."
        />
      </div>
    </>
  );
}

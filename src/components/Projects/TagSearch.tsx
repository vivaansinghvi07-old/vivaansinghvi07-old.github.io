import { useSharedTags } from "../../hooks/Projects/useSharedTags";
import { useKeyDown } from "../../hooks/useKeyDown";
import { useState } from "react";
import { uniqueTagsArray } from "./MyProjects";
import { Input, ListGroup, ListGroupItem } from "reactstrap";
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
  const [showAutoComplete, setShowAutoComplete] = useState(Boolean(input));
  const [autoCompleteNum, setAutoCompleteNum] = useState(0);
  const [autoCompleteArrowNav, setAutoCompleteArrowNav] = useState(true);

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
    if ([" ", ","].includes(key) && input && keyReleased) {
      event.preventDefault();
      setInput("");
      setShowAutoComplete(false);
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

  function onChange(event: any) {
    const newValue = event.target.value.trim();
    setInput(event.target.value.trim());
    setShowAutoComplete(Boolean(newValue));
  }

  function AutoCompleteItem(props: {
    tag: string;
    highCond: boolean;
    num: number;
  }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <ListGroupItem
        className="TagSearch-AutoComplete-item"
        onMouseEnter={() => {
          setIsHovered(true);
          setAutoCompleteNum(props.num);
          setAutoCompleteArrowNav(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={() => {
          if (!tags.includes(props.tag)) {
            setTags([...tags, props.tag]);
          }
          setInput("");
          setAutoCompleteNum(0);
          setShowAutoComplete(false);
        }}
        style={
          props.highCond || (!autoCompleteArrowNav && isHovered)
            ? { backgroundColor: "rgb(225, 225, 225)" }
            : {}
        }
      >
        {props.tag}
      </ListGroupItem>
    );
  }

  // create autocomplete things
  const autoCompletes = new Array<JSX.Element>();
  const autoCompleteLabels = new Array<string>();
  for (let tag of uniqueTagsArray) {
    if (tag.startsWith(input)) {
      autoCompletes.push(
        <AutoCompleteItem
          tag={tag}
          num={autoCompletes.length}
          highCond={
            autoCompletes.length === autoCompleteNum && autoCompleteArrowNav
          }
        />
      );
      autoCompleteLabels.push(tag);
    }
  }

  // manage navigation for autocompletes
  useKeyDown(() => {
    setAutoCompleteArrowNav(true);
    setAutoCompleteNum(
      (((autoCompleteNum - 1) % autoCompletes.length) + autoCompletes.length) %
        autoCompletes.length
    );
  }, ["ArrowUp"]);
  useKeyDown(() => {
    setAutoCompleteArrowNav(true);
    setAutoCompleteNum((autoCompleteNum + 1) % autoCompletes.length);
  }, ["ArrowDown"]);

  // enter the autocomplete and reset everything
  useKeyDown(() => {
    if (!tags.includes(autoCompleteLabels[autoCompleteNum])) {
      setTags([...tags, autoCompleteLabels[autoCompleteNum]]);
    }
    setInput("");
    setAutoCompleteNum(0);
    setShowAutoComplete(false);
  }, ["Enter"]);

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
            onChange={onChange}
            onKeyUp={() => {
              setKeyReleased(true);
            }}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            value={input}
            style={
              showAutoComplete
                ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }
                : {}
            }
            placeholder="Add tag here..."
          />
          {showAutoComplete && (
            <ListGroup className="TagSearch-AutoComplete">
              {autoCompletes}
            </ListGroup>
          )}
        </div>
      </div>
    </>
  );
}

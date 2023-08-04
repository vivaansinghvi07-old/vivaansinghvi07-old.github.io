import { useSharedTags } from "../../hooks/Projects/useSharedTags";
import { Input } from "reactstrap";
import "./TagSearch.css";
import { ChangeEventHandler } from "react";

export default function TagSearch() {
  const { setTags } = useSharedTags();
  function handleChange(event: any) {
    setTags([event.target.value]);
  }
  return (
    <>
      <div className="TagSearch">
        <Input defaultValue="<a>Clieck here</a>" onChange={ handleChange }></Input>
      </div>
    </>
  );
}

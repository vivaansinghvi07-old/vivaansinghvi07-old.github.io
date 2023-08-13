import { useState } from "react";
import { useBetween } from "use-between";

const useTags = () => {
  const tagArray: Array<string> = [];
  const [tags, setTags] = useState(tagArray);
  return { tags, setTags };
};

export const useSharedTags = () => useBetween(useTags);

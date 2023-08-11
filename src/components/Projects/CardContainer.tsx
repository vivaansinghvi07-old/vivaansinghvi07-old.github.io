import Card from "./Card";
import $ from "jquery";
import { useSharedSortOrder } from "../../hooks/Projects/useSharedSortOrder";
import { useSharedTags } from "../../hooks/Projects/useSharedTags";
import projects, { projectsNewToOld, projectsOldToNew, projectsAlphabetical } from "./MyProjects";
import "./CardContainer.css";
import { useEffect } from "react";

type projectType = {
  title: string,
  desc: string,
  color: string,
  tags: Array<string>,
  repo: string,
  website: string,
  date: string
}

export default function CardContainer() {
  const { tags } = useSharedTags();
  const { sortOrder } = useSharedSortOrder();
  let projectArray: Array<projectType>;
  switch(sortOrder) {
    case "":
      projectArray = projects;
      break;
    case "old":
      projectArray = projectsNewToOld;
      break;
    case "new":
      projectArray = projectsOldToNew;
      break;
    case "alph":
      projectArray = projectsAlphabetical;
  }

  // get the projects
  const cards = new Array<JSX.Element>();
  for (let project of projectArray!) {
    // get the website
    let website: string;
    if (project.website === "GH_PAGES") {
      website = `https://vivaansinghvi07.github.io/${project.repo}`;
    } else {
      website = project.website;
    }

    // configure links
    const repo: string = `https://github.com/vivaansinghvi07/${project.repo}`;
    const imgPath: string = `/images/projects/${project.repo}.png`;

    // determine if it matches the filters
    let passedFilter: boolean = true;
    for (let tag of tags) {
      passedFilter &&= project.tags.includes(tag);
    }

    // add to the thing
    if (passedFilter) {
      cards.push(
        <Card
          key={project.repo}
          title={project.title}
          tags={project.tags}
          repo={repo}
          desc={project.desc}
          website={website}
          imgPath={imgPath}
          tagColor={project.color}
          date={project.date}
        />
      );
    }
  }

  // render the coming up
  useEffect(() => {
    $(".CardContainer").removeClass("before");
  }, []);

  // render
  return (
    <>
      <div className="CardContainer before">{cards}</div>
    </>
  );
}

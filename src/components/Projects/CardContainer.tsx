import {
  projectsNewToOld,
  projectsOldToNew,
  projectsAlphabetical,
} from "./MyProjects";
import Card from "./Card";
import "./CardContainer.css";
import { useSharedTags } from "../../hooks/Projects/useSharedTags";
import { useSharedSortOrder } from "../../hooks/Projects/useSharedSortOrder";

type projectType = {
  title: string;
  desc: string;
  color: string;
  tags: Array<string>;
  repo: string;
  website: string;
  date: string;
};

export default function CardContainer() {
  const { tags } = useSharedTags();
  const { sortOrder } = useSharedSortOrder();
  let projectArray: Array<projectType>;
  switch (sortOrder) {
    case "":
    case "new":
      projectArray = projectsOldToNew;
      break;
    case "old":
      projectArray = projectsNewToOld;
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
    const imgPath: string = `/assets/images/projects/${project.repo}.png`;

    // determine if it matches the filters
    let passedFilter: boolean = true;
    for (let tag of tags) {
      passedFilter &&= project.tags.includes(tag);
    }

    // add to the thing
    if (passedFilter) {
      cards.push(
        <Card
          key={Math.random()}
          repo={project.repo}
          title={project.title}
          tags={project.tags}
          repoSite={repo}
          desc={project.desc}
          website={website}
          imgPath={imgPath}
          tagColor={project.color}
          date={project.date}
          animateWait={cards.length * 100}
        />
      );
    }
  }

  // render
  return (
    <>
      <div className="CardContainer">{cards}</div>
    </>
  );
}

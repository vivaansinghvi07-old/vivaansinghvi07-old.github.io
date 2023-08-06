import Card from "./Card";
import { useSharedTags } from "../../hooks/Projects/useSharedTags";
import projects from "./MyProjects";
import "./CardContainer.css";

export default function CardContainer() {
  const { tags } = useSharedTags();

  // get the projects
  const cards = new Array<JSX.Element>();
  for (let project of projects) {
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

import React from "react";
import Card from "./Card";
import "./CardContainer.css";

type ProjectData = {
  title: string;
  desc: string;
  website: string;
  repo: string;
  tags: Array<string>;
  color: string;
};

type ProjectContainerData = {
  projects: Array<ProjectData>;
};

export default class CardContainer extends React.Component<any, any> {
  constructor(props: object) {
    super(props);
    this.state = { data: undefined };
  }

  componentDidMount() {
    this.getData().then((data) => this.setState({ data }));
  }

  async getData() {
    let output: ProjectContainerData | undefined = undefined;
    await fetch("/myProjects.json")
      .then((response) => response.text())
      .then((data) => {
        output = JSON.parse(data);
      });
    return output;
  }

  render() {
    // handle any errors or happenstances
    if (!this.state.data) {
      return (
        <>
          <div className="CardContainer-state">Loading...</div>
        </>
      );
    }

    // get the projects
    let cards = new Array<JSX.Element>();
    for (let project of this.state.data.projects) {
      let website: string;
      if (project.website === "GH_PAGES") {
        website = `https://vivaansinghvi07.github.io/${project.repo}`;
      } else {
        website = project.website;
      }
      let repo: string = `https://github.com/vivaansinghvi07/${project.repo}`;
      let imgPath: string = `/images/projects/${project.repo}.png`;
      cards.push(
        <Card
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

    // render
    return (
      <>
        <div className="CardContainer">{cards}</div>
      </>
    );
  }
}

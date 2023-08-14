import "./AboutMe.css";
import Section from "./AboutMe/Section";

export default function AboutMe() {

  const innerData = (
    <>
      <Section title="Awards"/>
      <Section title="Affiliations" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivaansinghvi07&layout=compact&langs_count=20&size_weight=0.30&count_weight=0.5&exclude_repo=ap-statistics-website" />
    </>
  );

  return innerData

  // if ( window.innerWidth < 720 ) {
  //   return (
  //     {innerData}
  //   );
  // } else {
  //   return (
  //     <>
  //       <Section title="Awards"/>
  //       <Section title="Affiliations" />
  //       <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivaansinghvi07&layout=compact&langs_count=20&size_weight=0.30&count_weight=0.5&exclude_repo=ap-statistics-website" />
  //     </>
  //   );
  // }

}

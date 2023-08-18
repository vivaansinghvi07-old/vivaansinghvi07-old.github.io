import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <div className="MainPage">
        <div className="MainPage-text-container">
          <div className="MainPage-name">Vivaan Singhvi</div>
          <div className="MainPage-desc">
            Welcome to my website! Visit any of the below pages to get to
            know me!
          </div>
        </div>
        <div className="MainPage-page-container">
            <a className="MainPage-page" href="/aboutme">
                About Me
            </a>
            <a className="MainPage-page" href="/projects">
                My Projects
            </a>
        </div> 
      </div>
    </>
  );
}

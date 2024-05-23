import Intro from "./Intro";
import ProjectSlide from "./ProjectSlide";
Intro

function HomeScreen() {
    return (
        <div className="App">
          <header className="App-header">
            <Intro />
            <ProjectSlide />
          </header>
        </div>
      );
}

export default HomeScreen;
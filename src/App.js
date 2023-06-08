import { Contact, Header, Bio, Skills, Education, Experience, Projects } from "./component/export";
import "./App.scss";

function App() {
  return (
    <div className="App_">
      <div className="Page-Header_">
        <Header />
        <Contact />
      </div>
      <div className="Content_">
        <Bio />
        <hr />
        <Skills />
        <hr />
        <Education />
        <hr />
        <Projects />
        <hr />
        <Experience />
      </div>
    </div>
  );
}

export default App;

import { manga, blog } from "./info.js";
import "./style.scss";

const Projects = () => {
  return (
    <div className="Projects_">
      <h1>Projects :</h1>
      <ul>
        {manga.map((info, key) => {
          return (
            <li className="Projects_item" key={key}>
              <h3>{info.title}</h3>
              <p>Made in {info.date}</p>
              <ul>
                {info.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          );
        })}
        {blog.map((info, key) => {
          return (
            <li className="Projects_item" key={key}>
              <h3>{info.title}</h3>
              <p>Made in {info.date}</p>
              <ul>
                {info.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Projects;

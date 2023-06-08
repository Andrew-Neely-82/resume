import { info } from "./info";
import "./style.scss";

const Skills = () => {
  return (
    <div className="Skills_">
      <h1>Technical Skills :</h1>
      <div className="Skills_skills-list">
        {info.map((item, key) => {
          return (
            <span key={key}>
              {item}
              {key !== info.length - 1 && ", "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

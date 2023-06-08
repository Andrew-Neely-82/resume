import { army } from "./info";
import "./style.scss";

const Experience = () => {
  return (
    <div className="Experience_">
      <h1>Military Experience</h1>
      <ul>
        {army.map((info, key) => {
          return (
            <li className="Experience_item" key={key}>
              <h3>{info.employer}</h3>
              <p>{info.title}</p>
              <ul>
                {info.roles.map((item, index) => (
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
export default Experience;

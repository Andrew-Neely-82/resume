import { army, codeup } from "./info";
import "./style.scss";

const Education = () => {
  return (
    <div className="Education_">
      <h1>Education :</h1>
      <ul>
        {codeup.map((info, key) => {
          return (
            <li className="Education_item" key={key}>
              <h3>{info.name}</h3>
              <p>{info.cert}</p>
              <p>{info.date}</p>
              <p>{info.details}</p>
            </li>
          );
        })}
        {army.map((info, key) => {
          return (
            <li className="Education_item" key={key}>
              <h3>{info.name}</h3>
              <p>{info.place}</p>
              <p>{info.date}</p>
              <p>{info.details}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Education;

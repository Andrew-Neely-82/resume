import { info } from "./info.js";
import "./style.scss";

const Bio = () => {
  return (
    <div className="Bio_">
      <h1>About me :</h1>
      {info.map((info, key) => {
        return <p key={key}>{info.p}</p>;
      })}
    </div>
  );
};
export default Bio;

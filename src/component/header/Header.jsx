import { info } from "./info.js";
import "./style.scss";

const Header = () => {
  return (
    <div className="Header_" id="header">
      {info.map((info, key) => {
        return (
          <div key={key}>
            <h1>{info.name}</h1>
            <h3>{info.title.soft}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default Header;

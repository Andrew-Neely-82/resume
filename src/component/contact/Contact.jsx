import { info } from "./info";
import "./style.scss";

const Contact = () => {
  return (
    <div className="Contact_">
      {info.map((info, key) => {
        return (
          <ul key={key}>
            <li>
              {info.phone}
              <span>{info.number}</span>
            </li>
            <li>
              {info.emailIcon}
              <span>{info.email}</span>
            </li>
            <li>
              {info.linkedInIcon}
              <a href={info.linkedHref} target="_blank" rel="noreferrer">
                {info.linked}
              </a>
            </li>
            <li>
              {info.gitHubIcon}
              <a href={info.gitHref} target="_blank" rel="noreferrer">
                {info.github}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default Contact;

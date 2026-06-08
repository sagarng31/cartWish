import { NavLink } from "react-router-dom";
import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, emoji, url, sidebar }) => {
  return (
    <NavLink to={url} className={`align_center ${sidebar && "sidebar_link"}`}>
      {title} <img src={emoji} className="link_emoji" />{" "}
    </NavLink>
  );
};

export default LinkWithIcon;

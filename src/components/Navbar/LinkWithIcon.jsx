import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, emoji, url, sidebar }) => {
  return (
    <a href={url} className={`align_center ${sidebar && "sidebar_link"}`}>
      {title} <img src={emoji} className="link_emoji" />{" "}
    </a>
  );
};

export default LinkWithIcon;

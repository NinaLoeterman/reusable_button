import React from "react";
import HomeIcon from "../icons/HomeIcon.jsx";
import LoveIcon from "../icons/LoveIcon.jsx";
import BookmarkIcon from "../icons/BookmarkIcon.jsx";
import SendIcon from "../icons/SendIcon.jsx";
import ChatIcon from "../icons/ChatIcon.jsx";
import "./Button.css";

const Button = ({
  title = "submit",
  type = "love",
  theme = "light",
  outlined = false,
  onClick = () => {
    alert("hello world");
  },
  ...props
}) => {
  const mapTypeToIcon = {
    home: (props) => <HomeIcon {...props} />,
    love: (props) => <LoveIcon {...props} />,
    bookmark: (props) => <BookmarkIcon {...props} />,
    send: (props) => <SendIcon {...props} />,
    chat: (props) => <ChatIcon {...props} />,
  };

  const mapThemeToIconColor = {
    light: "var(--accent)",
    dark: "var(--accent)",
    accent: "var(--light)",
  };

  const iconProps = { fill: mapThemeToIconColor[theme] };

  return (
    <div>
      {mapTypeToIcon[type] ? (
        <button
          onClick={onClick}
          className={`button ${theme} outline_${outlined} ${props.className}`}
        >
          {title}
          <div>{mapTypeToIcon[type](iconProps)}</div>
        </button>
      ) : (
        <div>button type does not exist</div>
      )}
    </div>
  );
};

export default Button;

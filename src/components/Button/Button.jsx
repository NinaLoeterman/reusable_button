import React from "react";
import HomeIcon from "../icons/HomeIcon.jsx";
import LoveIcon from "../icons/LoveIcon.jsx";
import BookmarkIcon from "../icons/BookmarkIcon.jsx";
import SendIcon from "../icons/SendIcon.jsx";
import ChatIcon from "../icons/ChatIcon.jsx";
import "./Button.css";

const Button = ({
  title,
  type,
  outlined,
  theme = "light",
  onClick = () => {
    alert(
      "Add an onClick property to Button, and pass a function to customize the onClick"
    );
  },
  className,
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
      <button
        onClick={onClick}
        className={`button ${theme} outline_${outlined} ${className}`}
      >
        {title && <div>{title}</div>}
        {mapTypeToIcon[type] ? (
          <div className="button_icon">{mapTypeToIcon[type](iconProps)}</div>
        ) : !type ? null : (
          "type doesn't exist"
        )}
      </button>
    </div>
  );
};

export default Button;

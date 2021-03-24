import React from "react";
import HomeIcon from "./icons/HomeIcon.jsx";
import LoveIcon from "./icons/LoveIcon.jsx";
import BookmarkIcon from "./icons/BookmarkIcon.jsx";
import SendIcon from "./icons/SendIcon.jsx";
import ChatIcon from "./icons/ChatIcon.jsx";

const Button = ({ title, type, theme, ...props }) => {
  const mapTypeToIcon = {
    home: (props) => <HomeIcon {...props} />,
    love: (props) => <LoveIcon {...props} />,
    bookmark: (props) => <BookmarkIcon {...props} />,
    send: (props) => <SendIcon {...props} />,
    chat: (props) => <ChatIcon {...props} />,
  };

  const mapThemeToIconColor = {
    light: "yellow",
    dark: "navy",
    accent: "purple",
  };

  const iconColor = { fill: mapThemeToIconColor[theme] };

  return (
    <div>
      {mapTypeToIcon[type] ? (
        <button className={`button__${theme} ${props.className}`}>
          {title}
          <div>{mapTypeToIcon[type](iconColor)}</div>
        </button>
      ) : (
        <div>button type does not exist</div>
      )}
    </div>
  );
};

export default Button;

import React from "react";
import { ReactComponent as Logo } from "../logo.svg";

const ChatCard = ({ chatObj }) => {
  return (
    <div
      style={{
        border: "1px solid grey",
      }}
    >
      {Object.entries(chatObj).length ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <span>User 1</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatCard;

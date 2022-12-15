import React from "react";
import ChatsList from "../components/ChatsList";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20vw",
        }}
      >
        <ChatsList />
      </div>

      <div
        style={{
          width: "80vw",
        }}
      >
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;

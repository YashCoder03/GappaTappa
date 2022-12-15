import { useState } from "react";
import ChatCard from "./ChatCard";

const sampleChats = [
  {
    id: 1,
    users: ["1", "2"],
  },
  {
    id: 2,
    users: ["3", "2"],
  },
  {
    id: 3,
    users: ["1", "4"],
  },
];

const ChatsList = () => {
  const [allChats, setAllChats] = useState(sampleChats);

  return (
    <div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
      <div className="chats-list">
        {allChats.length ? (
          <div>
            {allChats.map((chatObj) => (
              <ChatCard key={chatObj.id} chatObj={chatObj} />
            ))}
          </div>
        ) : (
          <p>"No chats found, Create New"</p>
        )}
      </div>
    </div>
  );
};

export default ChatsList;

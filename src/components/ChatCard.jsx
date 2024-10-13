import React from "react";

function ChatCard({ username, text }) {
  return (
    <div className="flex  items-start gap-2 w-[420px] p-4">
      <img
        className="h-6 w-6"
        src="https://banner2.cleanpng.com/20180404/sqe/avhxkafxo.webp"
        alt="user-thumbnail"
      />
      <span className="text-sm  text-wrap">
        <span className="text-base mr-2 font-medium">{username}</span>
        {text}
      </span>
    </div>
  );
}

export default ChatCard;

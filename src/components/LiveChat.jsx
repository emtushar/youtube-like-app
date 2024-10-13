import React, { useEffect, useId } from "react";
import ChatCard from "./ChatCard";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/slices/liveChatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const id = useId();
  useEffect(() => {
    setInterval(() => {
      dispatch(
        addMessage({ name: generateRandomName(), text: generateRandomText(13) })
      );
    }, 1000);
  }, []);
  const messages = useSelector((state) => state.livechat.messages);
  return (
    <div className="py-2 bg-white rounded-lg    border-2 border-gray-400  overflow-y-auto overflow-x-hidden rounded-b-none hidden md:flex md:flex-col-reverse  min-h-64 max-h-64">
      {messages &&
        messages.map((m) => <ChatCard username={m.name} text={m.text} />)}
    </div>
  );
}

export default LiveChat;

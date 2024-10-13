import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../store/slices/appSlice";
import { useDispatch } from "react-redux";
import LiveChat from "./LiveChat";
import Recommandation from "./Recommandation";
import { addMessage } from "../store/slices/liveChatSlice";
import { generateRandomName } from "../utils/helper";
function WatchLivePage() {
  const [searchParams] = useSearchParams();
  const chatMsg = useRef("");
  const dispatch = useDispatch();
  dispatch(closeMenu());
  function sendLiveChat() {
    if (!chatMsg.current.value) return;
    dispatch(
      addMessage({ name: generateRandomName(), text: chatMsg.current.value })
    );
    chatMsg.current.value = "";
  }
  return (
    <div className="md:p-8 p-2 bg-white w-full md:flex-row flex-col flex  overflow-y-auto">
      <div className="  flex ">
        <iframe
          className=" md:mr-8 md:ml-16 rounded-lg w-full h-[280px] md:w-[950px] md:h-[550px] "
          width="950"
          height="550"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col  overflow-y-auto overflow-x-hidden  ">
        <LiveChat />
        <form
          className="md:flex hidden p-2 px-6 border-2  border-t-0 border-gray-400 rounded-lg rounded-t-none"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="rounded-2xl w-[320px] p-2 px-6 bg-gray-100"
            type="text"
            placeholder="Chat..."
            ref={chatMsg}
          />
          <button
            onClick={sendLiveChat}
            className="bg-green-300 p-2 ml-3 rounded-lg"
          >
            Send
          </button>
        </form>
        <Recommandation isLivePage={true} />
      </div>
      {/* <div>
        <h2>Comments</h2>
      </div> */}
    </div>
  );
}

export default WatchLivePage;

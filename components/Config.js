import { createChatBotMessage, MyAvatar } from "react-chatbot-kit";
import { questions } from "../questions.js";
import BotAvatar from "../images/dr.png";

const setIndex = Math.floor(Math.random() * questions.length);
const set = questions[setIndex];
let initials = [];
for (let str of set) {
  if (str !== "PATIENT RESPONDS") {
    initials.push(str);
  } else {
    break;
  }
}

const Avatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img alt="BotAvatar" src={BotAvatar} height="40vw" />
      </div>
    </div>
  );
};

const config = {
  initialMessages: initials.map((q) => createChatBotMessage(q)),
  setIndex: setIndex,
  botName: "your physician",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#003660",
    },
    chatButton: {
      backgroundColor: "#003660",
    },
  },
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // // Replaces the default user icon
    // userAvatar: (props) => <MyCustomAvatar {...props} />,
    // // Replaces the default user chat message
    // userChatMessage: (props) => <MyCustomUserChatMessage {...props} />,
  },
};

export default config;

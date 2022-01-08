import { createChatBotMessage } from "react-chatbot-kit";
import { questions } from "../questions.js";

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

const config = {
  initialMessages: initials.map((q) => createChatBotMessage(q)),
  setIndex: setIndex,
};

export default config;

import { createChatBotMessage } from "react-chatbot-kit";
import { questions } from "../questions.js";

const set = questions[Math.floor(Math.random() * questions.length)];
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
};

export default config;

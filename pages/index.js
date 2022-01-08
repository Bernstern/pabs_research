import Head from "next/head";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../chatbot/config.js";
import MessageParser from "../chatbot/Messageparser.js";
import ActionProvider from "../chatbot/ActionProvider.js";

export default function Home() {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

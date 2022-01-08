import Head from "next/head";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config.js";
import MessageParser from "../chatbot/MessageParser.js";
import ActionProvider from "../chatbot/ActionProvider.js";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    sessionStorage.setItem("responded", "false");
  });
  return (
    <>
      <Head>
        <title>Chat Window</title>
      </Head>
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </>
  );
}

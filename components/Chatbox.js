import Chatbot from "react-chatbot-kit";
import config from "./Config.js";
import MessageParser from "./MessageParser.js";
import ActionProvider from "./ActionProvider.js";
import Image from "next/image";
import banner from "../images/ucsb_wordmark.png";
import styles from "./Chatbox.module.css";

export default function Chatbox() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={banner} alt="UCSB Logo" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.chatbot}>
        <Chatbot
          className={styles.chatbox}
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
}

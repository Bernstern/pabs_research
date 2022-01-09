import Head from "next/head";
import Chatbox from "../components/Chatbox";
import "react-chatbot-kit/build/main.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    sessionStorage.setItem("responded", "false");
  });
  return (
    <>
      <Head>
        <title>Chat Window</title>
        <link
          href="https://webfonts.brand.ucsb.edu/webfont.min.css"
          rel="stylesheet"
        />
      </Head>
      <Chatbox />
    </>
  );
}

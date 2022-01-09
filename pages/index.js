import Head from "next/head";
import Chatbox from "../components/Chatbox";
import "react-chatbot-kit/build/main.css";
import { useEffect } from "react";
import ogImage from "../images/dr_w_bg.png";

export default function Home() {
  useEffect(() => {
    sessionStorage.setItem("responded", "false");
  });
  return (
    <>
      <Head>
        <title>Chat Window</title>

        {/* Get the fonts UCSB uses */}
        <link
          href="https://webfonts.brand.ucsb.edu/webfont.min.css"
          rel="stylesheet"
        />

        {/* Open Graph Metadata */}
        <meta property="og:url" content="pbs-research.com" key="ogurl" />
        <meta property="og:image" content={ogImage} key="ogimage" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:title" content="Physician Chatbox" key="ogtitle" />
        <meta
          property="og:description"
          content="Start chatting with your physician now!"
          key="ogdesc"
        />
      </Head>
      <Chatbox />
    </>
  );
}

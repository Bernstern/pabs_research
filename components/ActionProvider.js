import { questions } from "../questions.js";
import config from "./Config.js";
import toast from "react-simple-toasts";

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  async postToDatabase(message, questionIndex) {
    const response = await fetch("/api/store", {
      method: "POST",
      body: JSON.stringify({ response: message, question_id: questionIndex }),
    });

    // If the response is not a 200 pop an error up
    if (response.status !== 200) {
      toast(
        "Error saving your response, please try again, if that fails contact the study team immediately."
      );
    }
  }

  clientDone(message) {
    const terminating_messages = ["thats all", "done", "im done"];

    // Strip puncutation from the message body
    const strippedMessage = message
      .replace(/[.,\/#!$%\^&\*;':{}=\-_`~()]/g, "")
      .toLowerCase();

    // Check if a message has any of the terminating messages
    for (let msg of terminating_messages) {
      if (strippedMessage.includes(msg)) {
        return true;
      }
    }
    return false;
  }

  async handleMessage(message) {
    if (sessionStorage.getItem("responded") !== "true") {
      if (!this.clientDone(message)) {
        // Add this response to session storage list
        const responses = JSON.parse(sessionStorage.getItem("responses"));
        responses.push(message);
        console.log(responses);
        sessionStorage.setItem("responses", JSON.stringify(responses));
        return;
      }

      // Post to the database
      console.log("Client is done! Saving responses to database...");
      const responses = sessionStorage.getItem("responses");
      console.log(responses);
      await this.postToDatabase(responses, config.setIndex);

      // Set the session storage flag and send rest of messages
      const questionSet = questions[config.setIndex];
      const restOfQuestions = questionSet.slice(
        questionSet.indexOf("PATIENT RESPONDS") + 1
      );
      const arr = restOfQuestions.map((q, i) =>
        this.createChatbotMessage(q, { delay: 2500 * i })
      );
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, ...arr],
      }));
      sessionStorage.setItem("responded", "true");
    }
  }
}

export default ActionProvider;

import { questions } from "../questions.js";
import config from "./config.js";

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
  }

  async handleMessage(message) {
    // const botMessage = this.createChatbotMessage("Hello. Nice to meet you.");
    await this.postToDatabase(message, config.setIndex);
    const questionSet = questions[config.setIndex];
    const restOfQuestions = questionSet.slice(
      questionSet.indexOf("PATIENT RESPONDS") + 1
    );
    const arr = restOfQuestions.map((q) => this.createChatbotMessage(q));
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, ...arr],
    }));
  }
}

export default ActionProvider;

import { questions } from "../questions.js";
import config from "./config.js";

class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleMessage() {
    // const botMessage = this.createChatbotMessage("Hello. Nice to meet you.");
    const questionSet = questions[config.setIndex];
    const restOfQuestions = questionSet.slice(
      questionSet.indexOf("PATIENT RESPONDS") + 1
    );
    const arr = restOfQuestions.map((q) => this.createChatbotMessage(q));
    console.log(arr);
    console.log(restOfQuestions);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, ...arr],
    }));
  }
}

export default ActionProvider;

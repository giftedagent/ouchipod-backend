import "reflect-metadata";
import { createConnection } from "typeorm";
import { Message } from "./src/entity/Message";

(async () => {
  try {
    const connection = await createConnection();
    const messageRepository = connection.getRepository(Message);

    const newMessage = new Message();
    newMessage.content = "Hello World";

    await messageRepository.save(newMessage);

    const messages = await messageRepository.find();
    console.log("All messages:", messages);

  } catch (error) {
    console.error("Error:", error);
  }
})();
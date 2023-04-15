"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Message_1 = require("./src/entity/Message");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, typeorm_1.createConnection)();
        const messageRepository = connection.getRepository(Message_1.Message);
        const newMessage = new Message_1.Message();
        newMessage.content = "Hello World";
        yield messageRepository.save(newMessage);
        const messages = yield messageRepository.find();
        console.log("All messages:", messages);
    }
    catch (error) {
        console.error("Error:", error);
    }
}))();
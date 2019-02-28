"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_Defined_1 = __importDefault(require("./5.1.3.User-Defined"));
let map = {};
map['donkey@gmail.com'] = new User_Defined_1.default("donkey");
map['horse@gmail.com'] = new User_Defined_1.default("horse");
map['pig@gmail.com'] = new User_Defined_1.default("pig");
console.log(map);

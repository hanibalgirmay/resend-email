"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3300;
// app.use("api/");
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/email", (req, res) => {
    res.send("sending email!");
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// configuration find .env file
dotenv_1.default.config();
// create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// create routes
app.get('/', (req, res) => {
    res.send('Welcome to APP Express + TS + Swagger + Mongoose');
});
app.get('/hello', (req, res) => {
    res.send('Welcome to API Express GET Route');
});
// Execute app and listen on port 8000
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
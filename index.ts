import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// configuration find .env file
dotenv.config();

// create express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// create routes
app.get('/', (req: Request, res:Response) => {
    res.send('Welcome to APP Express + TS + Swagger + Mongoose');
});

app.get('/hello', (req: Request, res:Response) => {
    res.send('Welcome to API Express GET Route');
});

// Execute app and listen on port 8000
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

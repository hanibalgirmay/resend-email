import express, { Request, Response, Application } from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const port = process.env.PORT || 3300;
const API_KEY = process.env.API_KEY || "re_NznaYSd5_EMd7zSFaThmNqXML2ZRfS4d4";

const resend = new Resend(API_KEY);
const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("api/");

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

app.post("/email", (req: Request, res: Response) => {
    const { to, subject, content } = req.body;

    if (to || subject || content) {
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: to,
            subject: subject ? subject : 'Welcome to Resend',
            html: `<p>Welcome to resend:  <strong>${content}</strong>!</p>`
        }).then((_res) => {
            console.log("__log", _res.data, _res.error);
            res.send(_res.data)
        })
        .catch((err) => {
            console.log(err);
            res.send(err)
        });
    } else {
        console.log("__log",to, subject, content);
        res.send("Email not sent!");
    }
})



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
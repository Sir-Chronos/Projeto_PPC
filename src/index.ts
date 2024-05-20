import express, { Express, Request, Response } from "express";

const port = 8000;
const app = express();

app.get("/", (req: Request, res:Response) => {
    res.send("Hello from express + typescript!!");
})

app.get("/hi", (req: Request, res:Response) => {
    res.send("Typescript!!");
})

app.listen(port, () =>{
    console.log(`Now listening on port ${port}`);
})
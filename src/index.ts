import express, { Express, Request, Response, Router } from "express";

const port = 8000;
const app = express();

app.get("/", (req: Request, res:Response) => {
    res.send("HOME PAGE");
})


app.listen(port, () =>{
    console.log(`Now listening on port ${port}`);
})

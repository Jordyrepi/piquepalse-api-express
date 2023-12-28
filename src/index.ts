import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import userRouters from "./routers/userRouters";
import tweetRouters from "./routers/tweetRouter";

// port untuk localhost:.....
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
//middleware
app.use(express.json());

app.use("/users", userRouters);
app.use("/tweets", tweetRouters);

//middleware error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});
app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});

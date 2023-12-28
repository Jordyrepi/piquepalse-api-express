import express from "express";
import { createdTweetController } from "../controllers/tweets/createdTweetController";

const router = express.Router();

router.post("/createdtweet", createdTweetController);

export default router;

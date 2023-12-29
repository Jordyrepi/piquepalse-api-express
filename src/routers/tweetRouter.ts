import express from "express";
import { createdTweetController } from "../controllers/tweets/createdTweetController";
import { getTweetController } from "../controllers/tweets/getTweetController";

const router = express.Router();

router.post("/createdtweet", createdTweetController);
router.get("/gettweets", getTweetController);

export default router;

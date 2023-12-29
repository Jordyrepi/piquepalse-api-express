import express from "express";
import { createdTweetController } from "../controllers/tweets/createdTweetController";
import { getTweetController } from "../controllers/tweets/getTweetController";
import { deleteTweetController } from "../controllers/tweets/deleteTweetController";

const router = express.Router();

router.post("/createdtweet", createdTweetController);
router.get("/gettweets", getTweetController);
router.delete("/:id", deleteTweetController);

export default router;

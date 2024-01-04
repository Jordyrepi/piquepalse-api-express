import express from "express";
import { createdTweetController } from "../controllers/tweets/createdTweetController";
import { deleteTweetController } from "../controllers/tweets/deleteTweetController";
import { editTweetController } from "../controllers/tweets/editTweetController";
import { getTweetByUserController } from "../controllers/tweets/getTweetByIdController";
import { getTweetController } from "../controllers/tweets/getTweetController";

const router = express.Router();

router.post("/createdtweet", createdTweetController);
router.get("/gettweets", getTweetController);


router.get("/:id", getTweetByUserController);
router.delete("/:id", deleteTweetController);
router.patch("/:id", editTweetController);

export default router;

import express from "express";
import { keepLoginController } from "../controllers/users/keepLoginController";
import { loginUserController } from "../controllers/users/loginUserController";
import { registerUserController } from "../controllers/users/registerUserController";
import { verifyToken } from "../middleware/jwtVerifyToken";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/keeplogin", verifyToken, keepLoginController);

export default router;

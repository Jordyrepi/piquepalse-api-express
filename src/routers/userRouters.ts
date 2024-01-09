import express from "express";
import { keepLoginController } from "../controllers/users/keepLoginController";
import { loginUserController } from "../controllers/users/loginUserController";
import { registerUserController } from "../controllers/users/registerUserController";
import { verifyToken } from "../middleware/jwtVerifyToken";
import { findAllUserController } from "../controllers/users/findAllUserController";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/keeplogin", verifyToken, keepLoginController);
router.get("/findalluser", findAllUserController);

export default router;

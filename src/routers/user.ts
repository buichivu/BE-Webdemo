import { Router } from "express";
import { loginWithGoogle, register, login } from "../controllers/user";

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.post("/google-login", loginWithGoogle);
export default router;

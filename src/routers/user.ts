import { Router } from "express";
import {
  loginWithGoogle,
  register,
  login,
  refreshToken,
} from "../controllers/user";
import { verifyToken } from "../middlewares/verifyToken";

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.post("/google-login", loginWithGoogle);
router.get("/refresh-token", refreshToken);
export default router;

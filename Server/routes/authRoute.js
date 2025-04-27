import express from 'express';
import { forgotPasswordController, loginController, logoutController, resetPasswordController, signUpController, verifyEmailController } from '../controllers/authController.js';

const router = express.Router();

router.post("/signup", signUpController)
router.post("/login", loginController)
router.post("/logout", logoutController)

router.post("/verify-email", verifyEmailController)
router.post("/forgot-password", forgotPasswordController)

router.post("/reset-password/:token", resetPasswordController)


export default router;
import { Router } from "express";
import { Login, Register, gatAllusers } from "../controller/user.controle";

const router = Router();

router.post("/",  Register);
router.get("/", gatAllusers);
router.post("/user",  Login);

export default router;

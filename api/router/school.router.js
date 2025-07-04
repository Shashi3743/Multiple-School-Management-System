import { Router } from "express";
import authMiddleware from '../auth/auth.js';
import { getAllSchools, updateSchoolWithId, signOut, isSchoolLoggedIn, registerSchool, loginSchool, getSchoolOwnData } from "../controller/school.controller.js";
import {upload} from "../Middlewares/multer.middleware.js"
import { loginAsSchoolByAdmin } from "../controller/school.controller.js";
import adminAuth from "../Middlewares/adminAuth.middleware.js";

const router = Router();

router.post('/register',upload.single('image'), registerSchool);
router.get("/all", getAllSchools);
router.post("/login", loginSchool);
router.patch("/update",authMiddleware(['SCHOOL']),upload.single('image'), updateSchoolWithId);
router.get("/fetch-single",authMiddleware(['SCHOOL']),getSchoolOwnData);
router.get("/sign-out", signOut);
router.get("/is-login",  isSchoolLoggedIn)
router.get("/admin-login-as/:schoolId",adminAuth(['ADMIN']), loginAsSchoolByAdmin);


export default router;
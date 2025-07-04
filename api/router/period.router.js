import { Router } from 'express';
const router = Router();
import authMiddleware from '../auth/auth.js';
import { createPeriod, getTeacherPeriods, getPeriods, getClassPeriods, updatePeriod, deletePeriod, getPeriodsWithId } from '../controller/period.controller.js';

router.post('/create',authMiddleware(['SCHOOL']), createPeriod);
router.get('/all',authMiddleware(['SCHOOL']), getPeriods)
router.get('/teacher/:teacherId',authMiddleware(['SCHOOL','TEACHER']), getTeacherPeriods);
router.get('/class/:classId',authMiddleware(['SCHOOL','STUDENT','TEACHER']), getClassPeriods);
router.get('/:id',authMiddleware(['SCHOOL']), getPeriodsWithId)
router.put('/update/:id',authMiddleware(['SCHOOL']),  updatePeriod);
router.delete('/delete/:id',authMiddleware(['SCHOOL']), deletePeriod);

export default router;

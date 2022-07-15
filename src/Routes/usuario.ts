import { Router } from "express";
import { getNave, getNaves, postNave } from "../controllers/usuarios";

const router = Router();

router.get('/', getNaves);
router.get('/:tipo', getNave); 
router.post('/', postNave);

export default router;
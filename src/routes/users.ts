import { Router } from "express";
import { createUser } from "../controllers/userControllers";

const router: Router = Router();

//create User POST request 
router.post('/', createUser);

export {
    router
} 


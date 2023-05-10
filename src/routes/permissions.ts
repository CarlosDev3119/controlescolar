import { Router } from "express";
import {  toUpperCaseBody, validateFields } from "../middlewares/validateFields";
import { createPermission } from "../controllers/permissionsController";

import { PermissionSchema } from '../models/schema/schemaPermissions'; 
import { ifPermissioneExists } from "../middlewares/validates";


const router: Router = Router();


//create Role 
router.post('/',[ validateFields(PermissionSchema), toUpperCaseBody, ifPermissioneExists], createPermission);

//get Roles  
// router.get('/', getAllRoles);

// //get Role  by id
// router.get('/:id',[ ifRoleExists ], getRoleById);

// //update Role 
// router.put('/:id',[toUpperCaseBody, ifRoleExists, validateFields(RoleSchema)], updateRole);

// // delete role
// router.delete('/:id', [ifRoleExists], deleteRole);

export {
    router
} 


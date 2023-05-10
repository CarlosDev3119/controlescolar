import { Request, Response } from "express";
import { handleServerError } from "../utils/response";


export const createPermission = async (req: Request, res: Response) => {

    const {name_permission} = req.body;
    try{
        res.status(200).json({msg:"post permission"})

    }catch(error){
        return handleServerError(res, error)
    }
}
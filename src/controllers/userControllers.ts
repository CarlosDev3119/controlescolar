import { Request, Response } from "express"

// import { encryptPass, generateJWT } from "../helpers";

// user creation
export const createUser = async (req: Request, res: Response) => {

    const {name_user:name_user, pass, email} = req.body;

    try{


       
        res.status(200).json({
            data: 'ms post user',
            // token
        })

    }catch(error){
        res.status(400).json({
            error
        })
    }

}
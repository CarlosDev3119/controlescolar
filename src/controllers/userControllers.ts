import { Request, Response } from "express"

// import  User  from "../models/users"
// import { encryptPass, generateJWT } from "../helpers";
import { UserAttributes } from "../interfaces";

// user creation
export const createUser = async (req: Request, res: Response) => {

    const {name_user:name_user, pass, email}: UserAttributes = req.body;

    try{

        // const newPass = encryptPass(pass);
        // const newUser =  User.build({name_user, pass: newPass, email})
        
        // await newUser.save();

        // const {pass: lastPast, ...restUser} = newUser.dataValues;
        
        // if(!restUser.id_user) throw new Error('An error occurred during user creation in db');

        // const token = await generateJWT(restUser.id_user, restUser.name_user);
       
        res.status(200).json({
            data: 'ms',
            // token
        })

    }catch(error){
        res.status(400).json({
            error
        })
    }

}
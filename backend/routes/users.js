import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";

const userRoute = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


// update user
userRoute.put("/:id",verifyUser, updateUser);

//delete user
userRoute.delete("/:id",verifyUser, deleteUser);

//get single user
userRoute.get("/:id", verifyUser ,getSingleUser);

//get all users
userRoute.get("/",verifyAdmin, getAllUser);

export default userRoute;
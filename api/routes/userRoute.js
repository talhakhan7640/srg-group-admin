import express from "express";
import { 
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser } from "../controller/userController.js"
const router = express.Router();


// API endpoint for getting all users from database.
router.get("/users", getUsers);

// API endpoint for creating new user entry in database.
router.post("/users/create-user", createUser);

// API endpoint updating a user in database.
router.put("/users/update-user/:id", updateUser);

// API endpoint deleting a user from database.
router.delete("/users/delete-user/:id", deleteUser);


export default router;

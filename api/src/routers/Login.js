import express from "express";
import { findUser } from "../Models/UserRegisteration.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  try {
    const password = req.body.password;
    const username = req.body.username;

    findUser(username, password, (error, results) => {
      if (error) {
        console.log(error);
        return res.json({
          status: "error",
          message: "Invalid Credential",
        });
      }
    });

    res.json({
      status: "Success",
      message: "Login Successful",
    });
  } catch (error) {
    next(error);
  }
});

export default router;

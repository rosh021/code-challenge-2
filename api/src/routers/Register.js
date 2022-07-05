import express from "express";
import { createUser } from "../Models/UserRegisteration.js";

import { hashPassword } from "../Helpers/bcrypt.js";

const router = express.Router();

router.post("/", (req, res, next) => {
  try {
    const body = req.body;
    body.password = hashPassword(body.password);

    createUser(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.json({
          status: "error",
          message: "Database Connection Error",
        });
      }

      return res.json({
        status: "success",
        message: "Register Successful",

        data: results,
      });
    });
  } catch (error) {
    next(error);
  }
});

export default router;

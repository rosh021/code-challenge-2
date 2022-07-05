import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import Login from "../api/src/routers/Login.js";
import Register from "../api/src/routers/register.js";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(helmet());
app.use(express());
app.use(express.json());


//router

app.use("/api/v1/login", Login);
app.use("/api/v1/register", Register);

app.get("/", (req, res) => {
  res.json({ message: "Hello From the server" });
});

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running http://localhost:${PORT}`);
});

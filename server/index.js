import express from "express";
import path from "path";
import generatePassword from "password-generator";
import userRouter from "./routes/users";

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Put all API endpoints under '/api'
app.use("/api/users", userRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, " ../client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);

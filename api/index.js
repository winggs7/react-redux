const express = require("express");
const app = express();
const port = 1008;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/users");
const postRouter = require("./routers/posts");

dotenv.config();


mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => {
        console.log("Connected to mongodb!")
    }
)

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

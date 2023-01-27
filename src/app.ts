import express from "express";
import cors from "cors";

import { userRouter } from "./routers/user-router.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));

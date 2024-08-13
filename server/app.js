import express from "express";
import cors from "cors";

import {
    corsConfig,
    expressJsonConfig,
    expressStaticConfig,
} from "./config.js";

const app = express();

app.use(cors(corsConfig));
app.use(express.json(expressJsonConfig));
app.use(express.static(expressStaticConfig));

import formRouter from "./routes/form.route.js";

app.use("/api/v1/form", formRouter);

export default app;

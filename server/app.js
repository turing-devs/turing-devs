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

export default app;

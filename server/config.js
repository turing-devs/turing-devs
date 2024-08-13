import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env?.NODE_ENV?.toLocaleLowerCase();
const PORT = process.env?.PORT || 3000;
const CORS_ORIGIN = process.env?.CORS_ORIGIN;
const MONGODB_URI = process.env?.MONGODB_URI;
const DB_NAME = process.env?.DB_NAME;

const corsConfig = {
    origin: CORS_ORIGIN,
    credentials: true,
};

const expressJsonConfig = {
    limit: "1mb",
};

const expressStaticConfig = "public";

export {
    NODE_ENV,
    PORT,
    CORS_ORIGIN,
    MONGODB_URI,
    DB_NAME,
    corsConfig,
    expressJsonConfig,
    expressStaticConfig,
};

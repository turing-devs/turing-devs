import dotenv from "dotenv";

dotenv.config();

const NODE_ENV = process.env?.NODE_ENV?.toLocaleLowerCase();
const PORT = process.env?.PORT || 3000;
const CORS_ORIGIN = process.env?.CORS_ORIGIN;

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
    corsConfig,
    expressJsonConfig,
    expressStaticConfig,
};

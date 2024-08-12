const corsConfig = {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
};

const expressJsonConfig = {
    limit: "1mb",
};

const expressStaticConfig = "public";

export { corsConfig, expressJsonConfig, expressStaticConfig };

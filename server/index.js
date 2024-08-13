import chalk from "chalk";

import { NODE_ENV, PORT } from "./config.js";

import connectDB from "./db/connect.js";
import app from "./app.js";

if (NODE_ENV === "development" || NODE_ENV === "dev") {
    console.log(chalk.yellowBright("Development Mode Enabled"));
}

// Connect to MongoDB
await connectDB();

// Server Listener
const server = app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on http://localhost:${PORT}`));
});

// Express App Error Handler
app.on("error", (err) => {
    console.error(chalk.red(err));
});

// process Error Handlers
["uncaughtException", "unhandledRejection"].forEach((event) => {
    process.on(event, (err) => {
        console.error(chalk.redBright(`Uncaught Exception: ${err.message}`));
        process.exit(1);
    });
});

// process Error Handlers
["SIGINT", "SIGTERM", "SIGQUIT"].forEach((signal) => {
    process.on(signal, () => {
        console.log(chalk.bgRedBright(`Received ${signal}`));
        console.log(chalk.redBright("Shutting Down Server Gracefully..."));
        server.close();
        setTimeout(() => {
            process.exit(0);
        }, 1500);
    });
});

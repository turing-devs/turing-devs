import dotenv from "dotenv";
import chalk from "chalk";
import app from "./app.js";

dotenv.config();

const PORT = process.env?.PORT || 3000;
const NODE_ENV = process.env?.NODE_ENV?.toLocaleLowerCase();

if (NODE_ENV === "development" || NODE_ENV === "dev") {
    console.log(chalk.yellowBright("Development Mode Enabled"));
}

// Express App Error Handler
app.on("error", (err) => {
    console.error(chalk.red(err));
});

// Server Listener
const server = app.listen(PORT, () => {
    console.log(chalk.blue(`Server is running on http://localhost:${PORT}`));
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

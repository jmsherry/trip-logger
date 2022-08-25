import * as url from "url";
import "dotenv/config";

import app from "./server.js";

const { PORT = 4000 } = process.env;

const server = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.log(err);
  // attempt a gracefully shutdown
  server.close(() => {
    process.exit(1); // then exit
  });

  // If a graceful shutdown is not achieved after 1 second,
  // shut down the process completely
  setTimeout(() => {
    process.abort(); // exit immediately and generate a core dump file
  }, 1000).unref();
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(reason);

  server.close(() => {
    process.exit(1);
  });

  setTimeout(() => {
    process.abort();
  }, 1000).unref();
});
import express from "express";
import listEndpoints from "express-list-endpoints";
import authorsRouter from "./api/authors/index.js";

const server = express();
const port = 3002;

server.use(express.json());

server.use("/authors", authorsRouter);

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`console is running on port: ${port}`);
});

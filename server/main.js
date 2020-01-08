import express from "express";
import cors from "cors";
import bp from "body-parser";
import DbContext from "./db/dbConfig";

const port = process.env.PORT || 3000;

let server = express();

DbContext.connect();

server.use(express.static(__dirname + "/../client/dist"))

var whitelist = ["http://localhost:8080"];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions));

server.use(bp.urlencoded({ extended: true }));
server.use(bp.json());

import BugsController from "./controllers/BugsController";
import NotesController from "./controllers/NotesController";

server.use("/api/bugs", new BugsController().router);
server.use("/api/notes", new NotesController().router);

import cleanupService from "./utils/CleanupService";
server.get('/cleanup', async (req, res, next) => {
  try {
    let data = await cleanupService.cleanupAsync()
    res.send(data)
  } catch (e) {
    next(e)
  }
})

server.use((error, req, res, next) => {
  res.status(error.status || 400).send({ error: { message: error.message } });
});

server.use((req, res, next) => {
  res.status(404).send("Route not found");
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

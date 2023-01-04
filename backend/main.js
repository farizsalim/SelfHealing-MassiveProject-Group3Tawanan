const express = require("express");
const bodyParser = require("body-parser");
const {createServer} = require("http");
const apiRoute = require("./routes");

const PORT = 8000;
const app = express();
const server = createServer(app);

app.use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}));
app.use(apiRoute);

server.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));

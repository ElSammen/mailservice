require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || process.env.LOCAL_PORT;
const router = require("./router");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);


app.listen(port, () => {
    console.log(`Mailservice listening on port ${port}`);
    }
);

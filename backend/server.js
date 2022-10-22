const express = require("express");
const app = express();

const connectDB = require("./config/db");
const mongoose = require("mongoose");
connectDB();

require("dotenv").config();

const templateRoutes = require("./routes/template");
const triggerRoutes = require("./routes/trigger");
const actionRoutes = require("./routes/action");
const workflowRoutes = require("./routes/workflow");

app.use("/templates", templateRoutes);
app.use("/triggers", triggerRoutes);
app.use("/actions", actionRoutes);
app.use("/workflows", workflowRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});
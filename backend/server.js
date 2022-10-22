const express = require("express");

const connectDB = require("./config/db");
const mongoose = require("mongoose");
connectDB();

require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");

// APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
const templateRoutes = require("./routes/templateRoutes");
const triggerRoutes = require("./routes/triggerRoutes");
const actionRoutes = require("./routes/actionRoutes");
const workflowRoutes = require("./routes/workflowRoutes");
const { urlencoded } = require("express");

app.use("/api/templates", templateRoutes);
app.use("/api/triggers", triggerRoutes);
app.use("/api/actions", actionRoutes);
app.use("/api/workflows", workflowRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
});
const express = require("express");
const app = express();

const connectDB = require("./config/db");
const mongoose = require("mongoose");


connectDB();
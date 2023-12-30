import mongoose, { mongo } from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection; // get access to the connection to db

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError); // whenever meets error
db.once("open", handleOpen); // when connection opened once

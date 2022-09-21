const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
const db = require('./Controllers/DBController');

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req,res) => {
    res.json({ message: "Welcome to express application."});
});
const PORT = process.env.PORT || 8080;
require('../company-rest-api/routes/company.routes')(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    db.checkConnectionDB();
    db.syncDB();
});
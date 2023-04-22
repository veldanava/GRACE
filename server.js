const express = require("express")
const cors = require("cors")
const db = require("./app/models/index");

const app = express();

const corsOptions = {
    origin: "*"
};

// register middleware
app.use(cors(corsOptions));
app.use(express.json());

// connect
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("db connected uwu"))
    .catch(err => {
        console.log(`error ${err.message}`);
        process.exit();
    });

// summon
require("./app/routes/waifu.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));
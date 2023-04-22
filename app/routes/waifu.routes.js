module.exports = app => {
    const waifu = require("../controllers/waifu")
    const r = require("express").Router();

    r.get("/", waifu.findAll);
    r.get("/:id", waifu.show);
    r.post("/", waifu.create);
    r.put("/:id", waifu.update);
    r.delete("/:id", waifu.delete);

    app.use("/waifu", r);
}
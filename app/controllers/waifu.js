const { request } = require("express");
const db = require("../models");
const waifu = db.waifu

// create data
exports.create = (req, res) => {

    req.body.anime = new String(req.body.anime)

    waifu.create(req.body)
        .then(() => res.send({message: "saved"}))
        .catch(() => res.status(500).send({message: err.message}))
}

// find all data
exports.findAll = (req, res) => {
    waifu.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

// show all data
exports.show = (req, res) => {
    const id = req.params.id;

    waifu.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}))
}

// update data
exports.update = (req, res) => {
    const id = req.params.id;

    req.body.anime = new String(req.body.anime)

    waifu.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({message: "error"})
            }
            res.send({message: "update success"})
        })
        .catch(err => res.status(500).send({message: err.message}))
} 

// delete data
exports.delete = (req, res) => {
    const id = req.params.id;

    waifu.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "error"})
            }
            res.send({message: "delete success"})
        })
        .catch(err => res.status(500).send({message: err.message}))
} 
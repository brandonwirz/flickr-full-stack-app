const express = require("express");
const imageRoutes = express.Router();
const Images = require("../models/image");

imageRoutes.get("/", (req, res) => {
    Images.find((err, images) => {
        if (err) return res.status(500).send(err);
        res.send(images);
    });
});

imageRoutes.post("/", (req, res) => {
    const newImage = new Images(req.body);
    newImage.save(err => {
        if (err) return res.status(500).send(err);
        res.send(newImage);
    });
});

// imageRoutes.get("/:id", (req, res) => {
//     Images.findById(req.params.id, (err, image) => {
//         if (err) return res.status(500).send(err);
//         res.send(image);
//     });
// });
//
// imageRoutes.put("/:id", (req, res) => {
//     Images.findById(req.params.id, (err, image) => {
//         if (err) return res.status(500).send(err);
//         if (req.body.location) {
//             image.location = Object.assign(image.location, req.body.location);
//             delete req.body.location;
//         };
//         image = Object.assign(image, req.body);
//         image.save(err => {
//             if (err) return res.status(500).send(err);
//             res.send(image);
//         });
//     });
// });
//
// imageRoutes.delete("/:id", (req, res) => {
//     Images.findByIdAndRemove(req.params.id, (err, image) => {
//         if (err) return res.status(500).send(err);
//         res.send(image);
//     });
// });

module.exports = imageRoutes;

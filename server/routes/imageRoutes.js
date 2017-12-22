const express = require("express");
const imageRoutes = express.Router();
const Image = require("../models/image");

imageRoutes.get("/", (req, res) => {
    Image.find((err, image) => {
        if (err) return res.status(500).send(err);
        res.send(image);
    });
});

imageRoutes.put("/add-image/:id", (req, res) => {
  Image.findById(req.params.id, (err, board) => {
      if (err) return res.status(500).send(err);
      console.log(req.body)
        board.img.push(req.body.image)
        board.save((err, savedBoard) => {
                if (err) return res.status(500).send(err);
                return res.send(savedBoard);
              })

      });

});
//addboards
imageRoutes.post("/", (req, res) => {
    let newBoard = new Image(req.body);
    newBoard.save((err, savedBoard) => {
          if (err) return res.status(500).send(err);
          return res.send(savedBoard);
      })
})

imageRoutes.get("/:id", (req, res) => {
    Image.findById(req.params.id, (err, image) => {
        if (err) return res.status(500).send(err);
        res.send(image);
    });
});



imageRoutes.delete("/:id", (req, res) => {
    Image.findByIdAndRemove(req.params.id, (err, image) => {
        if (err) return res.status(500).send(err);
        res.send(image);
    });
});

module.exports = imageRoutes;

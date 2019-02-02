const express = require("express");
const router = express.Router();

const pizzaRepo = require("../repositories/pizzaModel");

router.post("/", function(req, res, next) {
  pizzaRepo
    .create({
      name: req.body.name
    })
    .then(newpizzaData => {
      res.json(newpizzaData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/", function(req, res, next) {
  pizzaRepo
    .find()
    .then(pizzaDataList => {
      res.json(pizzaDataList);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/:id", function(req, res, next) {
  pizzaRepo.findById(req.params.id).then(pizzaData => {
    if (!pizzaData) {
      return res.sendStatus(404);
    }
    res.json(pizzaData);
  });
});

router.patch("/:id", function(req, res, next) {
  pizzaRepo
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(pizzaData => {
      if (!pizzaData) {
        return res.sendStatus(404);
      }
      res.json(pizzaData);
    });
});

router.delete("/:id", function(req, res, next) {
  pizzaRepo.findByIdAndRemove(req.params.id).then(pizzaData => {
    res.json(pizzaData);
  });
});

module.exports = router;

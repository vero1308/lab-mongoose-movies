const express = require("express");
const router = new express.Router();
const celebrity = require("./../models/celebrity");

router.get("/celebrities", (req, res) => {
  celebrity
    .find()
    .then(dbRes => {
      res.render("celebrities", { celebrities: dbRes });
    })
    .catch(err => console.log(err));
});

module.exports = router;

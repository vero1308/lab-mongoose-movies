const mongoose = require("mongoose");
const celebrity = require("../models/celebrity");

const celebrities = [
  {
    name: "Joe Famous",
    occupation: "smooth talker",
    catchPhrase: "hey pretty girl!"
  },
  {
    name: "Mercredi Adams",
    occupation: "schoolgirl",
    catchPhrase: "hey froggy guy!"
  },
  {
    name: "Kit Lalashian",
    occupation: "playmate",
    catchPhrase: "Amazing !"
  }
];

//   celebrity
//     .create(celebrities)
//     .then(dbRes => {
//       req.flash("success", "celebrity successfully created");
//       res.redirect("/celebrities");
//       console.log("Ok");
//     })
//     .catch(dbErr => {
//       console.error(dbErr);
//     });

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });


  celebrity
  .insertMany(celebrities)
  .then(dbResult => {
    console.log("the celebrities have been inserted");
  })
  .catch(dbErr => console.log(dbErr));

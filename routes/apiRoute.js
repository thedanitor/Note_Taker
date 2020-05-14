const fs = require("fs");

module.exports = function (app) {




app.get("api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", (err, response) => {
        if (err) throw err;
        let allNotes = json.parse(response);
    res.json(allNotes);
    })
  })

// app.post("/api/notes", function (req, res) {
//     res.json(notes);
//   })

//   app.delete("/api/notes/:id", function (req, res) {
//     res.json(notes);
//   })

};
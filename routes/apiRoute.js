const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    console.log("inside get api notes route");
    fs.readFile("./db/db.json", "utf8", (err, response) => {
      if (err) throw err;
      let allNotes = JSON.parse(response);
      console.log(allNotes);
      res.json(allNotes);
    });
  });

  app.post("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", (err, response) => {
      if (err) throw err;
      let allNotes = JSON.parse(response);
      console.log("adding");
      var lastID;
      //GRAB ID OF THE LAST ELEMENT FROM THE JSON FILE
      // Increment `lastId` and assign it to `newNote.id`
      if (allNotes.length > 0) {
        lastID = allNotes[allNotes.length - 1].id;
        lastID = lastID + 1;
      } else {
        lastID = "1";
      }
      //Append the new id to the user created note
      const newNote = { ...req.body, id: lastID };
      allNotes = [...allNotes, newNote];
      console.log("combined list: ", allNotes);
      fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
        if (err) throw res.status(500).json(err);
        res.json({ success: true, msg: "Created new note" });
        console.log("Note created!", newNote);
      });
    });
  });

  app.delete("/api/notes/:id", function (req, res) {
    res.json(notes);
  });
};

//create var to get id
//let noteId = req.params.id;
//read file
//filter note id (array.filter)
//write file
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { fileLoader } = require('ejs');

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ROUTE: Home page
app.get('/', function(req, res) {
  fs.readdir("./files", function(err, files) {
    if (err) files = [];  // If folder missing or error
    res.render("index", { files: files }); 
  });
});

app.get('/tasks/:title', function(req, res) {
  const title = req.params.title;
  fs.readFile(`./files/${title}`, 'utf8', function(err, data) {
    if (err) return res.send("Error reading task");
    res.render('show', { title: title, details: data });
  });
});

// ROUTE: Create new task (⚠️ needed for your form)
app.post('/create', function(req, res) {
  const title = req.body.title;
  const details = req.body.details;

  fs.writeFile(`./files/${title.split(" ").join("")}.txt`, details, function(err) {
    if (err) return res.send("Error creating task");
    res.redirect('/'); 
  });
});

app.get('/edit/:title', function(req, res) { 
  res.render('edit', { filename: req.params.title });
}); 

app.post('/edit/:title', function(req, res) { 
  const previous = req.body.Previous.trim();
  const newName = req.body.New.trim();

  if (!previous || !newName) return res.send("Invalid file name");

  const oldPath = `./files/${previous}`;
  const newPath = `./files/${newName.endsWith('.txt') ? newName : newName + '.txt'}`;

  fs.rename(oldPath, newPath, function(err) {
    if (err) {
      console.error(err);
      return res.send("❌ Error updating task (file may not exist)");
    }
    res.redirect('/');
  });
});


// Start server
app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});





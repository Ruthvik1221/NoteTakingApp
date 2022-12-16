let getNotes = () => notes;
module.export = { getNotes }
const con = require("./db_connect");

// Table Creation 
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS notes (
    userID INT,
    noteID INT NOT NULL AUTO_INCREMENT,
    noteContent VARCHAR(255),
    CONSTRAINT notePK PRIMARY KEY(noteID),
    CONSTRAINT noteFK FOREIGN KEY(userID) REFERENCES users(userID)
  ); `
  await con.query(sql);
}
createTable();

// grabbing all notes in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  return notes;
}

getAllNotes();

//create notes
async function createNote(note){
  const sql=`INSERT INTO notes (userID,noteContent) VALUES ("${note.userID}","${note.noteContent}");`
  await con.query(sql);
  return {message:"successfully added notes"};
}


// Read Note
async function Read(note) { //content:"hello world"
  let cNote = await getNote(note); 
  if(!cNote[0]) throw Error("NoteID not found");
  return cNote[0];
}

// Update Note function
async function editNotes(note) {
  let sql = `UPDATE notes 
    SET noteContent = "${note.noteContent}"
    WHERE userID = "${note.userID}"
  `;

  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
}

// Delete Note function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE userID = "${note.userID}"
  `
  await con.query(sql);
}

// Useful Functions
async function getNote(note) {
  let sql;

  if(note.userID) {
    sql = `
      SELECT * FROM notes
       WHERE userID = "${note.userID}"
    `;
  } else {
    sql = `
    SELECT * FROM notes 
      WHERE noteID = "${note.noteID}"
  `;
  }
  return await con.query(sql);  
}

module.exports = { getAllNotes, getNote,Read, editNotes, deleteNote, createNote};
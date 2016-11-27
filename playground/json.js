// var obj = {
//   name: 'Ergun'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Ergun","age":29}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
const fs = require('fs');
var originalNote  = {
  title: 'Some title',
  body: 'Some body'
};

var oringinalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',oringinalNoteString);

var notesString = fs.readFileSync('notes.json');
var note = JSON.parse(notesString);

console.log(typeof note);
console.log(note.title);

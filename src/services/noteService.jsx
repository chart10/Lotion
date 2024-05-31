export default class NoteService {
  nextId;
  constructor() {
    this.nextId = 1;
  }
  getNotes() {
    let notes = [];
    let currentId = 1;
    while (currentId < localStorage.length) {
      const note = JSON.parse(localStorage.getItem(`note.${currentId}`));
      if (note) notes.push(note);
      currentId = currentId + 1;
    }
    return notes;
  }
  getNote(noteId) {
    return JSON.parse(localStorage.getItem(`note.${noteId}`));
  }
  createNote(note) {
    const id = this.nextId;
    this.nextId = this.nextId + 1;
    note.id = id;
    localStorage.setItem(`note.${note.id}`, JSON.stringify(note));
    return note.id;
  }
  // UpdateNote Function
  updateNote(newNote) {
    localStorage.setItem(`note.${newNote.id}`, JSON.stringify(newNote));
    console.log('Note updated');
    return 'success';
  }

  // DeleteNote Function
}

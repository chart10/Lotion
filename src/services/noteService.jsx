export default class NoteService {
  nextId;
  constructor() {
    this.nextId = 1;
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
}

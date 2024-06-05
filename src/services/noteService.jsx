export default class NoteService {
  nextId;
  constructor() {
    this.nextId = 1;

    localStorage.clear();
    localStorage.setItem('noteIds', '[]');
  }

  getNotes() {
    let notes = [];
    let noteIds = this.getNoteIds();
    for (let id of noteIds) {
      const note = JSON.parse(localStorage.getItem(`note.${id}`));
      if (note) notes.push(note);
    }
    return notes;
  }

  getNote(noteId) {
    return JSON.parse(localStorage.getItem(`note.${noteId}`));
  }

  getNoteIds() {
    return JSON.parse(localStorage.getItem(`noteIds`));
  }

  createNote(note) {
    const id = this.nextId;
    this.nextId = this.nextId + 1;
    note.id = id;
    this.addIdToNoteIds(id);
    localStorage.setItem(`note.${note.id}`, JSON.stringify(note));
    return note.id;
  }

  addIdToNoteIds(id) {
    let noteIds = this.getNoteIds();
    noteIds.push(id);
    localStorage.setItem('noteIds', JSON.stringify(noteIds));
  }

  updateNote(newNote) {
    localStorage.setItem(`note.${newNote.id}`, JSON.stringify(newNote));
    console.log('Note updated');
    return 'success';
  }

  // DeleteNote Function
}

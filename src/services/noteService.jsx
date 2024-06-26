export default class NoteService {
  deleteAllNotes() {
    localStorage.clear();
    localStorage.setItem('noteIds', '[]');
  }

  getNotes() {
    let notes = [];
    let noteIds = this.getNoteIds() || [];
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
    let noteIds = JSON.parse(localStorage.getItem(`noteIds`)) || [];
    return noteIds;
  }

  createNote(note) {
    let noteIdIterator = Number(localStorage.getItem('noteIdIterator'));
    noteIdIterator += 1;
    localStorage.setItem('noteIdIterator', noteIdIterator);
    note.id = noteIdIterator;
    this.addIdToNoteIds(noteIdIterator);
    localStorage.setItem(`note.${note.id}`, JSON.stringify(note));
    return note.id;
  }

  addIdToNoteIds(id) {
    let noteIds = this.getNoteIds();
    noteIds.unshift(id);
    localStorage.setItem('noteIds', JSON.stringify(noteIds));
  }

  updateNote(newNote) {
    localStorage.setItem(`note.${newNote.id}`, JSON.stringify(newNote));
    return 'success';
  }

  deleteNote(noteId) {
    localStorage.removeItem(`note.${noteId}`);
    return 'success';
  }
}

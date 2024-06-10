import './Note.scss';
const Note = ({ services, note, currentNote, setCurrentNote }) => {
  const handleNoteClick = () => {
    services.noteService.updateNote(currentNote);
    setCurrentNote(note);
  };

  return (
    <div
      className={note.id === currentNote.id ? 'note current-note' : 'note'}
      onClick={handleNoteClick}
    >
      {note.id === currentNote.id ? currentNote.title : note.title}
    </div>
  );
};
export default Note;

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
      <div className='note-label'>
        {note.id === currentNote.id ? currentNote.title : note.title}
      </div>
      <button className='delete-btn btn'>-</button>
    </div>
  );
};
export default Note;

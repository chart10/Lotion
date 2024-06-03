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
      <span className='item-title'>
        {note.id === currentNote.id ? currentNote.title : note.title}
      </span>
    </div>
  );
};
export default Note;

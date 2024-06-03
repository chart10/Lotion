import './Note.scss';
const Note = ({ note, currentNote, setCurrentNote }) => {
  return (
    <div
      className={note.id === currentNote.id ? 'note current-note' : 'note'}
      onClick={() => setCurrentNote(note)}
    >
      {note.id === currentNote.id ? currentNote.title : note.title}
    </div>
  );
};
export default Note;

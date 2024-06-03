import './Note.scss';
const Note = ({ note, currentNote, setCurrentNote }) => {
  return (
    <div
      className={note.id === currentNote.id ? 'note current-note' : 'note'}
      onClick={() => setCurrentNote(note)}
    >
      <span className='item-title'>
        {note.id === currentNote.id ? currentNote.title : note.title}
      </span>
    </div>
  );
};
export default Note;

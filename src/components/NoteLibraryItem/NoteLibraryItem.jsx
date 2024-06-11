import { BsX } from 'react-icons/bs';
import './NoteLibraryItem.scss';

const NoteLibraryItem = ({ services, note, currentNote, setCurrentNote }) => {
  const handleNoteClick = () => {
    services.noteService.updateNote(currentNote);
    setCurrentNote(note);
  };

  const handleDeleteNote = (noteId) => {
    services.noteService.deleteNote(noteId);
  };

  return (
    <div className='note-library-item'>
      <div
        className={
          note.id === currentNote.id ? 'note-label current-note' : 'note-label'
        }
        onClick={handleNoteClick}
      >
        <span className='note-label-text'>
          {note.id === currentNote.id ? currentNote.title : note.title}
        </span>
      </div>
      <button
        className='delete-btn btn'
        onClick={() => handleDeleteNote(note.id)}
      >
        <BsX size={'1em'} />
      </button>
    </div>
  );
};
export default NoteLibraryItem;

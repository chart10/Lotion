import { useAppContext } from '../../App';
import { BsX } from 'react-icons/bs';
import './NoteLibraryItem.scss';
import { useState } from 'react';

const NoteLibraryItem = ({ note }) => {
  const { services, currentNote, setCurrentNote } = useAppContext();

  const handleNoteClick = () => {
    services.noteService.updateNote(currentNote);
    setCurrentNote(note);
  };

  const [showApproval, setShowApproval] = useState(false);

  const handleDeleteNote = (noteId) => {
    services.noteService.deleteNote(noteId);
  };
  const handleClickDelete = () => {
    setShowApproval(!showApproval);
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
        className={showApproval ? 'delete-btn btn pending' : 'delete-btn btn'}
        onClick={handleClickDelete}
      >
        <BsX size={'1em'} />
      </button>

      <button
        className={showApproval ? 'approval-box active' : 'approval-box'}
        autoFocus
        onBlur={() => setShowApproval(false)}
      >
        Delete?<span className='yes'> Y </span>/
        <span className='no' onClick={() => setShowApproval(false)}>
          {' '}
          N&nbsp;
        </span>
      </button>
    </div>
  );
};
export default NoteLibraryItem;

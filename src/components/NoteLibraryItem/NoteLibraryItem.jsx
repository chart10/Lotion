import { useAppContext } from '../../App';
import { BsX } from 'react-icons/bs';
import './NoteLibraryItem.scss';
import { useState } from 'react';

const NoteLibraryItem = ({ note }) => {
  const { currentNote, setCurrentNote, deleteSelectedNote } = useAppContext();

  const handleNoteClick = () => {
    // services.noteService.updateNote(currentNote);
    setCurrentNote(note);
  };

  const [showApproval, setShowApproval] = useState(false);
  const [showFullItemTitle, setShowFullItemTitle] = useState(false);

  const handleConfirmDelete = (noteId) => {
    deleteSelectedNote(noteId);
  };
  const handleClickDelete = () => {
    setShowApproval(!showApproval);
  };

  return (
    <div className='note-library-item'>
      <div
        className={
          currentNote && note.id === currentNote.id
            ? 'note-label current-note'
            : 'note-label'
        }
        onClick={handleNoteClick}
        onMouseEnter={() => {
          if (note.title.length > 15) setShowFullItemTitle(true);
        }}
        onMouseLeave={() => setShowFullItemTitle(false)}
      >
        <span className='note-label-text'>{note.title}</span>
      </div>
      <button
        className={showApproval ? 'delete-btn btn pending' : 'delete-btn btn'}
        onClick={handleClickDelete}
      >
        <BsX size={'1em'} />
      </button>
      <div
        className={
          showFullItemTitle ? 'full-item-title shown' : 'full-item-title'
        }
      >
        {note.title}
      </div>
      <div
        className={showApproval ? 'approval-box active' : 'approval-box'}
        autoFocus
        onBlur={() => setShowApproval(false)}
      >
        Delete?
        <span className='yes' onClick={() => handleConfirmDelete(note.id)}>
          {' '}
          Y{' '}
        </span>
        /
        <span className='no' onClick={() => setShowApproval(false)}>
          {' '}
          N
        </span>
      </div>
    </div>
  );
};
export default NoteLibraryItem;

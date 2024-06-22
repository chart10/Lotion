import { useAppContext } from '../../App';
import './NoteLibraryItem.scss';
import { useState } from 'react';
import DeleteButton from './DeleteButton';

const NoteLibraryItem = ({ note }) => {
  const { currentNote, setCurrentNote } = useAppContext();

  const handleNoteClick = () => {
    setCurrentNote(note);
  };

  const [showApproval, setShowApproval] = useState(false);
  const [showFullItemTitle, setShowFullItemTitle] = useState(false);

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
      <div
        className={
          showFullItemTitle ? 'full-item-title shown' : 'full-item-title'
        }
      >
        {note.title}
      </div>

      <DeleteButton
        note={note}
        showApproval={showApproval}
        setShowApproval={setShowApproval}
      />
    </div>
  );
};
export default NoteLibraryItem;

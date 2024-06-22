import { useState } from 'react';
import { useAppContext } from '../../App';
import './NoteEditor.scss';

const NoteTitleEditor = ({ editingNoteTitle, setEditingNoteTitle }) => {
  const { currentNote, saveCurrentNote } = useAppContext();
  const [showFullTitle, setShowFullTitle] = useState(false);

  const handleBlur = (event) => {
    let updatedNote = {};
    let updatedValue = event.target.value;
    updatedValue = updatedValue.trim();
    updatedValue = updatedValue !== '' ? updatedValue : 'Untitled Note';
    if (updatedValue !== currentNote.title) {
      updatedNote = { ...currentNote, title: updatedValue };
      saveCurrentNote(updatedNote);
    }
    setEditingNoteTitle(false);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleBlur(event);
    }
  };

  return (
    <>
      {editingNoteTitle ? (
        <input
          className='note-title-input'
          type='text'
          maxLength={120}
          defaultValue={
            currentNote.title && currentNote.title === 'Untitled Note'
              ? ''
              : currentNote.title
          }
          rows={1}
          autoFocus
          onKeyDown={handleEnterKey}
          onBlur={handleBlur}
        />
      ) : (
        <div className='note-title-wrapper'>
          <>
            <h1
              className={
                currentNote.title === 'Untitled Note'
                  ? 'note-title unedited'
                  : 'note-title'
              }
              onClick={() => setEditingNoteTitle(true)}
              onMouseEnter={() => {
                if (currentNote.title.length > 20) setShowFullTitle(true);
              }}
              onMouseLeave={() => setShowFullTitle(false)}
            >
              {currentNote.title}
            </h1>
            <div className={showFullTitle ? 'full-title shown' : 'full-title'}>
              {currentNote.title}
            </div>
          </>
        </div>
      )}
    </>
  );
};
export default NoteTitleEditor;

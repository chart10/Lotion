import { useState } from 'react';
import { useAppContext } from '../../App';
import './NoteEditor.scss';

const NoteEditor = () => {
  const { currentNote, saveCurrentNote } = useAppContext();

  const [editingNoteTitle, setEditingNoteTitle] = useState(false);
  const [editingNoteBody, setEditingNoteBody] = useState(false);
  const [showFullTitle, setShowFullTitle] = useState(false);

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleBlur(event);
    }
  };

  const handleBlur = (event) => {
    let updatedNote = {};
    let updatedValue = event.target.value;
    updatedValue = updatedValue.trim();
    if (event.target.className === 'note-title-input') {
      updatedValue = updatedValue !== '' ? updatedValue : 'Untitled Note';
      if (updatedValue !== currentNote.title) {
        updatedNote = { ...currentNote, title: updatedValue };
        saveCurrentNote(updatedNote);
      }
    } else {
      updatedValue =
        updatedValue !== '' ? updatedValue : 'Write your note contents here...';
      if (updatedValue !== currentNote.body) {
        updatedNote = { ...currentNote, body: updatedValue };
        saveCurrentNote(updatedNote);
      }
    }
    setEditingNoteTitle(false);
    setEditingNoteBody(false);
  };

  return (
    <div className='note-editor'>
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
          {currentNote && (
            <>
              <h1
                className={
                  currentNote.title !== undefined
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
              <div
                className={showFullTitle ? 'full-title shown' : 'full-title'}
              >
                {currentNote.title}
              </div>
            </>
          )}
        </div>
      )}
      {editingNoteBody ? (
        <textarea
          className='note-body-input'
          maxLength={3500}
          placeholder='Write your note contents here...'
          defaultValue={
            currentNote.body === 'Write your note contents here...'
              ? ''
              : currentNote.body
          }
          autoFocus
          onBlur={handleBlur}
        />
      ) : (
        <p
          className={
            currentNote.body === 'Write your note contents here...'
              ? 'note-body unedited'
              : 'note-body'
          }
          onClick={() => setEditingNoteBody(true)}
        >
          {currentNote.body}
        </p>
      )}
    </div>
  );
};
export default NoteEditor;

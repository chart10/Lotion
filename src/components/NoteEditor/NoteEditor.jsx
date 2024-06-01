import { useState } from 'react';
import './NoteEditor.scss';

const NoteEditor = ({ services, currentNote }) => {
  // Test the updateNote service
  const newNote = {
    id: 5,
    title: 'Updated Note',
    text: 'This is an edited note!',
  };
  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      setEditingTitle(false);
    }
  };

  const [editingTitle, setEditingTitle] = useState(false);
  return (
    <div className='note-editor'>
      {editingTitle ? (
        <input
          onKeyDown={handleEnterKey}
          className='note-title-input'
          type='text'
          defaultValue={currentNote.title}
        />
      ) : (
        <h1 className='note-title' onClick={() => setEditingTitle(true)}>
          {currentNote.title}
        </h1>
      )}

      <p className='note-text'>{currentNote.text}</p>
      <div className='btn-container'>
        <button
          className='btn save-btn'
          onClick={() => services.noteService.updateNote(newNote)}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default NoteEditor;

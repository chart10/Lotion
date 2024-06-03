import { useState } from 'react';
import './NoteEditor.scss';

const NoteEditor = ({ services, currentNote, setCurrentNote }) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingText, setEditingText] = useState(false);

  // Test the updateNote service
  const newNote = {
    id: 5,
    title: 'Updated Note',
    text: 'This is an edited note!',
  };
  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleInputBlur();
    }
  };
  const handleTitleChange = (event) => {
    setCurrentNote({
      ...currentNote,
      title: event.target.value,
    });
  };
  const handleTextChange = (event) => {
    setCurrentNote({
      ...currentNote,
      text: event.target.value,
    });
  };
  const handleInputBlur = () => {
    services.noteService.updateNote(currentNote);
    console.log(currentNote);
    setEditingTitle(false);
    setEditingText(false);
  };

  // TODO: handleBlur - Use noteService to update current note
  // TODO: Consider turning input fields into new component
  // TODO: Save btn is redundant, remove when onblur is fully functional

  return (
    <div className='note-editor'>
      {editingTitle ? (
        <input
          className='note-title-input'
          type='text'
          maxLength={120}
          defaultValue={currentNote.title}
          rows={1}
          autoFocus
          onChange={handleTitleChange}
          onKeyDown={handleEnterKey}
          onBlur={handleInputBlur}
        />
      ) : (
        <h1 className='note-title' onClick={() => setEditingTitle(true)}>
          {currentNote.title}
        </h1>
      )}
      {editingText ? (
        <textarea
          className='note-text-input'
          defaultValue={currentNote.text}
          autoFocus
          onChange={handleTextChange}
          onBlur={handleInputBlur}
        />
      ) : (
        <p className='note-text' onClick={() => setEditingText(true)}>
          {currentNote.text}
        </p>
      )}

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

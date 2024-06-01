import { useEffect, useState } from 'react';
import './NoteEditor.scss';

const NoteEditor = ({ services, currentNote, setCurrentNote }) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingText, setEditingText] = useState(false);
  const [titleValue, setTitleValue] = useState(currentNote.title);
  const [textValue, setTextValue] = useState(currentNote.text);
  console.log('titleValue: ' + titleValue);

  useEffect(() => {
    setTitleValue(currentNote.title);
    setTextValue(currentNote.text);
  }, [currentNote]);
  // Test the updateNote service
  const newNote = {
    id: 5,
    title: 'Updated Note',
    text: 'This is an edited note!',
  };
  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      setEditingTitle(false);
      // setEditingText(false);
      // Should Enter close text input for note text?
      // User will need enterKey functionality to format input
    }
  };
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
    console.log('Title value changed: ' + titleValue);
  };
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
    console.log('Text value changed');
  };
  const handleInputBlur = () => {
    setCurrentNote({ id: currentNote.id, title: titleValue, text: textValue });
    console.log(currentNote);
    // services.noteService.updateNote(currentNote);
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
          defaultValue={titleValue}
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
          // onBlur={handleInputBlur}
        />
      ) : (
        <p className='note-text' onClick={() => setEditingText(true)}>
          {currentNote.text}
        </p>
      )}

      <div className='btn-container'>
        <button
          className='btn save-btn'
          // onClick={() => services.noteService.updateNote(newNote)}
          onClick={handleInputBlur}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default NoteEditor;

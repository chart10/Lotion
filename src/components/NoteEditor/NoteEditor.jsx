import { useState } from 'react';
import './NoteEditor.scss';

const NoteEditor = ({
  services,
  notes,
  setNotes,
  currentNote,
  setCurrentNote,
}) => {
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
      handleTitleBlur(event);
    }
  };

  const handleTitleBlur = (event) => {
    let titleValue = event.target.value;
    titleValue = titleValue.trim();
    titleValue = titleValue !== '' ? titleValue : 'Untitled Note';
    setCurrentNote({
      ...currentNote,
      title: titleValue,
    });
    services.noteService.updateNote({
      ...currentNote,
      title: titleValue,
    });
    const newNotes = [...notes];
    // ToDo rename this to something sensible
    const indexOfExistingNoteInNotes = newNotes.findIndex(
      (note) => note.id === currentNote.id
    );
    newNotes[indexOfExistingNoteInNotes].title = titleValue;
    setNotes(newNotes);
    setEditingTitle(false);
  };

  const handleTextBlur = (event) => {
    let textValue = event.target.value;
    textValue = textValue.trim();
    textValue = textValue !== '' ? textValue : 'Write your text here...';
    setCurrentNote({
      ...currentNote,
      text: textValue,
    });
    services.noteService.updateNote({
      ...currentNote,
      text: textValue,
    });

    console.log(currentNote);
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
          defaultValue={
            currentNote.title === 'Untitled Note' ? '' : currentNote.title
          }
          rows={1}
          autoFocus
          onKeyDown={handleEnterKey}
          onBlur={handleTitleBlur}
        />
      ) : (
        <h1
          className={
            currentNote.title === 'Untitled Note'
              ? 'note-title unedited'
              : 'note-title'
          }
          title={currentNote.title}
          onClick={() => setEditingTitle(true)}
        >
          {currentNote.title}
        </h1>
      )}
      {editingText ? (
        <textarea
          className='note-text-input'
          maxLength={3500}
          placeholder='Write your text here...'
          defaultValue={
            currentNote.text === 'Write your text here...'
              ? ''
              : currentNote.text
          }
          autoFocus
          onBlur={handleTextBlur}
        />
      ) : (
        <p
          className={
            currentNote.text === 'Write your text here...'
              ? 'note-text unedited'
              : 'note-text'
          }
          onClick={() => setEditingText(true)}
        >
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

import { useState } from 'react';
import { useAppContext } from '../../App';
import './NoteEditor.scss';

const NoteEditor = () => {
  const {
    services,
    notesList,
    setNotesList,
    currentNote,
    setCurrentNote,
    handleReseed,
  } = useAppContext();

  const [editingNoteTitle, setEditingNoteTitle] = useState(false);
  const [editingNoteBody, setEditingNoteBody] = useState(false);

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleTitleBlur(event);
    }
  };

  const handleTitleBlur = (event) => {
    let noteTitleValue = event.target.value;
    noteTitleValue = noteTitleValue.trim();
    noteTitleValue = noteTitleValue !== '' ? noteTitleValue : 'Untitled Note';
    setCurrentNote({
      ...currentNote,
      title: noteTitleValue,
    });
    services.noteService.updateNote({
      ...currentNote,
      title: noteTitleValue,
    });
    const newNotes = [...notesList];
    // ToDo rename this to something sensible
    const indexOfExistingNoteInNotes = newNotes.findIndex(
      (note) => note.id === currentNote.id
    );
    newNotes[indexOfExistingNoteInNotes].title = noteTitleValue;
    setNotesList(newNotes);
    setEditingNoteTitle(false);
  };

  const handleBodyBlur = (event) => {
    let bodyValue = event.target.value;
    bodyValue = bodyValue.trim();
    bodyValue =
      bodyValue !== '' ? bodyValue : 'Write your note contents here...';
    setCurrentNote({
      ...currentNote,
      body: bodyValue,
    });

    services.noteService.updateNote({
      ...currentNote,
      body: bodyValue,
    });
    const newNotes = [...notesList];
    // ToDo rename this to something sensible
    const indexOfExistingNoteInNotes = newNotes.findIndex(
      (note) => note.id === currentNote.id
    );
    newNotes[indexOfExistingNoteInNotes].body = bodyValue;
    setNotesList(newNotes);
    setEditingNoteBody(false);
  };

  // TODO: handleBlur - Use noteService to update current note
  // TODO: Consider turning input fields into new component
  // TODO: Save btn is redundant, remove when onblur is fully functional

  return (
    <div className='note-editor'>
      {editingNoteTitle ? (
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
          onClick={() => setEditingNoteTitle(true)}
        >
          {currentNote.title}
        </h1>
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
          onBlur={handleBodyBlur}
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

      <div className='btn-container'>
        <button className='btn reseed-btn' onClick={handleReseed}>
          Reseed Notes
        </button>
      </div>
    </div>
  );
};
export default NoteEditor;

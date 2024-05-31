import './NoteEditor.scss';

const NoteEditor = ({ services, currentNote }) => {
  const newNote = {
    id: 5,
    title: 'Updated Note',
    text: 'This is an edited note!',
  };

  return (
    <div className='note-editor'>
      <h1 className='note-title'>{currentNote.title}</h1>
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

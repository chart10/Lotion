import './NoteEditor.scss';

const NoteEditor = ({ services, currentNote, setCurrentNote }) => {
  return (
    <div className='note-editor'>
      <h1 className='note-title'>{currentNote.title}</h1>
      <p className='note-text'>{currentNote.text}</p>
    </div>
  );
};
export default NoteEditor;

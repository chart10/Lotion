const NewNoteButton = ({ services, setNotes, setCurrentNote }) => {
  const handleClick = () => {
    const newNote = { title: 'Untitled Note', text: 'Write your text here...' };
    const newId = services.noteService.createNote(newNote);
    setCurrentNote({ ...newNote, id: newId });
    setNotes(services.noteService.getNotes());
  };

  return (
    <button className='btn new-note-btn' onClick={handleClick}>
      + New Note
    </button>
  );
};
export default NewNoteButton;

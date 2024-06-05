const NewNoteButton = ({ services, notes, setNotes, setCurrentNote }) => {
  const handleClick = () => {
    const newNote = { title: 'Untitled Note', text: '' };
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

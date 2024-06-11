import { BsPlus } from 'react-icons/bs';

const NewNoteButton = ({ services, setNotes, setCurrentNote }) => {
  const handleClick = () => {
    const newNote = { title: 'Untitled Note', text: 'Write your text here...' };
    const newId = services.noteService.createNote(newNote);
    console.log(newId);
    setCurrentNote({ ...newNote, id: newId });
    // setNotes(services.noteService.getNotes());
    shiftCurrentNoteToTop();
  };

  const shiftCurrentNoteToTop = () => {
    const newNotes = services.noteService.getNotes();
    // newNotes.unshift(newNotes.pop());
    // setNotes(newNotes);
    console.log(newNotes);
    setNotes(newNotes);
  };

  return (
    <button className='btn new-note-btn' onClick={handleClick}>
      <BsPlus size={'1.5em'} /> New Note
    </button>
  );
};
export default NewNoteButton;

import { useAppContext } from '../../App';
import { BsPlus } from 'react-icons/bs';

const NewNoteButton = () => {
  const { createNewNote } = useAppContext();

  const handleClick = () => {
    const newNote = {
      title: 'Untitled Note',
      body: 'Write your note contents here...',
    };
    createNewNote(newNote);
  };

  return (
    <button className='btn new-note-btn' onClick={handleClick}>
      <BsPlus size={'1.5em'} /> New Note
    </button>
  );
};
export default NewNoteButton;

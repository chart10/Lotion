import Note from '../Note/Note';
import './NoteList.css';

const NoteList = () => {
  return (
    <div className='note-list'>
      <Note />
      <Note />
      <Note />
    </div>
  );
};
export default NoteList;

import Note from '../Note/Note';
import './NoteList.scss';

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

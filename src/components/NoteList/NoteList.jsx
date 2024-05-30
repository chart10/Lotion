import Note from '../Note/Note';
import './NoteList.scss';

const NoteList = (props) => {
  // Test prop drilling of services
  console.log(props.services.noteService.getNote(1));

  return (
    <div className='note-list'>
      <Note />
      <Note />
      <Note />
    </div>
  );
};
export default NoteList;

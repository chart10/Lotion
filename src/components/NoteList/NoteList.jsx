import Note from '../Note/Note';
import './NoteList.scss';

const NoteList = (props) => {
  // Test prop drilling of services
  console.log(props.services.noteService.getNotes());

  return (
    <div className='note-list'>
      <Note />
      <Note />
      <Note />
    </div>
  );
};
export default NoteList;

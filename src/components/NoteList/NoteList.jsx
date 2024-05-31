import Note from '../Note/Note';
import './NoteList.scss';

const NoteList = (props) => {
  const notes = props.services.noteService.getNotes();
  console.log(notes);

  return (
    <div className='note-list'>
      {notes.map((note) => {
        return <Note key={note.id} {...note} />;
      })}
    </div>
  );
};
export default NoteList;

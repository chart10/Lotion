import Note from '../Note/Note';
import './NoteList.scss';
const NoteList = ({ notes }) => {
  // const notes = services.noteService.getNotes();
  // console.log(notes);
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

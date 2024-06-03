import Note from '../Note/Note';
import './NoteList.scss';
const NoteList = ({ services, notes, currentNote, setCurrentNote }) => {
  return (
    <div className='note-list'>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            services={services}
            note={note}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
          />
        );
      })}
    </div>
  );
};
export default NoteList;

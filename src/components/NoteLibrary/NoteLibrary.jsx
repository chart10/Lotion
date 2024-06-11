import { NoteLibraryItem } from '../index';
import './NoteLibrary.scss';
const NoteLibrary = ({
  services,
  notes,
  setNotes,
  currentNote,
  setCurrentNote,
}) => {
  return (
    <div className='note-library'>
      {notes.map((note) => {
        return (
          <NoteLibraryItem
            key={note.id}
            services={services}
            note={note}
            setNotes={setNotes}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
          />
        );
      })}
    </div>
  );
};
export default NoteLibrary;

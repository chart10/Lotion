import { NoteLibraryItem } from '../index';
import './NoteLibrary.scss';
const NoteLibrary = ({
  services,
  notesList,
  setNotesList,
  currentNote,
  setCurrentNote,
}) => {
  return (
    <div className='note-library'>
      {notesList.map((note) => {
        return (
          <NoteLibraryItem
            key={note.id}
            services={services}
            note={note}
            setNotesList={setNotesList}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
          />
        );
      })}
    </div>
  );
};
export default NoteLibrary;

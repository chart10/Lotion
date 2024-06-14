import { useAppContext } from '../../App';
import { NoteLibraryItem } from '../index';
import './NoteLibrary.scss';
const NoteLibrary = () => {
  const { notesList } = useAppContext();

  return (
    <div className='note-library'>
      {notesList.map((note) => {
        return <NoteLibraryItem key={note.id} note={note} />;
      })}
    </div>
  );
};
export default NoteLibrary;

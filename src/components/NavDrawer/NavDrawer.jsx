import { NewNoteButton, NoteLibrary, UserBadge, NavFooter } from '../index';
import './NavDrawer.scss';

const NavDrawer = ({
  services,
  notesList,
  setNotesList,
  currentNote,
  setCurrentNote,
}) => {
  return (
    <div className='nav-drawer'>
      <div className='nav-header'>
        <h1>Lotion</h1>
        <UserBadge />
      </div>
      <NewNoteButton
        services={services}
        notesList={notesList}
        setNotesList={setNotesList}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <NoteLibrary
        services={services}
        notesList={notesList}
        setNotesList={setNotesList}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <NavFooter />
    </div>
  );
};
export default NavDrawer;

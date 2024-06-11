import NavFooter from '../NavFooter/NavFooter';
import NewNoteButton from '../NewNoteButton/NewNoteButton';
import NoteLibrary from '../NoteLibrary/NoteLibrary';
import UserBadge from '../UserBadge/UserBadge';
import './NavDrawer.scss';

const NavDrawer = ({
  services,
  notes,
  setNotes,
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
        notes={notes}
        setNotes={setNotes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <NoteLibrary
        services={services}
        notes={notes}
        setNotes={setNotes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <NavFooter />
    </div>
  );
};
export default NavDrawer;

import NavFooter from '../NavFooter/NavFooter';
import NewNoteButton from '../NewNoteButton/NewNoteButton';
import NoteList from '../NoteList/NoteList';
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
      <NoteList
        services={services}
        notes={notes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <NavFooter />
    </div>
  );
};
export default NavDrawer;

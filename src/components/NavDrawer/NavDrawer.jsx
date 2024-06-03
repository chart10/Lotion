import NavFooter from '../NavFooter/NavFooter';
import NoteList from '../NoteList/NoteList';
import UserBadge from '../UserBadge/UserBadge';
import './NavDrawer.scss';

const NavDrawer = ({ services, notes, currentNote, setCurrentNote }) => {
  return (
    <div className='nav-drawer'>
      <div className='nav-header'>
        <h1>Lotion</h1>
        <UserBadge />
      </div>
      <button className='btn new-note-btn'>+ New Note</button>
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

import NavFooter from '../NavFooter/NavFooter';
import NoteList from '../NoteList/NoteList';
import UserBadge from '../UserBadge/UserBadge';
import './NavDrawer.scss';

const NavDrawer = () => {
  return (
    <div className='nav-drawer'>
      <div className='nav-header'>
        <h1>Lotion</h1>
        <UserBadge />
      </div>
      <button className='new-note-btn'>+ New Note</button>
      <NoteList />
      <NavFooter />
    </div>
  );
};
export default NavDrawer;

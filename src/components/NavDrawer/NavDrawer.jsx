import { NewNoteButton, NoteLibrary, UserBadge, NavFooter } from '../index';
import { useAppContext } from '../../App';
import './NavDrawer.scss';

const NavDrawer = () => {
  const { handleReseed } = useAppContext();
  return (
    <div className='nav-drawer'>
      <div className='nav-header'>
        <h1>Lotion</h1>
        <UserBadge />
      </div>
      <NewNoteButton />
      <NoteLibrary />
      <div className='btn-container'>
        <button className='btn reseed-btn' onClick={handleReseed}>
          Reseed Notes
        </button>
      </div>
      <NavFooter />
    </div>
  );
};
export default NavDrawer;

import {
  NewNoteButton,
  NoteLibrary,
  UserBadge,
  NavFooter,
  ColorPicker,
} from '../index';
import services from '../../services/services';
import { useAppContext } from '../../App';
import './NavDrawer.scss';

const NavDrawer = () => {
  const { handleReseed, deleteAllNotes } = useAppContext();

  const devEnvironmet = services.utilService.development();

  return (
    <div className='nav-drawer'>
      <div className='nav-header'>
        <h1>Lotion</h1>
        <UserBadge />
      </div>
      <NewNoteButton />
      <NoteLibrary />
      {devEnvironmet && (
        <>
          <div className='btn-container'>
            <button
              className='btn new-note-btn delete-btn'
              onClick={deleteAllNotes}
            >
              Delete All Notes
            </button>
          </div>
          <div className='btn-container'>
            <button className='btn new-note-btn' onClick={handleReseed}>
              Reseed Notes
            </button>
          </div>
        </>
      )}
      <ColorPicker />
      <NavFooter />
    </div>
  );
};
export default NavDrawer;

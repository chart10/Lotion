import { NewNoteButton, NoteLibrary, UserBadge, NavFooter } from '../index';
import './NavDrawer.scss';

const NavDrawer = () => {
  // const { notesList, setNotesList, currentNote, setCurrentNote } =
  //   useAppContext();
  return (
    <div className='nav-drawer'>
      <div className='nav-header'>
        <h1>Lotion</h1>
        <UserBadge />
      </div>
      <NewNoteButton />
      <NoteLibrary />
      <NavFooter />
    </div>
  );
};
export default NavDrawer;

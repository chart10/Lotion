import './App.scss';
import { NavDrawer, NoteEditor } from './components';
import services from './services/services';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    services.noteService.createNote({
      title: 'My Thesis',
      text: 'Paper Mario is great',
    });
    services.noteService.createNote({
      title: 'Reminder',
      text: 'Feed the cat',
    });
  }, []);
  return (
    <>
      <NavDrawer services={services} />
      <NoteEditor services={services} />
    </>
  );
}

export default App;

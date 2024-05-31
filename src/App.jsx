import './App.scss';
import { NavDrawer, NoteEditor } from './components';
import services from './services/services';
import { useEffect, useState } from 'react';

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
  const notes = services.noteService.getNotes();
  const [currentNote, setCurrentNote] = useState(notes[0]);
  console.log(notes);

  return (
    <>
      <NavDrawer
        notes={notes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <NoteEditor
        services={services}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
    </>
  );
}

export default App;

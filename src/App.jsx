import './App.scss';
import { useEffect, useState } from 'react';
import { NavDrawer, NoteEditor } from './components';
import services from './services/services';
import { stockNotes } from './utils/stockNotes';

function App() {
  useEffect(() => {
    stockNotes.forEach((item) => services.noteService.createNote(item));
    // console.log('Stock notes inserted');
  }, []);
  const notes = services.noteService.getNotes();
  const [currentNote, setCurrentNote] = useState(notes[0]);

  return (
    <>
      <NavDrawer
        services={services}
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

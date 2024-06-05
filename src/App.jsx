import './App.scss';
import { useEffect, useState } from 'react';
import { NavDrawer, NoteEditor } from './components';
import services from './services/services';
import { stockNotes } from './utils/stockNotes';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    stockNotes.forEach((item) => services.noteService.createNote(item));
    const initialNotes = services.noteService.getNotes();
    setNotes(initialNotes);
    setCurrentNote(initialNotes[0]);
  }, []);

  return (
    <>
      <NavDrawer
        services={services}
        notes={notes}
        setNotes={setNotes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <NoteEditor
        services={services}
        notes={notes}
        setNotes={setNotes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
    </>
  );
}

export default App;

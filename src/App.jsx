import { useEffect, useState } from 'react';
import { NavDrawer, NoteEditor } from './components';
import services from './services/services';
import { stockNotes } from './utils/stockNotes';
import './App.scss';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});

  const loadInitalState = () => {
    const initialNotes = services.noteService.getNotes();
    setNotes(initialNotes);
    setCurrentNote(initialNotes[0]);
  };

  useEffect(() => {
    loadInitalState();
  }, []);

  const handleReseed = () => {
    services.noteService.emptyNotes();
    stockNotes.forEach((item) => services.noteService.createNote(item));
    loadInitalState();
  };

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
        handleReseed={handleReseed}
      />
    </>
  );
}

export default App;

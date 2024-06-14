import { useEffect, useState, createContext, useContext } from 'react';
import { NavDrawer, NoteEditor } from './components';
import services from './services/services';
import { stockNotes } from './utils/stockNotes';
import './App.scss';

const appContext = createContext();

function App() {
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState({});

  const loadInitalState = () => {
    const initialNotes = services.noteService.getNotes();
    setNotesList(initialNotes);
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
    <appContext.Provider
      value={{
        services,
        notesList,
        setNotesList,
        currentNote,
        setCurrentNote,
        handleReseed,
      }}
    >
      <NavDrawer />
      <NoteEditor />
    </appContext.Provider>
  );
}

export const useAppContext = () => useContext(appContext);
export default App;

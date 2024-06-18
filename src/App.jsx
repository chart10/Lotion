import { useEffect, useState, createContext, useContext } from 'react';
import { NavDrawer, NoteEditor } from './components';
import services from './services/services';
import { stockNotes } from './utils/stockNotes';
import './App.scss';

const appContext = createContext();

function App() {
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  // ACTIONS
  const loadInitalState = () => {
    const initialNotes = services.noteService.getNotes();
    setNotesList(initialNotes);
    setCurrentNote(initialNotes[0]);
  };

  const handleReseed = () => {
    services.noteService.emptyNotes();
    stockNotes.forEach((item) => services.noteService.createNote(item));
    loadInitalState();
  };

  const saveCurrentNote = (updatedNote) => {
    setCurrentNote(updatedNote);
    services.noteService.updateNote(updatedNote);
    const newNotesList = [...notesList];
    const currentNoteIndex = newNotesList.findIndex(
      (note) => note.id === currentNote.id
    );
    newNotesList[currentNoteIndex] = updatedNote;
    setNotesList(newNotesList);
  };

  const createNewNote = (newNote) => {
    services.noteService.createNote(newNote);
    setCurrentNote(newNote);
    const newNotesList = services.noteService.getNotes();
    setNotesList(newNotesList);
    console.log(newNote);
  };

  const deleteSelectedNote = (selectedNoteId) => {
    services.noteService.deleteNote(selectedNoteId);
    const newNoteList = notesList.filter((note) => note.id !== selectedNoteId);
    setNotesList(newNoteList);
    if (selectedNoteId === currentNote.id) {
      setCurrentNote(null);
    }
  };

  useEffect(() => {
    loadInitalState();
  }, []);

  return (
    <appContext.Provider
      value={{
        services,
        notesList,
        setNotesList,
        currentNote,
        setCurrentNote,
        handleReseed,
        saveCurrentNote,
        createNewNote,
        deleteSelectedNote,
      }}
    >
      <NavDrawer />
      {currentNote && <NoteEditor />}
    </appContext.Provider>
  );
}

export const useAppContext = () => useContext(appContext);
export default App;

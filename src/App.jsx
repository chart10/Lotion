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
    let initialNotes = services.noteService.getNotes();
    if (initialNotes.length < 1) {
      createNewNote();
      initialNotes = services.noteService.getNotes();
    }
    setNotesList(initialNotes);
    setCurrentNote(initialNotes[0]);
  };

  const handleReseed = () => {
    services.noteService.deleteAllNotes();
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

  const createNewNote = () => {
    const newNote = {
      title: 'Untitled Note',
      body: 'Write your note contents here...',
    };
    services.noteService.createNote(newNote);
    setCurrentNote(newNote);
    const newNotesList = services.noteService.getNotes();
    setNotesList(newNotesList);
  };

  const deleteSelectedNote = (selectedNoteId) => {
    services.noteService.deleteNote(selectedNoteId);
    const newNoteList = notesList.filter((note) => note.id !== selectedNoteId);
    setNotesList(newNoteList);
    if (currentNote && selectedNoteId === currentNote.id) {
      setCurrentNote(null);
    }
  };

  const deleteAllNotes = () => {
    notesList.map((note) => {
      services.noteService.deleteNote(note.id);
    });
    loadInitalState();
  };
  // END ACTIONS

  useEffect(() => {
    loadInitalState();
  }, []);

  return (
    <appContext.Provider
      value={{
        notesList,
        setNotesList,
        currentNote,
        setCurrentNote,
        handleReseed,
        saveCurrentNote,
        createNewNote,
        deleteSelectedNote,
        deleteAllNotes,
      }}
    >
      <NavDrawer />
      {currentNote && <NoteEditor />}
    </appContext.Provider>
  );
}

export const useAppContext = () => useContext(appContext);
export default App;

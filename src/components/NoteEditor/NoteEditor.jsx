import { useState } from 'react';
import { useAppContext } from '../../App';
import services from '../../services/services';
import './NoteEditor.scss';
import NoteTitleEditor from './NoteTitleEditor';
import NoteBodyEditor from './NoteBodyEditor';

const NoteEditor = () => {
  const { currentNote, saveCurrentNote } = useAppContext();

  const [editingNoteTitle, setEditingNoteTitle] = useState(false);
  const [editingNoteBody, setEditingNoteBody] = useState(false);

  const handleBlur = (event) => {
    let updatedNote = {};
    let updatedValue = event.target.value;
    updatedValue = updatedValue.trim();
    if (event.target.className === 'note-title-input') {
      updatedValue = updatedValue !== '' ? updatedValue : 'Untitled Note';
      if (updatedValue !== currentNote.title) {
        updatedNote = { ...currentNote, title: updatedValue };
        saveCurrentNote(updatedNote);
      }
    } else {
      updatedValue =
        updatedValue !== '' ? updatedValue : 'Write your note contents here...';
      if (updatedValue !== currentNote.body) {
        updatedNote = { ...currentNote, body: updatedValue };
        saveCurrentNote(updatedNote);
      }
    }
    setEditingNoteTitle(false);
    setEditingNoteBody(false);
  };

  return (
    <div className='note-editor'>
      <NoteTitleEditor
        editingNoteTitle={editingNoteTitle}
        setEditingNoteTitle={setEditingNoteTitle}
        handleBlur={handleBlur}
        services={services}
      />
      <NoteBodyEditor
        editingNoteBody={editingNoteBody}
        setEditingNoteBody={setEditingNoteBody}
        handleBlur={handleBlur}
        services={services}
      />
    </div>
  );
};
export default NoteEditor;

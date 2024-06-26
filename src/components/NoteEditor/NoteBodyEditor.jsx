import { useAppContext } from '../../App';
import './NoteEditor.scss';

const NoteBodyEditor = ({ editingNoteBody, setEditingNoteBody, services }) => {
  const { currentNote, saveCurrentNote } = useAppContext();

  const handleBlur = (event) => {
    let updatedNote = {};
    let updatedValue = event.target.value;
    updatedValue = updatedValue.trim();
    updatedValue =
      updatedValue !== '' ? updatedValue : 'Write your note contents here...';
    if (updatedValue !== currentNote.body) {
      updatedNote = { ...currentNote, body: updatedValue };
      saveCurrentNote(updatedNote);
    }
    setEditingNoteBody(false);
  };
  const maxBodyLength = services.utilService.maxBodyLength;

  return (
    <>
      {editingNoteBody ? (
        <textarea
          className='note-body-input'
          maxLength={maxBodyLength}
          placeholder='Write your note contents here...'
          defaultValue={
            currentNote.body === 'Write your note contents here...'
              ? ''
              : currentNote.body
          }
          autoFocus
          onBlur={handleBlur}
        />
      ) : (
        <p
          className={
            currentNote.body === 'Write your note contents here...'
              ? 'note-body unedited'
              : 'note-body'
          }
          onClick={() => setEditingNoteBody(true)}
        >
          {currentNote.body + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
        </p>
      )}
    </>
  );
};
export default NoteBodyEditor;

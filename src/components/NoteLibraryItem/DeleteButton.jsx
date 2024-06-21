import { useAppContext } from '../../App';
import { BsX } from 'react-icons/bs';

const DeleteButton = ({ note, showApproval, setShowApproval }) => {
  const { deleteSelectedNote } = useAppContext();

  const handleConfirmDelete = (noteId) => {
    deleteSelectedNote(noteId);
  };
  const handleClickDelete = () => {
    setShowApproval(!showApproval);
    // document.getElementById('approval').focus();
    console.log('approval set');
  };

  return (
    <div>
      <button
        className={showApproval ? 'delete-btn btn pending' : 'delete-btn btn'}
        onClick={handleClickDelete}
      >
        <BsX size={'1em'} />
      </button>

      <div
        className={showApproval ? 'approval-box active' : 'approval-box'}
        id='approval'
        tabIndex={showApproval ? '-1' : ''}
        onBlur={() => {
          setShowApproval(false);
          console.log('approval removed');
        }}
      >
        Delete?
        <span className='yes' onClick={() => handleConfirmDelete(note.id)}>
          {' '}
          Y{' '}
        </span>
        /
        <span className='no' onClick={() => setShowApproval(false)}>
          {' '}
          N
        </span>
      </div>
    </div>
  );
};
export default DeleteButton;

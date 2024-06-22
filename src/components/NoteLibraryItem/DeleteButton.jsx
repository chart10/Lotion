import { useRef } from 'react';
import { useAppContext } from '../../App';
import { BsX } from 'react-icons/bs';

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const DeleteButton = ({ note, showApproval, setShowApproval }) => {
  const { deleteSelectedNote } = useAppContext();
  const [approvalBoxRef, setApprovalBoxFocus] = useFocus();

  const handleClickDelete = () => {
    setShowApproval(!showApproval);
    setApprovalBoxFocus();
  };

  const handleConfirmDelete = (noteId) => {
    deleteSelectedNote(noteId);
  };

  return (
    <div className='delete-btn-container'>
      <button
        className={showApproval ? 'delete-btn btn pending' : 'delete-btn btn'}
        onClick={handleClickDelete}
      >
        <BsX size={'1em'} />
      </button>

      <div
        className={showApproval ? 'approval-box active' : 'approval-box'}
        tabIndex='0'
        onBlur={() => {
          setShowApproval(false);
          console.log('approval removed');
        }}
        ref={approvalBoxRef}
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

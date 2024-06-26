// import { useRef } from 'react';
import { useAppContext } from '../../App';
import { BsX } from 'react-icons/bs';

// const useFocus = () => {
//   const htmlElRef = useRef(null);
//   const setFocus = () => {
//     htmlElRef.current && htmlElRef.current.focus();
//   };
//   return [htmlElRef, setFocus];
// };

const DeleteButton = ({ note, showApproval, setShowApproval }) => {
  const { deleteSelectedNote } = useAppContext();
  // const [approvalBoxRef, setApprovalBoxFocus] = useFocus();

  const handleClickDelete = () => {
    setShowApproval(true);
  };

  const handleHideApproval = () => {
    setTimeout(() => {
      setShowApproval(false);
    }, 150);
  };

  const handleConfirmDelete = (noteId) => {
    deleteSelectedNote(noteId);
  };

  return (
    <div className='delete-btn-container'>
      <button
        tabIndex={-1}
        className={showApproval ? 'delete-btn btn pending' : 'delete-btn btn'}
        onClick={handleClickDelete}
        onBlur={() => {
          handleHideApproval();
        }}
      >
        <BsX size={'1em'} />

        <div
          className={showApproval ? 'approval-box active' : 'approval-box'}
          tabIndex={-1}
          // ref={approvalBoxRef}
        >
          Delete?
          <span className='yes' onClick={() => handleConfirmDelete(note.id)}>
            {' '}
            Y{' '}
          </span>
          /
          <span
            className='no'
            onClick={() => {
              setShowApproval(false);
            }}
          >
            {' '}
            N
          </span>
        </div>
      </button>
    </div>
  );
};
export default DeleteButton;

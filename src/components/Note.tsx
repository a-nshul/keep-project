import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, pinNote, moveToTrash, restoreNote, Note } from '../redux/actions';

interface NoteProps {
  note: Note;
  inTrash?: boolean;
}

const NoteComponent: React.FC<NoteProps> = ({ note, inTrash = false }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handlePin = () => {
    dispatch(pinNote(note.id));
  };

  const handleMoveToTrash = () => {
    dispatch(moveToTrash(note.id));
  };

  const handleRestore = () => {
    dispatch(restoreNote(note.id));
  };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      {note.image && <img src={note.image} alt="Note" />}
      {note.title && <h2>{note.title}</h2>}
      <p>{note.content}</p>
      {!inTrash && (
        <>
          <button onClick={handlePin}>{note.pinned ? 'Unpin' : 'Pin'}</button>
          <button onClick={handleMoveToTrash}>Trash</button>
        </>
      )}
      {inTrash && (
        <>
          <button onClick={handleRestore}>Restore</button>
          <button onClick={handleDelete}>Delete Permanently</button>
        </>
      )}
    </div>
  );
};

export default NoteComponent;

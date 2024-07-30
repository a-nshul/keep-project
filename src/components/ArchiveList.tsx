import React from 'react';
import { useSelector } from 'react-redux';
import { Note } from '../redux/actions';

const ArchiveList: React.FC = () => {
  const notes = useSelector((state: any) => state.notes.filter((note: Note) => note.archived));

  return (
    <div className="note-list">
      {notes.map((note: Note) => (
        <div key={note.id} className="note" style={{ backgroundColor: note.color }}>
          {note.title && <h3>{note.title}</h3>}
          <p>{note.content}</p>
          {note.image && <img src={note.image} alt="Note" />}
        </div>
      ))}
    </div>
  );
};

export default ArchiveList;

// src/components/ReminderList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Note } from '../redux/actions';

const ReminderList: React.FC = () => {
  const notes = useSelector((state: any) => state.notes.filter((note: Note) => note.reminder));

  return (
    <div className="note-list">
      {notes.map((note: Note) => (
        <div key={note.id} className="note" style={{ backgroundColor: note.color }}>
          {note.title && <h3>{note.title}</h3>}
          <p>{note.content}</p>
          {note.image && <img src={note.image} alt="Note" />}
          <p>Reminder: {new Date(note.reminder!).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ReminderList;

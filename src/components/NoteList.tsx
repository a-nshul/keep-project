import React from 'react';
import { useSelector } from 'react-redux';
import { Note } from '../redux/actions';
import NoteComponent from './Note';

interface NoteListProps {
  inTrash?: boolean;
}

const NoteList: React.FC<NoteListProps> = ({ inTrash = false }) => {
  const notes = useSelector((state: any) => state.notes);

  const filteredNotes = notes.filter((note: Note) => note.trash === inTrash);

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  return (
    <div className="note-list">
      {sortedNotes.map((note: Note) => (
        <NoteComponent key={note.id} note={note} inTrash={inTrash} />
      ))}
    </div>
  );
};

export default NoteList;

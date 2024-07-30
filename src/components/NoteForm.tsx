import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, Note, Label } from '../redux/actions';

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#ffffff');
  const [image, setImage] = useState<string | undefined>(undefined);
  const [selectedLabels, setSelectedLabels] = useState<number[]>([]);

  const dispatch = useDispatch();
  const labels = useSelector((state: any) => state.labels);

  const handleAddNote = () => {
    if (content) {
      const newNote: Note = {
        id: Date.now(),
        title,
        content,
        pinned: false,
        trash: false,
        archived: false,
        labels: selectedLabels,
        color,
        image,
      };
      dispatch(addNote(newNote));
      setTitle('');
      setContent('');
      setColor('#ffffff');
      setImage(undefined);
      setSelectedLabels([]);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleLabelChange = (labelId: number) => {
    setSelectedLabels((prevSelected) =>
      prevSelected.includes(labelId)
        ? prevSelected.filter((id) => id !== labelId)
        : [...prevSelected, labelId]
    );
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;

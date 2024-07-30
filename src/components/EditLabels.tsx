import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLabel, editLabel, deleteLabel, Label } from '../redux/actions';
import './EditLabels.css';

const EditLabels: React.FC = () => {
  const [labelName, setLabelName] = useState('');
  const [editMode, setEditMode] = useState<number | null>(null);
  const [editLabelName, setEditLabelName] = useState('');

  const labels = useSelector((state: any) => state.labels);
  const dispatch = useDispatch();

  const handleAddLabel = () => {
    if (labelName.trim()) {
      const newLabel: Label = {
        id: Date.now(),
        name: labelName.trim(),
      };
      dispatch(addLabel(newLabel));
      setLabelName('');
    }
  };

  const handleEditLabel = (id: number) => {
    if (editLabelName.trim()) {
      dispatch(editLabel(id, editLabelName.trim()));
      setEditMode(null);
      setEditLabelName('');
    }
  };

  const handleDeleteLabel = (id: number) => {
    dispatch(deleteLabel(id));
  };

  return (
    <div className="edit-labels">
      <h2>Edit Labels</h2>
      <div className="label-input">
        <input
          type="text"
          placeholder="New label"
          value={labelName}
          onChange={(e) => setLabelName(e.target.value)}
        />
        <button onClick={handleAddLabel}>Add Label</button>
      </div>

      <ul>
        {labels.map((label: Label) => (
          <li key={label.id}>
            {editMode === label.id ? (
              <input
                type="text"
                value={editLabelName}
                onChange={(e) => setEditLabelName(e.target.value)}
                onBlur={() => handleEditLabel(label.id)}
              />
            ) : (
              <>
                <span onClick={() => { setEditMode(label.id); setEditLabelName(label.name); }}>
                  {label.name}
                </span>
                <button onClick={() => handleDeleteLabel(label.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditLabels;

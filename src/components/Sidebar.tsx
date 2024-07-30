import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  onSelect: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onSelect('notes')}>
          <span role="img" aria-label="Notes">📝</span> Notes
        </li>
        <li onClick={() => onSelect('Notes with upcoming reminders appear here')}>
          <span role="img" aria-label="Reminders">⏰</span> Reminders
        </li>
        <li onClick={() => onSelect('labels')}>
          <span role="img" aria-label="Edit Labels">🏷️</span> Edit Labels
        </li>
        <li onClick={() => onSelect('Your archived notes appear here ')}>
          <span role="img" aria-label="Archive">📦</span> Archive
        </li>
        <li onClick={() => onSelect('trash')}>
          <span role="img" aria-label="Trash">🗑️</span> Trash
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

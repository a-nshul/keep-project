import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';
import EditLabels from './components/EditLabels';
import ReminderList from './components/ReminderList';
import ArchiveList from './components/ArchiveList';
import './App.css';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('notes');

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar onSelect={handleSectionSelect} />
        <div className="main-content">
          <h1>{selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}</h1>
          {selectedSection === 'notes' && (
            <>
              <NoteForm />
              <NoteList />
            </>
          )}
          {selectedSection === 'reminders' && <ReminderList />}
          {selectedSection === 'labels' && <EditLabels />}
          {selectedSection === 'archive' && <ArchiveList />}
          {selectedSection === 'trash' && (
            <>
              <h2>Trash</h2>
              <NoteList inTrash />
            </>
          )}
        </div>
      </div>
    </Provider>
  );
};

export default App;

// src/redux/reducer.ts
import {
  ADD_NOTE,
  DELETE_NOTE,
  PIN_NOTE,
  MOVE_TO_TRASH,
  RESTORE_NOTE,
  ADD_LABEL,
  DELETE_LABEL,
  EDIT_LABEL,
  ASSIGN_LABEL_TO_NOTE,
  SET_REMINDER,
  ARCHIVE_NOTE,
  UNARCHIVE_NOTE,
  Note,
  Label,
} from './actions';

interface NoteState {
  notes: Note[];
  labels: Label[];
}

const initialState: NoteState = {
  notes: [],
  labels: [],
};

const notesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, trash: false, archived: false, labels: [] }],
      };
    case DELETE_NOTE:
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload) };
    case PIN_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? { ...note, pinned: !note.pinned } : note
        ),
      };
    case MOVE_TO_TRASH:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? { ...note, trash: true } : note
        ),
      };
    case RESTORE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? { ...note, trash: false } : note
        ),
      };
    case ADD_LABEL:
      return { ...state, labels: [...state.labels, action.payload] };
    case DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter(label => label.id !== action.payload),
      };
    case EDIT_LABEL:
      return {
        ...state,
        labels: state.labels.map(label =>
          label.id === action.payload.id ? { ...label, name: action.payload.name } : label
        ),
      };
    case ASSIGN_LABEL_TO_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.noteId
            ? { ...note, labels: [...note.labels, action.payload.labelId] }
            : note
        ),
      };
    case SET_REMINDER:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? { ...note, reminder: action.payload.reminder } : note
        ),
      };
    case ARCHIVE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? { ...note, archived: true } : note
        ),
      };
    case UNARCHIVE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? { ...note, archived: false } : note
        ),
      };
    default:
      return state;
  }
};

export default notesReducer;

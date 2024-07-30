// src/redux/actions.ts
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const PIN_NOTE = 'PIN_NOTE';
export const MOVE_TO_TRASH = 'MOVE_TO_TRASH';
export const RESTORE_NOTE = 'RESTORE_NOTE';
export const ADD_LABEL = 'ADD_LABEL';
export const DELETE_LABEL = 'DELETE_LABEL';
export const EDIT_LABEL = 'EDIT_LABEL';
export const ASSIGN_LABEL_TO_NOTE = 'ASSIGN_LABEL_TO_NOTE';
export const SET_REMINDER = 'SET_REMINDER';
export const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
export const UNARCHIVE_NOTE = 'UNARCHIVE_NOTE';

export interface Note {
  id: number;
  title?: string;
  content: string;
  pinned: boolean;
  trash: boolean;
  archived: boolean;
  reminder?: string; // Date string for reminder
  labels: number[];
  color?: string;
  image?: string;
}

export interface Label {
  id: number;
  name: string;
}

export const addNote = (note: Note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (id: number) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const pinNote = (id: number) => ({
  type: PIN_NOTE,
  payload: id,
});

export const moveToTrash = (id: number) => ({
  type: MOVE_TO_TRASH,
  payload: id,
});

export const restoreNote = (id: number) => ({
  type: RESTORE_NOTE,
  payload: id,
});

export const addLabel = (label: Label) => ({
  type: ADD_LABEL,
  payload: label,
});

export const deleteLabel = (id: number) => ({
  type: DELETE_LABEL,
  payload: id,
});

export const editLabel = (id: number, name: string) => ({
  type: EDIT_LABEL,
  payload: { id, name },
});

export const assignLabelToNote = (noteId: number, labelId: number) => ({
  type: ASSIGN_LABEL_TO_NOTE,
  payload: { noteId, labelId },
});

export const setReminder = (id: number, reminder: string) => ({
  type: SET_REMINDER,
  payload: { id, reminder },
});

export const archiveNote = (id: number) => ({
  type: ARCHIVE_NOTE,
  payload: id,
});

export const unarchiveNote = (id: number) => ({
  type: UNARCHIVE_NOTE,
  payload: id,
});

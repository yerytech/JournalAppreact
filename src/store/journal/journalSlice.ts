import { createSlice } from "@reduxjs/toolkit";


interface Active {
  id: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}

interface JornalTypes {
  isSaving: boolean;
  messageSaved: string;
  notes: Active[];
  active: Active | null;
}

const initialState: JornalTypes = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },

    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });

      state.messageSaved = `${action.payload.title}, updated`;
    },

    setPhotoToActiveNotes: (state, action) => {
       if (!state.active) return;

       if (!state.active.imageUrls) {
         state.active.imageUrls = [];
       }
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },

    clearNoteLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const {
  clearNoteLogout,
  setPhotoToActiveNotes,
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;

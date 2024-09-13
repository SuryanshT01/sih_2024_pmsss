import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "64fb2259e2ba97bc16aa4c79",
  user: null,
  token: null,
  cases: [],
  caseId: "493",
  applicationId: null,
  applications: [], // Add this new field
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setUserId: (state, action) => {
      state.userId = action.payload.userId;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setCases: (state, action) => {
      state.cases = action.payload.cases;
    },
    setCaseId: (state, action) => {
      state.caseId = action.payload.caseId;
    },
    setApplicationId: (state, action) => {
      state.applicationId = action.payload.applicationId;
    },
    setApplications: (state, action) => { // New action
      state.applications = action.payload.applications;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setCases,
  setUserId,
  setCaseId,
  setApplicationId,
  setApplications, // Export the new action
} = globalSlice.actions;

export default globalSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const candidateSlice = createSlice({
  name: "candidate",
  initialState: {
    data: null,
  },
  reducers: {
    setCandidate: (state, action) => {

      state.data = action.payload;
      
    },
    updateCandidate: (state, action) => {
      state.data = 
        action.payload.map((item) => ({
          label: item.label,
          value: item.value,
        }));
      
      console.log("Candidate data set:", state.data);

    },
  },
});

export const { setCandidate, updateCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;

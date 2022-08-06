import { createSlice } from "@reduxjs/toolkit";

const {reducer,actions} = createSlice({
  name:'players',
  initialState: {
    pageInfo : {},
  },
  reducers:{
    setPlayers(state, action) {
    state.pageInfo = action.payload 
  }
 }
})
export { actions as playerActions};
export { reducer as playerReducer}; 
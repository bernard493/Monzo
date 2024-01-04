import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: true,
  userToken: null,
  loading: true,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    
  

    setUser: (state, action) => {
      state.userToken = action.payload?.token;
      state.user = action.payload?.user;
    },

    logOutUser: (state, action) => {
      state.userToken = null;
      state.user = {};
    },
  },
});

export const { setUser, logOutUser, setLoading } = userAuthSlice.actions;
export default userAuthSlice.reducer;

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';
import { auth } from '@config';

export type TUserAuth = {
  uid: string;
  email: string | null;
  displayName: string | null;
};

type TUserAuthState = {
  user: TUserAuth | null;
};

const initialState: TUserAuthState = {
  user: null,
};

export const logoutUser = createAsyncThunk('userAuth/logout', async () => {
  await signOut(auth);
});

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setUserAuth(state, action: PayloadAction<TUserAuth | null>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const { setUserAuth } = userAuthSlice.actions;
export default userAuthSlice.reducer;

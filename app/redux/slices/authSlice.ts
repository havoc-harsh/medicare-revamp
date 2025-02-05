import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthState {
  patient: Patient | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  patient: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Patient>) => {
      state.patient = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.patient = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

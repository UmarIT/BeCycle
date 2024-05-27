import { createSlice } from '@reduxjs/toolkit';

interface State {
  homeTabs: any;
  homeTabsOnSLider: any;
  homeStep: string;
  onboarding:boolean;
}

const initialState: State = {
  homeTabs: 'Amici',
  homeTabsOnSLider: false,
  homeStep: 'step1',
  onboarding:true
};

export const userReducer: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setHomeTabs: (state, action) => {
      state.homeTabs = action.payload;
    },
    setHomeTabsOnSLider: (state, action) => {
      state.homeTabsOnSLider = action.payload;
    },
    setHomeStep: (state, action) => {
      state.homeStep = action.payload;
    },
    setBoarding: (state, action) => {
      state.onboarding = false;
    },
  },
});

export const { setHomeTabs, setHomeTabsOnSLider, setHomeStep } = userReducer.actions;

export default userReducer.reducer;

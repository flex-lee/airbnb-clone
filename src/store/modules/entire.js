import { getEntireAllList } from "@/services";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEntireListAction = createAsyncThunk(
  "fetchData/entire",
  async (payload, { dispatch }) => {
    dispatch(changeIsLoadingAction(true));
    const { offset, size } = payload;
    const res = await getEntireAllList(offset, size);
    dispatch(changeIsLoadingAction(false));
    return res;
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 1,
    totalList: 0,
    infoList: [],
    isLoading: false,
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
    changeTotalListAction(state, { payload }) {
      state.totalList = payload;
    },
  },
  extraReducers: (bundle) => {
    bundle.addCase(fetchEntireListAction.fulfilled, (state, { payload }) => {
      state.infoList = payload;
    });
  },
});

export const {
  changeCurrentPageAction,
  changeIsLoadingAction,
  changeTotalListAction,
} = entireSlice.actions;

export default entireSlice.reducer;

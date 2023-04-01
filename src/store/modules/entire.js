import { getEntireAllList } from "@/services";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEntireListAction = createAsyncThunk(
  "fetchData/entire",
  async (payload, { dispatch, getState }) => {
    dispatch(changeIsLoadingAction(true));
    // 获取发送的第几页
    const currentPage = getState().entire.currentPage - 1;
    const res = await getEntireAllList(currentPage * 20);
    dispatch(changeIsLoadingAction(false));
    return res;
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 1,
    totalCount: 0,
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
  },
  extraReducers: (bundle) => {
    bundle.addCase(fetchEntireListAction.fulfilled, (state, { payload }) => {
      state.infoList = payload.list;
      state.totalCount = payload.totalCount;
    });
  },
});

export const {
  changeCurrentPageAction,
  changeIsLoadingAction,
  changeTotalCountAction,
} = entireSlice.actions;

export default entireSlice.reducer;

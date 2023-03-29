import { getHomeGoodPriceData } from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata/home",
  async (payload) => {
    const res = await getHomeGoodPriceData();

    return res;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: (bundle) => {
    bundle.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload;
    });
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;
export default homeSlice.reducer;

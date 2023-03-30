import {
  getHomeGoodPriceData,
  getHomeHighScore,
  getHomePopular,
  getHomeHotCommendDest,
  getHomeLongFor,
  getHomePlus,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata/home",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScore().then((res) => {
      dispatch(changeHighScoreAction(res));
    });
    getHomePopular().then((res) => {
      dispatch(changePopularInfoAction(res));
    });
    getHomeHotCommendDest().then((res) => {
      dispatch(changeHotCommendInfoAction(res));
    });
    getHomeLongFor().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
    getHomePlus().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScore: {},
    popularInfo: {},
    hotCommendInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreAction(state, { payload }) {
      state.highScore = payload;
    },
    changePopularInfoAction(state, { payload }) {
      state.popularInfo = payload;
    },
    changeHotCommendInfoAction(state, { payload }) {
      state.hotCommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  // extraReducers: (bundle) => {
  //   bundle.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreAction,
  changePopularInfoAction,
  changeHotCommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;

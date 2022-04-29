import { combineReducers } from "redux";
import newsReducer from "./newsReducer"
import newsBusiness from "./newsBusiness";
import newsEnter from "./newsEnter";
import newsHealth from "./newsHealth";
import newsScience from "./newsScience";
import newsSports from './newsSports';
import newsTechno from "./newsTechno";
import newsWeather from  "./newsWeather"
import newsUsdExchange from "./newsUsdExchange";
import newsEurExchange from "./newsEurExchange";
import newsGoldExchange from "./newsGoldExchange";
import newsRecorded from "./newsRecorded";

export default combineReducers({
  news : newsReducer,
  business : newsBusiness,
  enter : newsEnter,
  health : newsHealth,
  science : newsScience,
  sports : newsSports,
  techno : newsTechno,
  weather : newsWeather,
  exchangeUSD : newsUsdExchange,
  exchangeEUR : newsEurExchange,
  exchangeGold : newsGoldExchange, 
  recorded : newsRecorded
});
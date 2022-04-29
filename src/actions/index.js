import newsAPI from "../apis/newsAPI";
import exchangeAPI from "../apis/exchangeAPI"
import weatherAPI from '../apis/weatherAPI'
import goldExchange from "../apis/goldExchange";
import recordedNews from "../apis/recordedAPI"
import axios from "axios";

const newsKey = 'apiKey=04b79b98cfb54499b38f30e517435870';
const weatherKey = 'key=e214efa04eeb49bc9e6205258220804';
const exchangeKey = 'ed30cde4d0da8fbcfbb47f5f'; 
const goldExchangeKey = 'access_key=5i26vtmgnwjo654w7tv1l56u9t43q7cb9jk0k1a3s6ikk9hr69m011mm1165'


const Country = 'country=us'
const General = "category=general"
const Business = "category=business"
const Entertainment = "category=entertainment"
const Health = "category=health"
const Science = "category=science"
const Sports = "category=sports"
const Technology = "category=technology"


export const fetchNews = () => async dispatch =>{
    const response = await newsAPI.get(`top-headlines?${Country}&${General}&${newsKey}`)
    

    dispatch({type: 'FETCH_NEWS', payload : response.data.articles})
}


export const fetchBusiness = () => async dispatch =>{
    const response = await newsAPI.get(`top-headlines?${Country}&${Business}&${newsKey}`)
    

    dispatch({type: 'FETCH_BUSINESS', payload : response.data.articles})
}


export const fetchEntertainment = () => async dispatch =>{
    const response = await newsAPI.get(`top-headlines?${Country}&${Entertainment}&${newsKey}`)
    

    dispatch({type: 'FETCH_ENTERTAINMENT', payload : response.data.articles})
}


export const fetchHealth = () => async dispatch =>{
    const response = await newsAPI.get(`top-headlines?${Country}&${Health}&${newsKey}`)
    

    dispatch({type: 'FETCH_HEALTH', payload : response.data.articles})
}

export const fetchScience = () => async dispatch =>{
    const response = await newsAPI.get(`top-headlines?${Country}&${Science}&${newsKey}`)
    

    dispatch({type: 'FETCH_SCIENCE', payload : response.data.articles})
}

export const fetchSports = () => async dispatch =>{
    const response = await newsAPI.get(`top-headlines?${Country}&${Sports}&${newsKey}`)
    

    dispatch({type: 'FETCH_SPORTS', payload : response.data.articles})
}


export const fetchTechnology = () => async dispatch =>{
    const response = await newsAPI.get(`top-headlines?${Country}&${Technology}&${newsKey}`)
    

    dispatch({type: 'FETCH_TECHNOLOGY', payload : response.data.articles})
}


export const fetchUsdExchange = () => async dispatch=>{
    const response = await exchangeAPI.get(`${exchangeKey}/pair/USD/TRY`)

    dispatch({type : 'FETCH_USD_EXCHANGE',  payload : response.data})
}


export const fetchEurExchange = () => async dispatch=>{
    const response = await exchangeAPI.get(`${exchangeKey}/pair/EUR/TRY`)

    dispatch({type : 'FETCH_EUR_EXCHANGE',  payload : response.data})
}

export const fetchGoldExchange = () => async dispatch=>{
    const response = await goldExchange.get(`latest?${goldExchangeKey}&base=XAU&symbols=USD`)


    dispatch({type : 'FETCH_GOLD_EXCHANGE', payload: response.data})
}


export const fetchWeather = () => async dispatch=>{
    const res = await axios.get('https://geolocation-db.com/json/')
    const ip = res.data.city;
    console.log(res.data.city);
    const response = await weatherAPI.get(`current.json?${weatherKey}&q=${ip}&aqi=no`)

    dispatch({type : 'FETCH_WEATHER', payload : response.data})
}

export const fetchRecorded = () => async dispatch =>{
    const response = await recordedNews.get('news')

    dispatch({type : 'FETCH_RECORDED', payload : response.data})
}

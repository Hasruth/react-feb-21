import { legacy_createStore } from "redux";
import { reducerCounter } from "./reducer";



const reduxStore=legacy_createStore(reducerCounter)



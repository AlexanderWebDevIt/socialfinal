import {combineReducers, createStore} from "redux"
import DialogReducer from "./DialogReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
    DialogReducer,
    ProfileReducer
})

let store = createStore(reducers);

export default store;
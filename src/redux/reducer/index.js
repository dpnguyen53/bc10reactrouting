import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
});

export default rootReducer;

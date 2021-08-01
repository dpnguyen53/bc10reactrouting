import * as ActionType from "./contants";
import axios from "axios";

export const actFecthDetailMovie = (id) => {
    return (dispatch) => {
        //request
        dispatch(actDetailMovieRequest());
        axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            method: "GET",
        })
            .then((result) => {
                //success
                dispatch(actDetailMovieSuccess(result.data));
            })
            .catch((err) => {
                //failed
                dispatch(actDetailMovieFailed(err));
            });
    };
};

const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    };
};

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    };
};

const actDetailMovieFailed = (err) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload: err,
    };
};

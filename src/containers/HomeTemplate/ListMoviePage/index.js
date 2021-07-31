import React, { Component } from "react";
import MovieItem from "./MovieItem";
import aixos from "axios";
import Loader from "./../../../components/Loader";
import {
    actListMovieRequest,
    actListMovieSuccess,
    actListMovieFailed,
} from "./modules/actions";
import { connect } from "react-redux";

class ListMoviePage extends Component {
    componentDidMount() {
        //Gọi api LayDanhSachPhim
        //Bật loading

        //Request
        this.props.request();

        aixos({
            url:
                "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET",
        })
            .then((result) => {
                //Success
                this.props.success(result.data);
            })
            .catch((err) => {
                //Failed
                this.props.failed(err);
            });
    }

    renderListMovie() {
        const { loading, data } = this.props;
        if (loading) return <Loader />;
        return data?.map((movie) => {
            return <MovieItem key={movie.maPhim} movie={movie} />;
        });
    }

    render() {
        return (
            <div className="container">
                <h3>ListMoviePage</h3>
                <div className="row">{this.renderListMovie()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        request: () => {
            dispatch(actListMovieRequest());
        },
        success: (data) => {
            dispatch(actListMovieSuccess(data));
        },
        failed: (data) => {
            dispatch(actListMovieFailed(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);

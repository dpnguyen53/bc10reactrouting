import * as ActionType from "./constants";
import axios from "axios";

export const actLoginAuth = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch(actAuthRequest());

      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
      });
      console.log(result);
      if (result.statusText === "OK") {
        //check maLoaiNguoiDung === "KhachHang" => Thong bao
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            //tao error
            response: {
              data: "Ban k co quyen truy cap",
            },
          }).catch((error) => {
            dispatch(actAuthFailed(error));
          });
        }

        //Luu trang thai login o localStorage
        localStorage.setItem("UserAdmin", JSON.stringify(result.data));

        //check maLoaiNguoiDung => QuanTri => Redirect'
        //chuyen huong toi trang dashboard
        history.replace("/dashboard");

        dispatch(actAuthSuccess(result.data));
      } else {
        dispatch(actAuthFailed(result));
      }
    } catch (error) {
      dispatch(actAuthFailed(error));
    }
  };
};

const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (data) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: data,
  };
};

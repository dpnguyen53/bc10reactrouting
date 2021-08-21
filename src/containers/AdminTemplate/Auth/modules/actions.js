import * as ActionType from "./constants";
import axios from "axios";
import api from "./../../../../utils/apiUtils";
import setHeader from "../../../../utils/setHeader";

//Giả sử BE trả về exp time: 3600000
const TIME_EXP = 3600000;
// const TIME_EXP = 10000;

export const actLoginAuth = (user, history) => {
  return async (dispatch) => {
    try {
      dispatch(actAuthRequest());

      // const result = await axios({
      //   url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      //   method: "POST",
      //   data: user,
      // });

      const result = await api.post("QuanLyNguoiDung/DangNhap", user);

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
        //set accessToken vào header
        setHeader(result.data.accessToken);

        //Thời gian hết phiên làm việc
        //lưu exp time xuống localStorage
        const date = new Date().getTime();
        const exp = date + TIME_EXP;
        localStorage.setItem("exp", exp);
        dispatch(actSetTimeoutLogout(history, TIME_EXP));

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

//Trường hợp reload lại trang web
export const actTryLogin = (history) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("UserAdmin"));
    if (!user) return;

    //Tính toán thời gian exp
    const exp = localStorage.getItem("exp");
    const date = new Date().getTime();
    if (date > exp) {
      //logout
      dispatch(actLogout(history));
      return;
    }
    dispatch(actSetTimeoutLogout(history, exp - date));
    setHeader(user.accessToken);
    dispatch(actAuthSuccess(user));
  };
};

//Logout
export const actLogout = (history) => {
  //clear localStorage
  localStorage.removeItem("UserAdmin");
  localStorage.removeItem("exp");
  //redirect page /auth
  history.replace("/auth");

  //clear reducer auth
  return {
    type: ActionType.AUTH_CLEAR_DATA,
  };
};

/**
 * tính toán thời gian hết hạn token
 * Thời gian token hết hạn là 1h: 60*60*1000 = 3600000
 */

const actSetTimeoutLogout = (history, expTimeout) => {
  return (distpach) => {
    setTimeout(() => {
      distpach(actLogout(history));
    }, expTimeout);
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

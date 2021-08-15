import React, { useState } from "react";
import Loader from "./../../../components/Loader";
import { actAddUser } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";

function AddUser(props) {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.addUserReducer.loading);
  //   const data = useSelector((state) => state.addUserReducer.data);
  //   const error = useSelector((state) => state.addUserReducer.error);

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    // props.addUser(state);
    dispatch(actAddUser(state));
  };

  if (loading) return <Loader />;

  return (
    <form className="container" onSubmit={handleAddUser}>
      <h3>Add user</h3>
      <div className="form-group">
        <span>Tai khoan</span>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Mat khau</span>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Ho ten</span>
        <input
          className="form-control"
          name="hoTen"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>Email</span>
        <input
          className="form-control"
          name="email"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <span>SDT</span>
        <input className="form-control" name="soDt" onChange={handleOnchange} />
      </div>
      <div className="form-group">
        <span>Ma nhom</span>
        <input
          className="form-control"
          name="maNhom"
          onChange={handleOnchange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Add user
        </button>
      </div>
    </form>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     loading: state.addUserReducer.loading,
//   };
// };

// const mapDistpachToProps = (dispatch) => {
//   return {
//     addUser: (user) => {
//       dispatch(actAddUser(user));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDistpachToProps)(AddUser);
export default AddUser;

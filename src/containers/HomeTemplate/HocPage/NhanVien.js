import React, { Component } from "react";

export default class NhanVien extends Component {
    render() {
        return (
            <>
                <div className="form-group">
                    <label>Mã NV</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Tên NV</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" />
                </div>
            </>
        );
    }
}

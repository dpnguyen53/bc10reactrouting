import React, { Component } from "react";
import NhanVien from "./NhanVien";
// import SanPham from "./SanPham";
import WithCard from "./WithCard";

const WrapperCard = WithCard(NhanVien);

export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>HocPage</h3>
                <WrapperCard />
            </div>
        );
    }
}

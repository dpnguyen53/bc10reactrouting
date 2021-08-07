import React, { Component } from "react";

export default class Cat extends Component {
    render() {
        console.log(this.props);
        const mouse = this.props.mouse;
        return (
            <img
                src="/logo192.png"
                style={{ position: "absolute", left: mouse.x, top: mouse.y }}
            />
        );
    }
}

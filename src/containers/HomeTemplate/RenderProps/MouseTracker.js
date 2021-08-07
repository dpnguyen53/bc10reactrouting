import React, { Component } from "react";
import Mouse from "./Mouse";
import Cat from "./Cat";
// import MouseWithCat from "./MouseWithCat";
import withMouse from "./withMouse";

const WrapperMouse = withMouse(Cat);

export default class MouseTracker extends Component {
    // getXY = (mouse) => {
    //     return <Cat mouse={mouse} />;
    // };

    render() {
        return (
            <>
                <h1>Move the mouse around!</h1>
                <WrapperMouse name="Meo" age={2} eat="fish" />
                {/* <Mouse render={(mouse) => <Cat mouse={mouse} />} /> */}
                {/* <MouseWithCat /> */}
            </>
        );
    }
}

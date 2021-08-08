import React, {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
} from "react";
import Child from "./child";
import DemoUseReducer from "./useReducer";
import CustomHooks from "./custom-hooks";

export default function HooksPage() {
    // const listUser = ["Nguyen", "Si", "Thanh"];
    const prevNumber = useRef(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("useEffect - dc tổng hợp bởi Didmount vs DidUpdate");
    });

    useEffect(() => {
        console.log(
            "useEffect - tương đương như Didmount - nếu như tham số thứ 2 của useEffect là mảng rỗng"
        );
    }, []);

    useEffect(() => {
        console.log(
            "useEffect - tương đương như DidUpdate - nếu như tham số thứ 2 của useEffect là mảng khác rỗng"
        );
    }, [number]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Hello");
        }, 1000);

        return () => {
            //Tương đương WillUnMout bên class
            //clear interval
            clearInterval(interval);
        };
    }, []);

    const showNumber = () => {
        console.log("showNumber");
    };

    const showNumberCallback = useCallback(showNumber, []);

    // const listUserMemo = useMemo(listUser, []);

    const numberUp = () => {
        let i = 0;
        while (i < 1000) i++;
        console.log(i);
        return i;
    };

    const numberUpMemo = useMemo(() => numberUp(), []);

    return (
        <div>
            <h3>HooksPage</h3>
            <h1>Pre Number: {prevNumber.current}</h1>
            <h1>Number: {number}</h1>
            <button
                className="btn btn-success"
                onClick={() => {
                    setNumber(number + 1);
                    prevNumber.current = number;
                }}
            >
                Increment
            </button>
            <h1>Number Up: {numberUpMemo}</h1>
            <hr />
            <Child showNumber={showNumberCallback} />
            <hr />
            <DemoUseReducer />
            <hr />
            <CustomHooks />
        </div>
    );
}

import { useState, useEffect } from "react";

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState(
        window.innerWidth
    );


    useEffect(() => {
        window.addEventListener('resize', (event) => {
            setWindowSize(event.currentTarget.innerWidth);
        });
        console.log(windowSize);

    }, []);

    return windowSize;
};

export default useWindowSize;
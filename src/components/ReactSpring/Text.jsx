import React, {useState} from 'react';
import {config, useSpring, animated} from "react-spring";

const Text = () => {
    const [flip, setFlip] = useState(false)
    const props = useSpring({
        to: { opacity: 1, color: "red" },
        from: { opacity: 0, color: "blue" },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => setFlip(prev => !prev),
    })

    return <animated.h1 style={props}>hello</animated.h1>
};

export default Text;

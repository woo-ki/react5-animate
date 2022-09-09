import React from 'react';
import {motion} from "framer-motion";

const KeyFrames = () => {
    return (
        <div style={{position: "absolute", top: 250, left: "50%", transform: "translate(-50%, -50%)"}}>
            <motion.div
                style={{background: "pink", height: 50, width: 50}}
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            />
        </div>
    );
};

export default KeyFrames;

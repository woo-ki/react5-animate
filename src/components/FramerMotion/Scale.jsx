import React from 'react';
import {motion} from "framer-motion";

const Scale = () => {
    return (
        <div style={{position: "absolute", top: 100, left: "50%", transform: "translate(-50%, -50%)"}}>
            <motion.div
                style={{background: "coral", height: 50, width: 50}}
                animate={{
                    scale: 2
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            />
        </div>
    );
};

export default Scale;

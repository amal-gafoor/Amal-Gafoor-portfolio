import React from 'react';
import { motion } from 'framer-motion';
import './BackgroundGradient.css';

export const BackgroundGradient = ({
    children,
    className = "",
    containerClassName = "",
    animate = true,
}) => {


    // Using rotation for conic gradient effect
    // We animate the rotation of the gradient

    return (
        <div className={`bg-gradient-container group ${containerClassName}`}>
            {animate && (
                <>
                    <motion.div
                        className="bg-gradient-motion bg-gradient-blur"
                        initial={{ rotate: 0, x: "-50%", y: "-50%" }}
                        animate={{ rotate: 360, x: "-50%", y: "-50%" }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <motion.div
                        className="bg-gradient-motion"
                        initial={{ rotate: 0, x: "-50%", y: "-50%" }}
                        animate={{ rotate: 360, x: "-50%", y: "-50%" }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </>
            )}
            <div className={`bg-gradient-content ${className}`}>
                {children}
            </div>
        </div>
    );
};

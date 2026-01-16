import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import "./HeroHighlight.css";

export const HeroHighlight = ({ children, containerClassName = "" }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`hero-highlight-container ${containerClassName}`}
            onMouseMove={handleMouseMove}
        >
            <div className="hero-highlight-dots"></div>
            <motion.div
                className="hero-highlight-mask"
                style={{
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />
            <div className="hero-highlight-content">{children}</div>
        </div>
    );
};

export const Highlight = ({ children, className = "" }) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 2,
                ease: "linear",
                delay: 0.5,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={`hero-highlight-text ${className}`}
        >
            {children}
        </motion.span>
    );
};

import React from "react";
import Container from "../Container";
import { useSpring, animated } from "react-spring";
import "./style.sass";

const Carousel = ({ children, length, ...props }) => {
  const [aProps, set] = useSpring(() => ({ marginLeft: "0%" }));

  return (
    <section clasName="hero" {...props}>
      <div className="carousel-container">
        <Container>
          <div className="carousel-clip">
            <animated.div
              className="carousel-roll"
              style={{
                width: `${length * 100}%`,
                ...aProps,
              }}
            >
              {children}
            </animated.div>
            <div className="separator-2" />
            <div className="carousel-dots">
              {Array.from(Array(length).keys()).map((i, index) => (
                <div
                  className="carousel-dot"
                  onClick={() => set({ marginLeft: `-${index * 100}%` })}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Carousel;

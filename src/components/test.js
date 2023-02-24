import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
    padding: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;

const Slide = styled.div`
    flex: 1;
    height: 100%;
    background-color: lightblue;
    transition: transform 5s ease;
`;

const Spacer = styled.div`
    width: 200px;
`;

const Test = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <Slide key={1}>Slide 1</Slide>,
    <Slide key={2}>Slide 2</Slide>,
  ];

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <SliderContainer>
        <button onClick={handlePrevSlide}>Prev</button>
        <Spacer />
        <div style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides}
        </div>
        <Spacer />
        <button onClick={handleNextSlide}>Next</button>
    </SliderContainer>
  );
};

export default Test;
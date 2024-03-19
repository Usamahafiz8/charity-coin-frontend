import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';

// Styled component for the container
const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '160px',
  overflow: 'hidden',
  fontFamily: 'Lato, sans-serif',
  fontSize: '35px',
  lineHeight: '40px',
  color: '#ecf0f1',
}));

// Styled component for the text container
const TextContainer = styled('div')(({ theme }) => ({
  fontWeight: '600',
  overflow: 'hidden',
  height: '40px',
  padding: '0 40px',
  position: 'relative',
}));

// Styled component for the text
const Text = styled('p')(({ theme }) => ({
  display: 'inline',
  float: 'left',
  margin: '0',
}));

// Animation durations and intervals
const durations = [0, 2, 10];
const intervals = [0, 2, 10];

// Define the text lines
const lines = ['Hello', 'world!', 'bob!', 'users!', 'everybody!'];

// Main component
const AnimatedText = () => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    // Animation function
    const animateText = () => {
      const newIndex = (lineIndex + 1) % lines.length;
      setLineIndex(newIndex);
    };

    // Interval for animation
    const intervalId = setInterval(animateText, 10000); // Change the interval as needed

    // Cleanup function
    return () => clearInterval(intervalId);
  }, [lineIndex]);

  return (
    <Container>
      <TextContainer>
        <Text>{lines[lineIndex]}</Text>
      </TextContainer>
    </Container>
  );
};

export default AnimatedText;

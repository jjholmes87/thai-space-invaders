import React, { useState, useEffect, useRef } from 'react';
import Spaceship from './Spaceship';
import ThaiLetter from './ThaiLetter';
import Prompt from './Prompt';
import Scoreboard from './Scoreboard';

const thaiLetters = ['ก', 'ข', 'ค', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ญ'];

const Game = () => {
  const [position, setPosition] = useState(200);
  const [letters, setLetters] = useState([]);
  const [targetLetter, setTargetLetter] = useState(thaiLetters[0]);
  const [score, setScore] = useState(0);

  const shootSound = useRef(null);
  const hitSound = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetters(letters => [
        ...letters,
        { letter: thaiLetters[Math.floor(Math.random() * thaiLetters.length)], position: Math.random() * 400, top: 0 },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetters(letters => letters.map(letter => ({ ...letter, top: letter.top + 5 })).filter(letter => letter.top < 600));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && position > 0) setPosition(position - 20);
    if (e.key === 'ArrowRight' && position < 400) setPosition(position + 20);
    if (e.key === ' ') {
      e.preventDefault(); // Prevent spacebar from scrolling the page
      shoot();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [position, letters]);

  const shoot = () => {
    if (shootSound.current) {
      shootSound.current.play();
    }
    setLetters(letters.filter(letter => {
      if (letter.position >= position - 25 && letter.position <= position + 25 && letter.letter === targetLetter) {
        if (hitSound.current) {
          hitSound.current.play();
        }
        setScore(score + 1);
        setTargetLetter(thaiLetters[Math.floor(Math.random() * thaiLetters.length)]);
        return false;
      }
      return true;
    }));
  };

  return (
    <div className="game">
      <Spaceship position={position} />
      {letters.map((letter, index) => (
        <ThaiLetter key={index} letter={letter.letter} position={letter.position} top={letter.top} />
      ))}
      <Prompt targetLetter={targetLetter} />
      <Scoreboard score={score} />
      <audio ref={shootSound} src="/shoot.wav" />
      <audio ref={hitSound} src="/hit.wav" />
    </div>
  );
};

export default Game;

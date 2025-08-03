import React, { useEffect, useState } from 'react';
import '../styles/TypingBox.css'; // we'll add styles later

const sampleParagraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast is a skill you can improve over time.",
  "Practice makes perfect, especially in typing tests.",
  "Speed and accuracy both matter in real competitions."
];

const TypingBox: React.FC = () => {
  const [originalText, setOriginalText] = useState('');
  const [userInput, setUserInput] = useState('');

  // Pick random paragraph on mount
  useEffect(() => {
    const random = Math.floor(Math.random() * sampleParagraphs.length);
    setOriginalText(sampleParagraphs[random]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  const renderCharacters = () => {
    return originalText.split('').map((char, index) => {
      let className = '';
      if (index < userInput.length) {
        className = char === userInput[index] ? 'correct' : 'incorrect';
      }

      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      <h4 className="mt-4">Start Typing Below:</h4>
      <div className="typing-paragraph p-3 mb-3 rounded border">
        {renderCharacters()}
      </div>
      <textarea
        className="typing-area w-full px-5"
        rows={5}
        value={userInput}
        onChange={handleChange}
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default TypingBox;

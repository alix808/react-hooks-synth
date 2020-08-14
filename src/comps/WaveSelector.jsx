import React, { useState, useContext, useEffect } from 'react';
import SynthContext from '../context/synth/synthContext';

const WaveSelector = () => {
  const synthContext = useContext(SynthContext);

  const { oscillator } = synthContext;
  const [wave, setWave] = useState('sine');

  const onChange = (e) => {
    setWave(e.target.value);
  };

  useEffect(() => {
    if (oscillator) {
      oscillator.type = wave;
    }
    // eslint-disable-next-line
  }, [oscillator, wave]);

  return (
    <select onChange={(e) => onChange(e)}>
      <option value='sine'>sine</option>
      <option value='sawtooth'>saw</option>
      <option value='square'>square</option>
    </select>
  );
};

export default WaveSelector;

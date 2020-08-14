import React, { useContext, useEffect, useState } from 'react';
import SynthContext from '../context/synth/synthContext';

const Oscillator = () => {
  const synthContext = useContext(SynthContext);
  const { oscillator, audioCtx } = synthContext;

  useEffect(() => {
    if (oscillator) {
      oscillator.start();
    }
    // eslint-disable-next-line
  }, [oscillator]);

  const [freq, setFreq] = useState(40);

  const onChange = (e) => {
    setFreq(e.target.value);
  };

  useEffect(() => {
    if (audioCtx) {
      oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    }
    // eslint-disable-next-line
  }, [freq]);

  return (
    <input
      type={'range'}
      min={40}
      max={200}
      defaultValue={freq}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Oscillator;

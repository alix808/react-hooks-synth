import React, { useContext, useEffect } from 'react';
import SynthContext from '../context/synth/synthContext';

const Init = () => {
  const synthContext = useContext(SynthContext);
  const { audioCtx, analyser, oscillator } = synthContext;

  useEffect(() => {
    if (audioCtx !== null) {
      synthContext.createAnalyser(audioCtx);
      synthContext.createOsc(audioCtx);
    }
    // eslint-disable-next-line
  }, [audioCtx]);

  useEffect(() => {
    if (analyser && oscillator) {
      oscillator.connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    // eslint-disable-next-line
  }, [analyser, oscillator]);

  return <button onClick={() => synthContext.createAudioCtx()}>play</button>;
};

export default Init;

import React, { useReducer } from 'react';
import SynthContext from './synthContext';
import SynthReducer from './synthReducer';
import { CREATE_AUDIO_CTX, CREATE_ANALYSER, CREATE_OSCILLATOR } from '../types';

const SynthState = (props) => {
  const initialState = {
    audioCtx: null,
    analyser: null,
    oscillator: null,
  };

  const [state, dispatch] = useReducer(SynthReducer, initialState);

  const createAudioCtx = () => {
    const audioCtx = new AudioContext();

    dispatch({
      type: CREATE_AUDIO_CTX,
      payload: audioCtx,
    });
  };

  const createAnalyser = (audioCtx) => {
    const analyser = audioCtx.createAnalyser();

    dispatch({
      type: CREATE_ANALYSER,
      payload: analyser,
    });
  };

  const createOsc = (audioCtx) => {
    const oscillator = audioCtx.createOscillator();

    dispatch({
      type: CREATE_OSCILLATOR,
      payload: oscillator,
    });
  };

  return (
    <SynthContext.Provider
      value={{
        audioCtx: state.audioCtx,
        analyser: state.analyser,
        oscillator: state.oscillator,
        createAnalyser,
        createOsc,
        createAudioCtx,
      }}
    >
      {props.children}
    </SynthContext.Provider>
  );
};

export default SynthState;

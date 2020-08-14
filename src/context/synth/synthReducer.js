import { CREATE_AUDIO_CTX, CREATE_ANALYSER, CREATE_OSCILLATOR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_AUDIO_CTX:
      return {
        ...state,
        audioCtx: action.payload,
      };

    case CREATE_ANALYSER:
      return {
        ...state,
        analyser: action.payload,
      };

    case CREATE_OSCILLATOR:
      return {
        ...state,
        oscillator: action.payload,
      };

    default:
      return state;
  }
};

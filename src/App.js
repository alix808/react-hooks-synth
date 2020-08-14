import React from 'react';
import SynthState from './context/synth/SynthState';
import Init from './comps/Init';
import Oscillator from './comps/Oscillator';
import SpectrumAnalyser from './comps/SpectrumAnalyser';
import './App.css';

const App = () => (
  <SynthState>
    <section>
      <Init />
      <Oscillator />
    </section>
    <SpectrumAnalyser />
  </SynthState>
);

export default App;

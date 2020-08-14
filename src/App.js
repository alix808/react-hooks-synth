import React from 'react';
import SynthState from './context/synth/SynthState';
import Init from './comps/Init';
import Oscillator from './comps/Oscillator';
import WaveSelector from './comps/WaveSelector';
import SpectrumAnalyser from './comps/SpectrumAnalyser';
import Github from './comps/Github';
import './App.css';

const App = () => (
  <SynthState>
    <section>
      <Init />
      <Oscillator />
      <WaveSelector />
      <Github />
    </section>
    <SpectrumAnalyser />
  </SynthState>
);

export default App;

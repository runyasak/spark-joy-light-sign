import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Splitting from 'splitting';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div
        class="rainbow-text animated"
        style={{ 'text-align': 'center' }}
        innerHTML={Splitting.html({
          content: 'Spark Joy Light Sign',
          by: 'chars',
        })}
      ></div>
    </div>
  );
};

export default App;

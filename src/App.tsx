import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Splitting from 'splitting';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div
        class="rainbow-text animated"
        innerHTML={Splitting.html({ content: 'Rainbow Text', by: 'chars' })}
      ></div>
    </div>
  );
};

export default App;

import type { Component } from 'solid-js';

import Splitting from 'splitting';

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen items-center justify-center bg-[#282c34] px-12">
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

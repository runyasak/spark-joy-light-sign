import { Component, createSignal } from 'solid-js';

import Splitting from 'splitting';

const App: Component = () => {
  const [signText, setSignText] = createSignal('Spark Joy Light Sign');

  return (
    <div class="flex flex-col h-screen items-center justify-center bg-[#282c34] px-12 gap-8">
      <div
        class="rainbow-text animated"
        style={{ 'text-align': 'center' }}
        innerHTML={Splitting.html({
          content: signText(),
          by: 'chars',
        })}
      ></div>
      <div class="absolute bottom-24 flex flex-col gap-4">
        <input
          type="text"
          class="sign-text-input !bg-opacity-50"
          placeholder="Type your preview sign here..."
          value={signText()}
          onInput={(e) => setSignText(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default App;

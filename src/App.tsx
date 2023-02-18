import { Component, createSignal } from 'solid-js';

import Splitting from 'splitting';

const App: Component = () => {
  const [signText, setSignText] = createSignal('Spark Joy Light Sign');

  const handleShowSign = () => {
    const elem = document.documentElement;
    elem.requestFullscreen();
  };

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
      <div class="actions-sector">
        <input
          type="text"
          class="sign-text-input !bg-opacity-50"
          placeholder="Type your preview sign here..."
          value={signText()}
          onInput={(e) => setSignText(e.currentTarget.value)}
        />

        <button
          class="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleShowSign}
        >
          Show your sign
        </button>
      </div>
    </div>
  );
};

export default App;

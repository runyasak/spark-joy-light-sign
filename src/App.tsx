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
      <a
        class="w-6 absolute top-6 right-6"
        target="_blank"
        rel="noopener"
        href="https://github.com/runyasak/spark-joy-light-sign"
      >
        <svg
          class="hover:fill-white transition-colors"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
        </svg>
      </a>

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

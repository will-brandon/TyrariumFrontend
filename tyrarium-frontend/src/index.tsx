import { StrictMode as ReactStrictMode } from 'react'
import { createRoot as createReactRoot } from 'react-dom/client'
import './index.css'
import ReactApp from './ReactApp.tsx'

const reactRootDOMElementId = 'react-root';

const main = (): void => {
  const reactRootDOMElement = document.getElementById(reactRootDOMElementId);

  if (!reactRootDOMElement) {
    throw new Error(`React root DOM element '.${reactRootDOMElementId}' not found.`);
  }

  const reactRoot = createReactRoot(reactRootDOMElement);

  reactRoot.render(
    <ReactStrictMode>
      <ReactApp />
    </ReactStrictMode>,
  );
}

main();

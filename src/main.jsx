import { createRoot } from "react-dom/client";
import { Suspense, useState } from "react";
import "./styles.css";
import Overlay from "./layout/Overlay.jsx";
import { FadeIn, LeftMiddle } from "./layout/styles.jsx";

import Bananas from "./Bananas.jsx";
// Comment the above and uncomment the following to import the WebGL BG lazily for faster loading times
// const Bananas = lazy(() => import('./Bananas.jsx'))

function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Suspense fallback={null}>
        <Bananas speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input
          type="range"
          min="0"
          max="10"
          value={speed}
          step="1"
          onChange={(e) => set(e.target.value)}
        />
      </LeftMiddle>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

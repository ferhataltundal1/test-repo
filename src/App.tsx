import { useCallback, useContext, useState } from "react";
import Accordion from "./components/Accordion";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

const App = () => {
  const useTheme = useContext(ThemeContext);
  const [theme, setTheme] = useState(useTheme);

  console.log(theme);

  return (
    <ThemeProvider>
      <div
        className="page"
        style={{
          width: "100%",
          height: "100vh",
          background: `${theme ? "#000" : "#fff"}`,
        }}
      >
        <button onClick={() => setTheme((p) => !p)}>Click</button>
      </div>
    </ThemeProvider>
  );
};
export default App;

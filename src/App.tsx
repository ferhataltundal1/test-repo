import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import Accordion from "./components/Accordion";
import { Login } from "./components/Login";
import { Button, Table } from "react-bootstrap";
import { Dropdown } from "./components/Dropdown";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { usePromise } from "./hooks/promise";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useLocalStorage from "./hooks/local-storage";

const App = () => {
  const [theme, setTheme] = useState("theme_1");
  const [storage, setStorage] = useLocalStorage("themes", theme);
  useEffect(() => {
    document.body.className = storage;
  }, [storage]);
  const data = {
    theme,
    storage,
    setTheme,
    setStorage,
  };
  return (
    <ThemeContext.Provider value={data}>
      <Header />
      <div className="page">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
        distinctio temporibus, fugit unde placeat, accusamus quibusdam libero
        voluptates doloribus eum voluptate ratione iusto corporis. Facilis
        labore officiis maxime quae suscipit?
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
};
export default App;

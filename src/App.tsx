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
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [theme, setTheme] = useState("theme_1");
  const [auth, setAuth] = useState<boolean>(false);
  const [storage, setStorage] = useLocalStorage("themes", theme);
  const [storage2, setStorage2] = useLocalStorage("auth", auth);
  useEffect(() => {
    document.body.className = storage;
  }, [storage]);

  useEffect(() => {
    if (!auth) {
      return console.log("Please login");
    }
    console.log("You logged");
  }, [auth]);
  const data = {
    theme,
    storage,
    storage2,
    auth,
    setTheme,
    setStorage,
    setStorage2,
    setAuth,
  };
  return (
    <AuthContext.Provider value={data}>
      <ThemeContext.Provider value={data}>
        <Header />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptate
        vitae molestiae, non a debitis voluptatibus minima sequi officiis earum
        inventore, ipsa, illum expedita laborum corporis praesentium provident
        natus ut?
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
};
export default App;

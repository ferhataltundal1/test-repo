import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Accordion from "./components/Accordion";
import { Login } from "./components/Login";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { Button, Table } from "react-bootstrap";
import { Dropdown } from "./components/Dropdown";

const App = () => {
  const options = useMemo(
    () => [
      {
        path: "/user",
        icon: "person",
        name: "User",
        refresh: true,
      },
      {
        path: "/info",
        icon: "info",
        name: "Information",
      },
    ],
    []
  );
  return (
    <div className="page">
      <Dropdown title={"Setting"} options={options} />
    </div>
  );
};
export default App;

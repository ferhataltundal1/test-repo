import React, { useCallback, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const LoginButton = () => {
  const { storage2, setStorage2 } = useContext(AuthContext);

  const login = useCallback(() => {
    if (storage2) {
      setStorage2(false);
    } else {
      setStorage2(true);
    }
  }, [storage2, setStorage2]);

  return (
    <div>
      <button onClick={login}>{storage2 ? "LOGOUT" : "LOGIN"}</button>
    </div>
  );
};

export default LoginButton;

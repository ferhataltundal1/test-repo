import { createContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const ThemeContext = createContext<boolean>(false);

export const ThemeProvider = ({ children }: Props) => {
  return (
    <ThemeContext.Provider value={false}>{children}</ThemeContext.Provider>
  );
};

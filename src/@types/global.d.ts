import { ReactNode } from "react";

type ReactNodeOrRenderer = () => ReactNode;

declare global {
  function renderIf(
    predicate: any
  ): (item: ReactNodeOrRenderer, elseValue?: ReactNodeOrRenderer) => ReactNode;
}

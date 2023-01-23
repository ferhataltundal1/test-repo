import {
  FC,
  memo,
  MouseEventHandler,
  PropsWithChildren,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

type Props = {
  title: string;
  options: Options[];
};

type Options = {
  path: string;
  name: string;
  icon?: string;
  refresh?: boolean;
};
const Icon: FC<PropsWithChildren> = ({ children }) => (
  <em className="material-symbols-outlined">{children}</em>
);
const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: MouseEventHandler<HTMLButtonElement>
) => {
  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export const Dropdown = memo(({ title, options }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const onClickPath = useCallback(
    (array: Options) => {
      array.refresh ? window.location.assign(array.path) : navigate(array.path);
      setIsOpen(false);
    },
    [navigate]
  );

  return (
    <div ref={ref} className={`dropdown ${isOpen ? "open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Icon>account_circle</Icon>
        <span>{title}</span>
        <Icon>{isOpen ? "close" : "expand_more"}</Icon>
      </button>
      <div className="menu">
        {options?.map((option) => (
          <button onClick={() => onClickPath(option)}>
            <Icon>{option.icon || null}</Icon>
            <span>{option.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
});

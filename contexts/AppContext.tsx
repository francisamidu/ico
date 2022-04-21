import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
type AppValues = {
  name: string;
  year: number;
};
const AppContext = createContext<{
  name: string;
  year: number;
  setData: Dispatch<SetStateAction<AppValues>>;
}>({
  name: "",
  year: 0,
  setData: () => {},
});

export const AppContextProvider = ({
  children,
}: PropsWithChildren<ReactNode>) => {
  const [data, setData] = useState({
    name: "Perruna",
    year: new Date().getFullYear(),
  });

  return (
    <AppContext.Provider value={{ ...data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

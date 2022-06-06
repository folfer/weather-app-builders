import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface LocationProviderProps {
  children: ReactNode;
}

interface LocationContextData {
  nextPage: boolean;
  setNextPage(nextPage: boolean): void;
}

const LocationContext = createContext({} as LocationContextData);
const { Provider } = LocationContext;

function LocationProvider({ children }: LocationProviderProps) {
  const [nextPage, setNextPage] = useState<boolean>(false);

  return (
    <Provider
      value={{
        nextPage,
        setNextPage,
      }}
    >
      {children}
    </Provider>
  );
}

function useLocation() {
  const context = useContext(LocationContext);

  return context;
}

export { LocationProvider, useLocation };

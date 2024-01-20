import React from "react";
import { useState } from "react";
import { createContext } from "react";
import dataJson from "../data/initial-data.json";

const DataContext = createContext();

export default function ContextProvider({ children }) {
  const [contextData, setContextData] = useState(dataJson);

  return (
    <>
      <DataContext.Provider
        value={{
          contextData,
          setContextData,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
}

export { DataContext };

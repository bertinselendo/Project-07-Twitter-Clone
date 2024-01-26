import React from "react";
import { useState } from "react";
import { createContext } from "react";
import dataObject from "../data/initial-data.json";
import { Toaster, toast } from "sonner";

const DataContext = createContext();

const localDataContext = localStorage.getItem("LocalDataContext");
if (localDataContext == null) {
  const dataJson = JSON.stringify(dataObject);
  localStorage.setItem("LocalDataContext", dataJson);
}

const data =
  localDataContext == null ? dataObject : JSON.parse(localDataContext);

export default function ContextProvider({ children }) {
  const [contextData, setData] = useState(data);

  function setContextData(updatedData) {
    setData(updatedData);
    const dataJson = JSON.stringify(updatedData);
    localStorage.setItem("LocalDataContext", dataJson);
  }

  return (
    <>
      <DataContext.Provider
        value={{
          contextData,
          setContextData,
        }}
      >
        <Toaster richColors closeButton position="bottom-left" theme="dark" />
        {children}
      </DataContext.Provider>
    </>
  );
}

export { DataContext };

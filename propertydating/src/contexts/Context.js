import React, { useState, createContext } from "react";

const Context = createContext();
export function ConstProvider({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export default Context;

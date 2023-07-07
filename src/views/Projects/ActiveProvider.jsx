/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const ActiveContext = createContext();

const ActiveProvider = ({ children }) => {
  const [activeState, setActiveState] = useState(0);

  const value = { activeState, setActiveState };
  return (
    <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>
  );
};

ActiveProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useActive = () => {
  const context = useContext(ActiveContext);
  if (context === undefined)
    throw new Error("activeContext must be used within a Provider");
  return context;
};

export { ActiveProvider, useActive };

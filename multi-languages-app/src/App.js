import React from "react";
import Content from "./Components/Contenu/Content";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function App() {
  return (
    <ContextProvider>
      <ToggleLangs />
      <Content />

    </ContextProvider>
    
  );
}

export default App;

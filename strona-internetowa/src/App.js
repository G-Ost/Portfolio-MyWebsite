import './App.css';
import React from "react"
import Frame from "./Containers/Frame"
import Menu from "./Containers/Menu"
import { stylesContext } from "./Contexts/StylesContext";
function App() {
  const { isMenuVisible, setIsMenuVisible } = React.useContext(stylesContext);
  const backToStartFunctionRef = React.useRef(null);

  return (
    <div className="App">
      <Frame backToStartFunctionRef={backToStartFunctionRef} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
      {isMenuVisible && <Menu backToStartFunctionRef={backToStartFunctionRef} isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />}
    </div>
  );
}

export default App;

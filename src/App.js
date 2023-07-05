import './App.css';
import {Card} from "./components/Css-example";
import {StateComponent} from "./components/StateComponent";
import './shared/styles/styles.scss';
function App() {

  return (
      <div className="App">
        {/* <Card isCardHovered={true}/> */}
        <StateComponent />
      </div>
  );
}

export default App;

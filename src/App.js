import './App.css';
import {Card} from "./components/Css-example";
import './shared/styles/styles.scss';
function App() {

  return (
      <div className="App">
        <Card isCardHovered={true}/>
      </div>
  );
}

export default App;

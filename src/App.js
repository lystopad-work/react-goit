import './App.css';
import {Card} from './components/css-block/Card';
import {StateComponent} from './components/state-block/StateComponent';
import {RegistrationForm} from "./components/forms/RegistrationForm";
import './shared/styles/styles.scss';
function App() {

  return (
      <div className="App">
        {/* <Card isCardHovered={true}/> */}
        {/* <StateComponent /> */}
        <RegistrationForm />
      </div>
  );
}

export default App;

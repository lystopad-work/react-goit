import './App.css';
import {Card} from "./components/css-block/Card";
import './shared/styles/styles.scss';
import {StateComponent} from "./components/state-block/StateComponent";
import {Forms} from "./components/forms/Forms";
import {RegistrationForm} from "./components/forms/RegistrationForm";
import {LifeCycle} from "./components/lifecycle/LifeCycle";
import {ErrorBoundary} from "./components/ErrorBoundary";
function App() {

  return (
      <div className="App">
        {/*<Card isCardHovered={true}/>*/}
        {/*<StateComponent*/}
        {/*    title='React JS'*/}
        {/*/>*/}
        {/*  <Forms />*/}
        {/*  <RegistrationForm />*/}
        <ErrorBoundary>
          <LifeCycle />
        </ErrorBoundary>
      </div>
  );
}

export default App;

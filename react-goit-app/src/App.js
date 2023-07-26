import {Route, Routes} from "react-router-dom";
import {CardsListPage} from "./pages/CardsListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route path='cards' element={<CardsListPage />}/>
          {/*<Route path='cards/:cardId' element={<CardPage />}/>*/}
        </Route>

      </Routes>
    </div>
  );
}

export default App;

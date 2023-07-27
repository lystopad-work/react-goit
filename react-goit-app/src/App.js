import {Route, Routes} from "react-router-dom";
import {CardsListPage} from "./pages/CardsListPage";
import {CardPage} from "./pages/CardPage";
import {Main} from "./layouts/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='cards' element={<CardsListPage />}/>
          <Route path='cards/:id' element={<CardPage />}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;

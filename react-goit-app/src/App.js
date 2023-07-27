import {Route, Routes} from "react-router-dom";
import {CardsListPage} from "./pages/CardsListPage";
// import {CardPage} from "./pages/CardPage";
import {Main} from "./layouts/Main";
import {createContext, lazy, useCallback, useState} from "react";
import {Modal} from "./components/Modal";

const CardPage = lazy(() => import('./pages/CardPage'));

export const ModalContext = createContext(null);
function App() {

    const [isModal,setIsModal] = useState(false);

    const handleModal = useCallback(() => {
        setIsModal(prev => !prev)
    }, [isModal])

  return (
    <div className="App">
        <ModalContext.Provider value={{isModal, setIsModal: handleModal}}>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<CardsListPage />}/>
                    <Route path='cards' element={<CardsListPage withSearch={true}/>}/>
                    <Route path='cards/:id' element={<CardPage />}/>
                </Route>
            </Routes>
        </ModalContext.Provider>
        {
            isModal && <Modal closeClick={handleModal}/>
        }
    </div>
  );
}

export default App;

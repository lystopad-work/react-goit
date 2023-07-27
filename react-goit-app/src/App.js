import {Route, Routes} from "react-router-dom";
import {CardsListPage} from "./pages/CardsListPage";
import {CardPage} from "./pages/CardPage";
import {Main} from "./layouts/Main";
import {createContext, useCallback, useState} from "react";
import {Modal} from "./components/Modal";

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
                    <Route path='cards' element={<CardsListPage />}/>
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

import React, {useState} from 'react';
import './App.css';
import ProductList from "./components/product-page/ProductList";
import AppInfo from "./components/app-info/AppInfo";
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import About from "./pages/About";
import Test from "./pages/Test";
import ProductItemPage from "./pages/ProductItemPage";
import {DbContext} from './context'

function App() {
    const [dbChanged, setDbChanged] = useState<boolean>(false)


  // @ts-ignore
    return (
      <DbContext.Provider value={{
          dbChanged,
          setDbChanged
      }
      }>
      <BrowserRouter>
          <div>
              <Route path={'/'} exact>
                <MainPage />
              </Route>
              <Route path={'/test'} exact>
                <Test />
              </Route>
              <Route path={'/product/:id'} exact>
                  <ProductItemPage />
              </Route>
          </div>
      </BrowserRouter>
      </DbContext.Provider>
  );
}

export default App;

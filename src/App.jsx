import React, { useState, useEffect } from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';

import './App.css';
import Form from 'components/ContactAdd'
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import Tittle from 'components/Tittle';
import Notiflix from 'notiflix';


const App = () => {

    return (
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Tittle text="Nombre"/>
            <Form/>

            <Tittle text="Contacts"/>
            <Filter/>
            <Contacts/>
          </PersistGate>
        </Provider>

      </div>

    )
}

export default App;
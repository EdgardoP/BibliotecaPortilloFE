import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import Private from './Components/UX/Private/Private';

import {store, persistor} from './Store';
import Splash from './Components/Views/Splash';
import Signin from './Components/Views/Signin/SigninPage';
import Login from './Components/Views/Login/LoginPage';
import Todo from './Components/Views/Todo/TodoPage';
import Pacientes from './Components/Views/Pacientes/PacientesPage';
import Libros from './Components/Views/Libros/LibrosPage'
import Clientes from './Components/Views/Clientes/ClientesPage';
import Empleados from './Components/Views/Empleados/empleadosPage'; 
import Fichas from './Components/Views/Fichas/fichasPage';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />

            <Route path="/todos" element={<Private><Todo /></Private>} />
            {/* <Route path="/pacientes" element={<Private><Pacientes /></Private>} /> */}
            <Route path="/libros" element={<Private><Libros /></Private>} />
            <Route path="/clientes" element={<Private><Clientes /></Private>} />
            <Route path="/empleados" element={<Private><Empleados /></Private>} />
            <Route path="/fichas" element={<Private><Fichas /></Private>} />
            
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

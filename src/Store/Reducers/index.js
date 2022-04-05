import { combineReducers } from 'redux';
import { librosReducer } from './Libros/Libros.reducer';
import { pacientesReducer } from './Pacientes/Pacientes.reducer';
import { securityReducer } from './Security/Security.reducer';
import { TodoReducer } from './Todo/Todo.reducer';
import { ClientesReducer } from './Clientes/Clientes.reducer';
import { empleadosReducer } from './Empleados/empleados';
import { fichasReducer } from './Fichas/fichas';

export const rootReducer = combineReducers({
    security: securityReducer,
    todos: TodoReducer,
    pacientes: pacientesReducer,
    libros: librosReducer,
    clientes: ClientesReducer,
    empleados: empleadosReducer,
    fichas:fichasReducer
})
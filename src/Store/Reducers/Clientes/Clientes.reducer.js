const defaultClientes = {

    clientes: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const ClientesReducer = (state = defaultClientes, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CLIENTES_LOADING':
            return {...state, isLoading: true }
        case 'CLIENTES_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar Clientes'] };
        case 'CLIENTES_SUCCESS':
            return {
                ...state,
                clientes: [...payload.clientes],
                isLoading: false,
                errors: []
            };
        case 'CLIENTES_CLEAR':
            return {
                ...state,
                clientes: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }

}
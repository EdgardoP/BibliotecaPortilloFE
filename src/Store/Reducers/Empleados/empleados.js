const defaultEmpleados = {

    empleados: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const empleadosReducer = (state = defaultEmpleados, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'EMPLEADOS_LOADING':
            return {...state, isLoading: true }
        case 'EMPLEADOS_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar Empleados'] };
        case 'EMPLEADOS_SUCCESS':
            return {...state,
                empleados: [...payload.empleados],
                isLoading: false,
                errors: []
            };
        case 'EMPLEADOS_CLEAR':
            return {...state,
                empleados: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }

}
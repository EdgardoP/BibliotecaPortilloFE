const defaultLibros = {

    libros: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const librosReducer = (state = defaultLibros, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LIBROS_LOADING':
            return {...state, isLoading: true }
        case 'LIBROS_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar Libros'] };
        case 'LIBROS_SUCCESS':
            return {...state,
                libros: [...payload.libros],
                isLoading: false,
                errors: []
            };
        case 'LIBROS_CLEAR':
            return {...state,
                libros: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }

}
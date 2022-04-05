const defaultFichas = {

    fichas: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const fichasReducer = (state = defaultFichas, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FICHAS_LOADING':
            return {...state, isLoading: true }
        case 'FICHAS_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar Fichas'] };
        case 'FICHAS_SUCCESS':
            return {...state,
                fichas: [...payload.fichas],
                isLoading: false,
                errors: []
            };
        case 'FICHAS_CLEAR':
            return {...state,
                fichas: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }

}
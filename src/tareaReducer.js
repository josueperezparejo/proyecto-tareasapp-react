
export const tareaReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[Tarea] Agregar Tarea':
            return [...initialState, action.payload]
        case '[Tarea] Borrar Tarea':
            return initialState.filter((tarea) => tarea.id !== action.payload)
        case '[Tarea] Marcar Tarea':
            return initialState.map((tarea) => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        done: !tarea.done
                    }
                }
                return tarea;
            })

        default:
            return initialState;
    }
}

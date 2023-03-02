import { useEffect, useReducer } from "react";
import { tareaReducer } from "../tareaReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

export const useTareas = () => {

    const [tareas, dispatchTarea] = useReducer(tareaReducer, initialState, init);

    const tareasCount = tareas.length;
    const pendingTareasCount = tareas.filter((tareas) => !tareas.done).length;

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas) || [])
    }, [tareas])

    const onNewTarea = (tarea) => {
        const action = {
            type: '[Tarea] Agregar Tarea',
            payload: tarea
        }
        dispatchTarea(action)
    }

    const onDeleteTarea = (id) => {
        const action = {
            type: '[Tarea] Borrar Tarea',
            payload: id
        }
        dispatchTarea(action)
    }

    const onToggleTarea = (id) => {
        const action = {
            type: '[Tarea] Marcar Tarea',
            payload: id
        }
        dispatchTarea(action)
    }

    return {
        tareas,
        tareasCount,
        pendingTareasCount,
        onNewTarea,
        onDeleteTarea,
        onToggleTarea
    }
}

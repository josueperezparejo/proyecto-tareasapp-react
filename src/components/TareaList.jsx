import { TareaItem } from "./TareaItem";

export const TareaList = ({ tareas = [], onDeleteTarea, onToggleTarea }) => {
    return (
        <>
            {tareas.length > 0
                ? <ul className="list-group">
                    {
                        tareas.map((tarea) => (
                            <TareaItem
                                key={tarea.id}
                                tarea={tarea}
                                onDeleteTarea={onDeleteTarea}
                                onToggleTarea={onToggleTarea} />
                        ))
                    }
                </ul>
                : <p className="text-center fw-bold text-danger">Aun no hay Tareas Agrega Algo...</p>}
        </>
    )
}

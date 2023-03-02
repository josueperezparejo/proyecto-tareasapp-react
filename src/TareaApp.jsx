import { Footer, TareaAdd, TareaList } from "./components";
import { useTareas } from "./hooks/useTareas";

export const TareaApp = () => {

  const { tareas, tareasCount, pendingTareasCount, onNewTarea, onDeleteTarea, onToggleTarea } = useTareas()

  return (
    <>
      <h1 className="mt-4 text-center">Tareas: {tareasCount}, <small>pendientes: {pendingTareasCount}</small></h1>
      <hr />

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        <div className="">
          <h4 className="text-center">Agregar Tarea</h4>
          <hr />
          <TareaAdd onNewTarea={onNewTarea} />
        </div>

        <div className="w-50">
          <h4 className="text-center">Lista Tareas</h4>
          <hr />
          <TareaList 
            tareas={tareas} 
            onDeleteTarea={onDeleteTarea} 
            onToggleTarea={onToggleTarea} />
        </div>
      </div>

      <Footer />
    </>
  )
}

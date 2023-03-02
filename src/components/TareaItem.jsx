
export const TareaItem = ({ tarea, onDeleteTarea, onToggleTarea }) => {

    const handleDelete = () => {
        onDeleteTarea(tarea.id)
    }

    const handleToggle = () => {
        onToggleTarea(tarea.id)
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <input onChange={handleToggle} className='form-check-input mt-0 mx-2' type="checkbox" checked={tarea.done} />
                    <span className={tarea.done ? 'text-success fw-bold' : ''}>{tarea.description}</span>
                </div>

                <button onClick={handleDelete} className="btn btn-danger">Borrar</button>
            </li>
        </>
    )
}

import { useState } from "react";

export const TareaAdd = ({ onNewTarea }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTarea = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTarea(newTarea)
        setDescription('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="¿Que hay que hacer?"
                    className="form-control mb-2"
                    value={description}
                    onChange={(event) => 
                    setDescription(event.target.value)} />
                <button
                    type="submit"
                    className="btn btn-primary">Agregar</button>
            </form>
        </>
    )
}

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length <= 1) return;
        onNewCategory( newInputValue );
        setInputValue("");
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    )
}
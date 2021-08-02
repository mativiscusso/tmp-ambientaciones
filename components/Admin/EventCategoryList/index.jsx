import { useEffect, useState } from "react";
import { fetchCategoryEvent } from "firebase/client";

export default function EventCategoryList({ handleChange, categorySelected }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategoryEvent()
            .then(setCategories)
            .catch((err) => console.log(err));
    }, []);

    return (
        <label htmlFor="category">
            Categoria
            {categories && (
                <select name="category" onChange={handleChange}>
                    <option
                        disabled
                        selected={!categorySelected}
                        value="choice"
                    >
                        Seleccione una categoria...
                    </option>
                    {categories.map((category) => (
                        <option
                            key={category.name}
                            selected={category.name === categorySelected}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            )}
        </label>
    );
}

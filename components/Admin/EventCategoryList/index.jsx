import { useEffect, useState } from "react";
import { fetchCategoryEvent } from "../../../firebase/client";

export default function EventCategoryList({ handleChange, admin }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        admin &&
            fetchCategoryEvent()
                .then(setCategories)
                .catch((err) => console.log(err));
    }, [admin]);

    return (
        <label htmlFor="title">
            Categoria
            {categories && (
                <select
                    name="category"
                    onChange={handleChange}
                    defaultValue="choice"
                >
                    <option selected disabled value="choice">
                        Seleccione una categoria...
                    </option>
                    {categories.map((category) => (
                        <option key={category.id}>{category.name}</option>
                    ))}
                </select>
            )}
        </label>
    );
}

import { useState } from "react";
import styles from "../styles/Login.module.scss";
import authAdmin from "../services/auth-admin";

const INITIAL_STATE = {
    username: "",
    password: "",
};

const Login = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const admin = authAdmin(formData);
        console.log(admin);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="Usuario">
                    Usuario
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="Contraseña">
                    Contraseña
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                    />
                </label>
                <button>Ingresar</button>
            </form>
        </div>
    );
};

export default Login;

import { useState } from "react";
import styles from "../styles/Login.module.scss";
import authAdmin from "../services/auth-admin";
import { Router, useRouter } from "next/dist/client/router";

const INITIAL_STATE = {
    username: "",
    password: "",
};

const Login = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [loginMessage, setLoginMessage] = useState(undefined);

    const router = useRouter();

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const { status, token, message } = await authAdmin(formData);

        if (status) {
            localStorage.setItem("auth-admin", token);
            router.push("/admin");
        } else {
            setLoginMessage(message);
        }
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
            {loginMessage && <small>{loginMessage}</small>}
        </div>
    );
};

export default Login;

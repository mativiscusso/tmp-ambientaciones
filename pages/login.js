import { useState } from "react";
import styles from "../styles/Login.module.scss";
import { useRouter } from "next/dist/client/router";
import { signInUserAdmin } from "../firebase/client";
import Layout from "components/Layout";

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

        const result = await signInUserAdmin(formData);
        if (result.email) {
            router.push("/admin");
        } else {
            setLoginMessage(result.errorMessage);
        }
    };

    return (
        <Layout>
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
        </Layout>
    );
};

export default Login;

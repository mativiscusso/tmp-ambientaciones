import Footer from "components/Footer";
import Navbar from "components/Navbar";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
    return (
        <body className={styles.layout}>
            <Navbar />
            {children}
            <Footer />
        </body>
    );
}
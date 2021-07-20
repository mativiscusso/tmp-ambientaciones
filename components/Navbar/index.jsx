import MenuMobile from "components/Navbar/MenuMobile";
import Navlinks from "./Navlinks";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarIconHamburg}>
                <MenuMobile right />
            </div>
            <div className={styles.navbarLinks}>
                <Navlinks isMobile={false} />
            </div>
        </nav>
    );
}

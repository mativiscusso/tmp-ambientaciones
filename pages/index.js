import Image from "next/image";
import img from "assets/images/header.jpg";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div>
            <header>
                <Image src={img} layout="responsive" alt="header banner" />
            </header>
            <main>soy el main</main>
        </div>
    );
}

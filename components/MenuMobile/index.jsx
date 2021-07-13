import React from "react";
import { push as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import logoTmp from "svg/logo.svg";

const index = (props) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100vw",
            }}
        >
            <Link href="/">
                <a>
                    <Image
                        src={logoTmp}
                        alt="Logo Punto Ian"
                        width={80}
                        height={80}
                    />
                </a>
            </Link>

            <Menu {...props}>
                <Link href="/nosotros">
                    <a>¿Qué hacemos?</a>
                </Link>
                <Link href="/nosotros">
                    <a>¿Qué hacemos?</a>
                </Link>
                <Link href="/nosotros">
                    <a>¿Qué hacemos?</a>
                </Link>
                <Link href="/nosotros">
                    <a>¿Qué hacemos?</a>
                </Link>
            </Menu>
        </div>
    );
};

export default index;

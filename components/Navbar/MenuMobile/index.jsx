import React from "react";
import { push as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import logoTmp from "assets/svg/logo.svg";
import Navlinks from "../Navlinks";

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
                <Navlinks isMobile={true} />
            </Menu>
        </div>
    );
};

export default index;

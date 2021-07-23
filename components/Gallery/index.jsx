/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "./Masonry.module.scss";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";

export default function GalleryComponent({ event }) {
    const [widthScreen, setWidthScreen] = useState(0);

    useEffect(() => {
        setWidthScreen(window.innerWidth);
    }, []);

    return (
        <Gallery>
            {event &&
                event.images.map((item, i) => (
                    <Item
                        original={item}
                        thumbnail={item}
                        width={widthScreen}
                        height="300"
                        key={i + Math.random()}
                        styles={{ height: "auto!important" }}
                    >
                        {({ ref, open }) => (
                            <img
                                alt="image"
                                ref={ref}
                                onClick={open}
                                src={item}
                                className={styles.img}
                            />
                        )}
                    </Item>
                ))}
        </Gallery>
    );
}

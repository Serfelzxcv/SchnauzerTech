import { type FC } from "react";
import PreviewPng from "./preview.webp";
import HeroImg from "./hero-img.webp";
import Logo from "./logo.webp";


import HeroSlider1 from "./hero-slider-01.webp";
import HeroSlider2 from "./hero-slider-02.webp";
import HeroSlider3 from "./hero-slider-03.webp";

import InfiniteImg1 from "./infinite-img-1.webp";
import InfiniteImg2 from "./infinite-img-2.webp";

import opcion1 from "./opcion1.jpg"
import opcion2 from "./opcion2.jpg"
import portada from "./portada.jpg"

import desarrolloWeb from "./desarrolloweb.jpg"
import desarrollomovil from "./desarrollomovil.jpg"
import automatizacion from "./automatizacion.jpg"
import chatbot from "./chatbot.jpg"
import consultoria from "./consultoria.jpg"
import ecomerce from "./ecomerce.webp"
import especialistas from "./especialistas.jpg"
import historia from "./historia.jpg"
import apasionados from "./apasionados.jpg"
import schnauzertech from "./Schnauzertech.jpg"

export const images = {
    preview: PreviewPng,
    heroImg: HeroImg,
    logo: Logo,
};

export type ImageProps = {
    srcLocal?: keyof typeof images;
    src?: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    loading?: "lazy" | "eager";
};

/**
 * @example
 * <Image src="logo" alt="logo" width="50px" height="50px" />
 */
export const Image: FC<ImageProps> = ({
    alt,
    srcLocal,
    height,
    width,
    src,
    loading,
    ...rest
}) => {
    /**
     * If srcLocal or src is not provided throw an error
     */
    if (!srcLocal && !src) {
        throw new Error("srcLocal or src is required");
    }

    /**
     * this component should be able to use local images or images from external sources
     */
    const image = srcLocal ? images[srcLocal] : { src, width, height };

    return (
        <img
            src={image.src}
            alt={alt}
            width={width ? width : image.width}
            height={height ? height : image.height}
            loading={loading}
            {...rest}
        />
    );
};

// default export of the images
export {
    PreviewPng,
    HeroSlider1,
    HeroSlider2,
    HeroSlider3,
    InfiniteImg1,
    InfiniteImg2,
    opcion1,
    opcion2,
    portada,

    desarrolloWeb,
    desarrollomovil,
    automatizacion,
    chatbot,
    consultoria,
    ecomerce,
    especialistas,
    historia,
    apasionados,
    schnauzertech

};

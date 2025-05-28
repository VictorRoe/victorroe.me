import localFont from "next/font/local";

const humaneFont = localFont({
    src: "../fonts/Humane-Bold.woff2",
    variable: "--font-humane",
});

const enigmaFont = localFont({
    src: "../fonts/enigma.otf",
    variable: "--font-enigma",
});

export { humaneFont, enigmaFont };

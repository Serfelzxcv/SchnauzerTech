import { css } from "@emotion/react";

export const Colors = {
    white: "#FFFFFF",
    dark: "#101118",
    darkLighter: "#20222e",
    ocean:"#4358E6"
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.white};
        --secondary: ${Colors.darkLighter};
        --tertiary: ${Colors.dark};
        --cuaternary: ${Colors.ocean}
    }
`;

export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
    cuaternary: "var(--cuaternary)"
};

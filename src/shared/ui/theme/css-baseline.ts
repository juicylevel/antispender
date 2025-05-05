import { ComponentsTheme } from './components-theme';

export const MuiCssBaseline: ComponentsTheme['MuiCssBaseline'] = {
    styleOverrides: `
        :root, body, #root {
            height: 100%;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0 60px transparent inset !important;
            background-color: transparent !important;
            background-clip: content-box !important;
            transition: background-color 5000s ease-in-out 0s;
        }
    `,
};

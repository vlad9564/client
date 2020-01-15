import { createMuiTheme } from '@material-ui/core/styles';

export const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#5AC18E",
            dark: "rgba(250, 250, 250, 1)"
        },
        secondary: {
            main: "#00A0DC"
        },
        background: {
            default: "#a39193"
        },
        type: "light"
    }
});


import { createTheme, responsiveFontSizes } from '@mui/material';
import { MuiCssBaseline } from './css-baseline';
import { MuiButton } from './button';
import { MuiDialogActions } from './dialog-actions';
import { MuiCardActions } from './card-actions';

const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    components: {
        MuiCssBaseline,
        MuiButton,
        MuiDialogActions,
        MuiCardActions,
    },
});

export default responsiveFontSizes(theme);

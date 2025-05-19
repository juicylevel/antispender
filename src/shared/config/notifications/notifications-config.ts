import { Slide } from '@mui/material';
import { NotificationsProviderProps } from '@toolpad/core';

export const notificationsConfig: NotificationsProviderProps = {
    slotProps: {
        snackbar: {
            anchorOrigin: {
                horizontal: 'center',
                vertical: 'top',
            },
            autoHideDuration: 3000,
            TransitionComponent: Slide,
        },
    },
};

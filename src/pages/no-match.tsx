import { Box, Stack, Typography } from '@mui/material';
import appLogo from '/vite.svg';

export const NoMatchPage = () => {
    return (
        <Stack gap={3} alignItems="center">
            <Box
                component="img"
                src={appLogo}
                alt="app logo"
                maxWidth="500px"
            />
            <Typography variant="h5">404 Not Found</Typography>
        </Stack>
    );
};

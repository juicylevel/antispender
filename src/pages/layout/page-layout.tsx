import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router';
import { Header } from 'widgets/header';

export const PageLayout = () => {
    return (
        <Container maxWidth="md" disableGutters>
            <Header />
            <Box component="main" pt={3} pb={3}>
                <Outlet />
            </Box>
        </Container>
    );
};

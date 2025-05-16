import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'shared/api/query-client';
import { CssBaseline } from '@mui/material';
import theme from 'shared/ui/theme';
import { RouterProvider } from 'react-router';
import router from './router';
import 'shared/config/date/dayjs.extends';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

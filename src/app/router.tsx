import { PageLayout } from 'pages/layout';
import { NoMatchPage } from 'pages/no-match';
import { SavedOnListPage } from 'pages/saved-on-list';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter(
    [
        {
            element: <PageLayout />,
            children: [
                {
                    path: '/',
                    element: <SavedOnListPage />,
                },
                {
                    path: '*',
                    element: <NoMatchPage />,
                },
            ],
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);

export default router;

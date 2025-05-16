import { DailyRecordListPage } from 'pages/daily-record-list';
import { PageLayout } from 'pages/layout';
import { NoMatchPage } from 'pages/no-match';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter(
    [
        {
            element: <PageLayout />,
            children: [
                {
                    path: '/',
                    element: <DailyRecordListPage />,
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

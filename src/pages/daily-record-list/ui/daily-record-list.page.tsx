import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import {
    IconButton,
    Toolbar,
    Typography,
    TypographyProps,
} from '@mui/material';
import AddOutlined from '@mui/icons-material/AddOutlined';
import { DDMMYYY } from 'shared/config/date';
import { dailyRecordQueries } from 'entities/daily-record';
import { CreateDailyRecordAction } from 'features/daily-record';
import { isFilled } from 'shared/lib/nil';
import { useTranslation } from 'react-i18next';

const BadValue: React.FC<TypographyProps> = (props) => {
    return <Typography color="error" fontSize="inherit" {...props} />;
};

const SuccessValue: React.FC<TypographyProps> = (props) => {
    return <Typography color="success" fontSize="inherit" {...props} />;
};

export const DailyRecordListPage = () => {
    const { t } = useTranslation();
    const { data, isLoading, error, isError } = useQuery({
        ...dailyRecordQueries.list(),
        enabled: true,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Paper>
            <Toolbar sx={{ pl: 2, pr: 2 }} disableGutters>
                <Typography component="div" sx={{ flexGrow: 1 }}>
                    {t('dailyRecord.list.title')}
                </Typography>
                <CreateDailyRecordAction>
                    {({ onTrigger }) => (
                        <IconButton
                            size="small"
                            title={t('dailyRecord.actions.create.label')}
                            onClick={onTrigger}
                        >
                            <AddOutlined />
                        </IconButton>
                    )}
                </CreateDailyRecordAction>
            </Toolbar>
            <TableContainer>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {t('dailyRecord.list.columns.date')}
                            </TableCell>
                            <TableCell align="center" colSpan={3}>
                                {t('dailyRecord.list.columns.beer')}
                            </TableCell>
                            <TableCell align="center" colSpan={3}>
                                {t('dailyRecord.list.columns.cig')}
                            </TableCell>
                            <TableCell align="right">
                                {t('dailyRecord.list.columns.spent')}
                            </TableCell>
                            <TableCell align="right">
                                {t('dailyRecord.list.columns.saved')}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!isFilled(data) && !isLoading && (
                            <TableRow>
                                <TableCell colSpan={9} align="center">
                                    <Typography color="textSecondary">
                                        {t('dailyRecord.list.empty')}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                        {data?.map((item) => (
                            <TableRow
                                key={item.objectId}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>
                                    {dayjs(item.created).format(DDMMYYY)}
                                </TableCell>
                                <TableCell align="right">
                                    {item.litersOfBeer}
                                </TableCell>
                                <TableCell align="right">
                                    <BadValue>{item.spentOnBeer}</BadValue>
                                </TableCell>
                                <TableCell align="right">
                                    <SuccessValue>
                                        {item.savedOnBeer}
                                    </SuccessValue>
                                </TableCell>
                                <TableCell align="right">
                                    {item.cigCount}
                                </TableCell>
                                <TableCell align="right">
                                    <BadValue>{item.spentOnCig}</BadValue>
                                </TableCell>
                                <TableCell align="right">
                                    <SuccessValue>
                                        {item.savedOnCig}
                                    </SuccessValue>
                                </TableCell>
                                <TableCell align="right">
                                    <BadValue>
                                        {item.spentOnBeer + item.spentOnCig}
                                    </BadValue>
                                </TableCell>
                                <TableCell align="right">
                                    <SuccessValue>
                                        {item.savedOnBeer + item.savedOnCig}
                                    </SuccessValue>
                                </TableCell>
                            </TableRow>
                        ))}
                        {isFilled(data) && (
                            <TableRow>
                                <TableCell colSpan={7}>
                                    <Typography
                                        fontWeight={600}
                                        fontSize="inherit"
                                    >
                                        {t('dailyRecord.list.summary')}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <BadValue fontWeight={600}>
                                        {data?.reduce((acc, item) => {
                                            return (
                                                acc +
                                                item.spentOnBeer +
                                                item.spentOnCig
                                            );
                                        }, 0)}
                                    </BadValue>
                                </TableCell>
                                <TableCell align="right">
                                    <SuccessValue fontWeight={600}>
                                        {data?.reduce((acc, item) => {
                                            return (
                                                acc +
                                                item.savedOnBeer +
                                                item.savedOnCig
                                            );
                                        }, 0)}
                                    </SuccessValue>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

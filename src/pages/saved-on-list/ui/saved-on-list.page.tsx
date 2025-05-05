import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from '@tanstack/react-query';
import { savedOnQueries } from 'entities/saved-on';
import dayjs from 'dayjs';
import { IconButton, Toolbar, Typography } from '@mui/material';
import AddOutlined from '@mui/icons-material/AddOutlined';

export const SavedOnListPage = () => {
    const { data, isLoading, error, isError } = useQuery(savedOnQueries.list());
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
                    SavedOn
                </Typography>
                <IconButton size="small">
                    <AddOutlined />
                </IconButton>
            </Toolbar>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Beer</TableCell>
                            <TableCell align="right">Cigs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((item) => (
                            <TableRow
                                key={item.objectId}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {dayjs(item.created).format()}
                                </TableCell>
                                <TableCell align="right">{item.beer}</TableCell>
                                <TableCell align="right">{item.cig}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

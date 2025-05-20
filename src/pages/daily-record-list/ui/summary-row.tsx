import { TableCell, TableRow, Typography } from '@mui/material';
import { DailyRecord } from 'entities/daily-record';
import { useTranslation } from 'react-i18next';
import { CellValue } from './cell-value';

type SummaryRowProps = {
    data?: DailyRecord[];
};

export const SummaryRow: React.FC<SummaryRowProps> = ({ data }) => {
    const { t } = useTranslation();
    const totalSpent = data?.reduce((acc, item) => {
        return acc + item.spentOnBeer + item.spentOnCig;
    }, 0);
    const totalSaved = data?.reduce((acc, item) => {
        return acc + item.savedOnBeer + item.savedOnCig;
    }, 0);
    const savedSummary = (totalSaved ?? 0) - (totalSpent ?? 0);
    return (
        <TableRow>
            <TableCell colSpan={7}>
                <Typography fontWeight={600} fontSize="inherit">
                    {t('dailyRecord.list.summary')}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <CellValue color="error" fontWeight={600}>
                    {totalSpent}
                </CellValue>
            </TableCell>
            <TableCell align="right">
                <CellValue color="success" fontWeight={600}>
                    {totalSaved}
                </CellValue>
            </TableCell>
            <TableCell align="right">
                <CellValue
                    color={savedSummary > 0 ? 'success' : 'error'}
                    fontWeight={600}
                    fontSize="20px"
                >
                    {savedSummary}
                </CellValue>
            </TableCell>
        </TableRow>
    );
};

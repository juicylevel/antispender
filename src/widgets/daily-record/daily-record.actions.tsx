import { DeleteOutline } from '@mui/icons-material';
import { DailyRecord } from 'entities/daily-record';
import { DeleteDailyRecordAction } from 'features/daily-record';
import { useTranslation } from 'react-i18next';
import { RecordActions, RecordActionsProps } from 'shared/ui/action';
import { MenuItemIcon } from 'shared/ui/menu';

export const DailyRecordActions: React.FC<RecordActionsProps<DailyRecord>> = ({
    record,
    ...rest
}) => {
    const { t } = useTranslation();
    return (
        <RecordActions keepMounted {...rest}>
            <DeleteDailyRecordAction record={record}>
                {({ onTrigger }) => (
                    <MenuItemIcon icon={<DeleteOutline />} onClick={onTrigger}>
                        {t('dailyRecord.actions.delete.label')}
                    </MenuItemIcon>
                )}
            </DeleteDailyRecordAction>
        </RecordActions>
    );
};

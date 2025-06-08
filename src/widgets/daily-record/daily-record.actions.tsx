import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { DailyRecord } from 'entities/daily-record';
import {
    DeleteDailyRecordAction,
    UpdateDailyRecordAction,
} from 'features/daily-record';
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
            <UpdateDailyRecordAction record={record}>
                {({ onTrigger }) => (
                    <MenuItemIcon icon={<EditOutlined />} onClick={onTrigger}>
                        {t('dailyRecord.actions.update.label')}
                    </MenuItemIcon>
                )}
            </UpdateDailyRecordAction>
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

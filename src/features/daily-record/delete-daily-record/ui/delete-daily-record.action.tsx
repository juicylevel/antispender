import {
    DailyRecord,
    dailyRecordQueries,
    deleteDailyRecord,
} from 'entities/daily-record';
import { useDialogs, useNotifications } from '@toolpad/core';
import { useTranslation } from 'react-i18next';
import { RecordActionProps, useActionTrigger } from 'shared/ui/action';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isDefined } from 'shared/lib/nil';
import dayjs from 'dayjs';
import { DDMMYYY } from 'shared/config/date';

const tPrefix = 'dailyRecord.actions.delete';

export const DeleteDailyRecordAction: React.FC<
    RecordActionProps<DailyRecord>
> = ({ record, children, onComplete }) => {
    const { t } = useTranslation();
    const dialogs = useDialogs();
    const queryClient = useQueryClient();
    const notifications = useNotifications();
    const { mutateAsync: deleteRecord } = useMutation({
        mutationFn: deleteDailyRecord,
    });

    const trigger = useActionTrigger(children, async () => {
        if (!isDefined(record?.objectId)) {
            return;
        }
        await dialogs.confirm(
            t(`${tPrefix}.confirm.content`, {
                date: dayjs(record?.created).format(DDMMYYY),
            }),
            {
                title: t(`${tPrefix}.confirm.title`),
                okText: t('actions.agree'),
                cancelText: t('actions.disagree'),
                onClose: async (result) => {
                    if (result) {
                        try {
                            await deleteRecord(record.objectId);
                            queryClient.invalidateQueries({
                                queryKey: dailyRecordQueries.list().queryKey,
                            });
                            notifications.show(t(`${tPrefix}.success`), {
                                severity: 'success',
                            });
                            onComplete?.();
                        } catch (error) {
                            notifications.show(t(`${tPrefix}.error`), {
                                severity: 'error',
                            });
                        }
                    }
                },
            },
        );
    });

    return trigger;
};

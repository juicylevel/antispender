import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import {
    updateDailyRecord,
    DailyRecord,
    DailyRecordForm,
    dailyRecordQueries,
    DailyRecordValues,
} from 'entities/daily-record';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DDMMYYY } from 'shared/config/date';
import { isFilled } from 'shared/lib/nil';
import { RecordActionProps, useActionTrigger } from 'shared/ui/action';
import { FullscreenDialog, useModal } from 'shared/ui/modal';

const formId = 'daily-record-form';

export const UpdateDailyRecordAction: React.FC<
    RecordActionProps<DailyRecord>
> = ({ record, children, onComplete }) => {
    const { t } = useTranslation();
    const modal = useModal();
    const queryClient = useQueryClient();

    const trigger = useActionTrigger(children, modal.show);
    const { mutateAsync: update } = useMutation({
        mutationFn: updateDailyRecord,
    });

    const initialValues = useMemo(() => {
        if (!isFilled(record)) return;
        const { objectId, created, updated, ...dailyRecordValues } = record;
        return dailyRecordValues;
    }, [record]);

    const handleSubmit = async (values: DailyRecordValues) => {
        if (!isFilled(record)) return;
        await update({
            id: record?.objectId,
            input: values,
        });
        queryClient.invalidateQueries({ queryKey: dailyRecordQueries.all() });
        modal.close();
        onComplete?.();
    };
    return (
        <>
            {trigger}
            <FullscreenDialog
                open={modal.open}
                onClose={modal.onClose}
                title={`${t('dailyRecord.actions.update.title')} ${dayjs(record?.recordDate).format(DDMMYYY)}`}
                submitForm={formId}
                okText={t('actions.save')}
            >
                <DailyRecordForm
                    FormProps={{ id: formId }}
                    values={initialValues}
                    onSuccess={handleSubmit}
                />
            </FullscreenDialog>
        </>
    );
};

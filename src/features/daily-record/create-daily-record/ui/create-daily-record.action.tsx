import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import {
    createDailyRecord,
    DailyRecordForm,
    dailyRecordQueries,
    DailyRecordValues,
} from 'entities/daily-record';
import { useTranslation } from 'react-i18next';
import { ISO_DATE } from 'shared/config/date';
import { ActionProps, useActionTrigger } from 'shared/ui/action';
import { FullscreenDialog, useModal } from 'shared/ui/modal';

const formId = 'daily-record-form';

export const CreateDailyRecordAction: React.FC<ActionProps> = ({
    children,
}) => {
    const { t } = useTranslation();
    const modal = useModal();
    const queryClient = useQueryClient();

    const trigger = useActionTrigger(children, modal.show);
    const { mutateAsync: create } = useMutation({
        mutationFn: createDailyRecord,
    });

    const handleSubmit = async (values: DailyRecordValues) => {
        await create(values);
        queryClient.invalidateQueries({ queryKey: dailyRecordQueries.all() });
        modal.close();
    };

    return (
        <>
            {trigger}
            <FullscreenDialog
                open={modal.open}
                onClose={modal.onClose}
                title={t('dailyRecord.actions.create.title')}
                submitForm={formId}
                okText={t('actions.save')}
            >
                <DailyRecordForm
                    FormProps={{ id: formId }}
                    defaultValues={{
                        recordDate: dayjs().format(ISO_DATE),
                        litersOfBeer: 0,
                        spentOnBeer: 0,
                        savedOnBeer: 550,
                        cigCount: 0,
                        spentOnCig: 0,
                        savedOnCig: Math.round((270 / 20) * 7),
                    }}
                    onSuccess={handleSubmit}
                />
            </FullscreenDialog>
        </>
    );
};

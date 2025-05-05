import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
    createSavedOn,
    SavedOnForm,
    SavedOnFormValues,
    savedOnQueries,
} from 'entities/saved-on';
import { useTranslation } from 'react-i18next';
import { ActionProps, useActionTrigger } from 'shared/ui/action';
import { FullscreenDialog, useModal } from 'shared/ui/modal';

const formId = 'saved-on-form';

export const CreateSavedOnAction: React.FC<ActionProps> = ({ children }) => {
    const { t } = useTranslation();
    const modal = useModal();
    const trigger = useActionTrigger(children, modal.show);
    const { mutateAsync: create } = useMutation({ mutationFn: createSavedOn });
    const queryClient = useQueryClient();
    const handleSubmit = async (values: SavedOnFormValues) => {
        await create(values);
        queryClient.invalidateQueries({ queryKey: savedOnQueries.all() });
        modal.close();
    };
    return (
        <>
            {trigger}
            <FullscreenDialog
                open={modal.open}
                onClose={modal.onClose}
                title={t('savedon.form.create')}
                submitForm={formId}
                okText={t('actions.save')}
            >
                <SavedOnForm
                    FormProps={{ id: formId }}
                    values={{ beer: 0, cig: 0 }}
                    onSuccess={handleSubmit}
                />
            </FullscreenDialog>
        </>
    );
};

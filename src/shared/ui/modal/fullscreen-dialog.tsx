import {
    AppBar,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export type FullscreenDialogProps = DialogProps & {
    title: string;
    okText?: string;
    cancelText?: string;
    submitForm?: string;
};

export const FullscreenDialog: React.FC<FullscreenDialogProps> = ({
    title,
    okText,
    cancelText,
    submitForm,
    children,
    onClose,
    ...rest
}) => {
    const handleClose = (event: React.MouseEvent) => {
        onClose?.(event, 'escapeKeyDown');
    };
    const { t } = useTranslation();
    return (
        <Dialog
            {...rest}
            onClose={onClose}
            fullScreen
            hideBackdrop
            TransitionComponent={Transition}
            slotProps={{
                paper: {
                    elevation: 0,
                },
            }}
        >
            <Container maxWidth="md" disableGutters>
                <AppBar position="static">
                    <DialogTitle>{title}</DialogTitle>
                </AppBar>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <Button variant="text" onClick={handleClose}>
                        {cancelText || t('actions.cancel')}
                    </Button>
                    <Button
                        type={submitForm ? 'submit' : 'button'}
                        form={submitForm}
                        variant="text"
                    >
                        {okText || t('actions.ok')}
                    </Button>
                </DialogActions>
            </Container>
        </Dialog>
    );
};

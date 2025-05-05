import {
    DrawerProps as MuiDrawerProps,
    Drawer as MuiDrawer,
    Stack,
    Typography,
    IconButton,
    Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export type DrawerProps = MuiDrawerProps & {
    title?: string;
};

export const Drawer: React.FC<DrawerProps> = ({
    title,
    children,
    onClose,
    ...rest
}) => {
    const handleClose = (event: React.MouseEvent) => {
        onClose?.(event, 'escapeKeyDown');
    };
    return (
        <MuiDrawer {...rest} onClose={onClose}>
            {title && (
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    gap={2}
                    pt={2}
                    pr={3}
                    pb={2}
                    pl={3}
                    borderBottom="1px solid"
                    borderColor="divider"
                >
                    <Typography variant="subtitle1">{title}</Typography>
                    <IconButton size="small" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Stack>
            )}
            <Box pt={2} pr={3} pb={2} pl={3} height="100%">
                {children}
            </Box>
        </MuiDrawer>
    );
};

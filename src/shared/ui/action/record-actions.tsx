import { ReactElement } from 'react';
import { MoreHorizOutlined } from '@mui/icons-material';
import { MenuWithTrigger, MenuWithTriggerProps } from '../menu';
import { IconButton } from '@mui/material';

export type RecordActionsProps<R> = Omit<MenuWithTriggerProps, 'trigger'> & {
    record?: R;
    icon?: ReactElement;
};

export const RecordActions = <R,>({
    icon = <MoreHorizOutlined />,
    ...menuProps
}: RecordActionsProps<R>) => {
    return (
        <MenuWithTrigger
            trigger={({ onClick }) => (
                <IconButton size="small" onClick={onClick}>
                    {icon}
                </IconButton>
            )}
            {...menuProps}
        />
    );
};

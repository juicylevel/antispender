import { Menu, MenuProps } from '@mui/material';
import React, { Fragment, ReactNode } from 'react';

export type TriggerRenderer = ({
    onClick,
}: {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}) => ReactNode;

export type MenuWithTriggerProps = Omit<MenuProps, 'open' | 'anchorEl'> & {
    trigger: TriggerRenderer;
};

export const MenuWithTrigger = React.forwardRef<any, MenuWithTriggerProps>(
    ({ trigger, ...rest }, ref) => {
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
            null,
        );
        const open = !!anchorEl;

        const handleTriggerClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
            event.stopPropagation();
            event.preventDefault();
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const triggerElement = trigger({ onClick: handleTriggerClick });

        return (
            <Fragment>
                {triggerElement}
                <Menu
                    ref={ref}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    anchorEl={anchorEl}
                    {...rest}
                />
            </Fragment>
        );
    },
);

import { ListItemIcon, MenuItem, MenuItemProps } from '@mui/material';
import { ReactElement } from 'react';

export type MenuItemIconProps = MenuItemProps & {
    icon?: ReactElement;
};

export const MenuItemIcon: React.FC<MenuItemIconProps> = ({
    icon,
    children,
    ...rest
}) => (
    <MenuItem {...rest}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        {children}
    </MenuItem>
);

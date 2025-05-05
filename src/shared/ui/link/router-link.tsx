import {
    LinkProps as RouterLinkProps,
    Link as RouterDomLink,
} from 'react-router';
import { Link, LinkProps } from '@mui/material';

type CustomRouterLinkProps = Omit<LinkProps, 'component'> & RouterLinkProps;

export const RouterLink: React.FC<CustomRouterLinkProps> = (props) => (
    <Link component={RouterDomLink} {...props} />
);

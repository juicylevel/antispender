import { Components, Theme } from '@mui/material';

export type ComponentsTheme = Components<Omit<Theme, 'components'>>;

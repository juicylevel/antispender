import { AppBar, AppBarProps, Stack, Toolbar } from '@mui/material';
import ThemeSwitcherProps from './theme-switcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from './lang-switcher';
import { RouterLink } from 'shared/ui/link/router-link';

export const Header: React.FC<AppBarProps> = (props) => {
    const { t } = useTranslation();
    return (
        <AppBar position="static" {...props}>
            <Toolbar>
                <RouterLink
                    to="/"
                    flexGrow={1}
                    variant="h6"
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                >
                    {t('appTitle')}
                </RouterLink>
                <Stack direction="row" gap={1}>
                    <LangSwitcher variant="outlined" size="small" />
                    <ThemeSwitcherProps />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

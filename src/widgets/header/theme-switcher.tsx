import { Switch, SwitchProps, useColorScheme } from '@mui/material';

type ThemeSwitcherProps = Omit<SwitchProps, 'checked' | 'onChange'>;

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mode = event.target.checked ? 'dark' : 'light';
        setMode(mode);
    };
    return (
        <Switch {...props} checked={mode === 'dark'} onChange={handleChange} />
    );
};

export default ThemeSwitcher;

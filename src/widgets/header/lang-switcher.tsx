import {
    MenuItem,
    Select,
    SelectChangeEvent,
    SelectProps,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type LangSwitcherProps = Omit<SelectProps<string>, 'value' | 'onChange'>;

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { i18n } = useTranslation();
    const handleChange = (event: SelectChangeEvent) => {
        i18n.changeLanguage(event.target.value);
    };
    return (
        <Select value={i18n.language} onChange={handleChange} {...props}>
            {i18n.languages.map((lang) => {
                return (
                    <MenuItem key={lang} value={lang}>
                        {lang.toLocaleUpperCase()}
                    </MenuItem>
                );
            })}
        </Select>
    );
};
